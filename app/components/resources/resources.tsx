// components/Resources.js
import React from "react";
import { Personalcard,Award,BrifecaseTick,UserTick } from "iconsax-react";
const Resources = () => {
  const resources = [
    {
      icon: <Personalcard color="#B79765" variant="Outline" size={40} />, // Replace with actual icons
      title: "Experienced Lawyers",
      description: "Our lawyers are top-tier professionals with exceptional skills.",
    },
    {
      icon: <Award color="#B79765" variant="Outline" size={40} />,
      title: "Extensive Experience",
      description: "We are well equipped to handle the most challenging legal issues.",
    },
    {
      icon: <BrifecaseTick color="#B79765" variant="Outline" size={40} />,
      title: "Client-focused Service",
      description: "We prioritise our client's needs and deliverables",
    },
    {
      icon: <UserTick color="#B79765" variant="Outline" size={40} />,
      title: "Credibility",
      description:
        "Our law firm is recognised and respected by our vast number of clients across the world",
    },
    // {
    //   icon: <Bank color="#B79765" variant="Outline" size={40} />,
    //   title: "Good Reputation",
    //   description:
    //     "We are a well-known law firm in 50 nations and territories.",
    // },
    // {
    //   icon: <CallReceived color="#B79765" variant="Outline" size={40} />,
    //   title: "Free Consultation",
    //   description: "You will receive consultancy without paying any fee.",
    // },
    // {
    //   icon: <People color="#B79765" variant="Outline" size={40} />,
    //   title: "Good Resources",
    //   description: "We have a huge resource of database and document.",
    // },
    // {
    //   icon: <UserTick color="#B79765" variant="Outline" size={40} />,
    //   title: "Talent Leaders",
    //   description: "Our leaders are famous for dealing with complex cases.",
    // },
  ];

  return (
    <div className="py-12  px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Here&apos;s why we stand out among others in the industry.
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
