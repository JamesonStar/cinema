export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/1">
      <form className="bg-gray-50 w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Enter your username"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-primary/100 hover:bg-primary/75 text-white font-semibold py-2 rounded-md transition-colors"
        >
          Login
        </button>

        <p className="text-center text-gray-600 text-sm">
          dont have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
