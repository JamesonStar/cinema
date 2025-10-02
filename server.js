// ===== server.js =====
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";


// Load environment variables
dotenv.config();

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

// ===== Connect to MongoDB =====
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ===== Middlewares =====
app.use(express.json()); // parse JSON body
app.use(cookieParser()); // parse cookies
app.use(
  cors({
    origin: FRONTEND_ORIGIN, // frontend React jalan di port 5173
    credentials: true, // allow cookies
  })
);

// ===== Routes =====
import authRoutes from "./routes/Auth.js"; // pastikan nama file persis: Auth.js
app.use("/api/auth", authRoutes);


// ===== Health Check (optional) =====
app.get("/", (req, res) => {
  res.json({ message: "API is running successfully 🚀" });
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
