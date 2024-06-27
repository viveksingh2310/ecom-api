import { Router } from "express";
import { UserController } from "./users.controller.js";
export const UserRouter = new Router();
UserRouter.get('/', UserController.get);
UserRouter.post('/signup', UserController.signup);
UserRouter.post('/signin', UserController.signin);
UserRouter.delete('/delete', UserController.deleteUser);