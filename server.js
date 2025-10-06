// ===== server.js =====
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// Hapus import cors

// ===== CONFIG =====
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Validasi environment variables
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("❌ JWT_SECRET is not defined in .env file");
  process.exit(1);
}

// ===== MANUAL CORS MIDDLEWARE =====
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173", 
  "https://8619d4a4cd35.ngrok-free.app",
  "https://2ef21abc5019.ngrok-free.app"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Check if the request origin is in the allowed list
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});

// ===== MIDDLEWARES =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Request logging middleware
app.use((req, res, next) => {
  console.log("➡️", req.method, req.url);
  console.log("🌐 Origin:", req.headers.origin);
  if (Object.keys(req.body).length > 0) {
    console.log("📩 Body:", req.body);
  }
  next();
});

// ===== MONGODB CONNECTION =====
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });

// MongoDB event handlers
mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected');
});

// ===== ROUTES =====
import authRoutes from "./routes/Auth.js";
app.use("/api/auth", authRoutes);

// ===== HEALTH CHECK & TEST ROUTES =====
app.get("/", (req, res) => {
  res.json({ 
    message: "Cinema API is running 🚀",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy",
    timestamp: new Date().toISOString(),
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected"
  });
});

// ===== 404 HANDLER =====
app.use((req, res, next) => {
  res.status(404).json({ 
    message: "Route not found",
    path: req.originalUrl,
    method: req.method
  });
});

// ===== GLOBAL ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err);
  res.status(500).json({ 
    message: "Internal Server Error",
    error: process.env.NODE_ENV === 'production' ? {} : err.message
  });
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`🎬 ==================================`);
  console.log(`🎬 Cinema API Server Started`);
  console.log(`🎬 ==================================`);
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`✅ Ngrok: https://8619d4a4cd35.ngrok-free.app`);
  console.log(`✅ CORS enabled for: ${allowedOrigins.join(', ')}`);
  console.log(`🎬 ==================================`);
});