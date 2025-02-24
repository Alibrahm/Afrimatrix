
"use client";
import { useEffect, useRef } from "react";
import HeroSection from "../components/herosection";
import Services from "../components/services"
import Experience from "../components/experience";
import Contact from "../components/contactus";
import HorizontalServices from "../components/horizontalservices";
import Offerings from "../components/offerings";
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
      <HorizontalServices />
      <Experience />
      {/* <History />
      <Justification />
      <PracticeAreas />
      <Team /> */}
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      {/* <Logos /> */}
    </div>
  );
}

