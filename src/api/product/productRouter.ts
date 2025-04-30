import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { productController } from "./productController";
import { CreateProductRequestSchema, ProductSchema, UpdateProductRequestSchema } from "./productModel";

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
	responses: createApiResponse(ProductSchema, "Success"),
});

productRouter.post("/", validateRequest(CreateProductRequestSchema), productController.createProduct);

productRegistry.register("Product", ProductSchema);
productRegistry.registerPath({
	method: "put",
	path: "/products",
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
	responses: createApiResponse(ProductSchema, "Success"),
});

productRouter.put("/:id", validateRequest(UpdateProductRequestSchema), productController.updateProduct);
