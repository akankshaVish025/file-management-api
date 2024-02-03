const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../model/userModel");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET;

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid username" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ status: false, message: "Invalid password!" });
    }

    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({ status: true, message: "Login successful", token: token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ username });

    if (userExists) {
      return res
        .status(400)
        .json({ status: false, message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ status: true, message: "Registration successfull" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

module.exports = { login, register };
