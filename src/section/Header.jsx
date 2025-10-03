import { Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import MobileMenu from "../components/MobileMenu";

export default function Header() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Movie", path: "/movie" },
    { name: "Series", path: "/series" },
    { name: "Trending", path: "/trending" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dark/60 backdrop-blur-md shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm font-medium">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`relative transition-colors duration-300 ${
                        pathname === item.path
                          ? "text-accent"
                          : "text-gray-400 hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                      {/* underline animation */}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 bg-highlight transition-transform duration-300 ${
                          pathname === item.path
                            ? "scale-x-100"
                            : "group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                className="rounded-full bg-yellow-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:opacity-90 transition-all"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="rounded-full border-2 border-yellow-600 px-5 py-2 text-sm font-semibold text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all"
                to="/register"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
