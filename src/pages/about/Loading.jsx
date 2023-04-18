import React from "react";
import { Montserrat } from "next/font/google";
const Loading = () => {
  const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-montserrat",
  });
  return <div className={`${montserrat.className} font-montserrat`}>Loading...</div>;
};

export default Loading;
