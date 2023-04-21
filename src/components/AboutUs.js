import React, { useState } from 'react';


const AboutUs = () => {
  const [showText, setShowText] = useState(false);

  function toggleShowText() {
    setShowText(!showText);
  }

  return (
    <section className="my-20">
      <div className="ml-5" />
      <div className="container">
        <h1 className="font-thin bigText font-bold text-center capitalize mb-4">
          about us
        </h1>
        

        <div className="flex flex-wrap-reverse gap-x-5 flex-wrap">
          <div className="md:w-[48%] flex flex-col gap-y-5">
            <h2 className="BaseFont md:w-[48%] my-1">
          We CREATE PURPLE EFFECT
        </h2>
            <p className="greyText text-justify">
              We are a team of Video Producers passionate about Creative Video
              Productions and helping Goal Setters tell their Story Creativity.
              {showText && (
                <span>
                  Good storytelling is a magic wand to unlock the heart of
                  Audiences and Videos are a great and effective way to achieve
                  this. This has always been the core of what we do, every
                  Individual and Business/Organization has a story to tell, and
                  everyone has a goal they’d like to achieve. Through video
                  productions, we help maximize the fulfilment of your goals in
                  any kind of settings you have in prospect. We create
                  people-centric videos and contents that deliver our Client's
                  Prospects so that they can make things happen.
                </span>
              )}
            </p>
            {showText && (
              <>
              <p className="greyText text-justify">
                Our approach to serving you combines Professionalism & Passion
                with a deep understanding of you in your audience mind to make
                videos that inspires and enable them to engage impressively.
              </p>
                 <h2 className="BaseFont  my-3">
          We DELIVER THE BEST WITH YOUR BUDGET AND FULFIL YOUR TARGET AUDIENCE.
        </h2>
              </>
            )}
            <div>
              <button
                onClick={toggleShowText}
                className="border bg-black text-white hover:bg-slate-600 font-bold py-2 px-10 rounded-md letterSpace"
              >
                {showText ? 'see less' : 'see more'}
              </button>
            </div>
          </div>
          <div className="md:w-[48%]  overflow-hidden">
            <div className="relative w-full h-full">
              <img
                className="shadow-lg w-full hover:scale-110 transition duration-500 ease-in-out transform hover:rotate-6 hover:shadow--xl"
                src="https://media.istockphoto.com/id/1427367636/photo/female-editor-making-video-with-astronauts.jpg?s=612x612&w=0&k=20&c=KVg4MfMX4WYNsDfgbjRzmyNeFaGuf7i0jbQWzgWaqmk="
                alt=""
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default AboutUs;
