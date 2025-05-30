import prismaClient from "@/config/prisma";
import { PrismaClient } from "@prisma/client";

export class ShopRepository {
	public get client() {
		return prismaClient;
	}
}

export const shopRepository = new ShopRepository();
