import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { getUserIdFromReq } from "../../lib/auth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = getUserIdFromReq(req);
  if (!userId) return res.status(401).end();

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true, email: true, name: true, stripeCustomerId: true,
      subscriptions: {
        orderBy: { updatedAt: "desc" },
        take: 1,
      },
    },
  });

  return res.status(200).json(user);
}
