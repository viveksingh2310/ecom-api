
import { User } from "../features/user/user.model.js";
export function userauth(req,res,next){
  const {email,pass}=req.body;
  console.log(email);
  const result=User.db.find((user)=>{
    if(user.email==email && user.pass==pass){ 
          return user;
        }
      
  });
  console.log(result);
  if(result)
  next();
else
res.status(401).send('user credentails not found');

}