import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden relative">
      {/* Tombol Hamburger → X */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center group"
      >
        {/* Baris atas */}
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 origin-center
      ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-2"}
    `}
        ></span>

        {/* Baris tengah */}
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 origin-center
      ${isOpen ? "opacity-0" : "opacity-100"}
    `}
        ></span>

        {/* Baris bawah */}
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 origin-center
      ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-2"}
    `}
        ></span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 space-y-1 bg-secondary rounded-lg shadow-lg p-2 z-50 transition-all">
          <li>
            <Link
              to="/"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/movie"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              Movie
            </Link>
          </li>
          <li>
            <Link
              to="/series"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              Series
            </Link>
          </li>
          <li>
            <Link
              to="/trending"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-primary"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
