import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Teams = () => {
  let TeamsMem = [
    {
      id: 1,
      img: "/images/Adams1.jpg",
      name: "AZEEZ ADAM",
      position: "Camera Operator",
      socialMedia: [
        {
          media: "https://www.facebook.com/purplecreations02?mibextid=ZbWKwL",
          text: "facebook",
        },
        {
          media: "https://instagram.com/purplecreations02?igshid=ZDdkNTZiNTM=",
          text: "instagram",
        },
        { media: "url", text: "pinterest" },
        { media: "https://wa.me/message/BEGC4272DB67L1", text: "whatsapp" },
      ],
    },
    {
      id: 2,
      img: "/images/Adams2.jpg",
      name: "ANN DEAN",
      position: "Motion Graphic Designer",
      position: "Camera Operator",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "instagram" },
        { media: "url", text: "pinterest" },
        { media: "https://wa.me/message/BEGC4272DB67L1", text: "whatsapp" },
      ],
    },
    {
      id: 3,
      img: "/images/Adams1.jpg",
      name: "DANIELA OBRIEN",
      position: "Scriptwriter",
      position: "Camera Operator",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "instagram" },
        { media: "url", text: "pinterest" },
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

        <div
          ref={containerRef}
          className="relative flex gap-x-7 md:justify-center items-center overflow-x-scroll lg:overflow-x-hidden  scroll-smooth snap-mandatory snap-x  no-scrollbar-white"
        >
          {TeamsMem.map((elem) => (
            <div
              key={elem.id}
              className=" flex-none border border-slate-400 shadow h-[500px] w-80 hover:bg-slate-200 duration-100  transition  ease-in-out"
            >
              <div className="h-[70%]">
                <Image
                  src={elem.img}
                  alt={elem.name}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
                {/* <img
                  src={elem.img}
                  alt={elem.name}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="h-[30%] flexCenter gap-y-3 flex-col">
                <p className="BaseFont font-fikraSans tracking-wider">
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
