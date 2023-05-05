import React, { useState } from "react";

const Aside = ({ setplaylistId }) => {
  const [active, setactive] = useState("Commercials");
  // transition-transform -translate-x-full sm:translate-x-0
  return (
    <aside
      id="default-sidebar"
      className=" h-screen bg-gray-50"
      aria-label="Sidebar"
    >
      <div className="h-full bg-gray-50 dark:bg-gray-800 ">
        <ul className="space-y-2 font-medium py-4">
          <li
            className="flex justify-center items-center"
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_COMMERCIALS);
              setactive("Commercials");
            }}
          >
            <div
              href="#"
              className={`flex items-center pr-2  py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Commercials" ? "bg-gray-200" : ""
              } `}
            >
              <i className="-ml-5 bi bi-camera-reels-fill"></i>
              <span className="hidden md:block ml-3">Commercials</span>
            </div>
          </li>

          <li
            className="flex justify-center items-center"
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_PROMOTION_VIDEO);
              setactive("Promotional Videos");
            }}
          >
            <div
              href="#"
              className={`flex items-center pr-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Promotional Videos" ? "bg-gray-200" : ""
              } `}
            >
              <i className="-ml-5 bi bi-camera-reels-fill"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Promotional Videos
              </span>
            </div>
          </li>
          <li
            className="flex justify-center items-center"
            onClick={() => {
              setplaylistId(process.env.NEXT_PUBLIC_JINGLE);
              setactive("Jingles");
            }}
          >
            <div
              href="#"
              className={`flex items-center pr-2 py-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 no-underline ${
                active === "Jingles" ? "bg-gray-200" : ""
              } `}
            >
              <i className="-ml-5 bi bi-camera-reels-fill"></i>
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
