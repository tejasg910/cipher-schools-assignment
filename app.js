const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
dotenv.config({
  path: "./config/config.env",
});

const app = express();

app.use("/", userRoutes);

module.exports = app;
