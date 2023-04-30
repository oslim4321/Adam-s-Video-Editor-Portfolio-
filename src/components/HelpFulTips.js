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
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                    src="/images/purple-cloth.jpg"
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl hover:rounded-xl"
                    src="/images/camera.jpg"
                    alt="First slide"
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
  return (
    <div className="flex flex-col gap-y-4">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h1>FAQ</h1>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
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
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
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
        </div>
        <div className="accordion-item">
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
