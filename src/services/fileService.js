const fs = require('fs-extra');
const encryptionUtil = require('../utils/encryptionUtil');

const baseDirectory = './uploads/';

exports.uploadFile = async (file) => {
  try {
    const encryptedFilename = encryptionUtil.encrypt(file.originalname);
    const filePath = `${baseDirectory}${encryptedFilename}`;
    await fs.writeFile(filePath, file.buffer);
    return { message: 'File uploaded successfully' };
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};

exports.listFiles = async () => {
  try {
    if (!baseDirectory || typeof baseDirectory !== 'string') {
      throw new Error('Invalid base directory provided');
    }

    const files = await fs.readdir(baseDirectory);
    const decryptedFiles = await Promise.all(files.map(async (filename) => {
      const decryptedFilename = encryptionUtil.decrypt(filename);
      return decryptedFilename;
    }));
    return decryptedFiles;
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
};

exports.deleteFile = async (filename) => {
  const decryptedFilename = encryptionUtil.decrypt(filename);
  console.log(decryptedFilename, "dec");
  process.exit(0)
  const filePath = `${baseDirectory}${filename}`;
  await fs.unlink(filePath);
  return { message: 'File deleted successfully' };
};
