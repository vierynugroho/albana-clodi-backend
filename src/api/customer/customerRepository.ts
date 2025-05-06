import type { PrismaClient } from "@prisma/client";

export class CustomerRepository {
	public readonly client: PrismaClient;

	constructor(private readonly prismaInit: PrismaClient) {
		this.client = prismaInit;
	}
}
