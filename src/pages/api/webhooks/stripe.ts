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