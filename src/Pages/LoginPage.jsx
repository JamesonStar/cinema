export default function Login() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(`Login success! Welcome ${data.username}`);
      } else {
        setMessage(`❌ ${data.error}`);
      }
    } catch (err) {
      setMessage("⚠️ Server error.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={Login}>
        <div className="bg-white w-90 h-auto mx-auto p-4 flex flex-col gap-4 rounded-md">
          <input
            type="text"
            placeholder="Username"
            className="p-1"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-1"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-black p-1 rounded-md text-white">
            Login
          </button>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}
