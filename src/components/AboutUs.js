import Line from "./line";

const AboutUs = () => {
  return (
    <div>
      <div className="ml-5">
        <Line />
      </div>
      <div className="container">
        <div className="flex">
          <div className="w-[50%]">
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
          </div>
          <div className="w-[50%]">
            <img src="Logo with Background.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
