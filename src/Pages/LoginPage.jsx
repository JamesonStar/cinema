import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = e => setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', // penting: biar cookie httpOnly diterima
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (!res.ok) {
        setErr(data.msg || 'Login failed');
        setLoading(false);
        return;
      }
      // sukses: server meng-set cookie; kita bisa redirect
      navigate('/');
    } catch (error) {
      console.error(error);
      setErr('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/1">
      <form onSubmit={onSubmit} className="bg-gray-50 w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        {err && <div className="text-red-500 text-sm">{err}</div>}

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm font-medium">Username</label>
          <input id="username" value={form.username} onChange={onChange} type="text" placeholder="Enter your username" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-medium">Password</label>
          <input id="password" value={form.password} onChange={onChange} type="password" placeholder="Enter your password" className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" disabled={loading} className="bg-primary/100 hover:bg-primary/75 text-white font-semibold py-2 rounded-md transition-colors">
          {loading ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-center text-gray-600 text-sm">
          dont have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}
