import type { Request, RequestHandler, Response } from "express";
import type { RequestQueryProductType } from "./productModel";
import { productService } from "./productService";

export class ProductController {
	public getAllProducts: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await productService.getAllProducts(req.query as unknown as RequestQueryProductType);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public getDetailProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const serviceResponse = await productService.getDetailProduct(id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public createProduct: RequestHandler = async (req: Request, res: Response) => {
		const serviceResponse = await productService.createProduct(req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public updateProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const serviceResponse = await productService.updateProduct(req.body, id);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};

	public deleteProduct: RequestHandler = async (req: Request, res: Response) => {
		const id = req.params.id;
		const serviceResponse = await productService.deleteProduct(id, req.body);
		res.status(serviceResponse.statusCode).send(serviceResponse);
	};
}

export const productController = new ProductController();
