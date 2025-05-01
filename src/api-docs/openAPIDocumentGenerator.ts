import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";

import { expensesRegistry } from "@/api/expenses/router";
import { healthCheckRegistry } from "@/api/healthCheck/healthCheckRouter";
import { productRegistry } from "@/api/product/productRouter";
import { userRegistry } from "@/api/user/userRouter";

export type OpenAPIDocument = ReturnType<OpenApiGeneratorV3["generateDocument"]>;

export function generateOpenAPIDocument(): OpenAPIDocument {
<<<<<<< HEAD
	const registry = new OpenAPIRegistry([healthCheckRegistry, userRegistry, productRegistry]);
=======
	const registry = new OpenAPIRegistry([healthCheckRegistry, userRegistry, expensesRegistry]);
>>>>>>> 007527588effa19647c8801f4273297645f1023b
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
