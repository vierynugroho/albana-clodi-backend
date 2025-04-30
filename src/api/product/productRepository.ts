import { PrismaClient } from "../../../generated/prisma";

export class ProductRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const productRepository = new ProductRepository(prisma);
