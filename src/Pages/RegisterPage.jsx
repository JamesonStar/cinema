import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setMessage("✅ " + data.message);
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/1">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="p-2 border rounded-md"
        />

        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Register
        </button>

        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
}
