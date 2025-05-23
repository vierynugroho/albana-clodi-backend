import type { PrismaClient } from "@prisma/client";

export class ProductRepository {
	public readonly productRepo: PrismaClient["product"];

	constructor(private readonly prismaInit: PrismaClient) {
		this.productRepo = prismaInit.product;
	}
}
