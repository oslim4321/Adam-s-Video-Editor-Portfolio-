import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Teams = () => {
  let TeamsMem = [
    {
      id: 1,
      img: "/images/Adams1.jpg",
      name: "AZEEZ ADAM",
      position: "Video-Editor, Creative Director.",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "instagram" },
        // { media: "url", text: "pinterest" },
        { media: "https://wa.me/message/BEGC4272DB67L1", text: "whatsapp" },
      ],
    },
    {
      id: 2,
      img: "/images/Josua.jpg",
      name: "OLUWAGBEMILEKE JOSHUA",
      position: "Cinematographer",
      socialMedia: [
        {
          media: "https://web.facebook.com/komoniwa1",
          text: "facebook",
        },
        {
          media: "https://www.instagram.com/komoniwa1/",
          text: "instagram",
        },
        // { media: "url", text: "pinterest" },
        { media: "https://wa.me/message/BEGC4272DB67L1", text: "twitter" },
      ],
    },
    {
      id: 3,
      img: "/images/Akeem.jpg",
      name: "AKEEM TAIWO",
      position: "2D Animator, Motion Graphics.",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "instagram" },
        // { media: "url", text: "pinterest" },
        { media: "https://wa.me/message/BEGC4272DB67L1", text: "whatsapp" },
      ],
    },
    {
      id: 4,
      img: "/images/DANIEL.jpeg",
      name: "ILESANMI DANIEL",
      position: "Digital Marketer",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "instagram" },
        // { media: "url", text: "pinterest" },
        { media: "https://wa.me/message/BEGC4272DB67L1", text: "whatsapp" },
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handlePrevPageClick = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNextPageClick = () => {
    setCurrentIndex((prev) => prev + 1);
    console.log(currentIndex);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft =
        currentIndex * containerRef.current.offsetWidth;
    }
  }, [currentIndex]);

  return (
    <div className="md:h-full my-5">
      <div className="relative flexCentr flex-col gap-y-10 px-10">
        <div
          onClick={handlePrevPageClick}
          className="lg:hidden absolute left-0 top-[50%] translate-y-[-50%]"
        >
          <i className="text-4xl cursor-pointer bi bi-chevron-left"></i>
        </div>
        <h1 className=" font-thin bigText text-center mb-3">OUR TEAM</h1>
        <p className="text-gray-700 text-lg font-light text-center max-w-[50%] mx-auto">
          With over 100 years of combined experience, we've got a well-seasoned
          team at the helm.
        </p>

        <div
          ref={containerRef}
          className="relative max-w-7xl mx-auto py-4 flex gap-x-7 md:justify-center items-center overflow-y-hidden overflow-x-scroll lg:overflow-x-hiddenf  scroll-smooth snap-mandatory snap-x  no-scrollbar-white"
        >
          {TeamsMem.map((elem) => (
            <div
              key={elem.id}
              // border border-slate-400 shadow
              // hover:bg-slate-200
              className=" flex-none h-[500px] w-80 border duration-100 rounded-2xl transition overflow-hidden ease-in-out"
            >
              <div className="h-[70%]">
                <Image
                  src={elem.img}
                  alt={elem.name}
                  width={500}
                  height={500}
                  priority
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 w-full h-full object-cover hover:shadow-2xl hover:scale-105"

                  // className="w-full h-full object-cover"
                />
                {/* <img
                  src={elem.img}
                  alt={elem.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="h-[30%] flexCenter my-2 flex-col">
                <p className="BaseFont font-fikraSans tracking-wider uppercase">
                  {elem.name}
                </p>
                <p className="greyText">{elem.position}</p>
                <div className="flex gap-x-3">
                  {elem.socialMedia.map((elem, i) => (
                    <Link href={elem.media}>
                      <span
                        key={i}
                        className="w-20 h-20 p-2 text-white bg-purple-500 rounded-full"
                      >
                        <i className={`bi bi-${elem.text}`}></i>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          onClick={handleNextPageClick}
          className="lg:hidden absolute right-0 top-[50%] translate-y-[-50%]"
        >
          <i className="text-4xl cursor-pointer bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Teams;
