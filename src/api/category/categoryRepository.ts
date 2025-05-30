import prismaClient from "@/config/prisma";
import type { PrismaClient } from "@prisma/client";

export class CategoryRepository {
	public readonly category: PrismaClient["category"];
	constructor() {
		this.category = prismaClient.category;
	}
}
