const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log("server is working on ", process.env.PORT);
});
