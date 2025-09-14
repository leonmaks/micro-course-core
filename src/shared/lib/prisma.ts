import { PrismaClient } from "@/__generated/prisma"

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

const prismaClientSingleton = () => {
  return new PrismaClient({ log: ["query"], })
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma
