import prismaClient from "@/config/prisma";
import type { PrismaClient } from "@prisma/client";

export class PaymentMethodRepository {
	public readonly paymentMethodRepo: PrismaClient["paymentMethod"];

	constructor() {
		this.paymentMethodRepo = prismaClient.paymentMethod;
	}
}
