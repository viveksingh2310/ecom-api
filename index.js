import express from 'express'
import bodyParser from 'body-parser';
import { ProductRouter } from './src/features/product/product.routes.js';
import { UserRouter } from './src/features/users/users.routes.js';
import { RateRouter } from './src/features/rate/rate.routes.js';
import { jwtAuth } from './src/middlewares/user.authentication.js';
import CartRouter from './src/features/cart/cart.routes.js';
export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    return res.status(200).send('you are in the index page of the API');
});
app.use('/api/rate',RateRouter)
app.use('/api/users',UserRouter)
app.use('/api/products',jwtAuth, ProductRouter)
app.use('/api/cart',CartRouter);
