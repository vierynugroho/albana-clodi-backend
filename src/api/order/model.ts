import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

// =============================================
// TODO: ORDER SCHEMA
// =============================================
export const OrderSchema = z.object({
	id: z.string().uuid().optional(),
	ordererCustomerId: z.string().uuid().optional().describe("ID pelanggan pemesan"),
	deliveryTargetCustomerId: z.string().uuid().optional().describe("ID pelanggan tujuan pengiriman"),
	deliveryPlaceId: z.string().uuid().optional().describe("ID tempat pengiriman"),
	salesChannelId: z.string().uuid().optional().describe("ID saluran penjualan"),
	orderDate: z.string().datetime().optional().describe("Tanggal pemesanan"),
	note: z.string().optional().describe("Catatan pesanan"),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});
export type OrderType = z.infer<typeof OrderSchema>;

// =============================================
// TODO: ORDER DETAIL SCHEMA
// =============================================
export const OrderDetailSchema = z.object({
	id: z.string().uuid().optional(),
	orderId: z.string().uuid().optional().describe("ID order"),
	paymentMethodId: z.string().uuid().optional().describe("ID metode pembayaran"),
	productId: z.string().uuid().optional().describe("ID produk"),
	code: z.string().optional().describe("Kode pesanan"),
	otherFees: z.any().optional().describe("Biaya tambahan lainnya"),
	finalPrice: z.number().optional().describe("Harga akhir"),
	paymentStatus: z.enum(["settlement", "pending", "cancel", "installments"]).optional().describe("Status pembayaran"),
	paymentDate: z.date().optional().describe("Tanggal pembayaran"),
	receiptNumber: z.string().optional().describe("Nomor resi"),
	productQty: z.number().int().optional().describe("Jumlah produk"),
	shippingServiceId: z.string().uuid().optional().describe("ID layanan pengiriman"),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});
export type OrderDetailType = z.infer<typeof OrderDetailSchema>;

// =============================================
// TODO: ORDER PRODUCT SCHEMA
// =============================================
export const OrderProductSchema = z.object({
	id: z.string().uuid().optional(),
	orderId: z.string().uuid().optional().describe("ID order"),
	productId: z.string().uuid().optional().describe("ID produk"),
	productQty: z.number().int().describe("Jumlah produk"),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});
export type OrderProductType = z.infer<typeof OrderProductSchema>;

// =============================================
// TODO: ORDER PAYMENT SCHEMA
// =============================================
export const PaymentMethodSchema = z.object({
	id: z.string().uuid().optional().describe("ID metode pembayaran"),
	status: z.enum(["SETTLEMENT", "PENDING", "CANCEL", "INSTALLMENTS"]).optional().describe("Status pembayaran"),
	date: z.string().datetime().optional().describe("Tanggal pembayaran"),
	nominal: z.number().optional().describe("Nominal pembayaran"),
});

// =============================================
// TODO: ORDER SHIPPING SERVICE SCHEMA
// =============================================
export const ShippingServiceSchema = z.object({
	id: z.string().uuid().optional(),
	orderId: z.string().uuid().optional().describe("ID order"),
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

// =============================================
// TODO: CREATE ORDER SCHEMA
// =============================================
export const CreateOrderSchema = z.object({
	body: z.object({
		order: OrderSchema.omit({ id: true }),
		orderDetail: z.object({
			detail: OrderDetailSchema.omit({ id: true, orderId: true }),
			paymentMethod: PaymentMethodSchema.describe("Metode pembayaran"),
			orderProducts: z.array(OrderProductSchema.omit({ id: true, orderId: true })),
			shippingServices: z
				.array(ShippingServiceSchema.omit({ id: true, orderId: true }))
				.optional()
				.describe("Shipping Service Detail"),
		}),
	}),
});
export type CreateOrderType = z.infer<typeof CreateOrderSchema>;

// =============================================
// TODO: UPDATE ORDER SCHEMA
// =============================================
export const UpdateOrderSchema = z.object({
	body: z.object({
		order: OrderSchema.partial().omit({ id: true }),
		orderDetail: z.object({
			detail: OrderDetailSchema.partial().omit({ id: true, orderId: true }),
			paymentMethod: PaymentMethodSchema.partial().describe("Metode pembayaran"),
			orderProducts: z.array(OrderProductSchema.partial().omit({ id: true, orderId: true })).optional(),
			shippingServices: z
				.array(ShippingServiceSchema.partial().omit({ id: true, orderId: true }))
				.optional()
				.describe("Shipping Service Detail"),
		}),
	}),
	params: z.object({
		id: z.string().uuid(),
	}),
});
export type UpdateOrderType = z.infer<typeof UpdateOrderSchema>;

// =============================================
// TODO: PARAMS SCHEMA
// =============================================
export const OrderParamsSchema = z.object({
	params: z.object({
		id: z.string().uuid(),
	}),
});
export type OrderParamsType = z.infer<typeof OrderParamsSchema>;
