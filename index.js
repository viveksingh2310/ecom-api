import express from 'express'
import { ProductRouter } from './src/features/product/product.routes.js';
export const app=express();
app.get('/',(req,res)=>{
    return res.status(200).send('you are in the index page of the API');
});
app.route('/api/products/',ProductRouter);


