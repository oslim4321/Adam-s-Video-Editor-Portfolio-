import Link from "next/link";
import React, { useState } from "react";
// import Button from "./Button";

const Navbar = () => {
  const [showList, setshowList] = useState(false);
  const [showDropDown, setshowDropDown] = useState(false);
  return (
    <header>
      <nav className="flex px-4 items-center justify-between mx-auto max-w-7xl fixedd top-0 right-0 left-0 z-[999] flex-wrap-reverse">
        <div className="text-lg font-bold md:py-0 py-4 flex justify-between w-40">
          <img src="/images/Logo with text.png" alt="" />
        </div>

        <ul
          className={`md:px-2 ml-auto md:flex justify-center items-center md:space-x-2 absolute md:relative top-full left-0 right-0  py-4 transition duration-300
           transform shadow-lg md:shadow-[0]
                       ${
                         showList
                           ? "translate-y-0"
                           : "-translate-y-[1000px] md:translate-y-0"
                       }
                  `}
        >
          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-purple-500"
            >
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-purple-500"
            >
              <span>About Us</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-purple-500"
            >
              <span>Portifoloio</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-purple-500"
            >
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex md:inline-flex p-4 items-center hover:text-purple-500"
            >
              <span>Blog</span>
            </Link>
          </li>
        </ul>

        <i
          onClick={() => setshowList((prev) => !prev)}
          className="bi bi-list md:hidden text-2xl font-extrabold cursor-pointer"
        ></i>
      </nav>
    </header>
  );
};

export default Navbar;
