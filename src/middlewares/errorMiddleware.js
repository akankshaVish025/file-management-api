const fs = require("fs-extra");
const path = require("path");

const errorHandler = async (err, req, res, next) => {
  console.error(err.stack);
  if (req.file) {
    let remove = await removeUnwantedImg(req.file.filename);
  }
  res.status(500).send("Something went wrong!");
};

const removeUnwantedImg = async (file) => {
  const imagePath = path.join(__dirname, "..", "..", "uploads", file);
  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath, { recursive: true });
  }
};

module.exports = errorHandler;
