import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";
import { DeliveryPlaceController } from "./controller";
import {
	CreateDeliveryPlaceSchema,
	DeliveryPlaceParamsSchema,
	DeliveryPlaceSchema,
	UpdateDeliveryPlaceSchema,
} from "./model";

export const deliveryPlaceRegistry = new OpenAPIRegistry();
export const deliveryPlaceRouter: Router = express.Router();

deliveryPlaceRegistry.register("DeliveryPlaces", DeliveryPlaceSchema);

deliveryPlaceRegistry.registerPath({
	method: "get",
	path: "/delivery-places",
	tags: ["DeliveryPlaces"],
	security: [{ bearerAuth: [] }],
	responses: createApiResponse(z.array(DeliveryPlaceSchema), "Berhasil mengambil semua tempat pengiriman"),
});

deliveryPlaceRegistry.registerPath({
	method: "get",
	path: "/delivery-places/{id}",
	tags: ["DeliveryPlaces"],
	security: [{ bearerAuth: [] }],
	request: {
		params: z.object({
			id: z.string().uuid().describe("ID tempat pengiriman"),
		}),
	},
	responses: createApiResponse(DeliveryPlaceSchema, "Berhasil mengambil detail tempat pengiriman"),
});

deliveryPlaceRegistry.registerPath({
	method: "post",
	path: "/delivery-places",
	tags: ["DeliveryPlaces"],
	security: [{ bearerAuth: [] }],
	request: {
		body: {
			content: {
				"application/json": {
					schema: DeliveryPlaceSchema,
				},
			},
		},
	},
	responses: createApiResponse(DeliveryPlaceSchema, "Berhasil membuat tempat pengiriman baru"),
});

deliveryPlaceRegistry.registerPath({
	method: "put",
	path: "/delivery-places/{id}",
	tags: ["DeliveryPlaces"],
	security: [{ bearerAuth: [] }],
	request: {
		params: z.object({
			id: z.string().describe("ID tempat pengiriman"),
		}),
		body: {
			content: {
				"application/json": {
					schema: DeliveryPlaceSchema,
				},
			},
		},
	},
	responses: createApiResponse(DeliveryPlaceSchema, "Berhasil memperbarui tempat pengiriman"),
});

deliveryPlaceRegistry.registerPath({
	method: "delete",
	path: "/delivery-places/{id}",
	tags: ["DeliveryPlaces"],
	security: [{ bearerAuth: [] }],
	request: {
		params: z.object({
			id: z.string().describe("ID tempat pengiriman"),
		}),
	},
	responses: createApiResponse(z.object({ message: z.string() }), "Berhasil menghapus tempat pengiriman"),
});

const deliveryPlaceController = new DeliveryPlaceController();

deliveryPlaceRouter
	.route("/")
	.get(deliveryPlaceController.getAll)
	.post(validateRequest(CreateDeliveryPlaceSchema), deliveryPlaceController.create);
deliveryPlaceRouter
	.route("/:id")
	.get(validateRequest(DeliveryPlaceParamsSchema), deliveryPlaceController.getOne)
	.put(validateRequest(UpdateDeliveryPlaceSchema), deliveryPlaceController.update)
	.delete(validateRequest(DeliveryPlaceParamsSchema), deliveryPlaceController.delete);
