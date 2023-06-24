import Link from "next/link";
import { useState } from "react";
import { NavList } from "../../lib/NavList";
import ScrollToTopButton from "./ScrollToTopButton";
import DesktopViewButton from "./DesktopViewButton ";
import { useEffect } from "react";

function Navbar() {
  const [showList, setShowList] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleList = () => {
    setIsAnimating(true);
    setShowList((prev) => !prev);
  };

  useEffect(() => {
    if (showList) {
      // Delay the removal of the element to preserve the transition animation
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Adjust the timeout duration based on your transition duration

      return () => clearTimeout(timeout);
    }
  }, [showList]);

  return (
    <>
      <div className="mb-10"></div>
      <nav className=" bg-slate-800 text-white shadow  fixed right-0 left-0 top-0 z-50 ">
        <div className="max-w-7xl py-1 mx-auto px-2 sm:px-6 lg:px-8 relative">
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
              <div className="ml-10 no-underline flex items-baseline space-x-4">
                {NavList.map((elem) => (
                  <Link
                    key={elem.text}
                    href={elem.url || "#"}
                    className="text-white text-lg hover:text-gray-400 px-3 py-2 rounded-md font-medium unOrderList no-underline"
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
                // type="button"
                className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-800 focus:outline-none"
                // aria-expanded="false"
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
        {/* <div className={`${showList ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavList.map((elem) => (
              <Link
                key={elem.text}
                href={elem.url || "#"}
                className="text-white no-underline text-lg hover:text-gray-400 block px-3 py-2 rounded-md font-josefin_bold font-medium"
              >
                {elem.text}
              </Link>
            ))}
          </div>
        </div> */}
        <div
          className={`md:hidden transition-transform ${
            showList ? "translate-x-0" : "-translate-x-full"
          } ${isAnimating ? "ease-in-out duration-300" : ""}`}
        >
          {showList && (
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NavList.map((elem) => (
                <Link
                  key={elem.text}
                  href={elem.url || "#"}
                  className="text-white no-underline text-lg hover:text-gray-400 block px-3 py-2 rounded-md font-josefin_bold font-medium"
                >
                  {elem.text}
                </Link>
              ))}
            </div>
          )}
        </div>

        <ScrollToTopButton />
        <DesktopViewButton />
      </nav>
    </>
  );
}
export default Navbar;
