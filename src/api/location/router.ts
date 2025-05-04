import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Request, type Response, type Router } from "express";
import { z } from "zod";
import { LocationController } from "./controller";
import { LocationSchema } from "./model";

export const locationRegistry = new OpenAPIRegistry();
export const locationRouter: Router = express.Router();

locationRegistry.register("DeliveryPlace", LocationSchema);

locationRegistry.registerPath({
	method: "get",
	path: "/locations/provinces",
	tags: ["Locations"],
	responses: createApiResponse(z.array(z.any()), "Berhasil mengambil data provinsi"),
});

locationRegistry.registerPath({
	method: "get",
	path: "/locations/cities/{province_id}",
	tags: ["Locations"],
	request: {
		params: z.object({
			province_id: z.string().describe("ID provinsi"),
		}),
	},
	responses: createApiResponse(z.array(z.any()), "Berhasil mengambil data kota"),
});

const locationController = new LocationController();

locationRouter.route("/provinces").get(locationController.getProvinces);
locationRouter.route("/cities").get(locationController.getCities);
