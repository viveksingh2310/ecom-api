import { Router } from "express";
import { ProductController } from "./product.controller";
export const ProductRouter=Router();
ProductRouter.get('/api/products/',ProductController.get);
ProductRouter.post('/api/produ')