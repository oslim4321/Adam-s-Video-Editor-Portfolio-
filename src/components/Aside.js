import Link from "next/link";
import React, { useState } from "react";

const Aside = ({ setplaylistId }) => {
  const myVariable = process.env.NEXT_PUBLIC_COMMERCIALS;

  const [active, setactive] = useState("Commercials");
  console.log(myVariable, ";ee");
  // transition-transform -translate-x-full sm:translate-x-0
  return (
    <aside
      id="default-sidebar"
      className=" h-screen bg-gray-50"
      aria-label="Sidebar"
    >
      <div className="h-full  overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        <ul className="space-y-2 font-medium py-4">
          <li
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_COMMERCIALS);
              setactive("Commercials");
            }}
          >
            <Link
              href="#"
              className={`flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Commercials" ? "bg-gray-200" : ""
              } `}
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span className="hidden md:block ml-3">Commercials</span>
            </Link>
          </li>

          <li
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_PROMOTION_VIDEO);
              setactive("Promotional Videos");
            }}
          >
            <Link
              href="#"
              className={`flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Promotional Videos" ? "bg-gray-200" : ""
              } `}
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Promotional Videos
              </span>
            </Link>
          </li>
          <li
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_JINGLE);
              console.log(process.env.NEXT_PUBLIC_JINGLE, "me");
              setactive("Jingles");
            }}
          >
            <Link
              href="#"
              class={`flex items-center py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Jingles" ? "bg-gray-200" : ""
              } `}
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Jingles
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
