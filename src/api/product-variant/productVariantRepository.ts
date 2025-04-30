import type { PrismaClient } from "../../../generated/prisma";

export class ProductVariantRepository {
	public readonly client: PrismaClient;

	constructor(private readonly prismaInit: PrismaClient) {
		this.client = prismaInit;
	}
}
