import prismaClient from "@/config/prisma";

export class ReportRepository {
	public get client() {
		return prismaClient;
	}
}

export const reportRepository = new ReportRepository();
