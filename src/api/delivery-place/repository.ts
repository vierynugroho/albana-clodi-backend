import { PrismaClient } from "@prisma/client";

export class DeliveryPlaceRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const deliveryPlaceRepository = new DeliveryPlaceRepository(prisma);
