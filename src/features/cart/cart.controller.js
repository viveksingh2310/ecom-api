import CartModel from "./cart.model.js";
export default  class CartController{
    static add(req,res){
        const {uid,proInfo}=req.body;
        const addedItemResult=CartModel.add(uid,proInfo);
        if(!addedItemResult)
            return res.status(400).send('bad request')
        return res.status(200).send(addedItemResult)
    }
    static getProducts(req,res){
        const{uid}=req.body;
        const items=CartModel.getItems(uid);
        if(!items)
            return res.status(200).send('The card is empty');
        return res.status(200).send(items);
    }
    static updateCart(req,res){
        const{id, proInfo}=req.body;
        const updatedCartItem=CartModel.update(id, proInfo);
        if(!updatedCartItem)
            return res.status(400).send('bad request');
        return res.status(200).send(updatedCartItem);
    }
    static deleteProduct(req,res){
        const {id}=req.body;
        return res.status(200).send(CartModel.deleteItem(id));
    }
    static get(req,res){
        return res.status(200).send(CartModel.get);
    }   
}