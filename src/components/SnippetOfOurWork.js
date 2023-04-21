const SnippetOfOurWork = () => {
  return (
    <section className="md:h-full">
      <div className="container flexCenterk flex items-cenfter flex-col gap-y-10 py-20">
        <h2 className="font-helvetica text-3xl md:text-6xl font-bold text-center">
          SNIPPET FROM OUR PRODUCTIONS
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-6 place-items-center"> */}
        <div className="flex gap-x-5 md:justify-center items-center overflow-x-scroll lg:overflow-x-hidden  scroll-smooth snap-mandatory snap-x  no-scrollbar-white">
          <div className="flex-none w-full md:w-[600px] flex flex-col gap-y-5 h-full">
            <video
              className="w-full h-full object-cover"
              muted
              loop
              controls
              playsInline // added to enable autoplay on mobile devices
            >
              <source src="Videos/HeroBg-WA0039.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="BaseFont">EXCITING VIDEO EXAMPLE</h2>
            <p className="greyText">
              Forget about dramatic camera angles or exciting music – a good
              idea is what makes a video great, memorable and effective.
            </p>
          </div>
          <div className="flex-none w-full md:w-[600px] flex flex-col gap-y-5 h-full">
            <video
              className="w-full h-full object-cover"
              muted
              loop
              controls
              playsInline // added to enable autoplay on mobile devices
            >
              <source src="Videos/HeroBg-WA0039.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h2 className="BaseFont">EXCITING VIDEO EXAMPLE</h2>
            <p className="greyText">
              Forget about dramatic camera angles or exciting music – a good
              idea is what makes a video great, memorable and effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SnippetOfOurWork;
