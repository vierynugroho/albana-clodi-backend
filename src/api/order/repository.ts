import prismaClient from "@/config/prisma";

export class OrderRepository {
	public get client() {
		return prismaClient;
	}
}

export const orderRepository = new OrderRepository();
