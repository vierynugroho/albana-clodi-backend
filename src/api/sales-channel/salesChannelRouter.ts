import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { StatusCodes } from "http-status-codes";
import { type ZodTypeAny, z } from "zod";
import { DeleteCustomerRequestSchema, UpdateCustomerRequestSchema } from "../customer/customerModel";
import { salesChannelController } from "./salesChannelController";
import {
	CreateSalesChannelRequestSchema,
	GetSalesChannelRequestSchema,
	SalesChannelSchema,
	UpdateSalesChannelRequestSchema,
} from "./salesChannelModel";

export const salesChannelRegistry = new OpenAPIRegistry();
export const salesChannelRouter: Router = express.Router();

salesChannelRegistry.registerPath({
	method: "get",
	path: "/sales-channels",
	tags: ["Sales Channel"],
	security: [{ bearerAuth: [] }],
	responses: createApiResponse(z.array(SalesChannelSchema), "Success", StatusCodes.OK),
});
salesChannelRouter.get("", salesChannelController.getAllSalesChannel);

salesChannelRegistry.registerPath({
	method: "get",
	path: "/sales-channels/{id}",
	tags: ["Sales Channel"],
	security: [{ bearerAuth: [] }],
	request: {
		params: GetSalesChannelRequestSchema.shape.params,
	},
	responses: createApiResponse(SalesChannelSchema, "Success", StatusCodes.OK),
});
salesChannelRouter.get(
	"/:id",
	validateRequest(GetSalesChannelRequestSchema),
	salesChannelController.getDetailSalesChannel,
);

salesChannelRegistry.registerPath({
	method: "post",
	path: "/sales-channels",
	tags: ["Sales Channel"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateSalesChannelRequestSchema.shape.body,
				},
			},
		},
	},
	responses: createApiResponse(SalesChannelSchema, "Success", StatusCodes.OK),
});
salesChannelRouter.post(
	"",
	validateRequest(CreateSalesChannelRequestSchema),
	salesChannelController.createSalesChannel,
);

salesChannelRegistry.registerPath({
	method: "put",
	path: "/sales-channels/{id}",
	tags: ["Sales Channel"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"application/json": {
					schema: UpdateCustomerRequestSchema.shape.body,
				},
			},
		},
		params: UpdateSalesChannelRequestSchema.shape.params,
	},
	responses: createApiResponse(SalesChannelSchema, "Success", StatusCodes.OK),
});
salesChannelRouter.put("/:id", validateRequest(UpdateCustomerRequestSchema), salesChannelController.updateSalesChannel);

salesChannelRegistry.registerPath({
	method: "delete",
	path: "/sales-channels/{id}",
	tags: ["Sales Channel"],
	security: [{ bearerAuth: [] }],
	request: {
		params: DeleteCustomerRequestSchema.shape.params,
	},
	responses: createApiResponse(SalesChannelSchema, "Success", StatusCodes.OK),
});
salesChannelRouter.delete(
	"/:id",
	validateRequest(DeleteCustomerRequestSchema),
	salesChannelController.deleteSalesChannel,
);
