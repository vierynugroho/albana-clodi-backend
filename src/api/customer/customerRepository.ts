import type { PrismaClient } from "@prisma/client";

export class CustomerRepository {
	public readonly customer: PrismaClient["customer"];

	constructor(private readonly prismaInit: PrismaClient) {
		this.customer = prismaInit.customer;
	}
}
