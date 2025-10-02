import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="block md:hidden relative">
      {/* Tombol Hamburger → X */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-8 h-8 flex flex-col justify-center items-center group"
      >
        {/* Baris atas */}
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 
            ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}
          `}
        ></span>

        {/* Baris tengah */}
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 
            ${isOpen ? "opacity-0" : "opacity-100"}
          `}
        ></span>

        {/* Baris bawah */}
        <span
          className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 
            ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}
          `}
        ></span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute right-0 mt-2 w-40 space-y-1 bg-gray-800 rounded-lg shadow-lg p-2 z-50">
          <li>
            <Link
              to="/"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/film"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Film
            </Link>
          </li>
          <li>
            <Link
              to="/series"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Series
            </Link>
          </li>
          <li>
            <Link
              to="/trending"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Trending
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="block rounded-md px-4 py-2 text-sm text-white hover:bg-gray-700"
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
