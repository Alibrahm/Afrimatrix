"use client";
import React from "react";
import Image from "next/image";
import Historyfgd from "../../public/images/africanhands.jpg";
import Historybgd from "../../public/images/historybgd.png";
export default function History() {
  return (
    <section className="flex  pt-2 md:py-9 md:pb-10  mx-auto font-inherit bg-[#F6F6F6] ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
        <div className=" md:flex flex-col h-full items-center mt-0 md:-mt-8 relative">
          <div className="w-72 -ml-16">
            <Image
              src={Historybgd}
              alt="Background image"
              height={430}
              className="h-[17rem] md:h-[27rem]"
            />
          </div>
          <div className="absolute left-[41%] md:left-[36%] top-[0.5rem] mr-5 md:mr-0 md:top-[3.5rem]">
            <Image
              src={Historyfgd}
              alt="Foreground image"
              className="relative"
              width={609}
              height={420}
            />
          </div>
        </div>

        <div className="flex flex-col m-auto">
          <div className="my-1 md:my-4 max-w-2xl">
            <div className="text-[#B79765] tracking-widest font-bold text-xl my-2 text-center md:text-left">
              About us
            </div>
            <div className="flex justify-between ml-1 md:ml-0">
              <div>
                {/* <span className="text-[#414D75] text-xl font-bold md:text-2xl tracking-widest">
                  Our History
                </span> */}
                <hr className="w-16 h-1  md:my-1 bg-[#B79765] border-0 rounded " />
              </div>
              <div className="absolute px-4 right-[5%] -mt-5 ">
                <svg
                  className="w-10 h-10 text-gray-300 opacity-35 dark:text-gray-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
              </div>
            </div>
            <div className="antialiased my-2 text-lg p-2 md:p-0">
              <p className="max-w-[29rem] text-[#8D9593] font-bold tracking-wider line-clamp-4  ">
                Bullut & Maitha Advocates LLP is a law firm in Nairobi offering
                innovative and agile legal solutions for modern businesses.
              </p>
              <div className=" inline-flex items-center justify-center w-full"></div>
              <p className="text-[#8D9593] font-bold tracking-wider">
                We specialize in corporate and commercial law providing top-tier
                services to our clients. Our experienced lawyers build strong
                and unique relationships with clients to provide comprehensive
                advice tailored to their needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
