const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    // description: { type: String, required: true },
    // richDescription: { type: String, required: true },
    image: { type: String, required: true },
    images: { type: Array },
    // brand: { type: String, required: true },
    // price: { type: Number, required: true },
    category: [
      {
        name: { type: String, required: true },
      },
    ],
    countInStock: { type: Number, required: true },
    // rating: { type: String, required: true },
    // isFeatured: { type: String, required: true },
    // dateCreated: { default: new Date() },
  },
  {
    versionKey: false,
  }
);

module.exports = productSchema;
