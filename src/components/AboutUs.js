import React, {useState} from 'react'

const AboutUs = () => {
  const [showText, setshowText] = useState(false)
  function showTxtFunc(){
    setshowText(!showText)
  }
  return (
    <section className="my-20">
      <div className="ml-5"></div>
      <div className="container">
        <h1 className=" font-thin bigText text-center capitalize mb-4">
          about us
        </h1>

        <div className="flex gap-x-5 flex-wrap">
          <div className="md:w-[48%] flex flex-col gap-y-5">
            {/* <p className=" font-shadows text-3xl">about us</p> */}
            <h2 className="BaseFont">
              We DELIVER THE BEST WITH YOUR BUDGET AND FULFIL YOUR TARGET
              AUDIENCE.
            </h2>
            <p className="greyText text-justify">
             We are a team of Video Producers
              passionate about Creative Video Productions and helping Goal
              Setters tell their Story Creativity.

              
              
              {
                showText && 
                <span>
                Good storytelling is a magic
              wand to unlock the heart of Audiences and Videos are a great and
              effective way to achieve this. This has always been the core of
              what we do, every Individual and Business/Organization has a story
              to tell, and everyone has a goal they’d like to achieve. Through
              video productions, we help maximize the fulfilment of your goals
              in any kind of settings you have in prospect. We create
              people-centric videos and contents that deliver our Client's
              Prospects so that they can make things happen.</span>

              }
               {/*  */}
            </p>
           {showText && <p className="greyText text-justify">
              Our approach to serving you combines Professionalism & Passion
              with a deep understanding of you in your audience mind to make
              videos that inspires and enable them to engage impressively.
            </p>}
         {/* <button onClick={showTxtFunc}>see more</button> */}
        <div class='flex justify-end'>
           <button
                onClick={showTxtFunc}
                className="border border-purple-500 hover:bg-purple-600 font-bold w-[50%] py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                 {showText ? 'see less' : 'see more' }
              </button>
        </div>
          </div>
          <div className="md:w-[48%]">
            <img
              src="https://media.istockphoto.com/id/1427367636/photo/female-editor-making-video-with-astronauts.jpg?s=612x612&w=0&k=20&c=KVg4MfMX4WYNsDfgbjRzmyNeFaGuf7i0jbQWzgWaqmk="
              alt=""
            />
            {/* <ul>
              <li className="flex gap-x-5 items-center my-3">
                <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
                <span>Videography and broadcast of events</span>
              </li>
              <li className="flex gap-x-5 items-center my-3">
                <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
                <span>Corporate film</span>
              </li>
              <li className="flex gap-x-5 items-center my-3">
                <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
                <span>Viral video</span>
              </li>
              <li className="flex gap-x-5 items-center my-3">
                <span className="w-3 h-3 p-1 bg-purple-400 rounded-full"></span>
                <span>Music video</span>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
