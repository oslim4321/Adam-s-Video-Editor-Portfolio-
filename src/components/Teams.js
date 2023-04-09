import Link from "next/link";

const Teams = () => {
  let TeamsMem = [
    {
      id: 1,
      img: "/images/man hold camera.jpg",
      name: "DYLAN GEORGE",
      position: "Camera Operator",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "linkedin" },
        { media: "url", text: "pinterest" },
        { media: "url", text: "twitter" },
      ],
    },
    {
      id: 2,
      img: "/images/man hold camera.jpg",
      name: "ANN DEAN",
      position: "Motion Graphic Designer",
      position: "Camera Operator",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "linkedin" },
        { media: "url", text: "pinterest" },
        { media: "url", text: "twitter" },
      ],
    },
    {
      id: 3,
      img: "/images/man hold camera.jpg",
      name: "DANIELA OBRIEN",
      position: "Scriptwriter",
      position: "Camera Operator",
      socialMedia: [
        { media: "url", text: "facebook" },
        { media: "url", text: "linkedin" },
        { media: "url", text: "pinterest" },
        { media: "url", text: "twitter" },
      ],
    },
  ];
  return (
    <section className="md:h-[90vh]">
      <div className=" flexCentr flex-col gap-y-10 px-10">
        <h1 className=" font-thin bigText text-center">OUR TEAM</h1>
        <div className="flex gap-x-5 md:justify-center items-center overflow-x-scroll lg:overflow-x-hidden  scroll-smooth snap-mandatory snap-x  no-scrollbar-white">
          {TeamsMem.map((elem) => (
            <div
              key={elem.id}
              className="flex-none border border-slate-400 shadow h-[500px] w-80 hover:bg-slate-200 duration-100  transition  ease-in-out"
            >
              <div className="h-[70%]">
                <img
                  src={elem.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
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

        {/* <div class="flex overflow-x-scroll">
          <div class="flex-none w-80 bg-gray-100 p-4 rounded-md shadow-lg mr-4">
            <h2 class="text-lg font-semibold mb-2">Card 1</h2>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt mauris in nunc lobortis.
            </p>
          </div>
          <div class="flex-none w-80 bg-gray-100 p-4 rounded-md shadow-lg mr-4">
            <h2 class="text-lg font-semibold mb-2">Card 2</h2>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt mauris in nunc lobortis.
            </p>
          </div>
          <div class="flex-none w-80 bg-gray-100 p-4 rounded-md shadow-lg mr-4">
            <h2 class="text-lg font-semibold mb-2">Card 3</h2>
            <p class="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tincidunt mauris in nunc lobortis.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Teams;

// function TeamsMember({ img, name, position, social }) {
//   return (
//     <div
//       //   key={key}
//       className=" border border-slate-400 shadow h-[500px] w-80 hover:bg-slate-200 duration-100  transition  ease-in-out"
//     >
//       <div className="h-[70%]">
//         <img src={img} alt="" className="w-full h-full object-cover" />
//       </div>
//       <div className="h-[30%] flexCenter gap-y-3 flex-col">
//         <p className="BaseFont font-fikraSans tracking-wider">{name}</p>
//         <p className="greyText">{position}</p>
//         <div className="flex gap-x-3">
//           {social.map((elem, i) => (
//             <Link href={elem.media}>
//               <span
//                 key={i}
//                 className="w-20 h-20 p-2 text-white bg-purple-500 rounded-full"
//               >
//                 <i className={`bi bi-${elem.text}`}></i>
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
