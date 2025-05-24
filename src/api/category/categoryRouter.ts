import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { categoryController } from "./categoryController";
import {
	CategorySchema,
	CreateCategoryRequestSchema,
	DeleteCategoryRequestSchema,
	GetCategoryRequestSchema,
	UpdateCategoryRequestSchema,
} from "./categoryModel";

export const categoryRegistry = new OpenAPIRegistry();
export const categoryRouter: Router = express.Router();

categoryRegistry.registerPath({
	method: "get",
	path: "/categories",
	tags: ["Category"],
	responses: createApiResponse(z.array(CategorySchema), "Success", StatusCodes.OK),
});
categoryRouter.get("", categoryController.GetAll);

categoryRegistry.registerPath({
	method: "get",
	path: "/categories/{id}",
	tags: ["Category"],
	responses: createApiResponse(z.array(CategorySchema), "Success", StatusCodes.OK),
});
categoryRouter.get("/:id", validateRequest(GetCategoryRequestSchema), categoryController.Detail);

categoryRegistry.registerPath({
	method: "post",
	path: "/categories",
	tags: ["Category"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateCategoryRequestSchema.pick({ body: true }),
				},
			},
		},
	},
	responses: createApiResponse(CategorySchema, "Success", StatusCodes.CREATED),
});
categoryRouter.post("", validateRequest(CreateCategoryRequestSchema), categoryController.Create);

categoryRegistry.registerPath({
	method: "put",
	path: "/categories/{id}",
	tags: ["Category"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: UpdateCategoryRequestSchema.pick({ body: true }),
				},
			},
		},
		params: UpdateCategoryRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(CategorySchema, "Success", StatusCodes.OK),
});
categoryRouter.put("/:id", validateRequest(UpdateCategoryRequestSchema), categoryController.Update);

categoryRegistry.registerPath({
	method: "delete",
	path: "/categories/{id}",
	tags: ["Category"],
	request: {
		params: UpdateCategoryRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(CategorySchema, "Success", StatusCodes.OK),
});
categoryRouter.delete("/:id", validateRequest(DeleteCategoryRequestSchema), categoryController.Delete);
