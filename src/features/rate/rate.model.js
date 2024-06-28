import ProductModel from "../product/product.model.js";
export default class RateModel{
    constructor(pid,uid,rating){
        if(rating>5 && rating<0){
            return;
        }
        if(!product){
            return;
        }
            ProductModel.db.find((p)=>p.id==pid).ratings.push({
                uid:uid,
                ratings:rating,
            });
            return ProductModel.db.find((u)=>u.id==pid);
    }
    static db=[new RateModel(1,2,4.0),
        new RateModel(2,2,3.8),
        new RateModel(3,2,1.6),
        new RateModel(1,1,5),
        new RateModel(4,1,5),
        new RateModel(6,2,1.9),
        new RateModel(4,2,3.4),
        new RateModel(6,1,4.9),
        new RateModel(2,1,2.9)
    ]
}