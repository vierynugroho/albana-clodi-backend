import type { PrismaClient } from "@prisma/client";

export class CategoryRepository {
	public readonly category: PrismaClient["category"];
	constructor(private readonly prismaInit: PrismaClient) {
		this.category = prismaInit.category;
	}
}
