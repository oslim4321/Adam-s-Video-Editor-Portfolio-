import Link from "next/link";
import { useState } from "react";
import { NavList } from "../../lib/NavList";

function Navbar() {
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl py-4 mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                className="block lg:hidden w-28"
                src="/images/Logo with text.png"
                alt="Workflow"
              />
              <img
                className="hidden lg:block w-28"
                src="/images/Logo with text.png"
                alt="Workflow"
              />
            </Link>
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <div className="ml-10 flex items-baseline space-x-4">
              {NavList.map((elem) => (
                <Link
                  key={elem.text}
                  href="/blog"
                  className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium unOrderList"
                >
                  {elem.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Hamburger menu */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleList}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${showList ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${showList ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`${showList ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavList.map((elem) => (
            <Link
              key={elem.text}
              href="/blog"
              className="text-gray-800 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              {elem.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
