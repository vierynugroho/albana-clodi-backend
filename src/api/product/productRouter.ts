import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { productController } from "./productController";
import { CreateProductRequestSchema, ProductSchema } from "./productModel";

export const productRegistry = new OpenAPIRegistry();
export const productRouter: Router = express.Router();

productRegistry.register("Product", ProductSchema);
productRegistry.registerPath({
	method: "post",
	path: "/products",
	tags: ["Product"],
	responses: createApiResponse(ProductSchema, "Success"),
});

productRouter.post("/", validateRequest(CreateProductRequestSchema), productController.createProduct);
