const { loginUser } = require("../controller/userController");

const router = require("express").Router();

router.route("/login", loginUser);

module.exports = router;
