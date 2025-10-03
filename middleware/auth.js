// middleware/auth.js
import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  // Get token dari cookie atau Authorization header
  const token = req.cookies?.token || 
                req.headers?.authorization?.split(" ")[1] || 
                req.headers?.Authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error("❌ Token verification error:", err.message);
    
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }
    
    return res.status(401).json({ message: "Invalid token" });
  }
}

// Optional: Middleware untuk role-based access
export function requireRole(role) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Authentication required" });
    }
    
    if (req.user.role !== role && req.user.role !== 'admin') {
      return res.status(403).json({ message: "Insufficient permissions" });
    }
    
    next();
  };
}