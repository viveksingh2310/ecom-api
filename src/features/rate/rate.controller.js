import RateModel from "./rate.model.js";
export default class RateController{
    static updateRating(req,res){ // uid,pid,rating in the body is mandatory
        const {userId,pid,rating}=req.body;
        console.log(userId);
        console.log(pid);
        console.log(rating);
        const ratingAdded=new RateModel(pid,userId,rating);
        if(!ratingAdded){
            return res.status(400).send('rating could not be added due to bad request');
        }
        RateModel.db.push(ratingAdded);
        return res.status(200).send(ratingAdded);// we can easily see the updated product information
    }
    static getRatings(req,res){
        return res.status(200).send(RateModel.db);
    }
}