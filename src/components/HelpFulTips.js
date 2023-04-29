import { useState } from "react";

const HelpFulTips = () => {
  const [page, setpage] = useState("HelpfullTipsComp");
  function setPageFunc(page) {
    setpage((prev) => page);
  }
  return (
    <section>
      <div className="container py-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-x-5">
          <div className="w-[100%] mb-3 md:mb-0">
            {/* <img src="/images/camera.jpg" alt="" /> */}
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                    src="/images/camera.jpg"
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                    src="/images/pexels-fauxels-3184465.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                    src="/images/pexels-magda-ehlers-1054713.jpg"
                    alt="Third slide"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" w-[100%]">
            {/* <div className="flex flex-wrap gap-3 justify-between mb-10">
              <button
                className={`borderButton flex-1 ${
                  page === "HelpfullTipsComp" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("HelpfullTipsComp")}
              >
                Helpfull Tips
              </button>
              <button
                className={`borderButton flex-1 ${
                  page === "Question" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("Question")}
              >
                Question
              </button>
              <button
                className={`borderButton flex-1 ${
                  page === "Product" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("Product")}
              >
                Product
              </button>
            </div> */}
            <div className="flex flex-wrap gap-y-3 justify-between mb-10">
              <div
                className={`border border-purple-700 whitespace-nowrap mx-2 cursor-pointer bg-white py-3 px-7 w-40 rounded-md hover:bg-purple-700 hover:text-slate-500 hover:border-purple-900 transition-colors duration-300 ease-in-out flex-1 ${
                  page === "HelpfullTipsComp" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("HelpfullTipsComp")}
              >
                Purple Tips
              </div>
              <div
                className={`border border-purple-700 whitespace-nowrap mx-2 cursor-pointer bg-white py-3 px-7 w-40 rounded-md hover:bg-purple-700 hover:text-slate-500 hover:border-purple-900 transition-colors duration-300 ease-in-out flex-1 ${
                  page === "Question" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("Question")}
              >
                FAQ
              </div>
              <div
                className={`border border-purple-700 whitespace-nowrap mx-2 cursor-pointer bg-white py-3 px-7 w-40 rounded-md hover:bg-purple-700 hover:text-slate-500 hover:border-purple-900 transition-colors duration-300 ease-in-out flex-1 ${
                  page === "Product" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("Product")}
              >
                Product
              </div>
            </div>

            {page === "HelpfullTipsComp" ? (
              <HelpfullTipsComp />
            ) : page === "Question" ? (
              <Question />
            ) : page === "Product" ? (
              <Product />
            ) : (
              <HelpfullTipsComp />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpFulTips;

function HelpfullTipsComp() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="greyText">
        Web video is capable of streaming anything from 240p to 4k resolution.
        Obviously, the higher the resolution the better it will look, especially
        when it's blown up to fill the whole computer screen.
      </p>
      <p className="greyText">
        240p will look very pixelated in full screen mode whereas 4K will look
        amazing. Ideally, look for a camera that shoots in either 1280 x 720 or
        1920 x 1080. What camera to buy for web video: Anything that shoots 1280
        x 720 HD resolution or better, preferably 1920 x 1080.
      </p>
      <p className="greyText">
        Examples of what to buy: iPhone 6 or similar, Canon 60D (or any DSLR
        that shoots HD video), Canon VIXIA HF R52 camcorder, Sony a5100
        Mirrorless Camera, Canon XA20 Semi-Pro Video Camera (great for run & gun
        shooting), Sony AX100 (entry level 4K camcorder).
      </p>
    </div>
  );
}

function Question() {
  return (
    <div className="flex flex-col gap-y-4">
      {/* <p className="greyText">
        Choosing the best camera for your documentary does not necessarily mean
        choosing the "latest greatest". There are plenty of older model cameras
        that offer beautiful results. Before the purchase you should answer
        several questions.
      </p>
      <ul>
        <li className="flex gap-x-5 items-center my-3">
          <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
          <span>
            VWhere will your video or documentary be shown when it's done?
          </span>
        </li>
        <li className="flex gap-x-5 items-center my-3">
          <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
          <span>How much money are you willing to spend?</span>
        </li>
        <li className="flex gap-x-5 items-center my-3">
          <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
          <span>
            What type of shooting are doing: cinematic/planned shots or run &
            gun news style?
          </span>
        </li>
        <li className="flex gap-x-5 items-center my-3">
          <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
          <span>
            What's your editing system and is it capable of handling the video
            format you are shooting on?
          </span>
        </li>
      </ul> */}

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 rotate-180 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{" "}
              <a
                href="/docs/getting-started/introduction/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{" "}
              and start developing websites even faster with components on top
              of Tailwind CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Figma design system
              </a>{" "}
              based on the utility classes from Tailwind CSS and components from
              Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
            <svg
              data-accordion-icon
              class="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
function Product() {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="greyText">
        A video camera is the centerpiece of your filmmaking gear package. What
        camera you choose depends on your budget, the type of shooting you're
        doing (static, stealth, run-and-gun, etc.) and where you plan to
        showcase your film (web-only, theater, broadcast, etc). You can shoot a
        documentary on anything from your iPhone to a DSLR to a top of line
        digital cinema camera
      </p>
    </div>
  );
}
