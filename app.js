const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const fileRoutes = require("./src/routes/fileRoutes");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
// const bodyParser = require("body-parser");

app.use(express.json());
app.use("/api", fileRoutes);
app.use(errorMiddleware);
// app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
