const express = require('express');
const router = express.Router();

const {signup } = require("../controllers/user.controller");

// router.get("/getAll", getAll)


router.post("/signup" , signup)


module.exports = router;