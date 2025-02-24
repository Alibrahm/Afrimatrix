"use client";
import { useState } from "react";
import Image from "next/image";
import jeptum from "../../public/images/jeptum.jpg";
import maitha from "../../public/images/maitha.jpg";
import christopher from "../../public/images/christopher.png";
import ian from "../../public/images/ian.jpg";
import Partner from "../components/banners/partner";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

   const slides = [
     {
       url: jeptum,
       title: "Jeptum K. Bullut",
       description1: `Jeptum Bullut is a Partner at Bullut & Maitha Advocates LLP. Ms. Bullut is a dynamic legal professional with a track record of success in navigating complex regulatory landscapes. With expertise spanning financial services, mobile money, and technology sectors, she excels in identifying and managing regulatory risks, crafting effective compliance strategies, and optimizing policies.`,
       description2: `Ms. Bullut has extensive experience representing clients before regulatory authorities. She has knowledge in corporate governance, negotiation, and contract drafting, which she combines using a client-based approach to achieve positive outcomes for her clients.`,
       description3: `Ms. Bullut holds a Bachelor of Laws (LLB) degree from the Catholic University of Eastern Africa and a postgraduate diploma from the Kenya School of Law. She is also an Advocate of the High Court of Kenya.`,
     },
     {
       url: maitha,
       title: "Martin Maitha",
       description1: `Martin Maitha is a Partner at Bullut & Maitha Advocates LLP with over eight years post-qualification experience. He specializes in the practice areas of corporate and commercial law, intellectual property, media, and technology law.`,
       description2: `His experience includes drafting, reviewing, and negotiating contracts, mergers and acquisitions, joint ventures, corporate governance, regulatory compliance, intellectual property, data protection, and dispute resolution, catering to a diverse range of clients, from the start-up scene to financial and advisory services, media, entertainment, and the creative arts.`,
       description3: `Mr. Maitha is an Advocate of the High Court of Kenya, a Commissioner of Oaths, and a Notary Public. He holds a Bachelor of Laws (LLB) degree from the University of Nairobi and a Postgraduate Diploma from the Kenya School of Law. He is a member of the Law Society of Kenya and an Associate Member of the Institute of Certified Public Accountants.`,
     },
     {
       url: christopher,
       title: "Christopher Ntogaiti",
       description1: `Christopher Mwenda Ntogaiti is an Associate at Bullut & Maitha Advocates LLP. He specializes in corporate and commercial practice as well as conveyancing and real estate practice.`,
       description2: `He has honed his skills in reviewing and drafting various commercial agreements, general commercial practice advisory, perfection of securities, and property investment advisory services with respect to property transactions.`,
       description3: `Mr. Ntogaiti holds a Bachelor of Laws (LLB) degree from the University of Nairobi, Kenya. He also holds a postgraduate diploma from the Kenya School of Law. He is a member of the Law Society of Kenya and a Commissioner for Oaths.`,
     },
     {
       url: ian,
       title: "Ian Waithaka",
       description1: `Ian Waithaka is an Associate at Bullut & Maitha Advocates LLP. He specializes in litigation, with a particular specialty in employment and labour relations law.`,
       description2: `His experience includes defending and prosecuting claims in court on behalf of individual and corporate clients, advisory on contracts, human resource policies and procedures, and advising on the process surrounding fair termination of employment.`,
       description3: `Mr. Waithaka holds a Bachelor of Laws (LLB) degree from the University of Nairobi and a postgraduate diploma from the Kenya School of Law. He is a member of the Law Society of Kenya.`,
     },
   ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <Partner />
      <div className="relative w-full my-1 md:my-5 overflow-hidden">
        {/* Navigation Buttons */}
        <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 z-10 px-4">
          <button
            title="prev"
            type="button"
            onClick={goToPrevious}
            className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <svg
              className="w-4 h-4"
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
          </button>
          <button
            type="button"
            title="nxt"
            onClick={goToNext}
            className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <svg
              className="w-4 h-4"
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
          </button>
        </div>

        {/* Carousel Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2  items-center px-6"
            >
              <div className="flex justify-center">
                <Image
                  src={slide.url}
                  alt={slide.title}
                  height={0}
                  width={0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-lg shadow-lg object-cover w-full h-auto max-w-lg  max-h-[622px]"
                />
              </div>
              <div className="mb-auto">
                <h3 className="text-xl font-bold">{slide.title}</h3>
                <div className="w-28 flex justify-center h-[2.5px] bg-[#B79765] my-4" />
                <p className="text-[#8D9593] mt-6 leading-6 tracking-widest text-[18px] max-w-lg">
                  {slide.description1}
                </p>
                <p className="text-[#8D9593] mt-6 leading-6 tracking-widest text-[18px] max-w-lg">
                  {slide.description2}
                </p>
                <p className="text-[#8D9593] mt-6 leading-6 tracking-widest text-[18px] max-w-lg">
                  {slide.description3}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              title="navigate"
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-[#B79765]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
