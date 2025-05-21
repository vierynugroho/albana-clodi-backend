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
												productVariants: {
													include: {
														productPrices: true,
													},
												},
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

			// Menghitung keuntungan (harga jual - harga beli)
			let keuntungan = 0;

			// Kelompokkan data berdasarkan periode
			const dailyData: Record<string, { profit: number; count: number }> = {};
			const weeklyData: Record<string, { profit: number; count: number }> = {};
			const monthlyData: Record<string, { profit: number; count: number }> = {};
			const yearlyData: Record<string, { profit: number; count: number }> = {};

			for (const order of orders) {
				if (order.OrderDetail?.paymentStatus === ("SETTLEMENT" as PaymentStatus)) {
					for (const orderProduct of order.OrderDetail.OrderProducts) {
						// Menghitung keuntungan (harga jual - harga beli)
						const product = orderProduct.Product;
						if (product?.productVariants?.length > 0) {
							const variant = product.productVariants[0];
							if (variant?.productPrices?.length > 0) {
								let totalFees = 0;

								if (typeof order.OrderDetail.otherFees === "object" && order.OrderDetail.otherFees !== null) {
									if (
										"insurance" in order.OrderDetail.otherFees &&
										typeof order.OrderDetail.otherFees.insurance === "number"
									) {
										totalFees += order.OrderDetail.otherFees.insurance;
									}
									if (
										"packaging" in order.OrderDetail.otherFees &&
										typeof order.OrderDetail.otherFees.packaging === "number"
									) {
										totalFees += order.OrderDetail.otherFees.packaging;
									}
									if (
										"shippingCost" in order.OrderDetail.otherFees &&
										typeof order.OrderDetail.otherFees.shippingCost === "object" &&
										order.OrderDetail.otherFees.shippingCost !== null &&
										"cost" in order.OrderDetail.otherFees.shippingCost &&
										typeof order.OrderDetail.otherFees.shippingCost.cost === "number"
									) {
										totalFees += order.OrderDetail.otherFees.shippingCost.cost;
									}
								}
								const sellPrice = (order.OrderDetail?.finalPrice || 0) - totalFees;
								const buyPrice = variant.productPrices[0]?.buy
									? variant.productPrices[0].buy * orderProduct.productQty
									: 0;
								const profit = sellPrice - buyPrice;
								keuntungan += profit;

								// Kelompokkan berdasarkan periode
								const orderDate = new Date(order.createdAt);
								const orderWeek = Math.ceil(
									(orderDate.getDate() + new Date(orderDate.getFullYear(), orderDate.getMonth(), 1).getDay()) / 7,
								);
								const orderMonth = orderDate.getMonth() + 1;
								const orderYear = orderDate.getFullYear();
								const orderDay = orderDate.getDate();

								// Data harian (untuk filter range tanggal atau bulan)
								if (startDate && endDate) {
									// Harian
									const dayKey = `${orderYear}-${orderMonth}-${orderDay}`;
									if (!dailyData[dayKey]) {
										dailyData[dayKey] = { profit: 0, count: 0 };
									}
									dailyData[dayKey].profit += profit;
									dailyData[dayKey].count += 1;

									// Bulanan
									const monthKey = `${orderYear}-${orderMonth}`;
									if (!monthlyData[monthKey]) {
										monthlyData[monthKey] = { profit: 0, count: 0 };
									}
									monthlyData[monthKey].profit += profit;
									monthlyData[monthKey].count += 1;
								}

								// Data mingguan (untuk filter range tanggal atau tahun)
								if ((startDate && endDate) || (year && !month)) {
									const weekKey = `${orderYear}-W${orderWeek}`;
									if (!weeklyData[weekKey]) {
										weeklyData[weekKey] = { profit: 0, count: 0 };
									}
									weeklyData[weekKey].profit += profit;
									weeklyData[weekKey].count += 1;
								}

								// Data harian (untuk filter bulan)
								if (month) {
									const dayKey = `${orderDay}`;
									if (!dailyData[dayKey]) {
										dailyData[dayKey] = { profit: 0, count: 0 };
									}
									dailyData[dayKey].profit += profit;
									dailyData[dayKey].count += 1;
								}

								// Data mingguan (untuk filter bulan)
								if (month) {
									const weekKey = `W${orderWeek}`;
									if (!weeklyData[weekKey]) {
										weeklyData[weekKey] = { profit: 0, count: 0 };
									}
									weeklyData[weekKey].profit += profit;
									weeklyData[weekKey].count += 1;
								}

								// Data bulanan (untuk filter tahun)
								if (year && !month) {
									const monthKey = `${orderMonth}`;
									if (!monthlyData[monthKey]) {
										monthlyData[monthKey] = { profit: 0, count: 0 };
									}
									monthlyData[monthKey].profit += profit;
									monthlyData[monthKey].count += 1;
								}
							}
						}
					}
				}
			}

			// Mendapatkan informasi filter yang digunakan
			let filterInfo = "Data bulan ini";
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

			// Urutkan data dari terlama ke terbaru
			const sortedDailyData = Object.entries(dailyData)
				.sort((a, b) => {
					// Jika filter bulan, urutkan berdasarkan tanggal
					if (month) {
						return Number(a[0]) - Number(b[0]);
					}
					// Jika filter range tanggal, urutkan berdasarkan tanggal lengkap
					const dateA = new Date(a[0]);
					const dateB = new Date(b[0]);
					return dateA.getTime() - dateB.getTime();
				})
				.reduce<Record<string, { profit: number; count: number }>>((acc, [key, value]) => {
					acc[key] = value;
					return acc;
				}, {});

			const sortedWeeklyData = Object.entries(weeklyData)
				.sort((a, b) => {
					// Jika filter bulan, urutkan berdasarkan minggu
					if (month) {
						return a[0].localeCompare(b[0]);
					}
					// Jika filter range tanggal atau tahun, urutkan berdasarkan tahun dan minggu
					const [yearA, weekA] = a[0].split("-W");
					const [yearB, weekB] = b[0].split("-W");
					if (yearA !== yearB) return yearA.localeCompare(yearB);
					return weekA.localeCompare(weekB);
				})
				.reduce<Record<string, { profit: number; count: number }>>((acc, [key, value]) => {
					acc[key] = value;
					return acc;
				}, {});

			const sortedMonthlyData = Object.entries(monthlyData)
				.sort((a, b) => {
					// Untuk filter tahun atau range tanggal, urutkan berdasarkan tahun dan bulan
					if (startDate && endDate) {
						const [yearA, monthA] = a[0].split("-");
						const [yearB, monthB] = b[0].split("-");
						if (yearA !== yearB) return yearA.localeCompare(yearB);
						return monthA.localeCompare(monthB);
					}
					// Untuk filter tahun, urutkan berdasarkan bulan
					return Number(a[0]) - Number(b[0]);
				})
				.reduce<Record<string, { profit: number; count: number }>>((acc, [key, value]) => {
					acc[key] = value;
					return acc;
				}, {});

			const responseData: {
				filterInfo: string;
				keuntungan: number;
				keuntungan_per_hari?: Record<string, { profit: number; count: number }>;
				keuntungan_per_minggu?: Record<string, { profit: number; count: number }>;
				keuntungan_per_bulan?: Record<string, { profit: number; count: number }>;
			} = {
				filterInfo,
				keuntungan: keuntungan,
			};

			if (startDate && endDate) {
				responseData.keuntungan_per_hari = sortedDailyData;
				responseData.keuntungan_per_minggu = sortedWeeklyData;
				responseData.keuntungan_per_bulan = sortedMonthlyData;
			} else if (month) {
				responseData.keuntungan_per_hari = sortedDailyData;
				responseData.keuntungan_per_minggu = sortedWeeklyData;
			} else if (year && !month) {
				responseData.keuntungan_per_minggu = sortedWeeklyData;
				responseData.keuntungan_per_bulan = sortedMonthlyData;
			} else {
				// Default: data bulan ini
				responseData.keuntungan_per_hari = sortedDailyData;
			}

			return ServiceResponse.success("Berhasil mendapatkan report transactions", responseData, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan report orders", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public summaryPaymentsTransactions = async (params: IReportParams) => {
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
			const orders = await this.reportRepo.client.order.findMany({
				where: where as Prisma.OrderWhereInput,
				orderBy: {
					createdAt: "desc" as const,
				},
				include: {
					OrderDetail: {
						include: {
							OrderProducts: true,
							PaymentMethod: true,
						},
					},
				},
			});

			// Kelompokkan berdasarkan payment_method
			const paymentMethodGroups: Record<
				string,
				{
					count: number;
					total: number;
					name: string;
				}
			> = {};

			for (const order of orders) {
				// Kelompokkan berdasarkan metode pembayaran
				if (order.OrderDetail?.PaymentMethod) {
					const paymentMethodId = order.OrderDetail.PaymentMethod.id;
					const paymentMethodName = await this.reportRepo.client.paymentMethod
						.findUnique({
							where: { id: paymentMethodId },
						})
						.then((method) => method?.bankName || "");

					if (!paymentMethodGroups[paymentMethodId]) {
						paymentMethodGroups[paymentMethodId] = {
							count: 0,
							total: 0,
							name: paymentMethodName,
						};
					}

					paymentMethodGroups[paymentMethodId].count += 1;

					// Hitung total tanpa otherFees
					if (order.OrderDetail.finalPrice && order.OrderDetail.otherFees) {
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

						const netAmount = order.OrderDetail.finalPrice - totalFees;
						paymentMethodGroups[paymentMethodId].total += netAmount;
					}
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
				"Berhasil mendapatkan report transaksi berdasarkan metode pembayaran",
				{
					filterInfo,
					// payment methods
					payment_methods: Object.values(paymentMethodGroups),
				},
				StatusCodes.OK,
			);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mendapatkan report orders", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public summaryProductsSold = async (params: IReportParams) => {
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

			// Default: jika tidak ada parameter waktu, ambil data bulan ini
			if (!startDate && !endDate && !month && !year && !week) {
				const now = new Date();
				const currentMonth = now.getMonth();
				const currentYear = now.getFullYear();

				where = {
					...where,
					createdAt: {
						...(where.createdAt || {}),
						gte: new Date(currentYear, currentMonth, 1),
						lte: new Date(currentYear, currentMonth + 1, 0),
					},
				};
			}

			const orders = await this.reportRepo.client.order.findMany({
				where: {
					...(where as Prisma.OrderWhereInput),
					OrderDetail: {
						paymentStatus: "SETTLEMENT",
					},
				},
				orderBy: {
					createdAt: "desc" as const,
				},
				include: {
					OrderDetail: {
						include: {
							OrderProducts: {
								include: {
									Product: true,
								},
							},
						},
					},
				},
			});

			// Kelompokkan produk berdasarkan nama
			const productGroups: Record<
				string,
				{
					productId: string;
					name: string;
					totalQty: number;
				}
			> = {};

			// Data untuk pengelompokan berdasarkan periode sesuai filter
			const periodData: Record<string, number> = {};
			let totalProductsSold = 0;

			for (const order of orders) {
				if (order.OrderDetail?.OrderProducts && order.OrderDetail.OrderProducts.length > 0) {
					const orderDate = new Date(order.createdAt);

					// Tentukan kunci periode berdasarkan filter yang digunakan
					let periodKey = "";

					if (startDate && endDate) {
						// Jika menggunakan rentang tanggal, gunakan tanggal harian
						periodKey = orderDate.toISOString().split("T")[0];
					} else if (week) {
						// Jika filter per minggu, gunakan hari dalam minggu tersebut
						periodKey = `${orderDate.getDate()}`;
					} else if (month) {
						// Jika filter per bulan, gunakan tanggal dalam bulan
						periodKey = `${orderDate.getDate()}`;
					} else if (year && !month) {
						// Jika filter per tahun, gunakan bulan dalam tahun
						periodKey = `${orderDate.getMonth() + 1}`;
					} else {
						// Default: filter bulan ini, gunakan tanggal
						periodKey = `${orderDate.getDate()}`;
					}

					for (const orderProduct of order.OrderDetail.OrderProducts) {
						const productId = orderProduct.productId;
						const productQty = orderProduct.productQty;
						const productName = orderProduct.Product?.name || "Produk Tidak Diketahui";

						// Tambahkan ke total produk terjual
						totalProductsSold += productQty;

						// Kelompokkan berdasarkan produk
						if (!productGroups[productId]) {
							productGroups[productId] = {
								productId,
								name: productName,
								totalQty: 0,
							};
						}
						productGroups[productId].totalQty += productQty;

						// Kelompokkan berdasarkan periode yang sesuai dengan filter
						periodData[periodKey] = (periodData[periodKey] || 0) + productQty;
					}
				}
			}

			// Konversi ke array dan urutkan sesuai dengan filter yang digunakan
			let products_sold = [];

			if (startDate && endDate) {
				products_sold = Object.entries(periodData)
					.map(([date, qty]) => ({ date, qty }))
					.sort((a, b) => a.date.localeCompare(b.date));
			} else if (week) {
				products_sold = Object.entries(periodData)
					.map(([day, qty]) => ({ day: Number.parseInt(day), qty }))
					.sort((a, b) => a.day - b.day);
			} else if (month) {
				products_sold = Object.entries(periodData)
					.map(([day, qty]) => ({ day: Number.parseInt(day), qty }))
					.sort((a, b) => a.day - b.day);
			} else if (year && !month) {
				products_sold = Object.entries(periodData)
					.map(([month, qty]) => ({ month: Number.parseInt(month), qty }))
					.sort((a, b) => a.month - b.month);
			} else {
				// Default: filter bulan ini
				products_sold = Object.entries(periodData)
					.map(([day, qty]) => ({ day: Number.parseInt(day), qty }))
					.sort((a, b) => a.day - b.day);
			}

			const products = Object.values(productGroups).sort((a, b) => b.totalQty - a.totalQty);

			// Mendapatkan informasi filter yang digunakan
			let filterInfo = "Data bulan ini";
			if (startDate && endDate) {
				filterInfo = `Data dari ${startDate} sampai ${endDate}`;
			} else if (month) {
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
				filterInfo = `Data bulan ${monthNames[Number(month) - 1]} ${new Date().getFullYear()}`;
			} else if (year) {
				filterInfo = `Data tahun ${year}`;
			} else if (week) {
				filterInfo = `Data minggu ke-${week} tahun ${year || new Date().getFullYear()}`;
			}

			const responseData = {
				filterInfo,
				totalProductsSold,
				qty_product_sold: products_sold,
				products,
			};

			return ServiceResponse.success("Berhasil mendapatkan report produk terjual", responseData, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure(
				"Gagal mendapatkan report produk terjual",
				null,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const reportService = new ReportService();
