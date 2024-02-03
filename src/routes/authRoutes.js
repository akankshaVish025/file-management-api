const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/authController");

// User login api
router.post("/login", login);

// User registration api
router.post("/register", register);

module.exports = router;
