const crypto = require('crypto');
require("dotenv").config();

const algorithm = process.env.ALGORITHM;
const secretKey = process.env.SECRET_KEY;

exports.encrypt = (text) => {
  const iv = crypto.randomBytes(16); // Generate a random IV for each encryption
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);
  let encrypted = cipher.update(text, 'utf-8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + encrypted;
};

exports.decrypt = (text) => {
  const iv = Buffer.from(text.slice(0, 32), 'hex'); // Extract IV from the first 32 characters
  const encryptedText = text.slice(32); // Extract the rest as encrypted text
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
  decrypted += decipher.final('utf-8');
  return decrypted;
};
