import express from "express";
import users from "./user.mjs";
import orders from "./order.mjs";
import products from "./products.mjs";
const router = express.Router();

router.use("/users", users);
router.use("/orders", orders);
router.use("/products", products);

export default router;
