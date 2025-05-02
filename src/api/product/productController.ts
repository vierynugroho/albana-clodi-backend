import type { Request, RequestHandler, Response } from "express";
import { productService } from "./productService";

export class ProductController {
	public createProduct: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await productService.createProduct(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const serviceResponse = await productService.updateProduct(req.body, id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const productController = new ProductController();
