import { PrismaClient } from "@prisma/client";

export class ReceiptRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const receiptRepository = new ReceiptRepository(prisma);
