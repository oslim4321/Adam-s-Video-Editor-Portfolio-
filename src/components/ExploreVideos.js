import Aside from "@/components/Aside";
import React, { useState } from "react";

const ExploreVideos = ({ videoItems, setplaylistId, loading }) => {
  const [sideBar, setsideBar] = useState(true);
  const [active, setactive] = useState("Commercials");

  function toggleSideBar() {
    setsideBar(!sideBar);
  }
  return (
    <>
      {/* open sidde bar button */}
      <div
        onClick={toggleSideBar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
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
      </div>
      <div className="grid grid-cols-12 ">
        {sideBar ? (
          <div className="col-span-2">
            <Aside
              setplaylistId={setplaylistId}
              active={active}
              setactive={setactive}
            />
          </div>
        ) : null}
        <div
          className={`p-1 max-w-[95%] mx-auto w-full  ${
            sideBar ? "col-span-10" : "col-span-12"
          }`}
        >
          <h1 className="my-2 text-3xl md: font-bold relative">
            <span className=" bg-gradient-to-r text-transparent bg-clip-text animate-gradient-x">
              {active} Videos
            </span>
          </h1>
          {/* scrolling grid */}
          {/* <div className="flex md:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 overflow-x-scroll md:overflow-hidden">
            {!loading ? (
              videoItems?.map((item) => (
                <div
                  key={item.id}
                  className="bg-white md:w-full shadow rounded-lg"
                >
                  <div className="bg-gray-200 h-64 md:w-full w-[300px]">
                    <iframe
                      className="w-full h-full object-cover "
                      // width="100"
                      // height="315"
                      src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                      title={item.snippet.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      // onLoad={onVideoLoad}
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h2>{item.snippet.title}</h2>
                    <p>{item.snippet.description.slice(0, 150)}...</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                loading...
              </div>
            )}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {!loading ? (
              videoItems?.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg">
                  <div className="bg-gray-200 h-64">
                    <iframe
                      className="w-full h-full object-cover"
                      src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                      title={item.snippet.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <h2>{item.snippet.title}</h2>
                    <p>{item.snippet.description.slice(0, 150)}...</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                loading...
              </div>
            )}
          </div>
          {/* <!-- Repeat this HTML for each product --> */}
        </div>
      </div>
    </>
  );
};

export default ExploreVideos;
