import type { PrismaClient } from "@prisma/client";

export class ProductRepository {
	public readonly client: PrismaClient;

	constructor(private readonly prismaInit: PrismaClient) {
		this.client = prismaInit;
	}
}
