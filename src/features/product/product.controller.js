import { Product } from "./product.model.js";
export class ProductController{
    static getProducts(req,res){
        const result=Product.getAll();
        // console.log(result);
        return res.status(200).json(result);
        }
        static getProduct(req,res){
            console.log(req.query.id);
            const result=Product.getProduct(req.param.id);
            return res.status(200).send(result);
            
        }
}
