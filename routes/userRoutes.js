import { loginUser, registerUser } from "../controller/userController.js";

import { Router } from "express";
const router = Router();
router.route("/login", loginUser);
router.route("/register", registerUser);

export default router;
