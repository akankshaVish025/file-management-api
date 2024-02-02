const express = require("express");
const router = express.Router();
const {
  uploadFile,
  deleteFile,
  listFiles,
} = require("../controllers/fileController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

// Post api to upload the files
router.post("/upload", uploadMiddleware, uploadFile);

// Delete file by filename from /uploads folder
router.delete("/delete/:filename", deleteFile);

// Get list of all the uploaded files
router.get("/list", listFiles);

module.exports = router;
