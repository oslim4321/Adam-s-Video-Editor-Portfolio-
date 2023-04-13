import { Inter } from "next/font/google";
import HomePage from "@/components/HomePage";
import MyServices from "@/components/MyServices";
import AboutUs from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import OurImagination from "@/components/OurImagination";
import HelpFulTips from "@/components/HelpFulTips";
import Teams from "@/components/Teams";
import SnippetOfOurWork from "@/components/SnippetOfOurWork";
import ContactUs from "@/components/ContactUs";
import DesktopViewButton from "@/components/DesktopViewButton ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutUs />
      <MyServices />
      <OurImagination />
      <HelpFulTips />
      <Teams />
      <Testimonial />
      <SnippetOfOurWork />
      <ContactUs />
      <DesktopViewButton />
    </main>
  );
}
