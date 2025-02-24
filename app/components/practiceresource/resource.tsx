import React from "react";
import Image from "next/image"; // Import Next.js Image component
import labor from "../../../public/images/laborpractice.png";
import health from "../../../public/images/healthpractice.png";
import family from "../../../public/images/familypractice.png";
import intellectual from "../../../public/images/intellectpractice.png";
import estate from "../../../public/images/estatepractice.png";
import business from "../../../public/images/businesspractice.png";

const PracticeAreas = () => {
  const resources = [
    {
      image: business, // Replacing icons with actual images
      title: "Business law",
      description:
        "Our professional trial lawyers have a lot of experience representing business clients to handle complex cases.",
    },
    {
      image: labor,
      title: "Employment and labor law",
      description:
        "Our employment and labor lawyers have experience successfully representing employees to reclaim their legal rights.",
    },
    {
      image: intellectual,
      title: "Intellectual Property",
      description:
        "Our experienced lawyers helped clients handle more than 200 complex issues inherent in intellectual property law.",
    },
    {
      image: family,
      title: "Matrimonial and family law",
      description:
        "Our matrimonial and family lawyers can represent clients in areas: child support, divorce and domestic abuse.",
    },
    {
      image: estate,
      title: "Real Estate Law",
      description:
        "Our lawyers provide counseling and litigation to help solve real estate issues for more than 200 of our customers.",
    },
    {
      image: health,
      title: "Health Care Law",
      description:
        "Our trial lawyers represent a broad range of healthcare professionals and entities to solve their tough cases.",
    },
  ];

  return (
    <div className="py-3 md:py-12 px-4 bg-gray-50">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 max-w-6xl mx-auto">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-inner hover:shadow-lg hover:border-[#D7B67980] hover:border hover:bg-[#414D75] transition-shadow"
          >
            {/* Replace icon with Image */}
            <div className="mb-4">
              <Image
                src={resource.image}
                alt={resource.title}
                width={50} // Set desired width
                height={50} // Set desired height
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#414D75] group-hover:text-white">
              {resource.title}
            </h3>
            <div className="w-24 flex justify-center h-[1px] bg-[#B79765] my-4" />
            <p className="mt-2 font-semibold text-[#8D9593] group-hover:text-gray-300">
              {resource.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PracticeAreas;
