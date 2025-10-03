import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
      const res = await fetch("https://2ef21abc5019.ngrok-free.app/api/auth/register", {
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
          throw new Error(data.errors.join(', '));
        }
        throw new Error(data.message || `Error: ${res.status}`);
      }
      
      setMessage("✅ " + data.message);
      // Clear form
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">Register</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        
        <button
          type="submit"
          disabled={isLoading}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Loading..." : "Register"}
        </button>

        {message && (
          <p className={`text-center mt-2 ${
            message.includes("✅") ? "text-green-600" : "text-red-600"
          }`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
} // JANGAN LUPA TUTUP FUNCTION INI