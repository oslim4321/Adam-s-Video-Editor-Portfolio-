import React, { useEffect, useRef } from "react";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.play();
  }, []);
  return (
    <div className="relative h-screen ">
      <video
        ref={videoRef}
        className="w-full h-full object-fill"
        muted
        loop
        playsInline // added to enable autoplay on mobile devices
      >
        <source src="Videos/HeroBg-WA0039.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black  opacity-70"></div>
      <div className="absolute container inset-0 z-10 flex flex-col items-start justify-center">
        <div className="text-white text-4xl md:text-7xl font-bold uppercase">
          Video production
        </div>
        <div className="text-white text-xl font-semibold">
          <p>
            We create story led video &amp; animation for innovators, educators
            &amp; change makers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
