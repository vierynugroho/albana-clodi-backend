import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { StatusCodes } from "http-status-codes";
import { type ZodTypeAny, z } from "zod";
import { paymentMethodController } from "./paymentMethodController";
import {
	CreatePaymentMethodRequestSchema,
	DeletePaymentMethodRequestShema,
	GetPaymentMethodRequestShema,
	PaymentMethodSchema,
	UpdatePaymentMethodRequestSchema,
} from "./paymentMethodModel";

export const paymentMethodRegistry = new OpenAPIRegistry();
export const paymentMethodRouter: Router = express.Router();

paymentMethodRegistry.register("Payment Method", PaymentMethodSchema);

paymentMethodRegistry.registerPath({
	method: "get",
	path: "/payment-methods",
	tags: ["Payment Method"],
	security: [{ bearerAuth: [] }],
	responses: createApiResponse(z.array(PaymentMethodSchema), "Success", StatusCodes.OK),
});
paymentMethodRouter.get("", paymentMethodController.getAllPayments);

paymentMethodRegistry.registerPath({
	method: "get",
	path: "/payment-methods/{id}",
	tags: ["Payment Method"],
	security: [{ bearerAuth: [] }],
	request: {
		params: GetPaymentMethodRequestShema.shape.params,
	},
	responses: createApiResponse(PaymentMethodSchema, "Success", StatusCodes.OK),
});
paymentMethodRouter.get(
	"/:id",
	validateRequest(GetPaymentMethodRequestShema),
	paymentMethodController.getDetailPayment,
);

paymentMethodRegistry.registerPath({
	method: "post",
	path: "/payment-methods",
	tags: ["Payment Method"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreatePaymentMethodRequestSchema.shape.body,
				},
			},
		},
	},
	responses: createApiResponse(PaymentMethodSchema, "Success", StatusCodes.CREATED),
});
paymentMethodRouter.post("", validateRequest(CreatePaymentMethodRequestSchema), paymentMethodController.createPayment);

paymentMethodRegistry.registerPath({
	method: "put",
	path: "/payment-methods/{id}",
	tags: ["Payment Method"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"application/json": {
					schema: UpdatePaymentMethodRequestSchema.shape.body,
				},
			},
		},
		params: UpdatePaymentMethodRequestSchema.shape.params,
	},
	responses: createApiResponse(PaymentMethodSchema, "Success", StatusCodes.CREATED),
});
paymentMethodRouter.put(
	"/:id",
	validateRequest(UpdatePaymentMethodRequestSchema),
	paymentMethodController.updatePayment,
);

paymentMethodRegistry.registerPath({
	method: "delete",
	path: "/payment-methods/{id}",
	tags: ["Payment Method"],
	security: [{ bearerAuth: [] }],
	request: {
		params: DeletePaymentMethodRequestShema.shape.params,
	},
	responses: createApiResponse(PaymentMethodSchema, "Success", StatusCodes.CREATED),
});
paymentMethodRouter.delete(
	"/:id",
	validateRequest(DeletePaymentMethodRequestShema),
	paymentMethodController.deletePayment,
);
