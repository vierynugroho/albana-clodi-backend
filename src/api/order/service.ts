import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import type { PaymentStatus } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { CreateOrderType, OrderParamsType, UpdateOrderType } from "./model";
import { type OrderRepository, orderRepository } from "./repository";

class OrderService {
	private readonly orderRepo: OrderRepository;

	constructor() {
		this.orderRepo = orderRepository;
	}

	public getAll = async () => {
		try {
			const result = await this.orderRepo.client.order.findMany({
				include: {
					SalesChannel: true,
					DeliveryPlace: true,
					OrdererCustomer: true,
					DeliveryTargetCustomer: true,
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
					ShippingServices: true,
				},
			});
			return ServiceResponse.success("Berhasil mengambil data order", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengambil data order", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public getOne = async (id: string) => {
		try {
			const result = await this.orderRepo.client.order.findUnique({
				where: { id },
				include: {
					SalesChannel: true,
					DeliveryPlace: true,
					OrdererCustomer: true,
					DeliveryTargetCustomer: true,
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
					ShippingServices: true,
				},
			});

			if (!result) {
				return ServiceResponse.failure("Data order tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Berhasil mengambil data order", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal mengambil data order", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public create = async (data: CreateOrderType["body"]) => {
		try {
			let totalPrice = 0;

			// Cek customer pemesan
			if (data.order.ordererCustomerId) {
				const ordererCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.order.ordererCustomerId },
				});
				if (!ordererCustomer) {
					return ServiceResponse.failure("Data customer pemesan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek customer tujuan pengiriman
			if (data.order.deliveryTargetCustomerId) {
				const deliveryTargetCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.order.deliveryTargetCustomerId },
				});
				if (!deliveryTargetCustomer) {
					return ServiceResponse.failure(
						"Data customer tujuan pengiriman tidak ditemukan",
						null,
						StatusCodes.NOT_FOUND,
					);
				}
			}

			// Cek tempat pengiriman
			if (data.order.deliveryPlaceId) {
				const deliveryPlace = await this.orderRepo.client.deliveryPlace.findUnique({
					where: { id: data.order.deliveryPlaceId },
				});
				if (!deliveryPlace) {
					return ServiceResponse.failure("Data tempat pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek saluran penjualan
			if (data.order.salesChannelId) {
				const salesChannel = await this.orderRepo.client.salesChannel.findUnique({
					where: { id: data.order.salesChannelId },
				});
				if (!salesChannel) {
					return ServiceResponse.failure("Data saluran penjualan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Validasi data detail order
			if (data.orderDetail.detail) {
				// Validasi kode order jika ada
				if (data.orderDetail.detail.code) {
					// Cek apakah kode order sudah digunakan
					const existingOrder = await this.orderRepo.client.orderDetail.findFirst({
						where: { code: data.orderDetail.detail.code },
					});
					console.log("TEST==========================");
					if (existingOrder) {
						console.log("ADAAAA==========================");
						return ServiceResponse.failure("Kode order sudah digunakan", null, StatusCodes.BAD_REQUEST);
					}
				}

				// Validasi otherFees jika ada
				if (data.orderDetail.detail.otherFees) {
					const { packaging, insurance, discount, ongkir1kg } = data.orderDetail.detail.otherFees as {
						packaging?: number;
						insurance?: number;
						discount?: {
							value: number;
							type: "percent" | "nominal";
						};
						ongkir1kg?: number;
					};
					if (packaging && typeof packaging !== "number") {
						return ServiceResponse.failure("Biaya packaging harus berupa angka", null, StatusCodes.BAD_REQUEST);
					}
					if (insurance && typeof insurance !== "number") {
						return ServiceResponse.failure("Biaya asuransi harus berupa angka", null, StatusCodes.BAD_REQUEST);
					}
					if (discount) {
						if (typeof discount !== "object" || discount === null) {
							return ServiceResponse.failure("Diskon harus berupa objek", null, StatusCodes.BAD_REQUEST);
						}
						if (typeof discount.value !== "number") {
							return ServiceResponse.failure("Nilai diskon harus berupa angka", null, StatusCodes.BAD_REQUEST);
						}
						if (discount.type !== "percent" && discount.type !== "nominal") {
							return ServiceResponse.failure(
								"Tipe diskon harus 'percent' atau 'nominal'",
								null,
								StatusCodes.BAD_REQUEST,
							);
						}
					}
					if (ongkir1kg && typeof ongkir1kg !== "number") {
						return ServiceResponse.failure("Ongkir 1kg harus berupa angka", null, StatusCodes.BAD_REQUEST);
					}
				}
			}

			if (data.orderDetail.paymentMethod?.id) {
				const paymentMethod = await this.orderRepo.client.paymentMethod.findUnique({
					where: { id: data.orderDetail.paymentMethod.id },
				});
				if (!paymentMethod) {
					return ServiceResponse.failure("Data metode pembayaran tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek produk untuk order products
			for (const orderProduct of data.orderDetail.orderProducts) {
				if (orderProduct.productId) {
					const product = await this.orderRepo.client.product.findUnique({
						where: { id: orderProduct.productId },
					});
					if (!product) {
						return ServiceResponse.failure("Data produk tidak ditemukan", null, StatusCodes.NOT_FOUND);
					}
				}
			}

			// Validasi shipping services jika ada
			if (data.orderDetail.shippingServices && data.orderDetail.shippingServices.length > 0) {
				for (const service of data.orderDetail.shippingServices) {
					if (!service.shippingName || !service.serviceName) {
						return ServiceResponse.failure("Data shipping service tidak lengkap", null, StatusCodes.BAD_REQUEST);
					}
				}
			}

			const result = await this.orderRepo.client.$transaction(async (prisma) => {
				const createdOrder = await prisma.order.create({
					data: {
						ordererCustomerId: data.order.ordererCustomerId,
						deliveryTargetCustomerId: data.order.deliveryTargetCustomerId,
						deliveryPlaceId: data.order.deliveryPlaceId,
						salesChannelId: data.order.salesChannelId,
						orderDate: data.order.orderDate ? new Date(data.order.orderDate) : undefined,
						note: data.order.note,
					},
				});

				// Ambil data customer untuk menentukan kategori harga
				const customer = await prisma.customer.findUnique({
					where: { id: data.order.ordererCustomerId },
					select: { category: true },
				});

				if (!customer) {
					throw new Error("Data customer tidak ditemukan");
				}

				// Hitung harga produk berdasarkan kategori customer
				for (const orderProduct of data.orderDetail.orderProducts) {
					if (!orderProduct.productId) continue;

					const product = await prisma.product.findUnique({
						where: { id: orderProduct.productId },
						include: {
							productVariants: {
								include: {
									productPrices: true,
								},
							},
						},
					});

					if (!product) continue;

					// Ambil harga dari product price berdasarkan kategori customer
					let productPrice = 0;
					const variant = product.productVariants[0]; // Ambil variant pertama jika ada

					if (variant?.productPrices && variant.productPrices.length > 0) {
						const priceData = variant.productPrices[0]; // Ambil data harga pertama dari array

						// Tentukan harga berdasarkan kategori customer
						switch (customer.category) {
							case "CUSTOMER":
							case "DROPSHIPPER":
								productPrice = priceData.normal || 0;
								break;
							case "MEMBER":
								productPrice = priceData.member || priceData.normal || 0;
								break;
							case "RESELLER":
								productPrice = priceData.reseller || priceData.normal || 0;
								break;
							case "AGENT":
								productPrice = priceData.agent || priceData.normal || 0;
								break;
							default:
								productPrice = priceData.normal || 0;
						}
					}

					// Tambahkan ke total price (harga * quantity)
					totalPrice += productPrice * orderProduct.productQty;
				}

				// Tambahkan other fees jika ada
				if (data.orderDetail.detail.otherFees) {
					const otherFees = data.orderDetail.detail.otherFees;

					// Tambahkan biaya asuransi jika ada
					if (otherFees.insurance) {
						totalPrice += otherFees.insurance;
					}

					// Tambahkan biaya packaging jika ada
					if (otherFees.packaging) {
						totalPrice += otherFees.packaging;
					}

					// Tambahkan biaya untuk order berdasarkan berat
					if (otherFees.weight) {
						const orderWeight = 1; // Berat order dalam kg
						const pricePerKg = otherFees.weight; // Harga per kg dari otherFees.weight
						totalPrice += orderWeight * pricePerKg;
					}

					// Tambahkan biaya pengiriman jika ada
					if (otherFees.shippingCost) {
						if (otherFees.shippingCost.cost) {
							totalPrice += otherFees.shippingCost.cost;
						}
					}

					// Proses discount jika ada
					if (otherFees.discount) {
						// Jika discount dalam bentuk persentase
						if (otherFees.discount.type === "percent" && otherFees.discount.value) {
							const discountAmount = (totalPrice * otherFees.discount.value) / 100;
							totalPrice -= discountAmount;
						}
						// Jika discount dalam bentuk nominal
						else if (otherFees.discount.type === "nominal" && otherFees.discount.value) {
							totalPrice -= otherFees.discount.value;
						}
					}
				}

				// Buat order detail
				const createdOrderDetail = await prisma.orderDetail.create({
					data: {
						orderId: createdOrder.id,
						paymentMethodId: data.orderDetail.paymentMethod?.id,
						code: data.orderDetail.detail.code,
						otherFees: data.orderDetail.detail.otherFees,
						finalPrice: totalPrice,
						paymentStatus: data.orderDetail.paymentMethod?.status
							? (data.orderDetail.paymentMethod?.status.toUpperCase() as PaymentStatus)
							: undefined,
						paymentDate: data.orderDetail.paymentMethod?.date
							? new Date(data.orderDetail.paymentMethod?.date)
							: undefined,
						receiptNumber: data.orderDetail.detail.receiptNumber,
					},
				});

				// Buat order products
				const orderProductsPromises = data.orderDetail.orderProducts.map((orderProduct) => {
					if (!orderProduct.productId) {
						return ServiceResponse.failure("productId is required", null, StatusCodes.BAD_REQUEST);
					}

					return prisma.orderProduct.create({
						data: {
							orderId: createdOrder.id,
							orderDetailId: createdOrderDetail.id,
							productId: orderProduct.productId,
							productQty: orderProduct.productQty,
						},
					});
				});

				await Promise.all(orderProductsPromises);

				// Buat shipping services jika ada
				if (data.orderDetail.shippingServices && data.orderDetail.shippingServices.length > 0) {
					const shippingServicesPromises = data.orderDetail.shippingServices.map((shippingService) =>
						prisma.shippingService.create({
							data: {
								orderId: createdOrder.id,
								shippingName: shippingService.shippingName,
								serviceName: shippingService.serviceName,
								weight: shippingService.weight,
								isCod: shippingService.isCod,
								shippingCost: shippingService.shippingCost,
								shippingCashback: shippingService.shippingCashback,
								shippingCostNet: shippingService.shippingCostNet,
								grandtotal: shippingService.grandtotal,
								serviceFee: shippingService.serviceFee,
								netIncome: shippingService.netIncome,
								etd: shippingService.etd,
								type: shippingService.type,
							},
						}),
					);

					await Promise.all(shippingServicesPromises);
				}

				return {
					...createdOrder,
					orderDetail: createdOrderDetail,
				};
			});

			return ServiceResponse.success("Berhasil membuat data order", result, StatusCodes.CREATED);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure(
				"Gagal membuat data order",
				(error as Error).message,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public update = async (id: string, data: Partial<UpdateOrderType>["body"]) => {
		try {
			let totalPrice = 0;

			const existingOrder = await this.orderRepo.client.order.findUnique({
				where: { id },
				include: {
					SalesChannel: true,
					DeliveryPlace: true,
					OrdererCustomer: true,
					DeliveryTargetCustomer: true,
					OrderDetail: {
						include: {
							OrderProducts: {
								include: {
									Product: true,
								},
							},
							PaymentMethod: true,
						},
					},
					ShippingServices: true,
				},
			});

			if (!existingOrder) {
				return ServiceResponse.failure("Data order tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			// Cek customer pemesan jika ada perubahan
			if (data?.order?.ordererCustomerId) {
				const ordererCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.order.ordererCustomerId },
				});
				if (!ordererCustomer) {
					return ServiceResponse.failure("Data customer pemesan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek customer tujuan pengiriman jika ada perubahan
			if (data?.order?.deliveryTargetCustomerId) {
				const deliveryTargetCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.order.deliveryTargetCustomerId },
				});
				if (!deliveryTargetCustomer) {
					return ServiceResponse.failure(
						"Data customer tujuan pengiriman tidak ditemukan",
						null,
						StatusCodes.NOT_FOUND,
					);
				}
			}

			// Cek tempat pengiriman jika ada perubahan
			if (data?.order?.deliveryPlaceId) {
				const deliveryPlace = await this.orderRepo.client.deliveryPlace.findUnique({
					where: { id: data.order.deliveryPlaceId },
				});
				if (!deliveryPlace) {
					return ServiceResponse.failure("Data tempat pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek saluran penjualan jika ada perubahan
			if (data?.order?.salesChannelId) {
				const salesChannel = await this.orderRepo.client.salesChannel.findUnique({
					where: { id: data.order.salesChannelId },
				});
				if (!salesChannel) {
					return ServiceResponse.failure("Data saluran penjualan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek metode pembayaran untuk detail order jika ada perubahan
			if (data?.orderDetail?.paymentMethod?.id) {
				const paymentMethod = await this.orderRepo.client.paymentMethod.findUnique({
					where: { id: data.orderDetail.paymentMethod.id },
				});
				if (!paymentMethod) {
					return ServiceResponse.failure("Data metode pembayaran tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Hitung total harga jika ada produk

			if (data?.orderDetail?.orderProducts && data.orderDetail.orderProducts.length > 0) {
				// Ambil data customer untuk menentukan kategori harga
				const customer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.order?.ordererCustomerId },
					select: { category: true },
				});

				// Ambil data produk untuk menghitung total harga
				const productIds = data.orderDetail.orderProducts
					.map((product) => product.productId)
					.filter((id): id is string => id !== undefined);

				const products = await this.orderRepo.client.product.findMany({
					where: {
						id: {
							in: productIds,
						},
					},
					include: {
						productVariants: {
							include: {
								productPrices: true,
							},
						},
					},
				});

				// Hitung total harga berdasarkan produk dan kuantitas
				for (const orderProduct of data.orderDetail.orderProducts) {
					if (!orderProduct.productId) continue;

					const product = products.find((p) => p.id === orderProduct.productId);
					if (!product || !product.productVariants || product.productVariants.length === 0) continue;

					// Cari variant yang sesuai dengan productVariantId jika ada
					let variant = product.productVariants[0]; // Default ke variant pertama
					if (orderProduct.productVariantId) {
						const matchingVariant = product.productVariants.find((v) => v.id === orderProduct.productVariantId);
						if (matchingVariant) {
							variant = matchingVariant;
						}
					}

					if (variant?.productPrices && variant.productPrices.length > 0) {
						const priceData = variant.productPrices[0];

						// Tentukan harga berdasarkan kategori customer
						let productPrice = 0;
						if (customer) {
							switch (customer.category) {
								case "CUSTOMER":
								case "DROPSHIPPER":
									productPrice = priceData.normal || 0;
									break;
								case "MEMBER":
									productPrice = priceData.member || priceData.normal || 0;
									break;
								case "RESELLER":
									productPrice = priceData.reseller || priceData.normal || 0;
									break;
								case "AGENT":
									productPrice = priceData.agent || priceData.normal || 0;
									break;
								default:
									productPrice = priceData.normal || 0;
							}
						} else {
							productPrice = priceData.normal || 0;
						}

						// Dapatkan quantity produk saat ini
						const productQty = orderProduct.productQty || 1;

						// Cari produk yang sama di order yang sudah ada jika ada
						let existingProductQty = 0;
						if (existingOrder?.OrderDetail?.OrderProducts) {
							const existingProduct = existingOrder.OrderDetail.OrderProducts.find(
								(p) => p.productId === orderProduct.productId && !orderProduct.productVariantId,
							);
							if (existingProduct) {
								existingProductQty = existingProduct.productQty || 0;
							}
						}

						// Gunakan quantity dari order product saat ini, atau dari existing order jika tidak ada
						const finalQty = productQty || existingProductQty || 1;

						// Tambahkan ke total price (harga * quantity)
						totalPrice += productPrice * finalQty;
					}
				}

				// Tambahkan biaya lain jika ada
				if (data.orderDetail.detail?.otherFees) {
					const otherFees = data.orderDetail.detail.otherFees as {
						packaging?: number;
						insurance?: number;
						discount?: {
							value: number;
							type: "percent" | "nominal";
						};
						ongkir1kg?: number;
						weight?: number;
						shippingCost?: {
							shippingService: string;
							type: string;
							cost: number;
						};
					};

					// Add packaging cost if exists
					if (otherFees.packaging) {
						totalPrice += otherFees.packaging;
					}

					// Add insurance cost if exists
					if (otherFees.insurance) {
						totalPrice += otherFees.insurance;
					}

					// Add cost based on order weight
					if (otherFees.weight) {
						const orderWeight = 1; // Order weight in kg
						const pricePerKg = otherFees.weight; // Price per kg
						totalPrice += orderWeight * pricePerKg;
					}

					// Add shipping cost if exists
					if (otherFees.shippingCost) {
						if (otherFees.shippingCost.cost) {
							totalPrice += otherFees.shippingCost.cost;
						}
					}

					// Proses discount jika ada
					if (otherFees.discount) {
						// Jika discount dalam bentuk persentase
						if (otherFees.discount.type === "percent" && otherFees.discount.value) {
							const discountAmount = (totalPrice * otherFees.discount.value) / 100;
							totalPrice -= discountAmount;
						}
						// Jika discount dalam bentuk nominal
						else if (otherFees.discount.type === "nominal" && otherFees.discount.value) {
							totalPrice -= otherFees.discount.value;
						}
					}
				}
			}

			const result = await this.orderRepo.client.$transaction(async (prisma) => {
				// Update order
				const updatedOrder = await prisma.order.update({
					where: { id },
					data: {
						ordererCustomerId: data?.order?.ordererCustomerId,
						deliveryTargetCustomerId: data?.order?.deliveryTargetCustomerId,
						deliveryPlaceId: data?.order?.deliveryPlaceId,
						salesChannelId: data?.order?.salesChannelId,
						orderDate: data?.order?.orderDate ? new Date(data.order.orderDate) : undefined,
						note: data?.order?.note,
					},
				});

				// Update order detail jika ada
				if (data?.orderDetail) {
					if (existingOrder.OrderDetail) {
						// Update order detail yang sudah ada
						await prisma.orderDetail.update({
							where: { id: existingOrder.OrderDetail.id },
							data: {
								paymentMethodId: data.orderDetail.paymentMethod?.id,
								code: data.orderDetail.detail?.code,
								otherFees: data.orderDetail.detail?.otherFees,
								finalPrice: totalPrice,
								paymentStatus: data.orderDetail.paymentMethod?.status
									? (data.orderDetail.paymentMethod.status.toUpperCase() as PaymentStatus)
									: undefined,
								paymentDate: data.orderDetail.paymentMethod?.date
									? new Date(data.orderDetail.paymentMethod.date)
									: undefined,
								receiptNumber: data.orderDetail.detail?.receiptNumber,
							},
						});
					} else {
						// Buat order detail baru jika belum ada
						await prisma.orderDetail.create({
							data: {
								orderId: id,
								paymentMethodId: data.orderDetail.paymentMethod?.id,
								code: data.orderDetail.detail?.code,
								otherFees: data.orderDetail.detail?.otherFees,
								paymentStatus: data.orderDetail.paymentMethod?.status
									? (data.orderDetail.paymentMethod.status.toUpperCase() as PaymentStatus)
									: undefined,
								paymentDate: data.orderDetail.paymentMethod?.date
									? new Date(data.orderDetail.paymentMethod.date)
									: undefined,
								receiptNumber: data.orderDetail.detail?.receiptNumber,
							},
						});
					}
				}

				// Update order products jika ada
				if (data?.orderDetail?.orderProducts && data.orderDetail.orderProducts.length > 0) {
					// Hapus order products lama
					await prisma.orderProduct.deleteMany({
						where: { orderId: id },
					});

					// Buat order products baru
					await Promise.all(
						data.orderDetail.orderProducts.map((orderProduct) => {
							if (!orderProduct.productId) {
								return ServiceResponse.failure("productId tidak ditemukan", null, StatusCodes.BAD_REQUEST);
							}
							return prisma.orderProduct.create({
								data: {
									orderId: id,
									productId: orderProduct.productId,
									productQty: orderProduct.productQty || 0,
									orderDetailId: existingOrder.OrderDetail?.id ?? undefined,
								},
							});
						}),
					);
				}

				// Update shipping services jika ada
				if (data?.orderDetail?.shippingServices && data.orderDetail.shippingServices.length > 0) {
					// Hapus shipping services lama
					await prisma.shippingService.deleteMany({
						where: { orderId: id },
					});

					// Buat shipping services baru
					await Promise.all(
						data.orderDetail.shippingServices.map((shippingService) =>
							prisma.shippingService.create({
								data: {
									orderId: id,
									shippingName: shippingService.shippingName,
									serviceName: shippingService.serviceName,
									weight: shippingService.weight,
									isCod: shippingService.isCod,
									shippingCost: shippingService.shippingCost,
									shippingCashback: shippingService.shippingCashback,
									shippingCostNet: shippingService.shippingCostNet,
									grandtotal: shippingService.grandtotal,
									serviceFee: shippingService.serviceFee,
									netIncome: shippingService.netIncome,
									etd: shippingService.etd,
									type: shippingService.type,
								},
							}),
						),
					);
				}

				// Ambil data order yang sudah diupdate beserta detailnya
				return await prisma.order.findUnique({
					where: { id },
					include: {
						SalesChannel: true,
						DeliveryPlace: true,
						OrdererCustomer: true,
						DeliveryTargetCustomer: true,
						OrderDetail: {
							include: {
								OrderProducts: {
									include: {
										Product: true,
									},
								},
								PaymentMethod: true,
							},
						},
						ShippingServices: true,
					},
				});
			});

			return ServiceResponse.success("Berhasil mengupdate data order", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure(
				"Gagal mengupdate data order",
				(error as Error).message,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public delete = async (id: string) => {
		try {
			const existingOrder = await this.orderRepo.client.order.findUnique({
				where: { id },
				include: {
					OrderDetail: {
						include: {
							OrderProducts: true,
						},
					},
					ShippingServices: true,
				},
			});

			if (!existingOrder) {
				return ServiceResponse.failure("Data order tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			// Hapus data terkait terlebih dahulu menggunakan transaksi
			const result = await this.orderRepo.client.$transaction(async (prisma) => {
				// Hapus shipping services jika ada
				if (existingOrder.ShippingServices.length > 0) {
					await prisma.shippingService.deleteMany({
						where: { orderId: id },
					});
				}

				// Hapus order products jika ada
				if (existingOrder.OrderDetail?.OrderProducts && existingOrder.OrderDetail.OrderProducts.length > 0) {
					await prisma.orderProduct.deleteMany({
						where: { orderDetailId: existingOrder.OrderDetail.id },
					});
				}

				// Hapus order detail jika ada
				if (existingOrder.OrderDetail) {
					await prisma.orderDetail.delete({
						where: { id: existingOrder.OrderDetail.id },
					});
				}

				// Hapus order
				return await prisma.order.delete({
					where: { id },
				});
			});

			return ServiceResponse.success("Berhasil menghapus data order", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure(
				"Gagal menghapus data order",
				(error as Error).message,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};
}

export const orderService = new OrderService();
