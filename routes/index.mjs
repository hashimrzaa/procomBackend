import express from "express";
import users from "./user.mjs";
import products from "./products.mjs";
const router = express.Router();

router.use("/users", users);
router.use("/products", products);

export default router;
