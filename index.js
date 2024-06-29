import express from 'express'
import bodyParser from 'body-parser';
import swagger from 'swagger-ui-express'
import cors from 'cors';
import { ProductRouter } from './src/features/product/product.routes.js';
import { UserRouter } from './src/features/users/users.routes.js';
import { RateRouter } from './src/features/rate/rate.routes.js';
import { jwtAuth } from './src/middlewares/user.authentication.js';
import CartRouter from './src/features/cart/cart.routes.js';
import loggerMiddleware from './src/middlewares/logger.middleware.js';
import apiDocs from './swagger.json' assert {type:"json"}
export const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
var corsOptions={
     origin:'http://127.0.0.1:3000'
    }

app.use(cors(corsOptions));
app.use(loggerMiddleware);
app.use('/docs',swagger.serve,swagger.setup(apiDocs));
app.get('/', (req, res) => {
    return res.status(200).send('you are in the index page of the API');
});
app.use('/api/rate',RateRouter)
app.use('/api/users',UserRouter)
app.use('/api/products',jwtAuth, ProductRouter)
app.use('/api/cart',CartRouter);
app.use((req,res)=>{
    return res.status(404).send('API not found')
})
