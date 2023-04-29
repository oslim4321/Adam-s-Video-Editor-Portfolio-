import React, { useEffect, useRef } from "react";
import Line from "@/components/Line";

const HomePage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video when the component mounts
    videoRef.current.play();
  }, []);
  return (
    <div className="relative h-screen md:h-full ">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline // added to enable autoplay on mobile devices
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      >
        <source src="Videos/HeroBg-WA0039.mp4" type="video/mp4" />
        <img src="images/IMG-20230410-WA0010.jpg" alt="Fallback image" />
      </video>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black  opacity-70"></div>

      <div className="absolute container top-0 left-0 right-0 bottom-0 z-10 flex  flex-col items-start justify-center">
        <div className="text-white text-4xl md:text-7xl font-bold uppercase font-helvetica">
          Video production
        </div>
        <div className="my-4">
          <Line />
        </div>
        <div className="text-white text-xl font-semibold capitalize">
          <p className="font text-lg mb-3">
            We deliver Creative Storytelling and strategic Business Promotions
            with our Video production solutions.
          </p>
        </div>
        <button className="button text-white letterSpace rounded-md">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default HomePage;
