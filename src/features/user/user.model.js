export class  User{
    constructor(name,email,pass,mobile,address,pincode,type){
        this.name=name;
        this.email=email;
        this.pass=pass;
        this.mobile=mobile;
        this.address=address;
        this.pincode=pincode;
        this.type=type;//seller or customer

    }
   static db=[
new User('Vivek Singh','viveksingh14538@gmail.com','123','9368577289','Nirmal Block- A Gandhinagar','249002','seller'),
new User('Deepak Rana','deepak123@gmail.com','123','7455018494','Meera Nagar Bapugram Panji Central Goa','800947','user')
    ]
    static get(){
        return User.db;
    }
}