const products = []

module.exports = class Product {
    constructor(titleofProd){
        this.title = titleofProd
    }
    save(){
        products.push(this)
    }
    static fetchAll(){
        return products
    }
}