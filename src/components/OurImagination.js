import Line from "@/components/Line";
import Link from "next/link";

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
            <div className="absolute left-10 hidden md:block">
              <Line />
            </div>
            <p className="font-helvetica font-shadow text-3xl mb-3 text-white">
              PORTFOLIO
            </p>
          </div>
          <h2 className=" text-1xl md:text-3xl text-white font-bold">
            Here, you can find varieties of Video Projects we have delivered to
            our Clients globally.
          </h2>
        </div>
        <Link className="no-underline" href="exploreVideos">
          <button className="button letterSpace rounded-md">
            Explore Portfolio
          </button>
        </Link>
      </div>
    </section>
  );
};

export default OurImagination;
