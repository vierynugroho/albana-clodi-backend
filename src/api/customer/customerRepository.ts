import prismaClient from "@/config/prisma";
import type { PrismaClient } from "@prisma/client";

export class CustomerRepository {
	public readonly customer: PrismaClient["customer"];

	constructor() {
		this.customer = prismaClient.customer;
	}
}
