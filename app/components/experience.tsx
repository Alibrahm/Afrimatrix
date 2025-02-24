"use client";
import React from "react";

const experiences = [
  { backgroundNumber: "01", number: "8+", description: "Years of experience" },
  { backgroundNumber: "02", number: "15+", description: "Business partners" },
  { backgroundNumber: "03", number: "5+", description: "Professional lawyers" },
  { backgroundNumber: "04", number: "30+", description: "Completed Projects" },
];

export default function ExperienceComponent() {
  return (
    <section className="grid grid-cols-2 my-9 md:my-0 gap-4 md:grid-cols-4 md:gap-8 justify-around md:py-16 bg-white px-4">
      {experiences.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center relative px-4"
        >
          {/* Background Number */}
          <span className="text-8xl md:text-9xl font-bold opacity-80 text-gray-200 absolute top-0 -translate-y-6 select-none">
            {item.backgroundNumber}
          </span>

          {/* Foreground Number */}
          <span className="text-3xl md:text-5xl font-semibold text-[#414D75] z-10 mt-10">
            {item.number}
          </span>

          {/* Divider */}
          <hr className="border-t-2 border-yellow-600 w-12 my-2" />

          {/* Description */}
          <span className="text-2xl tracking-tight font-medium text-[#414D75]">
            {item.description}
          </span>
        </div>
      ))}
    </section>
  );
}
