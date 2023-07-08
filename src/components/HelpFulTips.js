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
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100 h-75 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                  src="/images/purple-cloth.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 h-75 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                  src="/images/camera.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 h-75 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                  src="/images/man-holding-camera.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon text-red-400"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className=" w-[100%]">
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
              {/* <div
                className={`border border-purple-700 whitespace-nowrap mx-2 cursor-pointer bg-white py-3 px-7 w-40 rounded-md hover:bg-purple-700 hover:text-slate-500 hover:border-purple-900 transition-colors duration-300 ease-in-out flex-1 ${
                  page === "Product" ? "colorLight" : ""
                } `}
                onClick={() => setPageFunc("Product")}
              >
                Product
              </div> */}
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
  const faqs = [
    {
      id: "1",
      question: "What services do you offer?",
      answer:
        "We offer a wide range of Video Production Services, including Concept development, Filming, Editing, Motion graphics, and more. Whether you need a corporate video, commercial, documentary, or any other type of video content, we've got you covered.",
    },
    {
      id: "2",
      question: "How much does video production cost?",
      answer:
        "The cost of video production varies depending on the Project's complexity, duration, location, and specific requirements. We provide personalized quotes tailored to your unique needs. Contact us with your project details, and we'll be happy to provide you with a detailed estimate.",
    },
    {
      id: "3",
      question: "How long does the video production process take?",
      answer:
        "The timeline for video production depends on various factors, such as the scope of the project, the availability of resources, and the post-production requirements. It can range from a few days for a simple video to several weeks for more complex productions. We work closely with our clients to establish realistic timelines and ensure efficient project delivery.",
    },
    {
      id: "4",
      question: "Can you help with Concept development and scriptwriting?",
      answer:
        "Absolutely! Our team of experienced professionals excels in concept development and scriptwriting. We work closely with our clients to understand their goals, target audience, and key messaging. From there, we develop compelling concepts and craft engaging scripts that effectively convey your message and captivate your viewers.",
    },
    {
      id: "5",
      question: "Do you provide Video editing services?",
      answer:
        "Yes, video editing is one of our core services. Our skilled editors bring your footage to life, incorporating visual effects, transitions, music, and sound design to create a polished and professional final product. We ensure that the editing process aligns with your vision and objectives.",
    },
    {
      id: "6",
      question: "Can you handle location scouting?",
      answer:
        "Absolutely! We have a dedicated team that can assist with location scouting, finding the perfect settings for your video shoot and making all commitments needed to make using it realistic.",
    },
    {
      id: "7",
      question: "What type of equipment do you use?",
      answer:
        "We utilize state-of-the-art video production equipment, including high-definition cameras, professional lighting setups, and advanced audio recording tools. Our equipment is regularly maintained to ensure optimal performance and deliver exceptional video quality.",
    },
    {
      id: "",
      question: "Can you help with distribution and promotion of the videos?",
      answer:
        "While our primary focus is Video production, we can provide guidance and recommendations on video distribution and promotion strategies. We can assist you in choosing the right platforms, optimizing your videos for online channels, and leveraging social media and other marketing avenues to maximize the reach and impact of your videos.",
    },
    {
      id: "8",
      question: "Do you offer revisions or changes to the final video?",
      answer:
        "Yes, we understand that revisions may be necessary to ensure your complete satisfaction. We provide a revision process where you can provide feedback and request changes to the final video. We work closely with you to make the necessary adjustments until you are happy with the result. There’s a specific number of revisions that would be had before extra charges can be incurred.",
    },
  ];
  return (
    <div className="flex flex-col gap-y-4">
      <div
        className="accordion h-[49vh] overflow-y-scroll no-scrollbar-white"
        id="accordionExample"
      >
        {faqs.map((elem, i) => (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button text-black "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapseOne${i}`}
                aria-expanded="true"
                aria-controls={`collapseOne${i}`}
              >
                {elem.question}
              </button>
            </h2>
            <div
              id={`collapseOne${i}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{elem.answer}</div>
            </div>
          </div>
        ))}
        {/* <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapseTwo`}
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id={`collapseTwo`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div> */}
        {/* <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div> */}
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
