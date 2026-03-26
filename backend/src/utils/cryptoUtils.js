import crypto from "crypto";

const algorithm = "aes-256-gcm";

export const encryptStream = (inputStream) => {
  const iv = crypto.randomBytes(16);
  const key = Buffer.from(process.env.ENCRYPTION_KEY);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  return { cipher, iv };
};

export const decryptStream = (iv) => {
  const key = Buffer.from(process.env.ENCRYPTION_KEY);
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(iv, "hex"));
  return decipher;
};
