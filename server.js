// ===== server.js =====
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// ===== CONFIG =====
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// ===== MIDDLEWARES (URUTAN PENTING!) =====
app.use(express.json()); // harus PALING ATAS
app.use(express.urlencoded({ extended: true })); // biar bisa baca form-data juga
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Log semua request biar kelihatan
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  console.log("📩 Body:", req.body);
  next();
});

// ===== MONGODB =====
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Di server.js, setelah mongoose.connect
mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('✅ MongoDB connected successfully');
});

// ===== ROUTES =====
import authRoutes from "./routes/Auth.js";
app.use("/api/auth", authRoutes);

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
