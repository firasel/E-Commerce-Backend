const mongoose = require("mongoose");
const productSchema = require("../../schema/productSchema");
const Product = mongoose.model("Product", productSchema);
const SendResponse = require("../../helper/SendResponse");

const ProductAdd = async (req, res) => {
  try {
    const product = new Product({
      name: req.body.name,
      image: req.body.image,
      countInStock: req.body.countInStock,
    });

    product
      .save()
      .then((createdProduct) => {
        res
          .status(201)
          .send(SendResponse(true, "Product Added Successful", createdProduct));
      })
      .catch((err) => {
        res
          .status(500)
          .send(SendResponse(false, "Product Not Added, Please try again"));
      });
  } catch (error) {
    res
      .status(500)
      .send(SendResponse(false, "Product Not Added, Please try again"));
  }
};

module.exports = ProductAdd;
