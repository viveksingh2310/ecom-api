export default class ProductModel {
    constructor(id, name, price, av_quant) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.av_quant = av_quant;
        this.ratings=[];
    }
  static getAll() {
        return this.db;
    }
    static getById(id) {
        return this.db.find((p) => p.id == id);
    }
   static updateProduct(product) {
        const { id, name, price, av_quant } = product;
        const productFound = this.db.find((p) => p.id == id);
        if (!productFound) {
            return null;
        } else {
            this.db.forEach((u) => {
                if (u.id == id) {
                    u.name = name;
                    u.av_quant = av_quant;
                    u.price = price;
                }
            });
            return this.db.find((p) => p.id == id);
        }
    }
   static delete(id) {
        const delIndex = this.db.findIndex((p) => p.id == id);
        if (!delIndex) {
            return null;
        }
        this.db.splice(delIndex, 1);
        return this.db;
    }
   static db = [
        new ProductModel(1, 'Apple iPhone 14 max pro', '120000', '450'),
        new ProductModel(2, 'Apple iPhone 15 max pro', '128000', '540'),
        new ProductModel(3, 'Apple iPhone 11 max pro', '11000', '620'),
        new ProductModel(4, 'DC Protonics Study Lamp', '1300', '26'),
        new ProductModel(5, 'Protronics Laptop Stand', '895', '15'),
        new ProductModel(6, 'Intel i5 Lenovo Laptop with Nvidia Graphics Card Installed', '84000', '450'),
        new ProductModel(7, 'Dell Mouse with Optical 456XC45 Tracking', '458', '59'),
        new ProductModel(8, 'Apple Pencil', '11000', '152'),
        new ProductModel(9, 'Exhanced mopping', '508', '10'),
    ]
}