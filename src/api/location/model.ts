import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

export const LocationSchema = z.object({});

export type DeliveryPlace = z.infer<typeof LocationSchema>;
