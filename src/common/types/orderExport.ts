import type { Order } from "@prisma/client";

export type OrderWithRelations = Order & {
	SalesChannel: { name: string | null } | null;
	DeliveryPlace: { name: string | null } | null;
	OrdererCustomer: { name: string | null } | null;
	DeliveryTargetCustomer: { name: string | null } | null;
	OrderDetail: {
		code: string;
		paymentStatus: string;
		paymentDate: Date | null;
		PaymentMethod: { name: string | null } | null;
		finalPrice: number;
		OrderProducts: Array<{
			productQty?: number;
			Product: {
				name: string;
				productVariants: Array<{
					sku?: string;
				}>;
			};
		}>;
		otherFees?: {
			subtotal?: number;
			total?: number;
			insurance?: number;
			weight?: number;
			packaging?: number;
			shippingCost?: { cost: number; type: string; shippingService: string };
		};
		receiptNumber?: string;
	} | null;
	ShippingServices: Array<{
		cost?: number;
		serviceName?: string;
		serviceType?: string;
	}>;
};
