import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";
import { DeliveryPlaceController } from "./controller";
import { DeliveryPlaceSchema } from "./model";

export const deliveryPlaceRegistry = new OpenAPIRegistry();
export const deliveryPlaceRouter: Router = express.Router();

deliveryPlaceRegistry.register("DeliveryPlaces", DeliveryPlaceSchema);

deliveryPlaceRegistry.registerPath({
	method: "get",
	path: "/delivery-places",
	tags: ["DeliveryPlaces"],
	responses: createApiResponse(z.array(DeliveryPlaceSchema), "Berhasil mengambil semua tempat pengiriman"),
});

deliveryPlaceRegistry.registerPath({
	method: "post",
	path: "/delivery-places",
	tags: ["DeliveryPlaces"],
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
	request: {
		params: z.object({
			id: z.string().describe("ID tempat pengiriman"),
		}),
	},
	responses: createApiResponse(z.object({ message: z.string() }), "Berhasil menghapus tempat pengiriman"),
});

const deliveryPlaceController = new DeliveryPlaceController();

deliveryPlaceRouter.route("/").get(deliveryPlaceController.getAll).post(deliveryPlaceController.create);
deliveryPlaceRouter.route("/:id").put(deliveryPlaceController.update).delete(deliveryPlaceController.delete);
