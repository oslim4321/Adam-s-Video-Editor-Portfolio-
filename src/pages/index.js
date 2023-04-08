import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "@/components/HomePage";
import MyServices from "@/components/MyServices";
import AboutUs from "@/components/AboutUs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
      <MyServices />
      <AboutUs />
    </main>
  );
}
