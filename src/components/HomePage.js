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
      >
        <source src="Videos/HeroBg-WA0039.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black  opacity-70"></div>

      <div className="absolute container inset-0 z-10 flex gap-y-6 flex-col items-start justify-center">
        <div className="text-white text-4xl md:text-7xl font-bold uppercase font-helvetica">
          Video production
        </div>
        <Line />
        <div className="text-white text-xl font-semibold capitalize">
          <p className="font text-lg">
            We Tell Stories and sell bussiness strategically with our video production services
          </p>
        </div>
      <button className="button bg-black text-white letterSpace">
  place a booking
</button>

      </div>
    </div>
  );
};

export default HomePage;
