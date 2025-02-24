"use client";
import { ArrowForward } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

const companies = [
  {
    name: "Market Research",
    imageUrl:
      "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { label: "Market Research", color: "#d3b19a" },
      { label: "Professional Programs", color: "#70b3b1" },
    ],
    description:
      "8-week program designed for anyone who uses data to inform insights and strategy.Participants learn qualitative and quantitative research techniques using real-world data. ",
  },
  {
    name: "Entrepreneurs’ Startup Bootcamp",
    imageUrl:
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { label: "Entrepreneur", color: "#d3b19a" },
      { label: "Bootcamp", color: "#d05fa2" },
    ],
    description:
      "10-week program designed specifically for African entrepreneurs and startups with revenues of less than $5,000 USD/month.Program culminates with entrepreneurs pitching their business to a panel of successful entrepreneurs and investment professionals. ",
  },
  {
    name: "Social Research",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661526579038-aea87aecd898?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { label: "branding", color: "#d3b19a" },
      { label: "packaging", color: "#70b3b1" },
      { label: "marketing", color: "#d05fa2" },
    ],
    description:
      "We have deep experience with a variety of social listening methodologies, as well as face-to-face and mobile-based qualitative and quantitative techniques that inform ethnographic and other nuanced social research methodologies.",
  },
];

export default function TrustedCompanies() {
  return (
    <section className="w-[min(76.5rem,90%)] mx-auto py-5 lg:py-20 text-gray-900">
      <h2 className="text-2xl md:text-3xl md:text-center lg:text-4xl font-bold tracking-wide capitalize">
        Leading companies
        <br />
        have trusted us
      </h2>
      <div className="mt-20 grid gap-8 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))]">
        {companies.map((company, index) => (
          <div key={index} className="list-none">
            <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
              <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={company.imageUrl}
                    alt={company.name}
                    width={200}
                    height={200}
                    className="w-full rounded-tr-3xl h-full  object-cover"
                  />
                </div>
                <div className="absolute bg-slate-50 -bottom-1 -right-1 w-24 h-24 p-5  rounded-tl-3xl">
                  <Link
                    href="#"
                    className="flex justify-center items-center w-full h-full text-white bg-white rounded-full transition-transform duration-300 hover:scale-110"
                  >
                    <ArrowForward
                      size="42"
                      color="#0F233AC9"
                      variant="Broken"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold capitalize">
                {company.name}
              </h3>
              <p className="mt-2 text-gray-600">
                {company.description}
              </p>
              <ul className="flex flex-wrap items-center gap-2 mt-4 p-0 list-none">
                {company.tags.map((tag, i) => (
                  <li
                    key={i}
                    className="uppercase font-bold text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
