const mongoose = require("mongoose");
const SendResponse = require("../../helper/SendResponse");
const productSchema = require("../../schema/productSchema");
const Product = mongoose.model("Product", productSchema);

const ProductGet = async (req, res) => {
  try {
    const allProduct = await Product.find({});
    if (allProduct) {
      res
        .status(200)
        .send(SendResponse(true, "Product Get Success", allProduct));
    } else {
      res.status(200).send(SendResponse(false, "Product Get Not Success"));
    }
  } catch (error) {
    res
      .status(200)
      .send(SendResponse(false, "Product Get Not Success, Try again"));
  }
};
module.exports = ProductGet;
