import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import type { Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { type ReportRepository, reportRepository } from "./repository";

interface IReportParams {
	startDate?: string;
	endDate?: string;
	month?: string;
	year?: string;
	week?: string;
}

class ReportService {
	private readonly reportRepo: ReportRepository;

	constructor() {
		this.reportRepo = reportRepository;
	}

	public summaryExpenses = async (params: IReportParams) => {
		try {
			const { startDate, endDate, month, year, week } = params;

			let where: { createdAt?: { gte?: Date; lte?: Date; lt?: Date } } = {};

			// Filter by date range
			if (startDate && endDate) {
				where = {
					...where,
					createdAt: {
						...(where.createdAt || {}),
						gte: new Date(`${startDate}T00:00:00`),
						lte: new Date(`${endDate}T23:59:59`),
					},
				};
			}

			if (month) {
				const monthNumber = Number.parseInt(month, 10);
				const yearValue = year ? Number.parseInt(year, 10) : new Date().getFullYear();

				where = {
					...where,
					createdAt: {
						...(where.createdAt || {}),
						gte: new Date(yearValue, monthNumber - 1, 1),
						lte: new Date(yearValue, monthNumber, 0),
					},
				};
			}

			if (year && !month && !week) {
				const yearNumber = Number.parseInt(year, 10);
				console.log(yearNumber);
				where = {
					...where,
					createdAt: {
						...(where.createdAt || {}),
						gte: new Date(yearNumber, 0, 1),
						lt: new Date(yearNumber + 1, 0, 1),
					},
				};
			}

			if (week) {
				const weekNumber = Number.parseInt(week, 10);
				const yearNumber = year ? Number.parseInt(year, 10) : new Date().getFullYear();

				const firstDayOfYear = new Date(yearNumber, 0, 1);

				const daysToAdd = (weekNumber - 1) * 7;

				// Calculate start and end dates for the week
				const weekStart = new Date(firstDayOfYear);
				weekStart.setDate(firstDayOfYear.getDate() + daysToAdd);

				const weekEnd = new Date(weekStart);
				weekEnd.setDate(weekStart.getDate() + 6);

				where = {
					...where,
					createdAt: {
						...(where.createdAt || {}),
						gte: weekStart,
						lte: weekEnd,
					},
				};
			}

			console.log(where);
			const [expenses, totalExpenses, count] = await Promise.all([
				this.reportRepo.client.expense.findMany({
					where: where as Prisma.ExpenseWhereInput,
					orderBy: {
						createdAt: "desc" as const,
					},
				}),
				this.reportRepo.client.expense.aggregate({
					where: where as Prisma.ExpenseWhereInput,
					_sum: {
						totalPrice: true,
					},
				}),
				this.reportRepo.client.expense.count({
					where: where as Prisma.ExpenseWhereInput,
				}),
			]);

			// Mendapatkan informasi filter yang digunakan
			let filterInfo = "Semua data";
			if (startDate && endDate) {
				filterInfo = `Data dari ${startDate} sampai ${endDate}`;
			} else if (month && year) {
				const monthNames = [
					"Januari",
					"Februari",
					"Maret",
					"April",
					"Mei",
					"Juni",
					"Juli",
					"Agustus",
					"September",
					"Oktober",
					"November",
					"Desember",
				];
				filterInfo = `Data bulan ${monthNames[Number(month) - 1]} ${year}`;
			} else if (year) {
				filterInfo = `Data tahun ${year}`;
			} else if (week) {
				filterInfo = `Data minggu ke-${week} tahun ${year || new Date().getFullYear()}`;
			}

			return ServiceResponse.success(
				"Berhasil mendapatkan report expenses",
				{
					filterInfo,
					totalExpenses: totalExpenses._sum.totalPrice || 0,
					totalData: count,
				},
				StatusCodes.OK,
			);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan data pengeluaran", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};
}

export const reportService = new ReportService();
