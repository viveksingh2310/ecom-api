import express from 'express'
import bodyParser from 'body-parser';
import { ProductRouter } from './src/features/product/product.routes.js';
import { UserRouter } from './src/features/users/users.routes.js';
import { jwtAuth } from './src/middlewares/user.authentication.js';
export const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    return res.status(200).send('you are in the index page of the API');
});
app.use('/api/users',UserRouter)
app.use('/api/products',jwtAuth, ProductRouter)
