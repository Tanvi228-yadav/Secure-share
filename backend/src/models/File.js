import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  filename: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  iv: String,
  mimetype: String,
  size: Number,
  uploadDate: { type: Date, default: Date.now },
});

export default mongoose.model("File", fileSchema);
