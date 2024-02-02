const fileService = require("../services/fileService");

const uploadFile = async (req, res, next) => {
  try {
    const file = req.file;
    if (!file) {
      return res
        .status(400)
        .json({ status: false, message: "Please provide file to upload!" });
    }
    const result = await fileService.uploadFile(file);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const listFiles = async (req, res, next) => {
  try {
    const files = await fileService.listFiles();
    return res
      .status(200)
      .json({ status: true, message: "List of all the file", data: files });
  } catch (error) {
    next(error);
  }
};

const deleteFile = async (req, res, next) => {
  try {
    const filename = req.params.filename.trim();
    console.log(filename, "filename");
    const result = await fileService.deleteFile(filename);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadFile, listFiles, deleteFile };
