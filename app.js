import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import ErrorMiddleWare from "./middleware/catchAsyncError.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import videoRoutes from "./routes/videoRoutes.js";
import cors from "cors";
import fileUpload from "express-fileupload";
dotenv.config({
  path: "./config/config.env",
});
const app = express();
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", videoRoutes);
app.use("/api", userRoutes);
export default app;

app.use(ErrorMiddleWare);
