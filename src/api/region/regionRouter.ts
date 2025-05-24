import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { validateRequest } from "@/common/utils/httpHandlers";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";
import { regionController } from "./regionController";
import {
	CitySchema,
	DistrictSchema,
	GetCityRequestSchema,
	GetDistrictRequestSchema,
	GetProvinceRequestSchema,
	GetVillageRequestSchema,
	ProvinceSchema,
	RequestQueryProvince,
	VillageSchema,
} from "./regionModel";

export const regionRegistry = new OpenAPIRegistry();
export const regionRouter: Router = express.Router();

regionRegistry.register("Region", ProvinceSchema);

regionRegistry.registerPath({
	method: "get",
	path: "/province",
	security: [{ bearerAuth: [] }],
	request: {
		query: RequestQueryProvince,
	},
	responses: createApiResponse(z.array(ProvinceSchema), "Success", StatusCodes.OK),
});
regionRouter.get("/provinces", validateRequest(GetProvinceRequestSchema), regionController.getAllProvince);

regionRegistry.registerPath({
	method: "get",
	path: "/cities/{id}",
	security: [{ bearerAuth: [] }],
	request: {
		query: GetCityRequestSchema.pick({ query: true }),
		params: GetCityRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(z.array(CitySchema), "Success", StatusCodes.OK),
});
regionRouter.get("/cities/:id", validateRequest(GetCityRequestSchema), regionController.getCityByProvinceId);

regionRegistry.registerPath({
	method: "get",
	path: "/districts/{id}",
	security: [{ bearerAuth: [] }],
	request: {
		query: GetDistrictRequestSchema.pick({ query: true }),
		params: GetDistrictRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(z.array(DistrictSchema), "Success", StatusCodes.OK),
});
regionRouter.get("/districts/:id", validateRequest(GetDistrictRequestSchema), regionController.getDistrictByCityId);

regionRegistry.registerPath({
	method: "get",
	path: "/villages/{id}",
	security: [{ bearerAuth: [] }],
	request: {
		query: GetVillageRequestSchema.pick({ query: true }),
		params: GetVillageRequestSchema.pick({ params: true }),
	},
	responses: createApiResponse(z.array(VillageSchema), "Success", StatusCodes.OK),
});
regionRouter.get("/villages/:id", validateRequest(GetVillageRequestSchema), regionController.getVillageByDistrictId);
