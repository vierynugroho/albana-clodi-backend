import { CustomerCategoryEnum } from "@/common/enums/customer/customerCategoryEnum";
import { CustomerStatusEnum } from "@/common/enums/customer/customerStatusEnum";
import { OrderPaginationEnum } from "@/common/enums/orderPaginationEnum";
import { commonValidations } from "@/common/utils/commonValidation";
import { z } from "zod";

export const CustomerSchema = z.object({
	id: z.string().optional(),
	name: z.string(),
	category: z.nativeEnum(CustomerCategoryEnum),
	address: z.string(),
	province: z.string(),
	city: z.string(),
	district: z.string(),
	village: z.string(),
	postalCode: z.string(),
	phoneNumber: z.string(),
	email: z.string(),
	destinationId: z.number().optional(),
	status: z.nativeEnum(CustomerStatusEnum),
	createdAt: z.date().optional(),
	updatedAt: z.date().optional(),
});

export const CreateCustomerSchema = CustomerSchema.omit({ id: true, createdAt: true, updatedAt: true });
export const CreateCustomerRequestSchema = z.object({
	body: CreateCustomerSchema,
});
export type CreateCustomerType = z.infer<typeof CreateCustomerSchema>;

export const UpdateCustomerSchema = CreateCustomerSchema.partial();
export const UpdateCustomerRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
	body: UpdateCustomerSchema,
});
export type UpdateCustomerType = z.infer<typeof UpdateCustomerSchema>;

export const DeleteCustomerSchema = z.object({
	customerIds: z.array(z.string().uuid()).optional(),
});
export const DeleteCustomerRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
	body: DeleteCustomerSchema.optional(),
});
export type DeleteCustomerSchema = z.infer<typeof DeleteCustomerSchema>;

export const RequestQueryCustomer = z.object({
	page: z.coerce.number().min(1).optional(),
	search: z.string().optional(),
	limit: z.coerce.number().min(5).optional(),
	category: z.nativeEnum(CustomerCategoryEnum).optional(),
	status: z.nativeEnum(CustomerStatusEnum).optional(),
	sort: z.string().optional(),
	order: z.nativeEnum(OrderPaginationEnum).optional(),
	startDate: z.coerce.date().optional(),
	endDate: z.coerce.date().optional(),
	month: z.coerce
		.string()
		.regex(/^\d{1,2}$/)
		.optional(),
	year: z.coerce
		.string()
		.regex(/^\d{4}$/)
		.optional(),
	week: z.coerce
		.string()
		.regex(/^\d{1,2}$/)
		.optional(),
});
export type RequestQueryCustomerType = z.infer<typeof RequestQueryCustomer>;
export const GetAllCustomerRequestSchema = z.object({
	query: RequestQueryCustomer,
});

export const GetCustomerRequestSchema = z.object({
	params: z.object({ id: commonValidations.uuid }),
});
