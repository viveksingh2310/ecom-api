import ProductModel from "../product/product.model.js";
// import UserModel from "../users/users.model.js";
export default class RateModel {
    constructor(pid, uid, rating) {//here pid is the product id and rid is the rating id 
        if (rating > 5 && rating < 0) {
            return;//the rating should be less than 5
        }
        const product = ProductModel.getById(pid);
        if (!product) {
            return;
        }
        if(!product.ratings.find((r)=>r.uid==uid)){
        ProductModel.db.find((p)=>p.id ==pid).ratings.push({
                uid: uid,
                value: rating,
            })
        }
        ProductModel.db.find((p)=>p.id ==pid).ratings.find((r)=>r.uid==uid).value=rating;
        return ProductModel.db.find((p)=> p.id ==pid) 
    }
    static db = [new RateModel(1, 2, 4.0),
    new RateModel(2, 2, 3.8),
    new RateModel(3, 2, 1.6),
    new RateModel(1, 1, 5),
    new RateModel(4, 1, 5),
    new RateModel(6, 2, 1.9),
    new RateModel(4, 2, 3.4),
    new RateModel(6, 1, 4.9),
    new RateModel(2, 1, 2.9)
    ]
}