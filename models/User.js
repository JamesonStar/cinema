// models/user.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { 
      type: String, 
      required: [true, "Username wajib diisi"],
      unique: true,
      trim: true,
      minlength: [3, "Username minimal 3 karakter"],
      maxlength: [30, "Username maksimal 30 karakter"]
    },
    email: { 
      type: String, 
      required: [true, "Email wajib diisi"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Format email tidak valid"]
    },
    password: { 
      type: String, 
      required: [true, "Password wajib diisi"],
      minlength: [6, "Password minimal 6 karakter"]
    },
    role: { 
      type: String, 
      enum: ["user", "admin"], 
      default: "user" 
    },
  },
  { 
    timestamps: true 
  }
);

export default mongoose.model("User", userSchema);