import { PrismaClient } from "@prisma/client";

export class ShopRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const shopRepository = new ShopRepository(prisma);
