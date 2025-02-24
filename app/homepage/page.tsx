import HeroSection from "../components/herosection";
import Experience from "../components/experience";
import History from "../components/history";
import Justification from "../components/justification";	
import PracticeAreas from "../components/practiceAreas";
import Team from "../components/team";
import Contact from "../components/contactus";
import Logos from "../components/logos";
import React from "react";
export default function Home() {
  return (
    <div>
      <HeroSection />
     
      <Experience />
      <History />
      <Justification />
      <PracticeAreas />
      <Team />
      <Contact />
      <Logos />
    </div>
  );
}
