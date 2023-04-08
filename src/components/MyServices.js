import Line from "./line";

const MyServices = () => {
  return (
    <div>
      <div className="container md:h-[80vh] flex justify-center items-center">
        <div className="flex items-center gap-x-4">
          {/* first card */}
          <div className="flexCenter flex-col gap-y-6">
            <Line />
            <h2 className="BaseFont">VIDEO TV AND FILM PRODUCTION</h2>
            <p className="text-center greyText">
              We work with professional quality camera equipment, such as our
              Black Magic and Canon 5d MK 3 cameras, used on Hollywood films.
            </p>
          </div>
          {/* first card */}
          <div className="flexCenter flex-col gap-y-6">
            <Line />
            <h2 className="BaseFont font">VIDEO TV AND FILM PRODUCTION</h2>
            <p className="text-center greyText">
              We work with professional quality camera equipment, such as our
              Black Magic and Canon 5d MK 3 cameras, used on Hollywood films.
            </p>
          </div>
          {/* first card */}
          <div className="flexCenter flex-col gap-y-6">
            <Line />
            <h2 className="BaseFont font">VIDEO TV AND FILM PRODUCTION</h2>
            <p className="text-center greyText">
              We work with professional quality camera equipment, such as our
              Black Magic and Canon 5d MK 3 cameras, used on Hollywood films.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
