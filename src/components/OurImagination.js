import Line from "@/components/Line";

const OurImagination = () => {
  return (
    <section
      className="md:h-[40vh] py-3 bg-slate-8l00 ourImagination "
      style={{
        backgroundImage: "url('/images/imaginationBG.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
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
            <p className=" font-shadowsf text-3xl mb-3 text-h">PORTFOLIO</p>
          </div>
          <h2 className=" font-firaSansLight text-2xl md:text-4xl text-white font-bold">
            Here, you can find varieties of Video Projects we have delivered to
            our Clients globally.
          </h2>
        </div>
        <button className="button w-40">Explore Portfolio</button>
      </div>
    </section>
  );
};

export default OurImagination;
