import { User } from "../model/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const loginUser = async () => {
  const { email, password } = req.body;
  // const file  =req.file;

  if (!email || !password)
    return next(new ErrorHandler("Please provide all fields", 404));

  const user = await User.findOne({ email }).select("+password");

  if (!user) return next(new ErrorHandler("Incorrect email or password", 401));

  const isMatch = await user.comparePassword(password);

  if (!isMatch)
    return next(new ErrorHandler("Incorrect email or password", 401));

  sendToken(res, user, `Welcome back, ${user.username}`, 200);
};

export const registerUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const findUser = await User.findOne({ email });
    if (findUser)
      return next(new ErrorHandler("This email already exists", 409));
    let user = await User.create({
      username,
      email,
      password,
    });
    sendToken(res, user, "Registered successfully", 201);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
};
