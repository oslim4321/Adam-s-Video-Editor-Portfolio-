import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const DesktopViewAlert = () => {
  const showDesktopViewAlert = () => {
    // Show the alert after a delay of 4 seconds (4000 milliseconds)
    setTimeout(() => {
      const result = window.confirm(
        "Would you like to switch to desktop view?"
      );
      if (result) {
        // Change the viewport meta tag to disable responsiveness
        const metaViewport = document.querySelector('meta[name="viewport"]');
        metaViewport.content = "width=1200, initial-scale=1.0";
      }
    }, 4000);
  };
  function fitToScreen() {
    window.resizeTo(screen.width, screen.height);
  }

  useEffect(() => {
    // Call the function to show the alert when the component mounts, but only on mobile devices
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768; // Set the desired breakpoint for mobile devices
    if (isMobile) {
      showDesktopViewAlert();
      fitToScreen();
    }
  }, []);

  return null;
};

export default dynamic(() => Promise.resolve(DesktopViewAlert), {
  ssr: false, // Set ssr to false to avoid server-side rendering errors
});
