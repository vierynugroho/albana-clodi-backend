import type { Request, RequestHandler, Response } from "express";
import { productService } from "./productService";

export class ProductController {
	public createProduct: RequestHandler = async (req: Request, res: Response) => {
		await productService.createUser(req.body);
	};
}
