import mongoose from "mongoose";
const ProductsSchema = new mongoose.Schema({
  bank: {
    type: String,
    required: true,
  },
  customerAccountNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  merchantAccountNumber: {
    type: Number,
    required: true,
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
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  paymentStatus
});

const Products = mongoose.model("products", ProductsSchema);

export default Products;
