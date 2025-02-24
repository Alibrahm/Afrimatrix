import React from "react";
import Hero from "../components/banners/casestudies";
import business from "../../public/images/businessipad.jpg";
import Image from "next/image";
import { StatusUp, TaskSquare, Buildings2, CallCalling } from "iconsax-react";

const BusinessLaw = () => {
  const links = [
    "Employment and Labor Law",
    "Intellectual Property",
    "Matrimonial and Family Law",
    "Real Estate Law",
    "Health Care Law",
  ];

  const coverItems = [
    {
      icon: <StatusUp color="#B79765" variant="Outline" size={40} />,
      title: "Business Transactions",
      description:
        "Our team provides expert legal assistance in structuring and negotiating business transactions, including mergers, acquisitions, and joint ventures. We ensure your business transactions align with your goals and minimize risks.",
    },
    {
      icon: <TaskSquare color="#B79765" variant="Outline" size={40} />,
      title: "Breach of Contract",
      description:
        "We represent clients in disputes involving breach of contract. Our lawyers are skilled in enforcing contracts, resolving disputes, and negotiating settlements to protect your business interests.",
    },
    {
      icon: <Buildings2 color="#B79765" variant="Outline" size={40} />,
      title: "Incorporation & Joint Ventures",
      description:
        "We help businesses incorporate, whether you're starting a new company or restructuring. Our legal team also specializes in joint ventures, ensuring smooth partnerships and compliance with relevant laws.",
    },
    {
      icon: <CallCalling color="#B79765" variant="Outline" size={40} />,
      title: "Small Business Counseling",
      description:
        "Our firm offers comprehensive legal counsel for small businesses, from formation to ongoing operations. We assist with regulatory compliance, contracts, employment matters, and strategic planning.",
    },
  ];

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="lg:flex lg:px-12 gap-10">
          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Title Section */}
            <h1 className="text-4xl font-bold text-[#414D75] tracking-wide mb-4">
              Business Law
            </h1>
            <div className="w-24 h-[2px] bg-[#B79765] mb-4"></div>
            <p className="text-[#8D9593] font-semibold mb-4">
              At our firm, we specialize in various aspects of business law,
              offering expert legal counsel to help businesses navigate complex
              legal challenges. Whether you are starting a new business or
              handling a corporate dispute, we provide strategic solutions that
              align with your goals.
            </p>
            <blockquote className="italic text-[#8D9593] font-semibold border-l-4 border-[#B79765] pl-4 mb-4">
              “We provide reliable and expert legal advice for businesses,
              ensuring they remain compliant and thrive in a competitive
              market.”
            </blockquote>
            <p className="text-[#8D9593] font-semibold mb-6">
              Our team’s experience spans a wide range of industries, ensuring
              we offer tailored legal solutions to meet your specific business
              needs.
            </p>

            {/* Image Section */}
            <div className="mb-8">
              <Image
                src={business}
                alt="Business Law"
                placeholder="blur"
                className="w-full md:w-4/5 md:h-[401px] h-[320px] xs:h-[250px] rounded-lg shadow-md"
              />
            </div>

            {/* Cover Section */}
            <h2 className="text-2xl tracking-wider font-bold text-[#414D75] mb-4">
              Legal Services We Cover
            </h2>
            <div className="w-28 h-[1px] bg-[#B79765] mb-4"></div>
            <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 gap-6">
              {coverItems.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-4 p-4 bg-white hover:bg-[#414D75] rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl text-[#B79765]">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-wide leading-6 group-hover:text-white text-[#414D75]">
                      {item.title}
                    </h3>
                    <p className="text-[#8D9593] font-semibold mt-2 group-hover:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="hidden lg:block w-1/4">
            <h3 className="text-xl font-semibold text-[#414D75] mb-2">
              Other Select Areas of Practice:
            </h3>
            <div className="w-full h-[1px] bg-[#B79765] my-4"></div>
            <ul className="space-y-8">
              {links.map((link, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-[#B79765]">▶</span>
                  <a
                    href="#"
                    className="text-[#414D75] hover:text-[#B79765] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {/* Responsive Sidebar */}
        <aside className="block lg:hidden mt-8">
          <h3 className="text-xl font-semibold text-[#414D75] mb-4">
            Other Select Areas of Practice:
          </h3>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-[#B79765]">▶</span>
                <a
                  href="#"
                  className="text-[#414D75] hover:text-[#B79765] transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default BusinessLaw;
