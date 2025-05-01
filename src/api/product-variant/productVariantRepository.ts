import type { PrismaClient } from "@prisma/client";

export class ProductVariantRepository {
	public readonly client: PrismaClient;

	constructor(private readonly prismaInit: PrismaClient) {
		this.client = prismaInit;
	}
}
