const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../middlewares/uploadMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  uploadFile,
  deleteFile,
  listFiles,
  searchFiles,
} = require("../controllers/fileController");

// Post api to upload the files
router.post("/upload", authMiddleware, uploadMiddleware, uploadFile);

// Delete file by filename from /uploads folder
router.delete("/delete/:filename", authMiddleware, deleteFile);

// Get list of all the uploaded files
router.get("/list", authMiddleware, listFiles);

// get route for file search
router.get('/search', authMiddleware, searchFiles);

module.exports = router;
