import prismaClient from "@/config/prisma";
import type { PrismaClient } from "@prisma/client";

export class ProductRepository {
	public readonly productRepo: PrismaClient["product"];

	constructor() {
		this.productRepo = prismaClient.product;
	}
}
