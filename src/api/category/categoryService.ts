import { ServiceResponse } from "@/common/models/serviceResponse";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import type { CreateCategoryType } from "./categoryModel";
import { CategoryRepository } from "./categoryRepository";

class CategoryService {
	private readonly categoryRepo: CategoryRepository["category"];
	constructor(categoryRepository = new CategoryRepository()) {
		this.categoryRepo = categoryRepository.category;
	}

	public GetAll = async () => {
		try {
			const foundCategories = await this.categoryRepo.findMany();

			return ServiceResponse.success("Categories retrieved successfully", foundCategories, StatusCodes.OK);
		} catch (ex) {
			return ServiceResponse.failure("An error occurred.", (ex as Error).message, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public Detail = async (id: string) => {
		try {
			const foundCategory = await this.categoryRepo.findFirst({ where: { id } });
			if (!foundCategory) {
				return ServiceResponse.failure("Category not found", null, StatusCodes.NOT_FOUND);
			}

			return ServiceResponse.success("Category retrieved successfully", foundCategory, StatusCodes.OK);
		} catch (ex) {
			return ServiceResponse.failure("An error occurred.", (ex as Error).message, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public Create = async (req: CreateCategoryType) => {
		try {
			const existProduct = await this.categoryRepo.findFirst({ where: { name: req.name } });
			if (existProduct) {
				return ServiceResponse.failure("Category is exist", null, StatusCodes.BAD_REQUEST);
			}

			const newCategory = await this.categoryRepo.create({ data: { ...req } });

			return ServiceResponse.success("Category retrieved successfully", newCategory, StatusCodes.CREATED);
		} catch (ex) {
			return ServiceResponse.failure("An error occurred.", (ex as Error).message, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public Update = async (req: CreateCategoryType, id: string) => {
		try {
			const existProduct = await this.categoryRepo.findFirst({ where: { name: req.name } });
			if (existProduct) {
				return ServiceResponse.failure("Category is exist", null, StatusCodes.BAD_REQUEST);
			}

			const newCategory = await this.categoryRepo.update({ data: { ...req }, where: { id } });

			return ServiceResponse.success("Category retrieved successfully", newCategory, StatusCodes.CREATED);
		} catch (ex) {
			return ServiceResponse.failure("An error occurred.", (ex as Error).message, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};

	public Delete = async (id: string) => {
		try {
			const foundProduct = await this.categoryRepo.findUnique({ where: { id } });
			if (!foundProduct) {
				return ServiceResponse.failure("Category not found", null, StatusCodes.NOT_FOUND);
			}

			await this.categoryRepo.delete({ where: { id } });

			return ServiceResponse.success("Category deleted successfully", foundProduct, StatusCodes.OK);
		} catch (ex) {
			return ServiceResponse.failure("An error occurred.", (ex as Error).message, StatusCodes.INTERNAL_SERVER_ERROR);
		}
	};
}

export const categoryService = new CategoryService();
