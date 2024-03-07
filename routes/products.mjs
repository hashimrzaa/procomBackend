import express from "express";
import Products from "../models/products.mjs";
const route = express.Router();

route.post("/", async (req, res) => {
  try {
    const products = await Products.create(req.body);
    res.status(200).send({ message: "products added successfully" });
  } catch (error) {
    res.status(400).send({ message: "products not added", error: error });
  }
});

route.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send({ products: products });
  } catch (error) {
    res.status(404).send({ message: "products not found", error: error });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Products.findByIdAndDelete(id);
    res.send({ message: "products delete successfully" });
  } catch (error) {
    res.status(404).send({ message: "products id not found", error: error });
  }
});
route.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Products.findByIdAndUpdate(id, req.body);
    res.send({ message: "products update successfully", products: products });
  } catch (error) {
    res.status(404).send({ message: "products id not found", error: error });
  }
});

export default route;
