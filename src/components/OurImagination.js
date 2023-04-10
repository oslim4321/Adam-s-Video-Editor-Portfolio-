import Line from "@/components/Line";

const OurImagination = () => {
  return (
    <section
      className="md:h-[60vh] py-3 bg-slate-8l00 ourImagination "
      style={{
        backgroundImage: "url('/images/IMG-20230410-WA0010.jpg')",
        backgroundRepeat: "none",
        backgroundPosition: "fixed",
        objectFit: "fill",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center items-start flex-col gap-y-8 h-full container">
        <div>
          <div className="flex items-center gap-x-4">
            <div className="absolute left-10">
              <Line />
            </div>
            <p className=" font-shadows text-3xl mb-3 text-white">about us</p>
          </div>
          <h2 className=" font-firaSansLight text-3xl md:text-6xl text-white font-bold">
            OUR IMAGINATION ON SERVE OF YOUR NEEDS
          </h2>
        </div>
        <button className="button w-40">Explore Portfolio</button>
      </div>
    </section>
  );
};

export default OurImagination;
