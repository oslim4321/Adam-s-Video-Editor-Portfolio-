import Aside from "@/components/Aside";
import React from "react";

const exploreVideos = () => {
  const products = [
    { id: 1, name: "Product 1", description: "Description for product 1" },
    { id: 2, name: "Product 2", description: "Description for product 2" },
    { id: 3, name: "Product 3", description: "Description for product 3" },
    { id: 4, name: "Product 4", description: "Description for product 4" },
    { id: 5, name: "Product 5", description: "Description for product 5" },
    { id: 6, name: "Product 6", description: "Description for product 6" },
    { id: 7, name: "Product 7", description: "Description for product 7" },
    { id: 8, name: "Product 8", description: "Description for product 8" },
  ];
  return (
    <>
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}
      <div className="grid grid-cols-12 ">
        <div className="col-span-2">
          <Aside />
        </div>
        <div className="p-1 max-w-[95%] mx-auto w-full col-span-10">
          <div className="flex md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-scroll md:overflow-hidden">
            <div className="bg-white md:w-full shadow rounded-lg">
              <div className="bg-gray-200 h-64 md:w-full w-[250px]"></div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">Product 1</h3>
                <p className="text-gray-500 mt-2">
                  Description of product 1 goes here.
                </p>
                <p className="text-gray-900 font-medium mt-2">$19.99</p>
              </div>
            </div>

            <div className="bg-white md:w-full shadow rounded-lg">
              <div className="bg-gray-200 h-64 md:w-full w-[250px]"></div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">Product 2</h3>
                <p className="text-gray-500 mt-2">
                  Description of product 2 goes here.
                </p>
                <p className="text-gray-900 font-medium mt-2">$29.99</p>
              </div>
            </div>

            <div className="bg-white md:w-full shadow rounded-lg">
              <div className="bg-gray-200 h-64 md:w-full w-[250px]"></div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">Product 3</h3>
                <p className="text-gray-500 mt-2">
                  Description of product 3 goes here.
                </p>
                <p className="text-gray-900 font-medium mt-2">$39.99</p>
              </div>
            </div>

            <div className="bg-white md:w-full shadow rounded-lg">
              <div className="bg-gray-200 h-64 md:w-full w-[250px]"></div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">Product 4</h3>
                <p className="text-gray-500 mt-2">
                  Description of product 4 goes here.
                </p>
                <p className="text-gray-900 font-medium mt-2">$49.99</p>
              </div>
            </div>
          </div>

          {/* <!-- Repeat this HTML for each product --> */}
        </div>
      </div>
    </>
  );
};

export default exploreVideos;
