import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { StatusCodes } from "http-status-codes";
import { type ZodAny, z } from "zod";
import { productController } from "./productController";
import {
	CreateProductRequestSchema,
	DeleteProductRequestSchema,
	GetAllProductsRequestSchema,
	GetProductRequestSchema,
	ProductSchema,
	UpdateProductRequestSchema,
} from "./productModel";

export const productRegistry = new OpenAPIRegistry();
export const productRouter: Router = express.Router();

productRegistry.register("Product", ProductSchema);

productRegistry.registerPath({
	method: "post",
	path: "/products",
	tags: ["Product"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: CreateProductRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse({} as ZodAny, "Success", StatusCodes.CREATED),
});
productRouter.post("/", validateRequest(CreateProductRequestSchema), productController.createProduct);

productRegistry.registerPath({
	method: "put",
	path: "/products/{id}",
	tags: ["Product"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: UpdateProductRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse({} as ZodAny, "Success", StatusCodes.OK),
});
productRouter.put("/:id", validateRequest(UpdateProductRequestSchema), productController.updateProduct);

productRegistry.registerPath({
	method: "delete",
	path: "/products/{id}",
	tags: ["Product"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: DeleteProductRequestSchema,
				},
			},
		},
	},
	responses: createApiResponse({} as ZodAny, "Success", StatusCodes.OK),
});
productRouter.delete("/:id", validateRequest(DeleteProductRequestSchema), productController.deleteProduct);

productRegistry.registerPath({
	method: "get",
	path: "/products",
	tags: ["Product"],
	request: {
		query: GetAllProductsRequestSchema,
	},
	responses: createApiResponse(z.array(ProductSchema), "Success", StatusCodes.OK),
});
productRouter.get("/", validateRequest(GetAllProductsRequestSchema), productController.getAllProducts);

productRegistry.registerPath({
	method: "get",
	path: "/products/{id}",
	tags: ["Product"],
	request: {
		params: GetProductRequestSchema,
	},
	responses: createApiResponse(ProductSchema, "Success", StatusCodes.OK),
});
productRouter.get("/:id", validateRequest(GetProductRequestSchema), productController.getDetailProduct);
