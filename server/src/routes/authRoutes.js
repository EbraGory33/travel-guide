import express from "express";
import { authenticateUser } from "../middleware/authentication.js";

import {
  registerUser,
  login,
  logout,
  updateUser,
  deleteUser,
  verityUser,
} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logout);
router.patch("/users/:id", authenticateUser, updateUser);
router.delete("/users/:id", authenticateUser, deleteUser);
router.get("/authenticate", authenticateUser, verityUser);

export default router;
