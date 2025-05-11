import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const OrderSchema = z.object({
	id: z.string().uuid().optional(),
	ordererCustomerId: z.string().uuid().optional().describe("ID pelanggan pemesan"),
	deliveryTargetCustomerId: z.string().uuid().optional().describe("ID pelanggan tujuan pengiriman"),
	deliveryPlaceId: z.string().uuid().optional().describe("ID tempat pengiriman"),
	orderDate: z.string().or(z.date()).optional().describe("Tanggal pemesanan"),
	salesChannelId: z.string().optional().describe("ID saluran penjualan"),
	note: z.string().optional().describe("Catatan pesanan"),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export type OrderType = z.infer<typeof OrderSchema>;

// Schema untuk metode pembayaran
export const PaymentMethodSchema = z.object({
	id: z.string().uuid().optional().describe("ID metode pembayaran"),
	status: z.string().optional().describe("Status pembayaran"),
	date: z.string().or(z.date()).optional().describe("Tanggal pembayaran"),
	nominal: z.number().optional().describe("Nominal pembayaran"),
});

// Schema untuk detail pesanan
export const OrderDetailSchema = z.object({
	id: z.string().uuid().optional(),
	orderId: z.string().uuid().optional().describe("ID order"),
	productId: z.string().uuid().optional().describe("ID produk"),
	code: z.string().optional().describe("Kode pesanan"),
	productQty: z.number().int().optional().describe("Jumlah produk"),
	shippingServiceId: z.string().uuid().optional().describe("ID layanan pengiriman"),
	otherFees: z.any().optional().describe("Biaya tambahan lainnya"),
	finalPrice: z.number().optional().describe("Harga akhir"),
	receiptNumber: z.string().optional().describe("Nomor resi"),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

// Schema untuk layanan pengiriman
export const ShippingServiceSchema = z.object({
	id: z.string().uuid().optional(),
	orderDetailId: z.string().uuid().optional(),
	shippingName: z.string().optional().describe("Nama pengiriman"),
	serviceName: z.string().optional().describe("Nama layanan"),
	weight: z.number().int().optional().describe("Berat"),
	isCod: z.boolean().optional().describe("Apakah COD"),
	shippingCost: z.number().optional().describe("Biaya pengiriman"),
	shippingCashback: z.number().optional().describe("Cashback pengiriman"),
	shippingCostNet: z.number().optional().describe("Biaya pengiriman bersih"),
	grandtotal: z.number().optional().describe("Total keseluruhan"),
	serviceFee: z.number().optional().describe("Biaya layanan"),
	netIncome: z.number().optional().describe("Pendapatan bersih"),
	etd: z.string().optional().describe("Estimasi waktu pengiriman"),
	type: z.string().optional().describe("Tipe pengiriman"),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

// Schema untuk create order dengan detail dan shipping service
export const CreateOrderSchema = z.object({
	body: z.object({
		order: OrderSchema.omit({ id: true }),
		orderDetails: z.array(
			z.object({
				detail: OrderDetailSchema.omit({ id: true, orderId: true }),
				shippingServices: z
					.array(ShippingServiceSchema.omit({ id: true, orderDetailId: true }))
					.optional()
					.describe("Shipping Service Detail"),
				paymentMethod: PaymentMethodSchema.optional().describe("Metode pembayaran"),
			}),
		),
	}),
});

export type CreateOrderType = z.infer<typeof CreateOrderSchema>;

// Schema untuk update order dengan detail dan shipping service
export const UpdateOrderSchema = z.object({
	body: z.object({
		order: OrderSchema.partial().omit({ id: true }),
		orderDetails: z.array(
			z.object({
				id: z.string().uuid().optional(),
				detail: OrderDetailSchema.partial().omit({ id: true, orderId: true }),
				shippingServices: z
					.array(ShippingServiceSchema.partial().omit({ id: true, orderDetailId: true }))
					.optional()
					.describe("Shipping Service Detail"),
				paymentMethod: PaymentMethodSchema.partial().optional().describe("Metode pembayaran"),
			}),
		),
	}),
	params: z.object({
		id: z.string().uuid(),
	}),
});

export type UpdateOrderType = z.infer<typeof UpdateOrderSchema>;

// Schema untuk params id
export const OrderParamsSchema = z.object({
	params: z.object({
		id: z.string().uuid(),
	}),
});
export type OrderParamsType = z.infer<typeof OrderParamsSchema>;
