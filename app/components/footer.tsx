"use client";
import Image from "next/image";
import Logotransparent from "../../public/images/Bullutlogo.svg"
import Message from "../../public/images/Message.png";
import Contact from "../../public/images/Calling.png";
import Subscribe from "../../public/images/subscribe.png";
import Location from "../../public/images/Location.png";
import Linkedin from "../../public/images/linkedin.png";
import Link from "next/link";
function footer() {

  return (
    <footer className="bg-[#414D75] text-white py-10">
      <div className="px-4 md:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
          {/* Contact Info Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Image
              alt="landing"
              src={Logotransparent}
              className="mx-auto md:mx-0 w-auto z-0"
            />
            <hr className="h-px my-4 bg-[#B79765] border-0 w-48 mx-auto md:mx-0" />
            <p className="text-[#B8BAB9] tracking-tight max-w-sm text-md mb-6 mx-auto md:mx-0">
              At Afrimatrix, we close the gap between Business, Customers and
              Value-Creation..
            </p>
            <div className="flex justify-center md:justify-start space-x-2">
              <button
                aria-label="LinkedIn"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/afrimatrix-research/?originalSubdomain=ke",
                    "_blank"
                  )
                }
              >
                <Image alt="LinkedIn" src={Linkedin} className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-lg font-semibold">Contact info</h3>
            <hr className="my-2 h-[1.5px] bg-[#B79765] border-0 w-20 mx-auto md:mx-0" />
            <p className="flex justify-center md:justify-start items-center space-x-2 mb-5">
              <Image alt="message" src={Message} className="w-6 h-5" />
              <a
                // href="mailto:info@bullutmaitha.co.ke"
                className="hover:text-white"
              >
               afrimatrix.net
              </a>
            </p>
            <p className="flex justify-center md:justify-start items-center space-x-2 mb-5">
              <Image alt="Contact" src={Contact} className="w-5 h-5" />
              <span>+254780755315</span>
            </p>
            <p className="flex justify-center md:justify-start items-center space-x-2">
              <Image alt="Location" src={Location} className="w-5 h-5" />
              <span>Oginga Odinga Street, Pionner House, Kisumu, Kenya.</span>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-[220px]  mb-8 md:mb-0 text-center hidden md:block">
            <h3 className="text-lg font-semibold">Quick links</h3>
            <hr className="my-2 h-[1.5px] bg-[#B79765] border-0 w-24 mx-auto" />
            <ul>
              <li className="mb-3">
                <Link
                  href="/practice"
                  className="hover:text-white text-[#B79765]"
                >
                  Practices Areas
                </Link>
                <hr className="h-[1.5px] bg-[#B79765] border-0 w-28 mx-auto" />
              </li>
              <li className="mb-3">
                <Link href="/attorney" className="hover:text-white">
                  Lawyer
                </Link>
                <hr className="h-[1.5px] bg-white border-0 w-14 mx-auto" />
              </li>
              <li className="mb-3">
                {/* <Link href="#" className="hover:text-white">
                  Case Studies
                </Link> */}
                <hr className="h-[1.5px] bg-white border-0 w-24 mx-auto" />
              </li>
              <li className="mb-3">
                <Link href="/blog" className="hover:text-white">
                  Media Centre
                </Link>
                <hr className="h-[1.5px] bg-white border-0 w-24 mx-auto" />
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1">Subscribe</h3>
            <hr className="my-2 h-[1.5px] bg-[#B79765] border-0 w-20 mx-auto md:mx-0" />
            <form className="flex flex-col md:flex-row items-center justify-center md:justify-start my-2">
              <div className="relative w-full max-w-xs md:w-80">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                  <Image alt="Subscribe" src={Subscribe} className="w-4 h-4" />
                  <div className="h-5 border-l border-gray-300 mx-3"></div>
                </div>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full ps-14 p-2.5"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </form>
            <p className="text-gray-300 text-sm mt-4">
              Send an email and you will receive our newsletters,
              service-related blogs, and press releases regularly.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 pt-4 text-center">
          <hr className="h-[0.5px] bg-[#B79765] border-0 mx-auto w-3/4" />
          <p className="text-white font-semibold tracking-wide text-sm mt-4">
            ©2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
export default footer;