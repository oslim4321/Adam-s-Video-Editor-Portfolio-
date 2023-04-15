const ContactUs = () => {
  return (
    <div className="bg-black h-full py-20 flexCenter">
      <div className="flex container flex-col gap-y-6">
        <h1 className=" font-thin bigText text-center mb-3 text-white">
          CONTACT US
        </h1>

        {/* hold */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-x-5 md:place-items-center text-white">
          {/* first */}
          <div className="flex gap-x-10">
            <span className="w-10 h-10 md:w-20 md:h-20 bg-purple-400 text-2xl rounded-full flexCenter transition hover:scale-125">
              <i className="bi bi-telephone-fill"></i>
            </span>
            <div className="flex flex-col">
              <span className="BaseFont mb-4">PHONE</span>
              <span className="text-slate-300">(123) 456-7890;</span>
              <span className="text-slate-300">(123) 456-7890;</span>
            </div>
          </div>
          {/* first */}
          <div className="flex gap-x-10">
            <span className="w-10 h-10 md:w-20 md:h-20 bg-purple-400 text-2xl rounded-full flexCenter transition hover:scale-125">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <div className="flex flex-col">
              <span className="BaseFont mb-4">E-MAL</span>
              <span className="text-slate-300">(123) 456-7890;</span>
              <span className="text-slate-300">(123) 456-7890;</span>
            </div>
          </div>
          {/* first */}
          <div className="flex gap-x-10">
            <span className="w-10 h-10 md:w-20 md:h-20 bg-purple-400 text-2xl rounded-full flexCenter transition hover:scale-125">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <div className="flex flex-col">
              <span className="BaseFont mb-4">LOCATION</span>
              <span className="text-slate-300">iwo road Ibadan</span>
              <span className="text-slate-300">(123) 456-7890;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
