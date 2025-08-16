// src/lib/auth.ts
import type { NextApiRequest } from "next";
import jwt from "jsonwebtoken";

export function getUserIdFromReq(req: NextApiRequest): number | null {
  const token = req.cookies?.token;
  if (!token) return null;
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET as string) as { id: number };
    return payload.id;
  } catch {
    return null;
  }
}
