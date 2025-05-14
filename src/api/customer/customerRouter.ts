import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
import { type ZodTypeAny, z } from "zod";
import { customerController } from "./customerController";
import {
	CreateCustomerRequestSchema,
	CustomerSchema,
	DeleteCustomerRequestSchema,
	GetAllCustomerRequestSchema,
	GetCustomerRequestSchema,
	UpdateCustomerRequestSchema,
} from "./customerModel";

export const customerRegistry = new OpenAPIRegistry();
export const customerRouter: Router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

customerRegistry.register("Customer", CustomerSchema);

customerRegistry.registerPath({
	method: "get",
	path: "/cutstomers",
	tags: ["Customer"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateCustomerRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse(z.array(CustomerSchema), "Success", StatusCodes.CREATED),
});
customerRouter.get("", validateRequest(GetAllCustomerRequestSchema), customerController.getAllCustomers);

customerRegistry.registerPath({
	method: "get",
	path: "/cutstomers",
	tags: ["Customer"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateCustomerRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse(CustomerSchema, "Success", StatusCodes.OK),
});
customerRouter.get("/:id", validateRequest(GetCustomerRequestSchema), customerController.getDetailCustomer);

customerRegistry.registerPath({
	method: "post",
	path: "/cutstomesr",
	tags: ["Customer"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateCustomerRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse({} as ZodTypeAny, "Success", StatusCodes.CREATED),
});
customerRouter.post("", validateRequest(CreateCustomerRequestSchema), customerController.createCustomer);

customerRegistry.registerPath({
	method: "put",
	path: "/customers/{id}",
	tags: ["Customer"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: UpdateCustomerRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse({} as ZodTypeAny, "Success", StatusCodes.CREATED),
});
customerRouter.put("/:id", validateRequest(UpdateCustomerRequestSchema), customerController.updateCustomer);

customerRegistry.registerPath({
	method: "delete",
	path: "/customers/{id}",
	tags: ["Customer"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: DeleteCustomerRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse({} as ZodTypeAny, "Success", StatusCodes.CREATED),
});
customerRouter.delete("/:id", validateRequest(DeleteCustomerRequestSchema), customerController.deleteCustomer);

customerRouter.post("/export/excel", customerController.exportCustomers);
customerRouter.post("/import/excel", upload.single("customer_data"), customerController.importCustomers);
