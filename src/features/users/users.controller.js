import jwt from 'jsonwebtoken'
import { UserModel } from "../users/users.model.js";
export class UserController {
    static signup(req, res) {// adding the user to the database
        const { email, pass } = req.body;
        const nU = UserModel.add(email, pass);
        if (nU) {
            return res.status(200).send(`user is registered succesfully!! ${JSON.stringify(nU)}`);
        }
        return res.status(400).send('Bad Request is sent to the server');
    }
    static signin(req, res) {
       console.log(req.body.email); // checking the user whether it belongs to the user database or not 
        const { email, pass } = req.body;
        // console.log(email);
        // console.log(pass);
        if (UserModel.check(email, pass)) {
            const token = jwt.sign({ email: email, }, 'QWERTYUIOP', { expiresIn: '1h', });
            return res.status(200).send(token);//this token will be send and then verified in the user uthentication
        }
        return res.status(400).send('user not registered please register first');//rendering to the signup page should be provided here
    }
    static deleteUser(req, res) {
        const { email, pass } = req.body;//the password is needed in case of deletion
        const usersDeletion = UserModel.removeUser(email, pass);
        if (usersDeletion) {
            return res.status(200).json(usersDeletion);
        }
        return res.status(400).send('Corrupted Request is sent');

    }
    static get(req, res) {
        const { email } = req.body;
        if (!email) {
            return res.status(200).json(UserModel.get());//all the users are fetched
        }
        return res.status(200).send(UserModel.getUser(email));
    }
}