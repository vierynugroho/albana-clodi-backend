import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";
import type { PaymentStatus } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { Product } from "../product/productModel";
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
									Product: true,
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
									Product: true,
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

			// Cek produk dan metode pembayaran untuk detail order
			if (data.orderDetail.detail.productId) {
				const product = await this.orderRepo.client.product.findUnique({
					where: { id: data.orderDetail.detail.productId },
				});
				if (!product) {
					return ServiceResponse.failure("Data produk tidak ditemukan", null, StatusCodes.NOT_FOUND);
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

				// Buat order detail
				const createdOrderDetail = await prisma.orderDetail.create({
					data: {
						orderId: createdOrder.id,
						paymentMethodId: data.orderDetail.paymentMethod?.id,
						code: data.orderDetail.detail.code,
						otherFees: data.orderDetail.detail.otherFees,
						finalPrice: data.orderDetail.detail.finalPrice,
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
								finalPrice: data.orderDetail.detail?.finalPrice,
								paymentStatus: data.orderDetail.paymentMethod?.status
									? (data.orderDetail.paymentMethod.status.toUpperCase() as PaymentStatus)
									: undefined,
								paymentDate: data.orderDetail.detail?.paymentDate
									? new Date(data.orderDetail.detail.paymentDate)
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
								finalPrice: data.orderDetail.detail?.finalPrice,
								paymentStatus: data.orderDetail.detail?.paymentStatus
									? (data.orderDetail.detail.paymentStatus.toUpperCase() as PaymentStatus)
									: undefined,
								paymentDate: data.orderDetail.detail?.paymentDate
									? new Date(data.orderDetail.detail.paymentDate)
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
