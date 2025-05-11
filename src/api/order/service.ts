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
					salesChannel: true,
					deliveryPlace: true,
					ordererCustomer: true,
					deliveryTargetCustomer: true,
					OrderDetail: {
						include: {
							shippingService: true,
							paymentMethod: true,
							product: true,
						},
					},
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
					salesChannel: true,
					deliveryPlace: true,
					ordererCustomer: true,
					deliveryTargetCustomer: true,
					OrderDetail: {
						include: {
							shippingService: true,
							paymentMethod: true,
							product: true,
						},
					},
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

	public create = async (data: CreateOrderType) => {
		try {
			// Cek customer pemesan
			if (data.body.order.ordererCustomerId) {
				const ordererCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.body.order.ordererCustomerId },
				});
				if (!ordererCustomer) {
					return ServiceResponse.failure("Data customer pemesan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek customer tujuan pengiriman
			if (data.body.order.deliveryTargetCustomerId) {
				const deliveryTargetCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.body.order.deliveryTargetCustomerId },
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
			if (data.body.order.deliveryPlaceId) {
				const deliveryPlace = await this.orderRepo.client.deliveryPlace.findUnique({
					where: { id: data.body.order.deliveryPlaceId },
				});
				if (!deliveryPlace) {
					return ServiceResponse.failure("Data tempat pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek saluran penjualan
			if (data.body.order.salesChannelId) {
				const salesChannel = await this.orderRepo.client.salesChannel.findUnique({
					where: { id: data.body.order.salesChannelId },
				});
				if (!salesChannel) {
					return ServiceResponse.failure("Data saluran penjualan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek produk dan metode pembayaran untuk setiap detail order
			for (const orderDetail of data.body.orderDetails) {
				if (orderDetail.detail.productId) {
					const product = await this.orderRepo.client.product.findUnique({
						where: { id: orderDetail.detail.productId },
					});
					if (!product) {
						return ServiceResponse.failure("Data produk tidak ditemukan", null, StatusCodes.NOT_FOUND);
					}
				}

				if (orderDetail.paymentMethod?.id) {
					const paymentMethod = await this.orderRepo.client.paymentMethod.findUnique({
						where: { id: orderDetail.paymentMethod.id },
					});
					if (!paymentMethod) {
						return ServiceResponse.failure("Data metode pembayaran tidak ditemukan", null, StatusCodes.NOT_FOUND);
					}
				}

				if (orderDetail.shippingServices && orderDetail.shippingServices.length > 0) {
					// Data shipping service sudah ada dalam request dan akan disimpan saat transaksi
					// Format data sudah sesuai dengan model ShippingService:
					// {
					//   shippingName: "JNE",
					//   serviceName: "REG23",
					//   weight: 490,
					//   isCod: true,
					//   shippingCost: 29400000,
					//   shippingCashback: 7350000,
					//   shippingCostNet: 22050000,
					//   grandtotal: 29450000,
					//   serviceFee: 0,
					//   netIncome: 7400000,
					//   etd: "5-7 day",
					//   type: "reguler"
					// }

					// Validasi format data shipping service
					for (const service of orderDetail.shippingServices) {
						if (!service.shippingName || !service.serviceName) {
							return ServiceResponse.failure("Data shipping service tidak lengkap", null, StatusCodes.BAD_REQUEST);
						}
					}
				}
			}

			const result = await this.orderRepo.client.$transaction(async (prisma) => {
				const createdOrder = await prisma.order.create({
					data: {
						ordererCustomerId: data.body.order.ordererCustomerId,
						deliveryTargetCustomerId: data.body.order.deliveryTargetCustomerId,
						deliveryPlaceId: data.body.order.deliveryPlaceId,
						salesChannelId: data.body.order.salesChannelId,
						orderDate: data.body.order.orderDate ? new Date(data.body.order.orderDate) : undefined,
						note: data.body.order.note,
					},
				});

				const orderDetailsPromises = data.body.orderDetails.map(async (orderDetailData) => {
					const createdOrderDetail = await prisma.orderDetail.create({
						data: {
							orderId: createdOrder.id,
							productId: orderDetailData.detail.productId,
							paymentMethodId: orderDetailData.paymentMethod?.id,
							code: orderDetailData.detail.code,
							productQty: orderDetailData.detail.productQty,
							shippingServiceId: orderDetailData.detail.shippingServiceId,
							otherFees: orderDetailData.detail.otherFees,
							finalPrice: orderDetailData.detail.finalPrice,
							paymentStatus: orderDetailData.paymentMethod?.status
								? (orderDetailData.paymentMethod?.status as PaymentStatus)
								: undefined,
							paymentDate: orderDetailData.paymentMethod?.date
								? new Date(orderDetailData.paymentMethod?.date)
								: undefined,
							receiptNumber: orderDetailData.detail.receiptNumber,
						},
					});

					if (orderDetailData.shippingServices && orderDetailData.shippingServices.length > 0) {
						await Promise.all(
							orderDetailData.shippingServices.map((shippingService) =>
								prisma.shippingService.create({
									data: {
										...shippingService,
										orderDetailId: createdOrderDetail.id,
									},
								}),
							),
						);
					}

					return createdOrderDetail;
				});

				const orderDetails = await Promise.all(orderDetailsPromises);

				return {
					...createdOrder,
					orderDetails,
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

	public update = async (id: string, data: Partial<UpdateOrderType>) => {
		try {
			const existingOrder = await this.orderRepo.client.order.findUnique({
				where: { id },
				include: {
					OrderDetail: true,
				},
			});

			if (!existingOrder) {
				return ServiceResponse.failure("Data order tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			// Cek customer pemesan jika ada perubahan
			if (data.body?.order?.ordererCustomerId) {
				const ordererCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.body.order.ordererCustomerId },
				});
				if (!ordererCustomer) {
					return ServiceResponse.failure("Data customer pemesan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek customer tujuan pengiriman jika ada perubahan
			if (data.body?.order?.deliveryTargetCustomerId) {
				const deliveryTargetCustomer = await this.orderRepo.client.customer.findUnique({
					where: { id: data.body.order.deliveryTargetCustomerId },
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
			if (data.body?.order?.deliveryPlaceId) {
				const deliveryPlace = await this.orderRepo.client.deliveryPlace.findUnique({
					where: { id: data.body.order.deliveryPlaceId },
				});
				if (!deliveryPlace) {
					return ServiceResponse.failure("Data tempat pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek saluran penjualan jika ada perubahan
			if (data.body?.order?.salesChannelId) {
				const salesChannel = await this.orderRepo.client.salesChannel.findUnique({
					where: { id: data.body.order.salesChannelId },
				});
				if (!salesChannel) {
					return ServiceResponse.failure("Data saluran penjualan tidak ditemukan", null, StatusCodes.NOT_FOUND);
				}
			}

			// Cek produk dan metode pembayaran untuk setiap detail order jika ada perubahan
			if (data.body?.orderDetails) {
				for (const orderDetail of data.body.orderDetails) {
					if (orderDetail.detail?.productId) {
						const product = await this.orderRepo.client.product.findUnique({
							where: { id: orderDetail.detail.productId },
						});
						if (!product) {
							return ServiceResponse.failure("Data produk tidak ditemukan", null, StatusCodes.NOT_FOUND);
						}
					}

					if (orderDetail.paymentMethod?.id) {
						const paymentMethod = await this.orderRepo.client.paymentMethod.findUnique({
							where: { id: orderDetail.paymentMethod.id },
						});
						if (!paymentMethod) {
							return ServiceResponse.failure("Data metode pembayaran tidak ditemukan", null, StatusCodes.NOT_FOUND);
						}
					}

					if (orderDetail.detail?.shippingServiceId) {
						const shippingService = await this.orderRepo.client.shippingService.findUnique({
							where: { id: orderDetail.detail.shippingServiceId },
						});
						if (!shippingService) {
							return ServiceResponse.failure("Data layanan pengiriman tidak ditemukan", null, StatusCodes.NOT_FOUND);
						}
					}
				}
			}

			const result = await this.orderRepo.client.$transaction(async (prisma) => {
				// Update order
				const updatedOrder = await prisma.order.update({
					where: { id },
					data: {
						ordererCustomerId: data.body?.order?.ordererCustomerId,
						deliveryTargetCustomerId: data.body?.order?.deliveryTargetCustomerId,
						deliveryPlaceId: data.body?.order?.deliveryPlaceId,
						salesChannelId: data.body?.order?.salesChannelId,
						orderDate: data.body?.order?.orderDate ? new Date(data.body.order.orderDate) : undefined,
						note: data.body?.order?.note,
					},
				});

				// Update order details jika ada
				if (data.body?.orderDetails && data.body.orderDetails.length > 0) {
					// Proses setiap detail order
					for (const orderDetailData of data.body.orderDetails) {
						if (orderDetailData.id) {
							// Update detail order yang sudah ada
							const updatedOrderDetail = await prisma.orderDetail.update({
								where: { id: orderDetailData.id },
								data: {
									productId: orderDetailData.detail?.productId,
									paymentMethodId: orderDetailData.paymentMethod?.id,
									code: orderDetailData.detail?.code,
									productQty: orderDetailData.detail?.productQty,
									shippingServiceId: orderDetailData.detail?.shippingServiceId,
									otherFees: orderDetailData.detail?.otherFees,
									finalPrice: orderDetailData.detail?.finalPrice,
									paymentStatus: orderDetailData.paymentMethod?.status
										? (orderDetailData.paymentMethod.status as PaymentStatus)
										: undefined,
									paymentDate: orderDetailData.paymentMethod?.date
										? new Date(orderDetailData.paymentMethod.date)
										: undefined,
									receiptNumber: orderDetailData.detail?.receiptNumber,
								},
							});

							// Update shipping services jika ada
							if (orderDetailData.shippingServices && orderDetailData.shippingServices.length > 0) {
								// Hapus shipping services lama
								await prisma.shippingService.deleteMany({
									where: { orderDetailId: orderDetailData.id },
								});

								// Buat shipping services baru
								await Promise.all(
									orderDetailData.shippingServices.map((shippingService) =>
										prisma.shippingService.create({
											data: {
												...shippingService,
												orderDetailId: updatedOrderDetail.id,
											},
										}),
									),
								);
							}
						} else {
							// Buat detail order baru
							const createdOrderDetail = await prisma.orderDetail.create({
								data: {
									orderId: id,
									productId: orderDetailData.detail?.productId,
									paymentMethodId: orderDetailData.paymentMethod?.id,
									code: orderDetailData.detail?.code,
									productQty: orderDetailData.detail?.productQty,
									shippingServiceId: orderDetailData.detail?.shippingServiceId,
									otherFees: orderDetailData.detail?.otherFees,
									finalPrice: orderDetailData.detail?.finalPrice,
									paymentStatus: orderDetailData.paymentMethod?.status
										? (orderDetailData.paymentMethod.status as PaymentStatus)
										: undefined,
									paymentDate: orderDetailData.paymentMethod?.date
										? new Date(orderDetailData.paymentMethod.date)
										: undefined,
									receiptNumber: orderDetailData.detail?.receiptNumber,
								},
							});

							// Buat shipping services jika ada
							if (orderDetailData.shippingServices && orderDetailData.shippingServices.length > 0) {
								await Promise.all(
									orderDetailData.shippingServices.map((shippingService) =>
										prisma.shippingService.create({
											data: {
												...shippingService,
												orderDetailId: createdOrderDetail.id,
											},
										}),
									),
								);
							}
						}
					}
				}

				// Ambil data order yang sudah diupdate beserta detailnya
				return await prisma.order.findUnique({
					where: { id },
					include: {
						OrderDetail: {
							include: {
								shippingService: true,
								paymentMethod: true,
								product: true,
							},
						},
					},
				});
			});

			return ServiceResponse.success("Berhasil mengupdate data order", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure(
				"Gagal membuat data order",
				(error as Error).message,
				StatusCodes.INTERNAL_SERVER_ERROR,
			);
		}
	};

	public delete = async (id: string) => {
		try {
			const existingDeliveryPlace = await this.orderRepo.client.order.findUnique({
				where: { id },
			});

			if (!existingDeliveryPlace) {
				return ServiceResponse.failure("Data order tidak ditemukan", null, StatusCodes.NOT_FOUND);
			}

			const result = await this.orderRepo.client.order.delete({
				where: { id },
			});

			return ServiceResponse.success("Berhasil menghapus data order", result, StatusCodes.OK);
		} catch (error) {
			logger.error(error);
			return ServiceResponse.failure("Gagal menghapus data order", null, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};
}

export const orderService = new OrderService();
