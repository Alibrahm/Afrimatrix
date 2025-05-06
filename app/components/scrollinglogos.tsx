"use client";
import { motion } from "framer-motion";

const logos = [
  "/images/logos/logo1.png",
  "/images/logos/logo2.png",
  "/images/logos/heineken.png",
  "/images/logos/ktda.png",
  "/images/logos/facebook.png",
  "/images/logos/dolby.png",
  "/images/logos/good.png",
  "/images/logos/britam.png",
  "/images/logos/circlek.png",
  "/images/logos/pwani.png",
  "/images/logos/airtel.png",
  "/images/logos/standard.png",
];

// Alternative: Use Unsplash Random Logos
const unsplashLogos = Array.from({ length: 6 }).map(
  (_, i) => `https://source.unsplash.com/200x100/?brand,logo&sig=${i}`
);

const ScrollingLogos = () => {
  return (
    <div className="w-full  py-6 overflow-hidden">
      <motion.div
        className="flex space-x-8 w-max"
        animate={{ x: ["0%", "-60%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 44, // Adjust speed
        }}
      >
        {/* {[...logos, ...unsplashLogos, ...logos, ...unsplashLogos].map( */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Brand Logo"
            className="h-12 w-auto md:h-16 rounded-lg"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingLogos;
