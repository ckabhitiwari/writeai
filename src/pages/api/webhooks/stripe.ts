// src/pages/api/webhooks/stripe.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import prisma from "@/lib/prisma";

export const config = { api: { bodyParser: false } };

// ✅ Use correct Stripe API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-07-30.basil",
});

async function readRawBody(req: any): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

function toDate(epochSeconds: number | null | undefined): Date {
  return new Date((epochSeconds ?? Math.floor(Date.now() / 1000)) * 1000);
}

// ... rest of your webhook handler remains unchanged


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const sig = req.headers["stripe-signature"] as string | undefined;
  if (!sig) return res.status(400).send("Missing stripe-signature");

  let event: Stripe.Event;
  try {
    const buf = await readRawBody(req);
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET as string);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const customerId = session.customer as string | undefined;
        const subscriptionId = session.subscription as string | undefined;
        console.log("📦 checkout.session.completed", { customerId, subscriptionId });

        if (!customerId || !subscriptionId) break;

        // Get full subscription to read price & periods
        const sub = await stripe.subscriptions.retrieve(subscriptionId, {
          expand: ["items.data.price"],
        });

        const item = sub.items.data[0];
        const priceId =
          typeof item.price === "string" ? item.price : item.price?.id || "";
        if (!priceId) {
          console.error("❌ Could not resolve stripePriceId from subscription", sub.id);
          break;
        }

        // Find our user by stripeCustomerId
        const user = await prisma.user.findFirst({
          where: { stripeCustomerId: customerId },
        });
        if (!user) {
          console.warn("⚠ No user for stripeCustomerId:", customerId);
          break;
        }

        const planFromMetadata = session.metadata?.plan ?? null;
        const plan =
          planFromMetadata ||
          (typeof item.price !== "string" && item.price?.nickname) ||
          priceId ||
          "unknown";

        await prisma.subscription.upsert({
          where: { stripeSubscriptionId: sub.id },
          create: {
            userId: user.id,
            stripeSubscriptionId: sub.id,
            stripePriceId: priceId,               // ✅ REQUIRED NOW
            status: sub.status,
            plan,
            currentPeriodEnd: toDate(sub.current_period_end),
          },
          update: {
            stripePriceId: priceId,               // ✅ keep updated
            status: sub.status,
            plan,
            currentPeriodEnd: toDate(sub.current_period_end),
          },
        });

        console.log("✅ Upserted subscription", sub.id, "for user", user.id);
        break;
      }

      case "customer.subscription.updated": {
        const sub = event.data.object as Stripe.Subscription;
        const item = sub.items.data[0];
        const priceId =
          typeof item.price === "string" ? item.price : item.price?.id || "";
        const plan =
          (typeof item.price !== "string" && item.price?.nickname) ||
          priceId ||
          "unknown";

        await prisma.subscription
          .update({
            where: { stripeSubscriptionId: sub.id },
            data: {
              stripePriceId: priceId,             // ✅ ensure present on update
              status: sub.status,
              plan,
              currentPeriodEnd: toDate(sub.current_period_end),
            },
          })
          .catch(async () => {
            // If row not yet created, link via customer → user
            const user = await prisma.user.findFirst({
              where: { stripeCustomerId: sub.customer as string },
            });
            if (user) {
              await prisma.subscription.create({
                data: {
                  userId: user.id,
                  stripeSubscriptionId: sub.id,
                  stripePriceId: priceId,         // ✅ required
                  status: sub.status,
                  plan,
                  currentPeriodEnd: toDate(sub.current_period_end),
                },
              });
            }
          });

        console.log("🔄 Synced subscription.updated", sub.id);
        break;
      }

      case "invoice.payment_failed": {
        const inv = event.data.object as Stripe.Invoice;
        const subscriptionId = inv.subscription as string | undefined;
        if (subscriptionId) {
          await prisma.subscription
            .update({
              where: { stripeSubscriptionId: subscriptionId },
              data: { status: "past_due" },
            })
            .catch(() => {});
          console.log("⚠ invoice.payment_failed -> past_due", subscriptionId);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await prisma.subscription
          .update({
            where: { stripeSubscriptionId: sub.id },
            data: { status: "canceled" },
          })
          .catch(() => {});
        console.log("🪓 subscription.deleted -> canceled", sub.id);
        break;
      }

      default:
        // console.log("ℹ Unhandled event:", event.type);
        break;
    }

    return res.status(200).json({ received: true });
  } catch (err: any) {
    console.error("❌ Webhook handler crashed:", err.message, err.stack);
    return res.status(500).send("Webhook handler failed");
  }
}
