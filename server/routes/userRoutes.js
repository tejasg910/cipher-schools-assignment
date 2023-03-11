import {
  getUserDetails,
  loginUser,
  registerUser,
} from "../controller/userController.js";

import { Router } from "express";
import { isAuthenticated } from "../middleware/auth.js";
const router = Router();
router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/get-user-details").get(isAuthenticated, getUserDetails);

export default router;
