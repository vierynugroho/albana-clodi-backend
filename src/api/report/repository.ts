import { PrismaClient } from "@prisma/client";

export class ReportRepository {
	constructor(private readonly prisma: PrismaClient) {}

	public get client() {
		return this.prisma;
	}
}

const prisma = new PrismaClient();
export const reportRepository = new ReportRepository(prisma);
