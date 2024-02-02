const multer = require("multer");

const storage = multer
  .memoryStorage
  //   {
  //   destination: function (req, file, cb) {
  //     cb(null, "uploads/");
  //   },
  //   filename: function (req, file, cb) {
  //     cb(null, Date.now() + "-" + file.originalname);
  //   },
  // }
  ();

const upload = multer({ storage: storage });
const uploadData = upload.single("file");

module.exports = uploadData;
