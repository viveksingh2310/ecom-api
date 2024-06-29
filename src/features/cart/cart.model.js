export default class CartModel {
    constructor(id, uid, proInfo) {
        this.id = id;
        this.uid = uid;
        this.proInfo = proInfo;
    }
    static add(uid, proInfo) {
        if(!proInfo.pid && !proInfo.quantity)
            return;
        const product = new CartModel(this.db.length + 1, uid, proInfo);
        this.db.push(product);
        return this.db;

    }
    static getItems(uid) {// this will return the cart of a specific user
        let items=[];
         this.db.forEach((c) => {
            if (c.uid==uid)
                items.push(c)
        });
        return items;
    }

    static deleteItem(id) {
        const delIndex = this.db.findIndex((c) => c.id == id);
        if (delIndex < 0)
            return 'item not found'
        this.db.splice(delIndex, 1);
        for (let i = delIndex; i < this.db.length; i++) {
            const prevId = this.db[i].id;
            this.db[i].id = prevId - 1;
        }
        return this.db;// the updated db should be returned now
    }
    static update(id, proInfo) {
        const indexUpdated = this.db.findIndex((c) => c.id == id);
        if (indexUpdated < 0) {
            return;
        }
        this.db[indexUpdated].proInfo = proInfo;
        // this.db[indexUpdated].uid=uid;
        return this.db[indexUpdated];
    }

    static get() {// this is not for actual users 
        return this.db;
    }


    static db = [
        new CartModel(1, 1, { pid: 3, quantity: 5 }),
        new CartModel(2, 3, { pid: 1, quantity: 1 }),
    ]
}