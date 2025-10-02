import { Link } from "react-router-dom";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 bg-dark/90 backdrop-blur-lg z-10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" to="/">
              <span className="sr-only">Home</span>
              <Logo />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/film"
                  >
                    {" "}
                    Film{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/series"
                  >
                    {" "}
                    Series{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/trending"
                  >
                    {" "}
                    Trending{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/profile"
                  >
                    {" "}
                    Profile{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="rounded-md bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                  to="/login"
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link
                    className="rounded-md px-5 py-2.5 border-2 border-yellow-600 text-sm font-medium text-yellow-600"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
