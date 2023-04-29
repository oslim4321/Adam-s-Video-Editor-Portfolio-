import Line from "@/components/Line";
import Image from "next/image";

const MyServices = () => {
  return (
    <section>
      <h1 className=" font-thin bigText text-center capitalize mb-3">
        Our Services
      </h1>
      <div className="container grid py-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-6 place-items-start">
        <div className="flexCenter flex-col ">
          <Image
            src="/images/camera2.png"
            alt="home-icon1"
            width={70}
            height={50}
          />
          <div className="my-3">
            <Line />
          </div>
          <h2 className="BaseFont text-center">PRODUCTION</h2>
          <p className="text-center greyText">
            We offer Production services which is the first stage in the
            execution of any Video Project. This involves Planning your Video,
            Concept drafting and Filming/Shooting (Event, Documentary,
            Commercials, Tv show, Skits etc.). We work with professional quality
            equipment which have the contemporary day standard.
          </p>
        </div>
        {/* second card */}
        <div className="flexCenter flex-col ">
          <Image
            src="/images/laptop.png"
            alt="home-icon2"
            width={70}
            height={50}
          />
          <div className="my-3">
            <Line />
          </div>
          <h2 className="BaseFont text-center font">POST-PRODUCTION</h2>
          <p className="text-center greyText">
            We also offer Post-production services extensively and solely, i.e:
            you can bring your Video project(s) that has already passed the
            Production (shooting) stage for editing and finnesse or hire us for
            both. You can trust us on a fulfilling and satisfactory delivery.
            Our Post-production services include; Video editing, Sound scoring
            (sfx), Colour grading, Motion designs, Visual effects (Vfx),
            Subtitling, Montages etc.
          </p>
        </div>
        {/* third card */}
        <div className="flexCenter flex-col ">
          <Image
            src="/images/human.png"
            alt="home-icon3"
            width={50}
            height={50}
          />
          <div className="my-3">
            <Line />
          </div>
          <h2 className="BaseFont text-center font">EQUIPMENT LEASE</h2>
          <p className="text-center greyText">
            We also offer services in leasing out Filming equipment to
            Professional Bodies or Individuals. You can book the equipment for
            your next Production with us at fair costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
