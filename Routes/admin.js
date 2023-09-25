const express = require("express");
const path = require("path");
const router = express.Router();
const productChanges = require("../controllers/products");
const product = [];
router.get("/add-product", productChanges.addProductspage);

router.post("/add-product-to-array", productChanges.pushProduct);
module.exports=router
