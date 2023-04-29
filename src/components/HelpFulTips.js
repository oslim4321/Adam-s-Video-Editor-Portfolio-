import { useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

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
      <div>
        <Accordion>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              TAB 1
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>This is first tab body</Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              TAB 2
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
              <Card.Body>This is second tab body</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
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
