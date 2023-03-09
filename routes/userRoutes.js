import { loginUser, registerUser } from "../controller/userController.js";

import { Router } from "express";
const router = Router();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);

export default router;
