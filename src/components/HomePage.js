import React, { useEffect, useRef } from "react";
import Line from "@/components/Line";

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
        className="w-full h-full object-cover"
        muted
        loop
        playsInline // added to enable autoplay on mobile devices
      >
        <source src="Videos/HeroBg-WA0039.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black  opacity-70"></div>

      <div className="absolute container inset-0 z-10 flex gap-y-6 flex-col items-start justify-center">
        <div className="text-white text-4xl md:text-7xl font-bold uppercase font-firaSans">
          Video production
        </div>
        <Line />
        <div className="text-white text-xl font-semibold">
          <p className="font text-lg">
            Our approach combines expertise & passion with a deep understanding
            of you and your audience to make videos that engage, inspire people
            to act.
          </p>
        </div>
        <button className="button w-48">Watch Videos</button>
      </div>
    </div>
  );
};

export default HomePage;
