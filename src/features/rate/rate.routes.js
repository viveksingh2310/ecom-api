import { Router } from "express";
import RateController from "./rate.controller.js";
export const RateRouter=new Router();
RateRouter.get('/',RateController.getRatings);
RateRouter.post('/',RateController.updateRating);
