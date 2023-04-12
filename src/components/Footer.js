import Link from "next/link";

const Footer = () => {
  let socialMedia = [
    {
      icons: "facebook",
      url: "#",
    },
    {
      icons: "facebook",
      url: "#",
    },
    {
      icons: "twitter",
      url: "#",
    },
    {
      icons: "whatsapp",
      url: "#",
    },
  ];
  return (
    <div className=" bg-black border-t border-purple-400">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 gap-x-5 md:place-items-center text-white gap-y-10 py-10">
        <div>
          <img src="/images/Logo with text.png" alt="" className="w-60" />
        </div>
        <div className="flex items-center gap-x-4 text-white ">
          {socialMedia.map((elem, i) => (
            <Link key={elem.icons} href={elem.url || "#"}>
              <span
                key={i}
                className="w-10 h-10 bg-purple-400 rounded-full flexCenter transitioning hover:scale-125 cursor-pointer text-white"
              >
                <i className={`bi bi-${elem.icons}`}></i>
              </span>
            </Link>
          ))}
        </div>
        <div className="text-slate-300 items-center">
          <p>Copyright © 2023. All rights reserved.</p>
          <p>
            Designed by{" "}
            <Link target="_blank" href="https://web.facebook.com/selim.sooto/">
              Oslim
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
