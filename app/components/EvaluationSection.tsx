"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const evaluations = [
  {
    title: "Baseline Community Evaluation (Setting the Stage)",
    content:
      "Useful when collecting specific sub-population work to inform demographic and other baseline data before the introduction of particular community services or projects.",
    image:
      "https://plus.unsplash.com/premium_vector-1683141200177-9575262876f7?q=80&w=2356&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "blue",
  },
  {
    title: "Midterm Evaluation (Act One)",
    content:
      "Continual assessment of and re-direct interventions with an eye towards achieving project objectives. This is a continual process, particularly important with hard-to-reach African populations.",
    image:
      "https://plus.unsplash.com/premium_vector-1682309126273-b75f58d8f39b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "teal",
  },
  {
    title: "End-term Evaluation (Final Act)",
    content:
      "Synthesis of project life cycle findings. Often findings are ethnographic, IDI, and social listening methods combined to provide deep social understandings.",
    image:
      "https://plus.unsplash.com/premium_vector-1682307034554-d851f9aa7f29?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "emerald",
  },
];

export default function EvaluationSection() {
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
    <section className="relative bg-white py-20 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Scroll Section */}
        <div className="flex flex-col space-y-24">
          {evaluations.map((evaluation, index) => (
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
              <h3 className={`text-2xl font-bold text-${evaluation.color}-700`}>
                {evaluation.title}
              </h3>
              <p className="text-gray-600 text-lg">{evaluation.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Sticky Image */}
        <div className="hidden lg:block sticky top-32 h-[400px]">
          <motion.img
            key={activeIndex}
            src={evaluations[activeIndex].image}
            alt={evaluations[activeIndex].title}
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
