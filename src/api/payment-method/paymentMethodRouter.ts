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
	path: "/paymentMethods",
	tags: ["Payment Method"],
	responses: createApiResponse(z.array(PaymentMethodSchema), "Success", StatusCodes.OK),
});
paymentMethodRouter.get("", paymentMethodController.getAllPayments);

paymentMethodRegistry.registerPath({
	method: "get",
	path: "/payments/{id}",
	tags: ["Payment Method"],
	request: {
		params: GetPaymentMethodRequestShema.pick({ params: true }),
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
	path: "/payments",
	tags: ["Payment Method"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreatePaymentMethodRequestSchema.pick({ body: true }),
				},
			},
		},
	},
	responses: createApiResponse({} as ZodTypeAny, "Success", StatusCodes.CREATED),
});
paymentMethodRouter.post("", validateRequest(CreatePaymentMethodRequestSchema), paymentMethodController.createPayment);

paymentMethodRegistry.registerPath({
	method: "put",
	path: "/paymens/{id}",
	tags: ["Payment Method"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: UpdatePaymentMethodRequestSchema.pick({ body: true }),
				},
			},
		},
		params: UpdatePaymentMethodRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse({} as ZodTypeAny, "Success", StatusCodes.CREATED),
});
paymentMethodRouter.put(
	"/:id",
	validateRequest(UpdatePaymentMethodRequestSchema),
	paymentMethodController.updatePayment,
);

paymentMethodRegistry.registerPath({
	method: "delete",
	path: "/paymens/{id}",
	tags: ["Payment Method"],
	request: {
		params: DeletePaymentMethodRequestShema.pick({ params: true }),
	},
	responses: createApiResponse({} as ZodTypeAny, "Success", StatusCodes.CREATED),
});
paymentMethodRouter.delete(
	"/:id",
	validateRequest(DeletePaymentMethodRequestShema),
	paymentMethodController.deletePayment,
);
