// import React, { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// const DesktopViewAlert = () => {
//   const [isDesktopView, setIsDesktopView] = useState(false);

//   const handleToggleView = () => {
//     // Toggle between desktop view and mobile view
//     setIsDesktopView((prev) => !prev);
//     const metaViewport = document.querySelector('meta[name="viewport"]');
//     if (isDesktopView) {
//       // Enable responsiveness for mobile view
//       metaViewport.content = "width=device-width, initial-scale=1.0";
//     } else {
//       // Disable responsiveness for desktop view
//       metaViewport.content = "width=1200";
//     }
//   };

//   const userAgent = typeof window !== "undefined" && window.navigator.userAgent;

//   console.log(userAgent);

//   useEffect(() => {
//     setTimeout(() => {
//       const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Set the desired breakpoint for mobile devices
//       if (isMobile) {
//         const result = window.confirm(
//           "This website is best view on desktop mode would you like to switch to desktop view?"
//         );
//         if (result) {
//           handleToggleView();
//         }
//       }
//     }, 4000);
//   }, []);

//   return (
//     <>
//       <button
//         className="fixed top-[50%] right-0 p-3 z-50 bg-purple-500 text-white font-bold rounded-md"
//         onClick={handleToggleView}
//       >
//         {isDesktopView ? (
//           <i className="bi bi-phone-fill"></i>
//         ) : (
//           <i className="bi bi-pc-display-horizontal"></i>
//         )}
//       </button>

//       {/* Render other content */}
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(DesktopViewAlert), {
//   ssr: false, // Set ssr to false to avoid server-side rendering errors
// });

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DesktopViewAlert = () => {
  const [isDesktopView, setIsDesktopView] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [showToggle, setshowToggle] = useState(false);
  const isLaptop =
    typeof window !== "undefined" && /Mac|Windows/.test(navigator.userAgent);
  console.log(navigator.userAgent);
  useEffect(() => {
    if (!isLaptop) {
      setshowToggle(true);
    }
  }, []);

  const handleToggleView = () => {
    // Toggle between desktop view and mobile view
    setIsDesktopView((prev) => !prev);
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (isDesktopView) {
      // Enable responsiveness for mobile view
      metaViewport.content = "width=device-width, initial-scale=1.0";
    } else {
      // Disable responsiveness for desktop view
      metaViewport.content = "width=1200";
    }
  };

  const userAgent = typeof window !== "undefined" && window.navigator.userAgent;

  useEffect(() => {
    setTimeout(() => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Set the desired breakpoint for mobile devices
      if (isMobile) {
        const result = window.confirm(
          "This website is best view on desktop mode would you like to switch to desktop view?"
        );
        if (result) {
          setShowTutorial(true);
          if (showTutorial) {
            handleToggleView();
          }
        }
      }
    }, 4000);
  }, []);

  const handleHideTutorial = () => {
    setShowTutorial(false);
  };
  if (showToggle) {
    return (
      <div>
        {showTutorial && (
          <div className="z-50 absolute">
            <div
              onClick={handleHideTutorial}
              className="fixed inset-0 bg-gray-900 opacity-75"
            ></div>
            <div className="w-52 p-2 bg-white fixed top-[60%] right-0  shadow-lg border border-purple-600">
              <div className="tutorial-hand animate-bounce absolutee right-0">
                {/* Add "animate-bounce" class for bouncing animation */}
                <div className="text-right">
                  <i className="bi bi-hand-index-fill text-2xl text-purple-500 "></i>
                </div>
              </div>
              <p className="text-lg text-purple-700 font-semibold text-right w-full">
                Toggle to Switch View
              </p>
              <button
                onClick={handleHideTutorial}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out mt-5 absolute"
              >
                Got It!
              </button>
            </div>
          </div>
        )}

        <button
          className="fixed top-[50%] right-0 p-3 z-50 bg-purple-500 text-white font-bold rounded-md"
          onClick={handleToggleView}
        >
          {isDesktopView ? (
            <i className="bi bi-phone-fill"></i>
          ) : (
            <i className="bi bi-pc-display-horizontal"></i>
          )}
        </button>

        {/* Render other content */}
      </div>
    );
  }
};

export default dynamic(() => Promise.resolve(DesktopViewAlert), {
  ssr: false, // Set ssr to false to avoid server-side rendering errors
});
