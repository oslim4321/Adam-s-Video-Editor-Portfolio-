import Link from "next/link";
import React from "react";

const Aside = () => {
  // transition-transform -translate-x-full sm:translate-x-0
  return (
    <aside
      id="default-sidebar"
      class=" h-screen bg-gray-50"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pyd-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
        <ul class="space-y-2 font-medium">
          <li>
            <Link
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span class="hidden md:block ml-3">Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span class="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Users
              </span>
            </Link>
          </li>
          <li>
            <Link
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <i className="bi bi-camera-reels-fill"></i>
              <span class="hidden md:block flex-1 ml-3 whitespace-nowrap">
                Products
              </span>
            </Link>
          </li>
          {/* <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </a>
          </li> */}
          {/* <li>
            <a
              href="#"
              class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </a>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
