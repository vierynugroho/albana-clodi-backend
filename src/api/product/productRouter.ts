import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { parseNestedBody } from "@/common/middleware/parseNestedFormData";
import { validateStock } from "@/common/middleware/validateStock";
import { validateRequest } from "@/common/utils/httpHandlers";
import { StatusCodes } from "http-status-codes";
import multer from "multer";
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
const upload = multer({ storage: multer.memoryStorage() });

productRegistry.register("Product", ProductSchema);

productRegistry.registerPath({
	method: "post",
	path: "/products",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"multipart/form-data": {
					schema: CreateProductRequestSchema.pick({ body: true }),
				},
			},
		},
	},
	responses: createApiResponse(ProductSchema, "Success", StatusCodes.CREATED),
});
productRouter.post(
	"/",
	upload.array("images"),
	parseNestedBody,
	validateRequest(CreateProductRequestSchema),
	productController.createProduct,
);

productRegistry.registerPath({
	method: "put",
	path: "/products/{id}",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"multipart/form-data": {
					schema: UpdateProductRequestSchema.pick({ body: true }),
				},
			},
		},
		params: UpdateProductRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(ProductSchema, "Success", StatusCodes.OK),
});
productRouter.put(
	"/:id",
	validateStock,
	parseNestedBody,
	validateRequest(UpdateProductRequestSchema),
	upload.single("image"),
	productController.updateProduct,
);

productRegistry.registerPath({
	method: "delete",
	path: "/products/{id}",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"application/json": {
					schema: DeleteProductRequestSchema.pick({ body: true }),
				},
			},
		},
	},
	responses: createApiResponse(ProductSchema, "Success", StatusCodes.OK),
});
productRouter.delete("/:id", validateRequest(DeleteProductRequestSchema), productController.deleteProduct);

productRegistry.registerPath({
	method: "get",
	path: "/products",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		query: GetAllProductsRequestSchema.pick({ query: true }),
	},
	responses: createApiResponse(z.array(ProductSchema), "Success", StatusCodes.OK),
});
productRouter.get("/", validateRequest(GetAllProductsRequestSchema), productController.getAllProducts);

productRegistry.registerPath({
	method: "get",
	path: "/products/{id}",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		params: GetProductRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(ProductSchema, "Success", StatusCodes.OK),
});
productRouter.get("/:id", validateRequest(GetProductRequestSchema), productController.getDetailProduct);

productRegistry.registerPath({
	method: "post",
	path: "/products/export/excel",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		query: z.object({
			startDate: z.string().optional(),
			endDate: z.string().optional(),
			month: z.string().optional(),
			year: z.string().optional(),
			week: z.string().optional(),
		}),
	},
	responses: {
		"200": {
			description: "Success",
			content: {
				"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
					schema: z.any(),
				},
			},
		},
	},
});
productRouter.post("/export/excel", productController.exportProducts);

productRegistry.registerPath({
	method: "post",
	path: "/products/import/excel",
	tags: ["Product"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"multipart/form-data": {
					schema: z.object({
						product_data: z.any().optional().describe("File Excel untuk diimpor"),
					}),
				},
			},
		},
	},
	responses: {
		"200": {
			description: "Success",
			content: {
				"application/json": {
					schema: z.object({
						success: z.boolean(),
						message: z.string(),
						responseObject: z.object({
							totalImported: z.number(),
						}),
						statusCode: z.number(),
					}),
				},
			},
		},
	},
});
productRouter.post("/import/excel", upload.single("products_data"), productController.importProducts);
