"use client";

import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const heroContent = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
    title: "Data-Driven Insights",
    description: "Transform your business decisions with our comprehensive market research solutions. We deliver actionable insights that drive growth and innovation.",
    cta: "Explore Our Research"
  },
  {
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
    title: "Global Market Intelligence",
    description: "Access deep market insights across Africa and beyond. Our expert team combines local knowledge with global research methodologies.",
    cta: "View Our Services"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Strategic Research Solutions",
    description: "From consumer behavior to competitive analysis, we provide the intelligence you need to stay ahead in today's dynamic market landscape.",
    cta: "Get Started"
  }
];

const HeroSection = () => {
  const [slides, setSlides] = useState(heroContent);

  useEffect(() => {
    setSlides([...heroContent].sort(() => Math.random() - 0.5));
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
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[90vh]">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt="Hero background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
              priority
            />

            {/* Dark Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F233A] via-[#0F233AC9] to-[#0F233A] mix-blend-multiply"></div>

            {/* Content Section */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                  {slide.title}
                </h1>
                <div className="md:flex flex-col justify-start">
                  <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                    {slide.description}
                  </p>
                  <button className="mt-8 group flex items-center justify-center gap-2 w-64 px-8 py-4 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                    {slide.cta}
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
