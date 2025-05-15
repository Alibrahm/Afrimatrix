"use client";
import { ArrowForward } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { offerings } from "@/app/data/offerings";

export default function TrustedCompanies() {
  return (
    <section className="w-[min(76.5rem,90%)] mx-auto py-2 lg:py-10 text-gray-900">
      <h2 className="text-2xl md:text-3xl md:text-center lg:text-4xl font-bold tracking-wide capitalize">
        Leading companies
        <br />
        have trusted us
      </h2>
      <div className="mt-12 grid gap-8 grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]">
        {offerings.map((offering, index) => (
          <Link 
            href={`/offerings/${offering.slug}`} 
            key={index} 
            className="list-none block hover:scale-[1.02] transition-transform duration-300"
          >
            <div>
              <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
                <div className="w-full h-full bg-white rounded-xl overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={offering.imageUrl}
                      alt={offering.name}
                      width={200}
                      height={200}
                      className="w-full rounded-tr-3xl h-full object-cover"
                    />
                  </div>
                  <div className="absolute bg-slate-50 -bottom-1 -right-1 w-24 h-24 p-5 rounded-tl-3xl">
                    <div className="flex justify-center items-center w-full h-full text-white bg-white rounded-full transition-transform duration-300 hover:scale-110">
                      <ArrowForward
                        size="42"
                        color="#0F233AC9"
                        variant="Broken"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold capitalize">
                  {offering.name}
                </h3>
                <p className="mt-2 text-gray-600">{offering.description}</p>
                <ul className="flex flex-wrap items-center gap-2 mt-4 p-0 list-none">
                  {offering.tags.map((tag, i) => (
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
          </Link>
        ))}
      </div>
    </section>
  );
}
