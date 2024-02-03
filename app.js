const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const DB_CONNECTION_URI = process.env.MONGODB_URI;
const fileRoutes = require("./src/routes/fileRoutes");
const authRoutes = require("./src/routes/authRoutes");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
// const bodyParser = require("body-parser");

app.use(express.json());

const connectDB = async () => {
  try {
    await mongoose.connect(DB_CONNECTION_URI);
    console.log("Database connection successful!");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

connectDB();

app.use("/api", fileRoutes);
app.use("/auth", authRoutes);
app.use(errorMiddleware);
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
