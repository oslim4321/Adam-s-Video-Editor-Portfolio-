import Line from "@/components/Line";
import Image from "next/image";

const MyServices = () => {
  return (
    <div className="container grid md:h-[80vh] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-6 place-items-center">
      {/* first card */}
      <div className="flexCenter flex-col gap-y-6 ">
        <Image
          src="/images/mt-1384-home-icon1 (1).png"
          alt="home-icon1"
          width={40}
          height={50}
        />
        <Line />
        <h2 className="BaseFont text-center">VIDEO TV AND FILM PRODUCTION</h2>
        <p className="text-center greyText">
          We work with professional quality camera equipment, such as our Black
          Magic and Canon 5d MK 3 cameras, used on Hollywood films.
        </p>
      </div>
      {/* second card */}
      <div className="flexCenter flex-col gap-y-6 ">
        <Image
          src="/images/mt-1384-home-icon2.png"
          alt="home-icon2"
          width={50}
          height={50}
        />
        <h2 className="BaseFont text-center font">
          VIDEO TV AND FILM PRODUCTION
        </h2>
        <p className="text-center greyText">
          We work with professional quality camera equipment, such as our Black
          Magic and Canon 5d MK 3 cameras, used on Hollywood films.
        </p>
      </div>
      {/* third card */}
      <div className="flexCenter flex-col gap-y-6 ">
        <Image
          src="/images/mt-1384-home-icon3.png"
          alt="home-icon3"
          width={50}
          height={50}
        />
        <Line />
        <h2 className="BaseFont text-center font">
          VIDEO TV AND FILM PRODUCTION
        </h2>
        <p className="text-center greyText">
          We work with professional quality camera equipment, such as our Black
          Magic and Canon 5d MK 3 cameras, used on Hollywood films.
        </p>
      </div>
    </div>
  );
};

export default MyServices;
