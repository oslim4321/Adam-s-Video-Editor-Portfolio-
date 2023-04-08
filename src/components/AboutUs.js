const AboutUs = () => {
  return (
    <div>
      <div className="ml-5"></div>
      <div className="container">
        <div className="flexCenter flex-wrap">
          <div className="md:w-[50%] flex flex-col gap-y-5">
            <p>About Us</p>
            <h2 className="BaseFont">
              WE BELIEVE VIDEO SHOULD DELIVER RESULTS
            </h2>
            <p className="greyText">
              Our approach combines expertise & passion with a deep
              understanding of you and your audience to make videos that engage,
              inspire and compel people to act.
            </p>
            <p className="greyText">
              Our approach combines expertise & passion with a deep
              understanding of you and your audience to make videos that engage,
              inspire and compel people to act.
            </p>
            <ul>
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
            </ul>
          </div>
          <div className="md:w-[50%]">
            <img
              src="https://media.istockphoto.com/id/1427367636/photo/female-editor-making-video-with-astronauts.jpg?s=612x612&w=0&k=20&c=KVg4MfMX4WYNsDfgbjRzmyNeFaGuf7i0jbQWzgWaqmk="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
