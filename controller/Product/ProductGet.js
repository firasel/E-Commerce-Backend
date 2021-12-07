const mongoose = require("mongoose");
const SendResponse = require("../../helper/SendResponse");
const productSchema = require("../../schema/productSchema");
const Product = mongoose.model("Product", productSchema);

const ProductGet = async (req, res) => {
  try {

    const pipeline = [
      {
        $unwind: "$images",
      },
      {
        $group: {
          _id: "$_id",
          images: { $push: "$images" },
        },
      },
    ];

    const allProduct = await Product.aggregate(pipeline);
    console.log("Products: ", allProduct);

    if (allProduct) {
      res
        .status(200)
        .send(SendResponse(true, "Product Get Success", allProduct));
    } else {
      res.status(200).send(SendResponse(false, "Product Get Not Success"));
    }
  } catch (error) {
    console.log(error);
    res
      .status(200)
      .send(SendResponse(false, "Product Get Not Success, Try again"));
  }
};
module.exports = ProductGet;
