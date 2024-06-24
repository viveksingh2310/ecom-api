import express from 'express'
import { ProductController } from './product.controller.js';
export const ProductRouter=express.Router();
ProductRouter.get('/',ProductController.getProducts);
ProductRouter.get('/:id',ProductController.getProduct)