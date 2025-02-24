"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import carelaw from "../../public/images/carelaw.png";
import businesslaw from "../../public/images/business law.png";
import labor from "../../public/images/laborlaw.png";
import realestate from "../../public/images/realestatelaw.png";
import crimlaw from "../../public/images/criminalLaw.webp";
import civillaw from "../../public/images/civilLaw.webp";
import constlaw from "../../public/images/constitutionalLaw.webp";
import adminlaw from "../../public/images/administrative.webp";
import envlaw from "../../public/images/environmental.png"
import lawicon from "../../public/images/lawsicon.png";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image data (replace these with your own images and descriptions)
const slides = [
  { url: carelaw, title: "Media and Technology" }, // Health Care Law
  { url: businesslaw, title: "Corporate and Commercial Law" }, // Business Law
  { url: labor, title: "Employment and Labor Law" }, // Employment and Labor Law
  { url: realestate, title: "Conveyance and Real Estate" }, // Real Estate Law
  { url: crimlaw, title: "Intellectual Property" }, // Criminal Law
  { url: civillaw, title: "Dispute Resolution" }, // Civil Law
  { url: constlaw, title: "Banking and Financial Services" }, // Constitutional Law
  { url: adminlaw, title: "Administrative Law" }, // Administrative Law
  { url: envlaw, title: "Environmental Law" }, // Environmental Law
];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

    const [isMobile, setIsMobile] = useState(false);

    // Track window size changes
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      // Initial check
      handleResize();

      // Event listener for window resize
      window.addEventListener("resize", handleResize);

      // Cleanup on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <div className="relative w-full py-14 mx-auto">
      <div className="mx-8 my-3">
        <div className="flex flex-col">
          <span className="text-[#414D75] font-medium md:text-4xl tracking-widest">
            Practice Areas
          </span>
          <hr className="h-[1.5px] my-2 bg-[#B79765] border-0 w-28   "></hr>
        </div>
        <div className="flex justify-end text-[#6D6D6D]">
          {/* <span className="tracking-widest">
            Smart approaches to legal solutions with.
          </span> */}
          {/* Arrows in top-right corner, outside the main container */}
          <div className="flex space-x-4 z-10">
            <button
              type="button"
              onClick={goToPrevious}
              className="inline-flex items-center justify-center h-8 px-1 w-6 rounded-s-lg  hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none  "
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous page</span>
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="inline-flex items-center justify-center h-8 px-1 w-6  rounded-e-lg  hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none "
            >
              <svg
                className="w-4 h-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next page</span>
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full py-2">
        {/* Slides - showing three images at a time */}
        <div className="overflow-hidden">
          {/* <div
            className="flex transition-transform duration-500 gap-2.5 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 10)}%)`, // Move the carousel based on index
              width: `${(slides.length / 9.5) * 100}%`, // Ensure there's enough space for all slides
            }}
          > */}
          <div
            className="flex transition-transform duration-500 gap-1 md:gap-2.5 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * (100 / (isMobile ? 5.5 : 10))
              }%)`, // Dynamically change based on screen width
              width: `${(slides.length / (isMobile ? 5 : 9.5)) * 100}%`, // Adjust width for mobile
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-[28%] md:w-[26%]  flex-shrink-0 ">
                <div className="relative h-[16rem] md:h-[20.5rem] rounded-md overflow-hidden shadow-lg">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/10 -z-10"></div>

                  <Image
                    src={slide.url}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 ease-in-out"
                  />
                  <div className="flex absolute gap-2 bottom-4 left-4">
                    <Image
                      src={lawicon}
                      alt={slide.title}
                      className="transition my-auto text-[#B79765] duration-500  ease-in-out"
                    />
                    <div className=" shadow-white text-white tracking-wider font-bold my-auto text-xl ease-linear rounded">
                      {slide.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center my-3 space-x-2">
        {slides.map((_, index) => (
          <button
            aria-label="practiceArea"
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[#F3D191]" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
