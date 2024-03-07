import express from "express";
//controller function
import {
  addUser,
  getUser,
  deleteUser,
  updateUser,
  loginUser,
} from "../controllers/user.mjs"

const router = express.Router();

// addUser route
router.post("/", addUser);

//getAllUser route
router.get("/", getUser);
router.get("/:id", getUser);

//delete user route
router.delete("/:id", deleteUser);

//update user route
router.patch("/:id", updateUser);

//login route
router.post("/login", loginUser);

export default router;
