import mongoose from "mongoose";
const ProductsSchema = new mongoose.Schema({
  bank: {
    type: String,
    required: true,
  },
  customerAccountNo: {
    type: Number,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  merchantAccountNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  paymentPurpose: {
    type: String,
    required: true,
  },
  paymentAmount: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("products", ProductsSchema);

export default Products;
