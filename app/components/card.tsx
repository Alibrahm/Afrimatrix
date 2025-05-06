'use client';

import Image from 'next/image';
import { useState } from 'react';
import Community from "../../public/images/community.png";
export default function CardHover() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative md:w-90 w-full h-[450px] overflow-hidden shadow-lg rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={Community}
        alt="Card Image"
        layout="fill"
        objectFit="cover"
        className={`transition-transform duration-300 ${
          isHovered ? "scale-100" : "scale-110"
        }`}
      />

      <div
        className={`absolute bottom-0 left-0 w-full text-center bg-[#0F233AC9] p-4 transition-all duration-500 ease-in-out ${
          isHovered
            ? "bottom-full translate-y-full bg-[#0F233AC9] py-12"
            : "translate-y-0"
        }`}
      >
        <h3 className="text-xl font-bold text-white">
          Market Research & <span className="text-[#FACC15]">Professional</span>{" "}
          Development Programs
          {/* <span className="text-green-900">choice</span> right now! */}
        </h3>
        <p className="text-md text-white mt-2">
          Useful when collecting specific sub-population work to inform
          demographic and other baseline data before the introduction of
          particular community services or projects.
        </p>
        <a
          href="#"
          className={`inline-flex items-center text-green-900 mt-4 opacity-0 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>Learn How</span>
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      <div
        className={`absolute bottom-0 w-full flex items-center justify-center text-center bg-green-300 text-[#0F233AC9] p-5 transition-transform duration-500 ${
          isHovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h4 className="text-lg font-bold">
          Continual assessment and re-direct interventions with an eye towards
          achieving project objectives. This is a continual process,
          particularly important with hard-to-reach African populations.
        </h4>
      </div>
    </div>
  );
}
