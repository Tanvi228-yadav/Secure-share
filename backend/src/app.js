import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRoutes from "./routes/authRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";



const app = express();


app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected successfully!" });
});

app.use(cors({
  origin: "http://localhost:3000", // change if your frontend runs on a different port
  credentials: true
}));

dotenv.config();
connectDB();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

app.use(errorHandler);

export default app;
