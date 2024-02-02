const crypto = require("crypto");
require("dotenv").config();

const algorithm = process.env.ALGORITHM;
const secretKey = process.env.SECRET_KEY;
// console.log(secretKey, Buffer.from(secretKey, 'hex').length, "secret");

exports.encrypt = (text) => {
  try {
    const iv = crypto.randomBytes(16);
    if (Buffer.from(secretKey, "hex").length !== 32) {
      throw new Error("Invalid key length. Key must be 32 bytes.");
    }
    if (iv.length !== 16) {
      throw new Error("Invalid IV length. IV must be 16 bytes.");
    }
    const cipher = crypto.createCipheriv(
      algorithm,
      Buffer.from(secretKey, "hex"),
      iv
    );
    let encrypted = cipher.update(text, "utf-8", "hex");
    encrypted += cipher.final("hex");
    return iv.toString("hex") + encrypted;
  } catch (error) {
    console.error("Error Encrypting:", error);
    throw error;
  }
};

exports.decrypt = (text) => {
  try {
    const iv = Buffer.from(text.slice(0, 32), "hex");
    const encryptedData = text.slice(32);
    console.log(encryptedData, "Data");

    if (Buffer.from(secretKey, "hex").length !== 32) {
      throw new Error("Invalid key length. Key must be 32 bytes.");
    }
    if (iv.length !== 16) {
      throw new Error("Invalid initialization vector length");
    }

    const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(secretKey, "hex"),
      iv
    );
    let decrypted = decipher.update(encryptedData, "hex", "utf-8");
    decrypted += decipher.final("utf-8");

    console.log(decrypted);

    return decrypted;
  } catch (error) {
    console.error("Error decrypting:", error);
    throw error;
  }
};
