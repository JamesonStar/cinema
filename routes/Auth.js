// routes/Auth.js
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js"; // Saya Konfirmasi bahwa yang betul adalah huruf besar, bukan kecil
import { authMiddleware } from "../middleware/auth.js";
import dotenv from "dotenv";



const router = express.Router();
dotenv.config();


router.post("/register", async (req, res) => {
  try {
    console.log("📥 Request body:", req.body); // Debug log

    const { username, email, password, confirmPassword } = req.body;

    // Validasi
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ 
        message: "Semua field wajib diisi",
        details: { username: !!username, email: !!email, password: !!password, confirmPassword: !!confirmPassword }
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password tidak cocok" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password minimal 6 karakter" });
    }

    // Cek user existing
    const existingUser = await User.findOne({ 
      $or: [{ email }, { username }] 
    });
    
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email sudah terdaftar" });
      }
      if (existingUser.username === username) {
        return res.status(400).json({ message: "Username sudah digunakan" });
      }
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Buat user baru
    const newUser = new User({
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    });

    // Simpan ke database
    const savedUser = await newUser.save();
    console.log("✅ User saved:", savedUser);

    // Response tanpa password
    const userResponse = {
      id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      role: savedUser.role,
      createdAt: savedUser.createdAt
    };

    res.status(201).json({ 
      message: "Registrasi berhasil", 
      user: userResponse 
    });

  } catch (error) {
    console.error("❌ Registration error:", error);
    
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({ 
        message: "Data tidak valid", 
        errors 
      });
    }
    
    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({ 
        message: "Email atau username sudah terdaftar" 
      });
    }

    res.status(500).json({ 
      message: "Terjadi kesalahan server", 
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username dan password wajib diisi" });
    }

    // Cari user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Username atau password salah" });
    }

    // Bandingkan password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Username atau password salah" });
    }

    // Buat JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // Set cookie httpOnly
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // jika production, set secure true (HTTPS)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 hari
    });

    // Kirim response
    res.json({
      message: "Login berhasil",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// Route untuk mendapatkan profile user (contoh route yang dilindungi)
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout berhasil" });
});

export default router;