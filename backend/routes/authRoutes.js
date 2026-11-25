import express from "express";
import { loginUser, registerUser } from "../controllers/auth.controller.js";
import validateUser from "../middlewares/validateUser.js";
import validateLogin from "../middlewares/validateLogin.js";

const router = express.Router();

router.post("/login",validateLogin,loginUser);
router.post("/register",validateUser,registerUser);

export default router;