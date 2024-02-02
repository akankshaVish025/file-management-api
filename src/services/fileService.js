const fs = require("fs-extra");
const encryptionUtil = require("../utils/encryptionUtil");
const path = require("path");

const baseDirectory = "./uploads/";

exports.uploadFile = async (file) => {
  try {
    const encryptedFilename = encryptionUtil.encrypt(file.originalname);
    const filePath = `${baseDirectory}${encryptedFilename}`;
    await fs.writeFile(filePath, file.buffer);
    return { message: "File uploaded successfully" };
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
};

exports.listFiles = async () => {
  try {
    if (!baseDirectory || typeof baseDirectory !== "string") {
      throw new Error("Invalid base directory provided");
    }

    const files = await fs.readdir(baseDirectory);
    // const decryptedFiles = await Promise.all(
    //   files.map(async (filename) => {
    //     const decryptedFilename = encryptionUtil.decrypt(filename);
    //     return decryptedFilename;
    //   })
    // );
    return files;
  } catch (error) {
    console.error("Error listing files:", error);
    throw error;
  }
};

exports.deleteFile = async (filename) => {
  try {
    // const decryptedFilename = encryptionUtil.decrypt(filename);
    // console.log(decryptedFilename, "dec");

    const filePath = path.join(baseDirectory, filename);

    // Check if the file exists
    await fs.promises.access(filePath, fs.constants.F_OK);

    // If the file exists, proceed with deletion
    await fs.promises.unlink(filePath);

    return { message: "File deleted successfully" };
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File does not exist
      console.error("File does not exist");
    } else {
      console.error("Error deleting file:", error);
      throw error;
    }
  }
};

exports.searchFiles = async (query) => {
  try {
    const files = await fs.readdir(baseDirectory);
    const decryptedFiles = files.map((filename) => encryptionUtil.decrypt(filename));
    // Perform the search based on the query
    const matchingFiles = decryptedFiles.filter((filename) => filename.includes(query));
    if (matchingFiles.length === 0) {
      return { message: "No matching files found!"}
    }
    return matchingFiles;
  } catch (error) {
    
  }
}
