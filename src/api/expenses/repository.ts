import { PrismaClient } from "../../../generated/prisma";

export class ExpenseRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const expenseRepository = new ExpenseRepository(prisma);
