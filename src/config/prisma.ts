import { PrismaClient } from "@prisma/client";
import { env } from "../common/utils/envConfig";

declare global {
	// eslint-disable-next-line no-var
	var prisma: PrismaClient | undefined;
}

// Konfigurasi timezone untuk Prisma
process.env.TZ = "Asia/Jakarta";

const prismaClient = new PrismaClient({
	log: [
		{ level: "query", emit: "event" },
		{ level: "error", emit: "stdout" },
		{ level: "info", emit: "stdout" },
		{ level: "warn", emit: "stdout" },
	],
});

prismaClient.$on("query", (e) => {
	console.log(`Query: ${e.query}`);
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error
// @ts-ignore
if (env.NODE_ENV !== "production") globalThis.prisma = prismaClient;

export default prismaClient;
