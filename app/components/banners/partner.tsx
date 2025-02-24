"use client";
import Image from "next/image";
import React from "react";
import hero from "../../../public/images/partner.jpg";
export default function HeroSection() {
  return (
    <div className="relative md:h-64 sm:h-48 flex items-center justify-center text-center text-white ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={hero}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/10 -z-10"></div>

      {/* Content */}
      <div className="max-w-5xl ">
        <div className="flex items-center flex-col justify-center mt-20">
          <p className="text-5xl font-semibold">Lawyer</p>
          <div className="w-48 flex justify-center  h-[2px] bg-[#D7B67980] my-4" />
        </div>
      </div>
    </div>
  );
}
