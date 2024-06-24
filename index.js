import express from 'express'
import bodyParser from 'body-parser';
import { userauth } from './src/middleware/userauth.middleware.js';
import { ProductRouter } from './src/features/product/product.routes.js';
import { UserRouter } from './src/features/user/user.routes.js';
export const server=express();
// server.use(express.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use('/api/products/',ProductRouter);
// server.use('',ProductRouter);
// server.use();
server.use('/api/users/',userauth,UserRouter);


