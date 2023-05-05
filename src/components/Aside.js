import Link from "next/link";
import React from "react";

const Aside = ({ setplaylistId }) => {
  // transition-transform -translate-x-full sm:translate-x-0
  return (
    <aside
      id="default-sidebar"
      className=" h-screen bg-gray-50"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pyd-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span className="hidden md:block ml-3">Post Production</span>
            </Link>
          </li>

          <li
            onClick={() => setplaylistId("PLAmG0Hd23HiJ3YeDhx5Yqdt--r998WcTO")}
          >
            <Link
              href="#"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Production
              </span>
            </Link>
          </li>
          <li
            onClick={() => setplaylistId("PLAmG0Hd23HiJHWtZyNg0THoD1JHVy0HPW")}
          >
            <Link
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span className="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Next Production
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
