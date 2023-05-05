// import Image from "next/image";

// const Testimonial = () => {
//   return (
//     <div className="bg-black py-10 md:h-[95h]">
//       <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-x-5">
//         <div className="flex flex-col space-y-10 w-[100%]">
//           <p className="text-1xl md:text-3xl text-white">
//             What Client Say About Us
//           </p>

//           <h3 className="bigText text-white">TESTIMONIALS</h3>
//           <p className="greyText text-white">
//             Partnering with you for your Post-production services is one great
//             decision I am glad I made, it has improved the delivery of my Brand
//             over time. Your services are top-notch and satisfactory. Thank you!
//           </p>
//           {/* <img
//             src="/images/mt-1384-home-signature.png"
//             alt=""
//             className="w-20"
//           /> */}
//           <h3 className="text-2xl text-white text-right">BYGDONALD FILMS</h3>
//           <p className="text-white">Clients</p>
//         </div>
//         {/* image */}
//         {/* <div className="w-[100%]"> */}
//         {/* <Image
//             src="/images/pexels-fauxels-3184465.jpg"
//             alt="our clients"
//             width={400}
//             height={400}
//             className="w-full h-full object-cover gap-x-5"
//           /> */}
//         {/* <img
//             className="w-full h-full object-cover gap-x-5"
//             src="/images/pexels-fauxels-3184465.jpg"
//             alt=""
//           /> */}
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "Partnering with you for your Post-production services is one great decision I am glad I made, it has improved the delivery of my Brand over time. Your services are top-notch and satisfactory. Thank you!",
    author: "BYGDONALD FILMS",
  },
  {
    id: 2,
    text: "Another testimonial goes here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quia quaerat ad ullam. Mollitia fuga omnis commodi deleniti, eligendi sapiente? Molestiae alias enim optio sint at blanditiis ab magnam assumenda porro. Quo officiis nemo, optio quas asperiores accusamus id repudiandae velit doloribus porro, ex sequi fugiat odit dolore sunt animi?...",
    author: "ANOTHER CLIENT",
  },
  {
    id: 3,
    text: "Yet another testimonial goes here Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit quia quaerat ad ullam. Mollitia fuga omnis commodi deleniti, eligendi sapiente? Molestiae alias enim optio sint at blanditiis ab magnam assumenda porro. Quo officiis nemo, optio quas asperiores accusamus id repudiandae velit doloribus porro, ex sequi fugiat odit dolore sunt animi?...",
    author: "YET ANOTHER CLIENT",
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(
    testimonials[index]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % testimonials.length);
    }, 5000);
    setActiveTestimonial(testimonials[index]);
    return () => clearInterval(intervalId);
  }, [index]);

  let indexText = 0;
  let wordIndex = -1;
  let stopint;
  let res = testimonials.map((elem) => {
    return elem.text;
  });
  // console.log(res);
  function display() {
    stopint = setInterval(() => {
      wordIndex++;
      // wordIndex++;
      // if (wordarray[index].length == wordIndex) {
      //   clearInterval(stopint);
      //   wordIndex = -1;
      //   clearText();
      //   return stopint;
      // }
      //

      // document.getElementById("show").innerHTML +=
      //   wordarray[indexText][wordIndex];
    }, 200);
  }
  useEffect(() => {
    display();
  }, []);

  return (
    <div className="bg-black py-10 md:h-[95h]">
      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 gap-x-5">
        <div className="flex flex-col space-y-10 w-[100%]">
          <p className="text-1xl md:text-3xl text-white">
            What Client Say About Us
          </p>
          <h3 className="bigText text-white">TESTIMONIALS</h3>

          <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner  mb-20">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`carousel-item ${
                    testimonial.id === activeTestimonial.id ? "active" : ""
                  }`}
                >
                  <p className="greyText text-white">{testimonial.text}</p>
                  <h3 className="text-2xl text-white text-right">
                    {testimonial.author}
                  </h3>
                  {/* <p className="text-white">Clients</p> */}
                </div>
              ))}
            </div>
            {/* sliding */}

            <div className="carousel-indicators mt-10">
              {testimonials.map((testimonial, i) => (
                <button
                  key={testimonial.id}
                  type="button"
                  data-bs-target="#testimonialCarousel"
                  data-bs-slide-to={i}
                  className={i === index ? "active" : ""}
                  aria-current={i === index ? "true" : ""}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
