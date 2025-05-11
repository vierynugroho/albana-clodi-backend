import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";
import { OrderController } from "./controller";
import { CreateOrderSchema, OrderParamsSchema, OrderSchema, UpdateOrderSchema } from "./model";

export const orderRegistry = new OpenAPIRegistry();
export const orderRouter: Router = express.Router();

orderRegistry.register("Order", OrderSchema);

orderRegistry.registerPath({
	method: "get",
	path: "/orders",
	tags: ["Order"],
	responses: createApiResponse(z.array(OrderSchema), "Berhasil mengambil semua order"),
});

orderRegistry.registerPath({
	method: "get",
	path: "/orders/{id}",
	tags: ["Order"],
	request: {
		params: z.object({
			id: z.string().uuid().describe("ID order"),
		}),
	},
	responses: createApiResponse(OrderSchema, "Berhasil mengambil detail order"),
});

orderRegistry.registerPath({
	method: "post",
	path: "/orders",
	tags: ["Order"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateOrderSchema,
					example: {
						order: {
							ordererCustomerId: "550e8400-e29b-41d4-a716-446655440000",
							deliveryTargetCustomerId: "550e8400-e29b-41d4-a716-446655440001",
							deliveryPlaceId: "550e8400-e29b-41d4-a716-446655440002",
							salesChannelId: "550e8400-e29b-41d4-a716-446655440003",
							orderDate: "2023-05-15",
							note: "Tolong kirim secepatnya",
						},
						orderDetails: [
							{
								detail: {
									productId: "550e8400-e29b-41d4-a716-446655440004",
									code: "ORD-001",
									productQty: 2,
									shippingServiceId: "550e8400-e29b-41d4-a716-446655440005",
									otherFees: { packaging: 5000, insurance: 10000 },
									finalPrice: 150000,
									receiptNumber: "JNE123456789",
								},
								shippingServices: [
									{
										shippingName: "JNE",
										serviceName: "REG",
										weight: 1000,
										isCod: false,
										shippingCost: 15000,
										shippingCashback: 2000,
										shippingCostNet: 13000,
										grandtotal: 165000,
										serviceFee: 2000,
										netIncome: 148000,
										etd: "2-3 hari",
										type: "reguler",
									},
								],
								paymentMethod: {
									id: "550e8400-e29b-41d4-a716-446655440006",
									status: "UNPAID",
									date: "2023-05-16",
								},
							},
						],
					},
				},
			},
		},
	},
	responses: createApiResponse(CreateOrderSchema, "Berhasil membuat order baru"),
});

orderRegistry.registerPath({
	method: "put",
	path: "/orders/{id}",
	tags: ["Order"],
	request: {
		params: z.object({
			id: z.string().describe("ID order"),
		}),
		body: {
			content: {
				"application/json": {
					schema: UpdateOrderSchema,
					example: {
						order: {
							ordererCustomerId: "550e8400-e29b-41d4-a716-446655440001",
							deliveryTargetCustomerId: "550e8400-e29b-41d4-a716-446655440002",
							deliveryPlaceId: "550e8400-e29b-41d4-a716-446655440003",
							orderDate: "2023-05-15",
							salesChannelId: "550e8400-e29b-41d4-a716-446655440004",
							note: "Pesanan update",
						},
						orderDetails: [
							{
								id: "550e8400-e29b-41d4-a716-446655440007",
								detail: {
									productId: "550e8400-e29b-41d4-a716-446655440000",
									code: "ORD-001-UPDATE",
									productQty: 3,
									shippingServiceId: "550e8400-e29b-41d4-a716-446655440005",
									otherFees: { packaging: 7000, insurance: 12000 },
									finalPrice: 180000,
									receiptNumber: "JNE987654321",
								},
								shippingServices: [
									{
										shippingName: "JNE",
										serviceName: "YES",
										weight: 1200,
										isCod: false,
										shippingCost: 20000,
										shippingCashback: 3000,
										shippingCostNet: 17000,
										grandtotal: 197000,
										serviceFee: 2500,
										netIncome: 177500,
										etd: "1 hari",
										type: "express",
									},
								],
								paymentMethod: {
									id: "550e8400-e29b-41d4-a716-446655440006",
									status: "PAID",
									date: "2023-05-17",
								},
							},
						],
					},
				},
			},
		},
	},
	responses: createApiResponse(CreateOrderSchema, "Berhasil memperbarui order"),
});

orderRegistry.registerPath({
	method: "delete",
	path: "/orders/{id}",
	tags: ["Order"],
	request: {
		params: z.object({
			id: z.string().describe("ID order"),
		}),
	},
	responses: createApiResponse(z.object({ message: z.string() }), "Berhasil menghapus order"),
});

const orderController = new OrderController();

orderRouter.route("/").get(orderController.getAll).post(validateRequest(CreateOrderSchema), orderController.create);
orderRouter
	.route("/:id")
	.get(validateRequest(OrderParamsSchema), orderController.getOne)
	.put(validateRequest(UpdateOrderSchema), orderController.update)
	.delete(validateRequest(OrderParamsSchema), orderController.delete);
