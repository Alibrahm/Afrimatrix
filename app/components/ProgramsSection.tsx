"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Market Research Professional Certification",
    duration: "8 Weeks",
    image:
      "https://plus.unsplash.com/premium_vector-1719935711070-54fa71d71a01?q=80&w=2028&auto=format&fit=crop",
    color: "purple",
    summary:
      "8-week program for professionals and organizations seeking to improve their data-driven insights and strategy.",
    highlights: [
      "For individuals & corporate clients",
      "Hands-on with real datasets",
      "Final project presented to industry experts",
    ],
  },
  {
    title: "Advanced Survey Analytics",
    duration: "10 Weeks",
    image:
      "https://plus.unsplash.com/premium_vector-1682310990227-03ea59ce77ff?q=80&w=2208&auto=format&fit=crop",
    color: "indigo",
    summary:
      "10-week advanced program focused on statistical techniques for research professionals.",
    highlights: [
      "SPSS & Excel focused",
      "Logistic regression, perceptual mapping",
      "Practical, applied learning",
    ],
  },
  {
    title: "African Entrepreneurs’ Startup Bootcamp",
    duration: "10 Weeks",
    image:
      "https://plus.unsplash.com/premium_vector-1736942106427-d9e5e1bc2633?q=80&w=2360&auto=format&fit=crop",
    color: "green",
    summary:
      "10-week business acceleration program for early-stage African startups.",
    highlights: [
      "Opportunity Identification & TAM",
      "Sales, Marketing & Brand Strategy",
      "Financials, Investor Relations, Pitching",
    ],
  },
];

export default function ProgramsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.1,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative bg-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Scroll Section */}
        <div className="flex flex-col space-y-24">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className={`text-3xl font-bold text-${program.color}-700`}>
                {program.title}
              </h3>
              <p className="text-gray-600">{program.summary}</p>
              <ul className="list-disc list-inside text-gray-500 space-y-1">
                {program.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <span
                className={`inline-block bg-${program.color}-100 text-${program.color}-700 text-sm font-semibold px-4 py-1 rounded-full`}
              >
                Duration: {program.duration}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right Sticky Image */}
        <div className="hidden lg:block sticky top-32 h-[400px]">
          <motion.img
            key={activeIndex}
            src={programs[activeIndex].image}
            alt={programs[activeIndex].title}
            className="w-full h-full object-cover rounded-3xl shadow-lg"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}
