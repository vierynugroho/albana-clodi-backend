import { CustomerCategoryEnum } from "@/common/enums/customer/customerCategoryEnum";
import { CustomerStatusEnum } from "@/common/enums/customer/customerStatusEnum";
import { z } from "zod";

export const CustomerSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	catergory: z.nativeEnum(CustomerCategoryEnum),
	address: z.string(),
	subdistrict: z.string(),
	postalCode: z.string(),
	phoneNumber: z.string(),
	email: z.string(),
	status: z.nativeEnum(CustomerStatusEnum),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export const CreateCustomerSchema = CustomerSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const CreateCustomerRequestSchema = z.object({
	body: CreateCustomerSchema,
});

export type CreateCustomerType = z.infer<typeof CreateCustomerSchema>;
