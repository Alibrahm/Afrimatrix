
"use client";
import { useEffect, useRef } from "react";
import HeroSection from "../components/herosection";
import Services from "../components/services"
// import Experience from "../components/experience";
import { TextParallaxContentExample } from "../components/parallaxContent";
// import HorizontalServices from "../components/horizontalservices";
import Offerings from "../components/offerings";
// import Newteam from "../components/newteam";
// import Scroll from "../components/horizontalscroll";
import ScrollingLogos from "../components/scrollinglogos";
export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="w-full">
      <HeroSection />
      <Services />
      <Offerings />
      {/* <HorizontalServices /> */}
      {/* <Experience /> */}
      {/* <Newteam /> */}
      <TextParallaxContentExample />
      {/* <Scroll /> */}
      <div className="md:my-10">
        <ScrollingLogos />
      </div>

      {/* <History />
      <Justification />
      <PracticeAreas />
      <Team /> */}
      {/* <Logos /> */}
    </div>
  );
}

