import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);

    // Client-side validation
    const { username, email, password, confirmPassword } = formData;

    if (!username.trim() || !email.trim() || !password || !confirmPassword) {
      setMessage("❌ Semua field wajib diisi");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setMessage("❌ Password tidak cocok");
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage("❌ Password minimal 6 karakter");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("https://8619d4a4cd35.ngrok-free.app/api/auth/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          username: username.trim(), 
          email: email.trim().toLowerCase(), 
          password, 
          confirmPassword 
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Handle validation errors from server
        if (data.errors) {
          throw new Error(data.errors.join(", "));
        }
        throw new Error(data.message || `Error: ${res.status}`);
      }

      setMessage("✅ " + data.message);
      // Clear form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.error("Register error:", err);
      setMessage("❌ " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // RETURN STATEMENT YANG BENAR - dalam function component
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/1">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

        {message && (
          <div
            className={`text-sm ${
              message.includes("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            pattern=".+@.+"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 invalid:focus:ring-pink-700 invalid:focus:border-pink-700"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="mb-1 text-sm font-medium">
            Confirm Password
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-accent/100 hover:bg-accent/75 text-white font-semibold py-2 rounded-md transition-colors"
        >
          {isLoading ? "Loading..." : "Register"}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
} // JANGAN LUPA TUTUP FUNCTION INI
