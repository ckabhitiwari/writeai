import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import prisma from "@/lib/prisma";
import { getUserIdFromReq } from "@/lib/auth";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);


// Map your plans -> Stripe Price IDs (fill these with real price IDs from Stripe)
const PRICE_MAP: Record<string, string> = {
  starter:    "price_1Rtb80SBODWesqRmlLbtpVk5",
  pro:        "price_1RtbCUSBODWesqRm2JAs9qTT",
  enterprise: "price_1RtbD0SBODWesqRmmuwNfrt0",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const userId = getUserIdFromReq(req);
  if (!userId) return res.status(401).json({ error: "Not authenticated" });

  const { plan } = req.body as { plan: keyof typeof PRICE_MAP };
  const priceId = PRICE_MAP[plan];
  if (!priceId) return res.status(400).json({ error: "Invalid plan" });

  // Get user + ensure Stripe customer exists
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) return res.status(404).json({ error: "User not found" });

  let stripeCustomerId = user.stripeCustomerId ?? undefined;
  if (!stripeCustomerId) {
    const customer = await stripe.customers.create({
      email: user.email,
      metadata: { appUserId: String(user.id) },
      address: {
        line1: user.addressLine1,
        line2: user.addressLine2,
        city: user.city,
        state: user.state,
        postal_code: user.postalCode,
        country: user.country,
      },
    });
    stripeCustomerId = customer.id;
    await prisma.user.update({
      where: { id: user.id },
      data: { stripeCustomerId },
    });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    customer: stripeCustomerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/pricing`,
    customer_update: {
      name: 'auto',     // ✅ automatically update name
      address: 'auto',  // ✅ automatically update address
    },
    billing_address_collection: "required",
    allow_promotion_codes: true,
    // Optional: pass your user/plan for webhook convenience
    metadata: { appUserId: String(user.id), plan },
  });

  return res.status(200).json({ url: session.url });
}
