import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import { type PaymentStatus, Prisma } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { type ReportRepository, reportRepository } from "./repository";

interface IReportParams {
	startDate?: string;
	endDate?: string;
	month?: string;
	year?: string;
	week?: string;
	payment_method_id?: string;
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
			return ServiceResponse.failure("Gagal mendapatkan report expenses", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public summaryOrders = async (params: IReportParams) => {
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
			const [orders, ordersAmount, count, expenses] = await Promise.all([
				this.reportRepo.client.order.findMany({
					where: where as Prisma.OrderWhereInput,
					orderBy: {
						createdAt: "desc" as const,
					},
					include: {
						OrderDetail: {
							include: {
								OrderProducts: {
									include: {
										Product: {
											include: {
												productVariants: true,
											},
										},
									},
								},
								PaymentMethod: true,
							},
						},
						SalesChannel: true,
						DeliveryPlace: true,
						OrdererCustomer: true,
						DeliveryTargetCustomer: true,
						ShippingServices: true,
					},
				}),
				this.reportRepo.client.$queryRaw`
					SELECT SUM(od.final_price) as total_amount
					FROM orders o
					JOIN order_details od ON o.id = od.order_id
					WHERE ${Prisma.sql([
						where.createdAt?.gte ? `o.created_at >= '${where.createdAt.gte.toISOString()}'` : "TRUE",
					])}
					AND ${Prisma.sql([where.createdAt?.lte ? `o.created_at <= '${where.createdAt.lte.toISOString()}'` : "TRUE"])}
				` as Promise<[{ total_amount: number | null }]>,
				this.reportRepo.client.order.count({
					where: where as Prisma.OrderWhereInput,
				}),
				this.reportRepo.client.expense.aggregate({
					_sum: {
						totalPrice: true,
					},
					where: where as Prisma.ExpenseWhereInput,
					_count: {
						id: true,
					},
				}),
			]);

			// Menghitung total item terjual (hanya untuk order dengan status LUNAS)
			let totalItemsSold = 0;
			let penjualanKotor = 0;
			let penjualanBersih = 0;
			let labaKotor = 0;
			let labaBersih = 0;
			const totalExpenses = expenses._sum.totalPrice || 0;
			const totalExpensesCount = expenses._count.id || 0;

			for (const order of orders) {
				if (order.OrderDetail?.paymentStatus === ("SETTLEMENT" as PaymentStatus)) {
					// Menghitung total item terjual
					for (const orderProduct of order.OrderDetail.OrderProducts) {
						totalItemsSold += orderProduct.productQty;
					}
				}

				// Menghitung penjualan kotor (total amount / diambil dari final price)
				if (order.OrderDetail?.finalPrice && order.OrderDetail?.paymentStatus === ("SETTLEMENT" as PaymentStatus)) {
					penjualanKotor += order.OrderDetail.finalPrice;
				} else {
					penjualanKotor += 0;
				}

				// Menghitung penjualan bersih (final price dikurangi otherFees)
				if (
					order.OrderDetail?.finalPrice &&
					order.OrderDetail.otherFees &&
					order.OrderDetail?.paymentStatus === ("SETTLEMENT" as PaymentStatus)
				) {
					const otherFees = order.OrderDetail.otherFees;
					let totalFees = 0;

					if (typeof otherFees === "object" && otherFees !== null) {
						if ("insurance" in otherFees && typeof otherFees.insurance === "number") {
							totalFees += otherFees.insurance;
						}
						if ("packaging" in otherFees && typeof otherFees.packaging === "number") {
							totalFees += otherFees.packaging;
						}
						if (
							"shippingCost" in otherFees &&
							typeof otherFees.shippingCost === "object" &&
							otherFees.shippingCost !== null &&
							"cost" in otherFees.shippingCost &&
							typeof otherFees.shippingCost.cost === "number"
						) {
							totalFees += otherFees.shippingCost.cost;
						}
					}

					const netSale = order.OrderDetail.finalPrice - totalFees;
					penjualanBersih += netSale;

					// Menghitung laba kotor (total finalPrice dikurangi otherFees)
					labaKotor += netSale;
				}
			}

			// Menghitung laba bersih (penjualan bersih dikurangi expenses)
			labaBersih = penjualanBersih - totalExpenses;

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
				"Berhasil mendapatkan report orders",
				{
					filterInfo,
					// transactions
					total_transactions: count,
					total_item_terjual: totalItemsSold,
					total_transaction_pending: orders.filter(
						(order) => order.OrderDetail?.paymentStatus === ("PENDING" as PaymentStatus),
					).length,
					total_transaction_success: orders.filter(
						(order) => order.OrderDetail?.paymentStatus === ("SETTLEMENT" as PaymentStatus),
					).length,
					total_transaction_failed: orders.filter(
						(order) => order.OrderDetail?.paymentStatus === ("CANCEL" as PaymentStatus),
					).length,
					total_transaction_installments: orders.filter(
						(order) => order.OrderDetail?.paymentStatus === ("INSTALLMENTS" as PaymentStatus),
					).length,
					// expenses
					total_expenses: totalExpensesCount,
					expenses_amount: totalExpenses,
					// sales
					penjualan_kotor: penjualanKotor,
					penjualan_bersih: penjualanBersih,
					laba_kotor: labaKotor,
					laba_bersih: labaBersih,
				},
				StatusCodes.OK,
			);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan report orders", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public summaryProducts = async (params: IReportParams) => {
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
			const [expenses, totalProductPrice, count] = await Promise.all([
				this.reportRepo.client.productPrice.findMany({
					where: where as Prisma.ProductPriceWhereInput,
					orderBy: {
						createdAt: "desc" as const,
					},
				}),
				this.reportRepo.client.productPrice.aggregate({
					where: where as Prisma.ProductPriceWhereInput,
					_sum: {
						normal: true,
						buy: true,
						member: true,
						agent: true,
						reseller: true,
					},
				}),
				this.reportRepo.client.productPrice.count({
					where: where as Prisma.ProductPriceWhereInput,
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
				"Berhasil mendapatkan report products",
				{
					filterInfo,
					total_normal_price: totalProductPrice._sum.normal || 0,
					total_buy_price: totalProductPrice._sum.buy || 0,
					total_reseller_price: totalProductPrice._sum.reseller || 0,
					total_member_price: totalProductPrice._sum.member || 0,
					total_agent_price: totalProductPrice._sum.agent || 0,
					totalData: count,
				},
				StatusCodes.OK,
			);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan report products", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public summaryTransaction = async (params: IReportParams) => {
		try {
			const { startDate, endDate, month, year, week, payment_method_id } = params;

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

			let whereOrderDetail = {};

			if (payment_method_id) {
				whereOrderDetail = {
					paymentMethodId: payment_method_id,
				};
			}

			console.log(where);
			const [orders, ordersAmount, count] = await Promise.all([
				this.reportRepo.client.order.findMany({
					where: where as Prisma.OrderWhereInput,
					orderBy: {
						createdAt: "desc" as const,
					},
					include: {
						OrderDetail: {
							where: whereOrderDetail,
							include: {
								OrderProducts: {
									include: {
										Product: {
											include: {
												productVariants: true,
											},
										},
									},
								},
								PaymentMethod: true,
							},
						},
						SalesChannel: true,
						DeliveryPlace: true,
						OrdererCustomer: true,
						DeliveryTargetCustomer: true,
						ShippingServices: true,
					},
				}),
				this.reportRepo.client.$queryRaw`
					SELECT SUM(od.final_price) as total_amount
					FROM orders o
					JOIN order_details od ON o.id = od.order_id
					WHERE ${Prisma.sql([
						where.createdAt?.gte ? `o.created_at >= '${where.createdAt.gte.toISOString()}'` : "TRUE",
					])}
					AND ${Prisma.sql([where.createdAt?.lte ? `o.created_at <= '${where.createdAt.lte.toISOString()}'` : "TRUE"])}
				` as Promise<[{ total_amount: number | null }]>,
				this.reportRepo.client.order.count({
					where: where as Prisma.OrderWhereInput,
				}),
			]);

			// Menghitung total item terjual (hanya untuk order dengan status LUNAS)
			let totalItemsSold = 0;
			let penjualanKotor = 0;
			let penjualanBersih = 0;
			let labaKotor = 0;

			for (const order of orders) {
				if (order.OrderDetail?.paymentStatus === ("SETTLEMENT" as PaymentStatus)) {
					// Menghitung total item terjual
					for (const orderProduct of order.OrderDetail.OrderProducts) {
						totalItemsSold += orderProduct.productQty;
					}
				}

				// Menghitung penjualan kotor (total amount / diambil dari final price)
				if (order.OrderDetail?.finalPrice) {
					penjualanKotor += order.OrderDetail.finalPrice;
				}

				// Menghitung penjualan bersih (final price dikurangi otherFees)
				if (order.OrderDetail?.finalPrice && order.OrderDetail.otherFees) {
					const otherFees = order.OrderDetail.otherFees;
					let totalFees = 0;

					if (typeof otherFees === "object" && otherFees !== null) {
						if ("insurance" in otherFees && typeof otherFees.insurance === "number") {
							totalFees += otherFees.insurance;
						}
						if ("packaging" in otherFees && typeof otherFees.packaging === "number") {
							totalFees += otherFees.packaging;
						}
						if (
							"shippingCost" in otherFees &&
							typeof otherFees.shippingCost === "object" &&
							otherFees.shippingCost !== null &&
							"cost" in otherFees.shippingCost &&
							typeof otherFees.shippingCost.cost === "number"
						) {
							totalFees += otherFees.shippingCost.cost;
						}
					}

					const netSale = order.OrderDetail.finalPrice - totalFees;
					penjualanBersih += netSale;

					// Menghitung laba kotor (penjualan bersih setelah dikurangi harga pokok produk)
					// Catatan: Dalam contoh ini, kita tidak memiliki informasi tentang harga pokok produk
					// Jadi kita asumsikan laba kotor sama dengan penjualan bersih untuk sementara
					labaKotor += netSale;
				}
			}

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
				"Berhasil mendapatkan report transaksi berdasarkan payment method",
				{
					filterInfo,
					total_transactions: count,
					total_item_terjual: totalItemsSold,
					penjualan_kotor: penjualanKotor,
					penjualan_bersih: penjualanBersih,
					laba_kotor: labaKotor,
				},
				StatusCodes.OK,
			);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure(
				"Gagal mendapatkan report transaksi berdasarkan payment method",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const reportService = new ReportService();
