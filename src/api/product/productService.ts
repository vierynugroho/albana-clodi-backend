import { PrismaClient } from "../../../generated/prisma";
import type { CreateProductsType } from "./productModel";
import { type ProductRepository, productRepository } from "./productRepository";

class ProductService {
	private readonly productRepo: ProductRepository;

	constructor() {
		this.productRepo = productRepository;
	}

	public createUser = async (req: CreateProductsType) => {};
}

export const productService = new ProductService();
