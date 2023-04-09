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
      <div className=" flexCenter flex-col gap-y-10 ">
        <h1 className=" font-thin bigText">OUR TEAM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-x-5">
          {/* <div className="flex"> */}

          {/* second car */}
          {TeamsMem &&
            TeamsMem.map((elem) => (
              <TeamsMember
                key={elem.id}
                img={elem.img}
                name={elem.name}
                position={elem.position}
                social={elem.socialMedia}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;

function TeamsMember({ img, name, position, social }) {
  return (
    <div
      //   key={key}
      className=" border border-slate-400 shadow h-[500px] w-[100%] hover:bg-slate-200 duration-100  transition  ease-in-out"
    >
      <div className="h-[70%]">
        <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="h-[30%] flexCenter gap-y-3 flex-col">
        <p className="BaseFont font-fikraSans tracking-wider">{name}</p>
        <p className="greyText">{position}</p>
        <div className="flex gap-x-3">
          {social.map((elem, i) => (
            <Link href={elem.media}>
              <span
                key={i}
                className="w-20 h-20 p-2 text-white bg-red-500 rounded-full"
              >
                <i className={`bi bi-${elem.text}`}></i>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
