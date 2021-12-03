const express = require("express");
const ProductAdd = require("../controller/Product/ProductAdd");
const ProductGet = require("../controller/Product/ProductGet");
const router = express.Router();

// Product Add
router.post("/add", ProductAdd);
// All Products Get
router.get("/products", ProductGet);

module.exports = router;
