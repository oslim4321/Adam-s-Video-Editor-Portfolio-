import React from "react";

const DesktopViewButton = () => {
  const handleClick = () => {
    const userAgent = window.navigator.userAgent;
    console.log(userAgent, "userAgent");
    // Check if the user agent contains the keyword "Mobile"
    const isMobile = /Mobile/.test(userAgent);
    console.log(isMobile, "isMobile");
    // If the user agent indicates a mobile device
    if (isMobile) {
      // Change the viewport meta tag to disable responsiveness
      const metaViewport = document.querySelector('meta[name="viewport"]');
      metaViewport.content = "width=1200, initial-scale=1.0";
    }
  };

  return (
    <section>
      <button onClick={handleClick}>Switch to Desktop View</button>
    </section>
  );
};

export default DesktopViewButton;
