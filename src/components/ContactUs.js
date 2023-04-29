import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-gray-900 h-full py-20 flexCenter">
      <div className="flex container flex-col gap-y-4">
        <h1 className=" text-4xl tracking-tight font-extrabold text-center text-white">
          CONTACT US
        </h1>

        <section className=" ">
          <div className="px-4 mx-auto max-w-screen-md">
            <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
              Do you have a deal you'll like to discuss or Need details on how
              we can provide a Video Production solution for your Brand? Let us
              know
            </p>
            <form action="#" className="space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm border  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium  text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm  rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium  text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm bg-purple-500 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </div>
        </section>

        {/* hold */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-x-5 md:place-items-center text-white">
          {/* first */}
          <div className="flex gap-x-10">
            <span className="w-10 h-10 md:w-20 md:h-20 bg-purple-400 text-2xl rounded-full flexCenter transition hover:scale-125">
              <i className="bi bi-telephone-fill"></i>
            </span>
            <div className="flex flex-col">
              <span className="BaseFont mb-4">PHONE</span>
              <Link className="no-underline" href="tel:+2349157744053">
                <span className="text-slate-300">+2349157744053</span>
              </Link>
              <Link className="no-underline" href="tel:+2349039831573">
                <span className="text-slate-300">+2349039831573</span>
              </Link>
            </div>
          </div>
          {/* first */}
          <div className="flex gap-x-10">
            <span className="w-10 h-10 md:w-20 md:h-20 bg-purple-400 text-2xl rounded-full flexCenter transition hover:scale-125">
              <i className="bi bi-envelope-fill"></i>
            </span>
            <div className="flex flex-col">
              <span className="BaseFont mb-4">E-MAIL</span>
              <span className="text-slate-300">
                <Link
                  className="no-underline"
                  href="mailto:purplecreations21@gmail.com"
                >
                  <span>purplecreations21@gmail.com</span>
                </Link>
              </span>
              {/* <span className="text-slate-300">(123) 456-7890;</span> */}
            </div>
          </div>
          {/* first */}
          {/* <div className="flex gap-x-10">
            <span className="w-10 h-10 md:w-20 md:h-20 bg-purple-400 text-2xl rounded-full flexCenter transition hover:scale-125">
              <i className="bi bi-geo-alt-fill"></i>
            </span>
            <div className="flex flex-col">
              <span className="BaseFont mb-4">LOCATION</span>
              <span className="text-slate-300">iwo road Ibadan</span>
              <span className="text-slate-300">(123) 456-7890;</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
