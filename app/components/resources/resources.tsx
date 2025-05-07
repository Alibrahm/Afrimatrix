// components/Resources.js
import React from "react";
import { Chart2, Data, GlobalSearch, DocumentText } from "iconsax-react";

const Resources = () => {
  const resources = [
    {
      icon: <Chart2 color="#B79765" variant="Outline" size={40} />,
      title: "Data-Driven Insights",
      description: "Advanced analytics and research methodologies to deliver actionable market intelligence.",
    },
    {
      icon: <GlobalSearch color="#B79765" variant="Outline" size={40} />,
      title: "Pan-African Coverage",
      description: "Extensive research network across multiple African markets and regions.",
    },
    {
      icon: <Data color="#B79765" variant="Outline" size={40} />,
      title: "Advanced Analytics",
      description: "Cutting-edge tools and methodologies for comprehensive market analysis.",
    },
    {
      icon: <DocumentText color="#B79765" variant="Outline" size={40} />,
      title: "Strategic Reports",
      description: "Detailed market reports and strategic recommendations for informed decision-making.",
    },
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Research Capabilities
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Leveraging expertise and technology to deliver comprehensive market insights.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 max-w-6xl mx-auto">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center bg-white p-6 rounded-lg hover:shadow-lg hover:bg-[#414D75] transition-shadow"
          >
            <div className="text-4xl text-indigo-600 mb-4">{resource.icon}</div>
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

export default Resources;
