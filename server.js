const app = require("./app");
const connectDB = require("./config/connectDB");
connectDB();
app.listen(process.env.PORT, () => {
  console.log("server is working on ", process.env.PORT);
});
