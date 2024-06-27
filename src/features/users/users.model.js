export class UserModel {
    constructor(id, email, pass) {
        this.id = id;
        this.email = email;
        this.pass = pass;
    }
    static get() {// this is for returning all the users
        if (this.db.length == 0) {
            return 'All Users are deleted and hence No User is there'
        }
        return this.db;
    }
    static getUser(email) {//this is only for returning a single user only
        const index = this.db.findIndex((u) => u.email == email);
        if (!index) {
            return;
        }
        return this.db[index];
    }
    static add(any, email, pass) {
        const newUser = new UserModel(any, email, pass);
        newUser.id = this.db.length + 1;
        this.db.push(newUser);
        return newUser;
    }
    static check(email, pass) {
        const indexValue = this.db.findIndex((u) => u.email == email && u.pass == pass);
        if (!indexValue) {
            return false;
        }
        return true;
    }
    static removeUser(email, pass) {
        if (this.check(email, pass)) {
            const delIndex = this.db.findIndex((u) => u.email == email && u.pass == pass);
            this.db.splicae(delIndex, 1);
            return this.db;
        }
        return;
    }
    static db = [
        new UserModel(1, 'johndoe@gmail.com', 'Password1'),
        new UserModel(2, 'abc@gmail.com', 'Password2')
    ];
}