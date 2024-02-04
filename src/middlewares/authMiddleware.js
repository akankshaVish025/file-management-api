const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ status: false, message: "Unauthorized" });
    }

    token = token.split(" ")[1];

    jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        return res
          .status(401)
          .json({ status: false, message: "Invalid token" });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = authenticate;