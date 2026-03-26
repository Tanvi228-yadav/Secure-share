import express from "express";
import multer from "multer";
import { uploadFile, downloadFile } from "../controllers/fileController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
const upload = multer();

router.post("/upload", protect, upload.single("file"), uploadFile);
router.get("/download/:id", protect, downloadFile);

export default router;
