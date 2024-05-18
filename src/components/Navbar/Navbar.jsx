import { useState } from "react";
import { navLinks } from "../../constants/navlinks";
import { Link, useLocation } from "react-router-dom";
import myImage from "../../assets/img/logo.png";
import myImage2 from "../../assets/img/logo-2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-10 top-0">
      <div className="mx-auto max-w-7xl px-2 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-blue-900 ring-1 ring-blue-600  hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset "
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  class=" h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "" : "hidden"
            } sm:flex  flex-1 items-center justify-center sm:items-stretch sm:justify-between`}
          >
            <div className="flex flex-shrink-0 items-center">
              <img className="h-14" src={myImage} alt="" />
              <img className="h-14 ms-4" src={myImage2} alt="" />
            </div>
            <div className="hidden sm:ml-6 my-auto  sm:block">
              <div className="flex space-x-4">
                {navLinks.map((nav, index) => (
                  <Link
                    to={nav.link}
                    key={nav.id}
                    className={`${
                      location.pathname === nav.link
                        ? "bg-orange-500 text-white"
                        : "text-black hover:bg-blue-900 hover:text-white"
                    } block rounded-md px-3 py-2 text-base font-medium`}
                    aria-current={
                      location.pathname === nav.link ? "page" : undefined
                    }
                  >
                    {nav.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden ${isMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navLinks.map((nav, index) => (
            <Link
              to={nav.link}
              key={nav.id}
              className={`${
                location.pathname === nav.link
                  ? "bg-orange-500 text-white"
                  : "text-black hover:bg-blue-900 hover:text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
              aria-current={location.pathname === nav.link ? "page" : undefined}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
