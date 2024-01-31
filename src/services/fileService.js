const fs = require('fs-extra');
const encryptionUtil = require('../utils/encryptionUtil');

const baseDirectory = './uploads/';

exports.uploadFile = async (file) => {
  const encryptedFilename = encryptionUtil.encrypt(file.originalname);
  const filePath = `${baseDirectory}${encryptedFilename}`;
  await fs.writeFile(filePath, file.buffer);
  return { message: 'File uploaded successfully' };
};

exports.listFiles = async () => {
  const files = await fs.readdir(baseDirectory);
  return files.map((filename) => encryptionUtil.decrypt(filename));
};

exports.deleteFile = async (filename) => {
  const decryptedFilename = encryptionUtil.decrypt(filename);
  const filePath = `${baseDirectory}${filename}`;
  await fs.unlink(filePath);
  return { message: 'File deleted successfully' };
};
