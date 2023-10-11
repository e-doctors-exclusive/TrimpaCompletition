const express = require("express");
const router = express.Router();

const { signup, login } = require("../controller/user.controller");

// router.get("/getAll", getAll)

router.post("/login", login);

router.post("/signup", signup);

module.exports = router;
