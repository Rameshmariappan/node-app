const ProductsDetail = require("../models/product");

exports.getProductsList = (req, res, next) => {
  const productitem = ProductsDetail.fetchAll();
  res.render("list_product", {
    title: "Products page",
    prod: productitem,
  });
};

exports.pushProduct = (req, res, next) => {
  const product = new ProductsDetail(req.body.title);
  product.save();
  res.redirect("/");
};

exports.addProductspage = (req, res, next) => {
  res.render("add-product", { title: "Add product" });
};
