import React, { useState } from "react";

const Aside = ({ setplaylistId, active, setactive }) => {
  // transition-transform -translate-x-full sm:translate-x-0
  return (
    <aside
      id="default-sidebar"
      className=" h-screen bg-gray-50"
      aria-label="Sidebar"
    >
      <div className="h-full bg-gray-50 dark:bg-gray-800 px-2">
        <ul className="space-y-2 font-medium py-4">
          <li
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_COMMERCIALS);
              setactive("Commercials");
            }}
          >
            <div
              className={`flex items-center justify-center md:justify-start cursor-pointer -ml-5 px-1 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Commercials" ? "bg-gray-200" : ""
              } `}
            >
              <i className=" text-lg bi bi-camera-reels-fill"></i>
              <span className="hidden md:block ml-3">Commercials</span>
            </div>
          </li>

          <li
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_PROMOTION_VIDEO);
              setactive("Promotional Videos");
            }}
          >
            <div
              className={`flex items-center justify-center md:justify-start cursor-pointer -ml-5 px-1 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Promotional Videos" ? "bg-gray-200" : ""
              } `}
            >
              <i className=" text-lg bi bi-play-btn"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Promotional Videos
              </span>
            </div>
          </li>
          <li
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_JINGLE);
              setactive("Jingles");
            }}
          >
            <div
              className={`flex items-center justify-center md:justify-start cursor-pointer -ml-5 px-1 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Jingles" ? "bg-gray-200" : ""
              } `}
            >
              <i className=" text-lg bi bi-bell-fill"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Jingles
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
