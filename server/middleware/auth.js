import { User } from "../model/User.js";
import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler.js";
export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);

  if (!token) {
    return next(new ErrorHandler("Not logged in", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);

  next();
};
