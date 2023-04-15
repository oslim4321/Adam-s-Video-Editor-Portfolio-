import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DesktopViewAlert = () => {
  const [isDesktopView, setIsDesktopView] = useState(false);

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

  console.log(userAgent);

  useEffect(() => {
    setTimeout(() => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Set the desired breakpoint for mobile devices
      if (isMobile) {
        const result = window.confirm(
          "Would you like to switch to desktop view?"
        );
        if (result) {
          handleToggleView();
        }
      }
    }, 4000);
  }, []);

  return (
    <>
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
    </>
  );
};

export default dynamic(() => Promise.resolve(DesktopViewAlert), {
  ssr: false, // Set ssr to false to avoid server-side rendering errors
});

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

//   const isMobileDevice = () => {
//     const userAgent =
//       typeof window !== "undefined" && window.navigator.userAgent;
//     const mobileKeywords = [
//       "Mobi",
//       "Android",
//       "webOS",
//       "iPhone",
//       "iPad",
//       "iPod",
//       "BlackBerry",
//       "Windows Phone",
//     ];
//     return mobileKeywords.some((keyword) => userAgent.indexOf(keyword) > -1);
//   };

//   useEffect(() => {
//     if (isMobileDevice()) {
//       // Hide the button if accessed from a mobile device
//       setIsDesktopView(true);
//     } else {
//       // Show the button if accessed from a desktop/laptop
//       setIsDesktopView(false);
//     }
//   }, []);

//   return (
//     <>
//       {!isDesktopView && (
//         <button
//           className="fixed top-40 right-0 p-4 bg-blue-500 text-white font-bold rounded-md"
//           onClick={handleToggleView}
//         >
//           <i className="bi bi-phone-fill"></i>
//         </button>
//       )}
//     </>
//   );
// };

// export default dynamic(() => Promise.resolve(DesktopViewAlert), {
//   ssr: false, // Set ssr to false to avoid server-side rendering errors
// });
