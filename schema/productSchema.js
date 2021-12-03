const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    countInStock: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

module.exports = productSchema;
