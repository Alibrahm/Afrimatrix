"use client";

import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const randomImages = [
  "https://images.unsplash.com/photo-1552862750-746b8f6f7f25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
];

const textMap: Record<string, string> = {
  [randomImages[0]]:
    "Afrimatrix is a leading supplier of market research and professional development programs.",
  [randomImages[1]]:
    "We’re comprised of seasoned professionals from the US and Africa who pride ourselves on our unrelenting commitment to excellence.",
  [randomImages[2]]:
    "Our core expertise resides in providing research solutions and professional development programs that drive strategy - and, ultimately, your business outcomes.",
};

const HeroSection = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    setImages([...randomImages].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section className="relative w-full h-[90vh]">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        interval={5000}
        className="h-full"
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            {/* Background Image */}
            <Image
              src={img}
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#0F233AC9] mix-blend-multiply"></div>

            {/* Content Section */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <h1 className="text-5xl md:text-6xl font-bold">Real Results.</h1>
              <div className="md:flex flex-col justify-start">
                <p className="text-lg md:text-xl justify-start max-w-3xl mt-4">
                  {textMap[img] || "Loading..."}
                </p>
                <button className="mt-6 w-56 px-6 py-3 border border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition">
                  MORE ABOUT US
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
