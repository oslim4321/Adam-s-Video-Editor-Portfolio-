const Testimonial = () => {
  return (
    <section className="bg-black py-10 h-[100vh]">
      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col gap-y-10 w-[100%]">
          <p className="font-shadows text-3xl text-white">What Says About Us</p>

          <h3 className="bigText text-white">TESTIMONIALS</h3>
          <p className="greyText text-white">
            I am writing to thank you again for your excellent work in producing
            our promotional videos.You and your staff are professional,
            courteous, and easy to work with.
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
          <img
            className="w-full gap-x-5"
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
