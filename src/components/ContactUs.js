import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="bg-black h-full py-20 flexCenter">
      <div className="flex container flex-col gap-y-6">
        <h1 className=" mb-2 text-4xl tracking-tight font-extrabold text-center text-white">
          CONTACT US
        </h1>

        <section className=" dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2> */}
            <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  for="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm bg-purple-500 font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
              <Link href="tel:+2349157744053">
                <span className="text-slate-300">+2349157744053</span>
              </Link>
              <Link href="tel:+2349039831573">
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
                <Link href="mailto:purplecreations21@gmail.com">
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
