"use client";

import { motion } from "framer-motion";
import { GlobalEdit, I24Support, NotificationStatus } from "iconsax-react";

const services = [
  {
    icon: <GlobalEdit size="32" color="#FF8A65" />,
    title: "GLOBAL SAMPLE",
    description:
      "iMAD Research operates carefully curated proprietary online panels. We specialize in delivering unsurpassed global respondents for B2B Decision Makers, Healthcare Professionals, and Consumers.",
  },
  {
    icon: <NotificationStatus size="32" color="#FF8A65" />,
    title: "SURVEY PROGRAMMING",
    description:
      "A consultative and flexible approach to survey programming. We use the latest techniques and industry-recognized survey programs which offer in-field monitoring, survey management, and advanced analytics.",
  },
  {
    icon: <I24Support size="32" color="#FF8A65" />,
    title: "24/7 PROJECT SUPPORT",
    description:
      "Our experienced project managers work with your team to encourage collaboration, manage stakeholder relationships, and help implement a customized process to help you meet your research objectives.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 bg-gray-100 relative">
      {/* Torn Paper Effect */}
      <div className="absolute -top-10 left-0 w-full">
        <svg
          className="w-full h-10"
          viewBox="0 0 1200 50"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 Q300,60 600,30 T1200,30 L1200,50 L0,50 Z"
            fill="#f3f4f6"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto text-center relative z-10">
        <h3 className="text-sm text-yellow-500 font-semibold tracking-wider">
          OUR SERVICES
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What We Offer
        </h2>
      </div>

      {/* Cards Section */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 py-12 max-w-sm text-center flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>
            <p className="text-gray-600 md:text-md my-2 tracking-wide">
              {service.description}
            </p>
            <button className="mt-9 text-yellow-500 font-semibold hover:underline">
              + LEARN MORE
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
