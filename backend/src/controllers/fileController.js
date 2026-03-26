import { encryptStream, decryptStream } from "../utils/cryptoUtils.js";
import File from "../models/File.js";
import mongoose from "mongoose";
import grid from "gridfs-stream";
import fs from "fs";

const conn = mongoose.connection;
let gfs;
conn.once("open", () => (gfs = grid(conn.db, mongoose.mongo)));

export const uploadFile = async (req, res) => {
  const { cipher, iv } = encryptStream(req.file.stream);
  const writeStream = gfs.createWriteStream({ filename: req.file.originalname });
  req.file.stream.pipe(cipher).pipe(writeStream);

  writeStream.on("close", async (file) => {
    const newFile = await File.create({
      filename: file.filename,
      owner: req.user.id,
      iv: iv.toString("hex"),
      mimetype: req.file.mimetype,
      size: req.file.size,
    });
    res.json({ message: "File uploaded securely", fileId: newFile._id });
  });
};

export const downloadFile = async (req, res) => {
  const fileDoc = await File.findById(req.params.id);
  if (!fileDoc) return res.status(404).json({ error: "File not found" });

  const readStream = gfs.createReadStream({ filename: fileDoc.filename });
  const decipher = decryptStream(fileDoc.iv);
  res.set("Content-Type", fileDoc.mimetype);
  readStream.pipe(decipher).pipe(res);
};
