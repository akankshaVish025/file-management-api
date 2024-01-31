const fileService = require('../services/fileService');

exports.uploadFile = async (req, res, next) => {
  try {
    const file = req.file;
    const result = await fileService.uploadFile(file);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

exports.listFiles = async (req, res, next) => {
  try {
    const files = await fileService.listFiles();
    res.json(files);
  } catch (error) {
    next(error);
  }
};

exports.deleteFile = async (req, res, next) => {
  try {
    const filename = req.params.filename;
    const result = await fileService.deleteFile(filename);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
