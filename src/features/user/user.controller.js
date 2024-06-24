import { User } from "./user.model.js"
export class UserController{
    static get(req,res){
        const result=User.get();
        res.status(200).send(result);
    }
}