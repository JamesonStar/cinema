export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/1">
      <form className="bg-gray-50 w-full max-w-sm p-6 rounded-lg shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>

        <div className="flex flex-col">
          <label htmlFor="username" className="mb-1 text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Choose a username"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
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
            placeholder="Create a password"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="mb-1 text-sm font-medium">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-primary/100 hover:bg-primary/75 text-white font-semibold py-2 rounded-md transition-colors"
        >
          Register
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
}
