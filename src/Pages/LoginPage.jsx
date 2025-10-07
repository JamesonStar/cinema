import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const onChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch(
        "https://350fadaf5179.ngrok-free.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(form),
        }
      );

      if (
        !res.ok &&
        !res.headers.get("content-type")?.includes("application/json")
      ) {
        throw new Error(`Server error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Login sukses - update auth context
      console.log("✅ Login successful:", data);
      login(data.user); // Set user in context

      // Redirect ke home
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      if (
        error.message.includes("Failed to fetch") ||
        error.message.includes("NetworkError")
      ) {
        setErr(
          "Tidak dapat terhubung ke server. Pastikan backend berjalan dan koneksi internet stabil."
        );
      } else {
        setErr(error.message || "Terjadi kesalahan saat login");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/1">
      <form
        onSubmit={onSubmit}
        className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Login
        </h1>

        {err && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{err}</span>
          </div>
        )}

        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Username atau Email
          </label>
          <input
            id="username"
            value={form.username}
            onChange={onChange}
            type="text"
            placeholder="Masukkan username atau email"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            value={form.password}
            onChange={onChange}
            type="password"
            placeholder="Masukkan password"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-gray-600 text-sm mt-4">
          Tidak punya akun?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Daftar di sini
          </Link>
        </p>
      </form>
    </div>
  );
}
