import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import ErrorMiddleWare from "./middleware/catchAsyncError.js";

dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use("/", userRoutes);
export default app;

app.use(ErrorMiddleWare);
