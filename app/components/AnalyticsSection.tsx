"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const programDetails = [
  {
    title: "Market Research Professional Certification",
    content:
      "8-week program designed for anyone who uses data to inform insights and strategy. This program is intended for both corporate clients as well as individuals wishing to increase their insights capabilities. Participants learn qualitative and quantitative research techniques using real-world data. Program culminates with participants presenting their findings to a panel of industry experts.",
    image:
      "https://plus.unsplash.com/premium_vector-1719954748245-15d232e27437?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "purple",
  },
  {
    title: "Advanced Survey Analytics",
    content:
      "10-week program tailored specifically towards market research professionals who wish to increase their skills in the areas of advanced statistics. Topics include data restructuring, linear and logistic regression models, segmentation methods, factor analysis, perceptual mapping, discriminant analysis, etc. SPSS and Excel will be used. No coding experience required.",
    image:
      "https://plus.unsplash.com/premium_vector-1682299257648-a19f5879e226?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "indigo",
  },
  {
    title: "African Entrepreneurs’ Startup Bootcamp",
    content:
      "10-week program designed specifically for African entrepreneurs and startups with revenues of less than $5,000 USD/month. Program culminates with entrepreneurs pitching their business to a panel of successful entrepreneurs and investment professionals.",
    highlights: [
      "Opportunity Identification",
      "TAM & Market Sizing",
      "Sales & Marketing",
      "Brand Strategy",
      "Financial Reporting & Analysis",
      "Competitive Analysis",
      "Cultivating Early Adopters",
      "Partnerships, Mergers, & Acquisitions",
      "Building Your BOD & Advisory Team",
      "Creating a World-Class Pitch Deck",
      "Investor Relations",
      "Pitching Like a Pro",
    ],
    image:
      "https://plus.unsplash.com/premium_vector-1682270561494-52f86218f649?q=80&w=2240&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "green",
  },
];

export default function ProgramInfoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Scroll Section */}
        <div className="flex flex-col space-y-12">
          {programDetails.map((program, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className={`text-2xl font-bold text-${program.color}-700`}>
                {program.title}
              </h3>
              <p className="text-gray-700 text-lg">{program.content}</p>
              {program.highlights && (
                <ul className="list-disc list-inside text-gray-600 space-y-1 pl-2">
                  {program.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Right Sticky Image */}
        <div className="hidden lg:block sticky top-32 h-[400px]">
          <motion.img
            key={activeIndex}
            src={programDetails[activeIndex].image}
            alt={programDetails[activeIndex].title}
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
