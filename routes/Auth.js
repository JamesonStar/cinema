import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;

    // Cek input
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password tidak cocok" });
    }

    // Cek email sudah digunakan belum
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah terdaftar" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Simpan user baru
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "Registrasi berhasil", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan server", error: error.message });
  }
});

export default router;
