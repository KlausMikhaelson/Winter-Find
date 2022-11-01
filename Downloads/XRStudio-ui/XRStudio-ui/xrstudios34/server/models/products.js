const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productTitle: {
    type: String,
    required: true,
  },

  productDesc: {
    type: String,
    required: true,
  },

  productLink: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productImage1: {
    fileName: String,
    base64: String,
  },
  productImage2: {
    fileName: String,
    base64: String,
  },
  productImage3: {
    fileName: String,
    base64: String,
  },
  productImage4: {
    fileName: String,
    base64: String,
  },
  coverImage: {
    fileName: String,
    base64: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("product", productSchema);
