const express = require("express");
const router = express.Router();
const path = require("path");
const adminData = require("./admin");
const productList = require("../controllers/products");
router.get("/", productList.getProductsList);

module.exports = router;
