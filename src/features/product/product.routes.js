import { Router } from "express";
import ProductController from "./product.controller.js";
export const ProductRouter=Router();
ProductRouter.get('/',ProductController.get);
ProductRouter.post('/update',ProductController.update);
ProductRouter.delete('/delete',ProductController.delete);