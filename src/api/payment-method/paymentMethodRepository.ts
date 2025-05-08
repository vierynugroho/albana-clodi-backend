import type { PrismaClient } from "@prisma/client";

export class PaymentMethodRepository {
	public readonly paymentMethodRepo: PrismaClient["paymentMethod"];

	constructor(private readonly prismaInit: PrismaClient) {
		this.paymentMethodRepo = prismaInit.paymentMethod;
	}
}
