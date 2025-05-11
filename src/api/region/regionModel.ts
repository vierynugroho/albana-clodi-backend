import { commonValidations } from "@/common/utils/commonValidation";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);
export const ProvinceSchema = z.object({
	id: z.number().optional(),
	name: z.string(),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export type Province = z.infer<typeof ProvinceSchema>;

// Get Province Schema
export const RequestQueryProvince = z.object({
	name: z.string().optional(),
});
export type RequestQueryProvinceType = z.infer<typeof RequestQueryProvince>;
export const GetProvinceRequestSchema = z.object({
	query: RequestQueryProvince,
});

// Get City Schema
export const CitySchema = ProvinceSchema.extend({
	provinceId: z.number().optional(),
});
export const RequestQueryCity = z.object({
	name: z.string().optional(),
});
export type RequestQueryCityType = z.infer<typeof RequestQueryCity>;
export const GetCityRequestSchema = z.object({
	params: z.object({ id: commonValidations.id }),
	query: RequestQueryCity,
});

// Get District Schema
export const DistrictSchema = ProvinceSchema.extend({
	cityId: z.number().optional(),
});
export const RequestQueryDistrict = z.object({
	name: z.string().optional(),
});
export type RequestQueryDistrictType = z.infer<typeof RequestQueryDistrict>;
export const GetDistrictRequestSchema = z.object({
	params: z.object({ id: commonValidations.id }),
	query: RequestQueryDistrict,
});

// Get Village Schema
export const VillageSchema = ProvinceSchema.extend({
	districtId: z.number().optional(),
	postalCode: z.number(),
});
export const RequestQueryVillage = z.object({
	name: z.string().optional(),
});
export type RequestQueryVillageType = z.infer<typeof RequestQueryVillage>;
export const GetVillageRequestSchema = z.object({
	params: z.object({ id: commonValidations.id }),
	query: RequestQueryVillage,
});
