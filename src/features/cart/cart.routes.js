import { Router } from "express";
import CartController from "./cart.controller.js";
 const CartRouter=new Router();
 CartRouter.get('/',CartController.get);
 CartRouter.post('/items',CartController.getProducts);
 CartRouter.put('/add',CartController.add);
 CartRouter.delete('/del',CartController.deleteProduct);
 CartRouter.post('/update',CartController.updateCart);
 export default CartRouter;
