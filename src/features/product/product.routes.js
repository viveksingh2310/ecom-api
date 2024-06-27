import { Router } from "express";
import ProductController from "./product.controller.js";
// import ProductController from "./product.controller.js";
// const productController=new ProductController();
export const ProductRouter = new Router();
ProductRouter.get('/', ProductController.get);
ProductRouter.post('/update', ProductController.update);
ProductRouter.delete('/delete', ProductController.delete);