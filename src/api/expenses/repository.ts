import prismaClient from "@/config/prisma";
export class ExpenseRepository {
	public get client() {
		return prismaClient;
	}
}

export const expenseRepository = new ExpenseRepository();
