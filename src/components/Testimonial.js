import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-black py-10 md:h-[95h]">
      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-x-5">
        <div className="flex flex-col space-y-10 w-[100%]">
          <p className="text-1xl md:text-3xl text-white">
            What Client Say About Us
          </p>

          <h3 className="bigText text-white">TESTIMONIALS</h3>
          <p className="greyText text-white">
            Partnering with you for your Post-production services is one great
            decision I am glad I made, it has improved the delivery of my Brand
            over time. Your services are top-notch and satisfactory. Thank you!
          </p>
          <img
            src="/images/mt-1384-home-signature.png"
            alt=""
            className="w-20"
          />
          <h3 className="text-2xl text-white">LINDA DYLLAN</h3>
          <p className="text-white">Clients</p>
        </div>
        {/* image */}
        <div className="w-[100%]">
          <Image
            src="/images/pexels-fauxels-3184465.jpg"
            alt="our clients"
            width={400}
            height={400}
            className="w-full h-full object-cover gap-x-5"
          />
          {/* <img
            className="w-full h-full object-cover gap-x-5"
            src="/images/pexels-fauxels-3184465.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
