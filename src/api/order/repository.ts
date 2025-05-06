import { PrismaClient } from "@prisma/client";

export class OrderRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const orderRepository = new OrderRepository(prisma);
