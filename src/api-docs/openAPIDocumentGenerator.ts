import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";

import { deliveryPlaceRegistry } from "@/api/delivery-place/router";
import { expensesRegistry } from "@/api/expenses/router";
import { healthCheckRegistry } from "@/api/healthCheck/healthCheckRouter";
import { locationRegistry } from "@/api/location/router";
import { orderRegistry } from "@/api/order/router";
import { productRegistry } from "@/api/product/productRouter";
import { regionRegistry } from "@/api/region/regionRouter";
import { shippingCostRegistry } from "@/api/shipping-cost/router";
import { userRegistry } from "@/api/user/userRouter";

export type OpenAPIDocument = ReturnType<OpenApiGeneratorV3["generateDocument"]>;

export function generateOpenAPIDocument(): OpenAPIDocument {
	const registry = new OpenAPIRegistry([
		healthCheckRegistry,
		userRegistry,
		expensesRegistry,
		productRegistry,
		locationRegistry,
		shippingCostRegistry,
		deliveryPlaceRegistry,
		orderRegistry,
		regionRegistry,
	]);
	const generator = new OpenApiGeneratorV3(registry.definitions);

	return generator.generateDocument({
		openapi: "3.0.0",
		info: {
			version: "1.0.0",
			title: "Swagger API",
		},
		externalDocs: {
			description: "View the raw OpenAPI Specification in JSON format",
			url: "/swagger.json",
		},
	});
}
