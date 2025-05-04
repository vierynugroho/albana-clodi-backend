import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";
import { LocationController } from "./controller";
import { DeliveryPlaceSchema } from "./model";

export const locationRegistry = new OpenAPIRegistry();
export const locationRouter: Router = express.Router();

locationRegistry.register("DeliveryPlace", DeliveryPlaceSchema);

locationRegistry.registerPath({
	method: "get",
	path: "/locations/provinces",
	tags: ["Locations"],
	responses: createApiResponse(z.array(z.any()), "Berhasil mengambil data provinsi"),
});

locationRegistry.registerPath({
	method: "get",
	path: "/locations/cities/{id}",
	tags: ["Locations"],
	request: {
		params: z.object({
			id: z.string().describe("ID provinsi"),
		}),
	},
	responses: createApiResponse(z.array(z.any()), "Berhasil mengambil data kota"),
});

locationRegistry.registerPath({
	method: "get",
	path: "/locations/shipping-cost",
	tags: ["Locations"],
	request: {
		query: z.object({
			origin: z.string().describe("ID kota asal"),
			destination: z.string().describe("ID kota tujuan"),
			weight: z.number().describe("Berat dalam gram"),
			courier: z.string().describe("Kode kurir (jne, pos, tiki)"),
		}),
	},
	responses: createApiResponse(z.any(), "Berhasil menghitung biaya pengiriman"),
});

const locationController = new LocationController();

locationRouter.route("/provinces").get(locationController.getProvinces);
locationRouter.route("/cities").get(locationController.getCities);
locationRouter.route("/shipping-cost").get(locationController.getShippingCost);
