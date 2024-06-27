import ProductModel from './product.model.js'
 export default class ProductController {
 static get(req,res){
    const id = req.body.id;
    if (!id) {
      return res.status(200).json(ProductModel.getAll());
    } else {
      const product = ProductModel.getById(id);
      if (!product) {
        return res.status(401).send('the requested resource(s) not found');
      }
      return res.status(200).send(product);
    }
  }
  static update(req,res){
    const updatedProduct = ProductModel.updateProduct(req.body);
    if (updatedProduct == null) {
      return res.status(404).send('Product Id deos not found');
    }
    return res.status(200).send(updatedProduct);
  }
  static delete(req,res){
    const id = req.body.id;
    const deletedResult = ProductModel.delete(id);
    if (deletedResult == null) {
      return res.status(401).send('Deletion operation not successfull');
    }
    return res.status(200).send(deletedResult);//the product array would be returned at this point
  }
}