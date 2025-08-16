// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Prevent creating many clients in dev (Next hot-reload)
const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    // log: ["query", "error", "warn"], // enable if you want SQL logs
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
