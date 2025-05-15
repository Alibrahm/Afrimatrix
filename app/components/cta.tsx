"use client";

import { ArrowRight } from "iconsax-react";

export default function EnrollButton() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">
        Ready to Transform Your Market Research Skills?
      </h3>
      <p className="text-gray-300 mb-6">
        Join our program and gain the expertise to drive data-driven decisions
      </p>
      <button
        onClick={() =>
          window.open("https://ee.kobotoolbox.org/x/FkxPfYwC", "_blank")
        }
        className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
      >
        Enroll Now
        <ArrowRight
          size={20}
          color="#111827"
          className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
        />
      </button>
    </div>
  );
}
