export class Product{
    constructor(id,name,desc,price,size,s_id,expiry,quantity,locations){
this.id=id;
this.name=name;
this.desc=desc;
this.price=price;
this.size=size;//
this.s_id-s_id;
this.expiry=expiry;
this.quantity=quantity;
this.locations=locations;//
    }
   static db=[
        new Product('123','iPhone 9','An apple mobile which is nothing like apple','80000','','4522','','65',['rishikesh','delhi','muradabad','silchar']),
        new Product('674','Hanki','a hanki to make you dry at plcaes where it is supposed to be used','10','','7654','','23',['delhi','lucknow','silchar','dibrigarh','haryana']  )
    ]
    static getAll(){
        // console.log('hello');
        return this.db;
    }
    static getProduct(id){
        const result=Product.db.find((p)=>{
            if(p.id==id)
            return p;
        })
       return result
    }
}