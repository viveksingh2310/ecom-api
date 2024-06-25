import ProductModel  from "./product.model";
export class ProductController{
    get(req,res){
      const id=req.body;
      if(!id){
        return res.status(200).send(ProductModel.getAll);
      }else{
        const product=ProductModel.getById(id);
        if(!product){
            return res.status(401).send('the requested resource(s) not found');
        }
        return res.status(200).send(product);
      }

        }
    }

