import mongoose from "mongoose";
const ProductsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
},
description: {
    type: String,
    required: true
},
amount: {
    type: Number,
    required: true
},
});

const Products = mongoose.model("products",ProductsSchema);

export default Products;
