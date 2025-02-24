"use client";
import dynamic from "next/dynamic";
import React, { useState, CSSProperties } from "react";
import Partner from "../components/banners/contactus";
import Contactbg from "../../public/images/contactbg.jpg";
import { Call, Location, MessageCircle } from "iconsax-react";

// Dynamically import the map component with SSR disabled
const Map = dynamic(() => import("../components/maplocation"), { ssr: false });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [notification, setNotification] = useState<"success" | "error" | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const position: [number, number] = [-1.2975388736251605, 36.76507002629338];

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
       setNotification("success");
        setFormData({ name: "", phone: "", email: "", message: "" }); // Reset form after success
      } else {
         setNotification("error");
      }
    } catch (error) {
      console.error("Error:", error);
       setNotification("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Partner />
      <div className="relative">
        <div className="container mx-auto px-4 py-3 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="bg-cover bg-no-repeat bg-center rounded-lg shadow-md h-full relative overflow-hidden"
              style={
                {
                  backgroundImage: `url(${Contactbg.src})`,
                  backgroundColor: "#ffffffdb",
                } as CSSProperties
              }
            >
              <div
                className="absolute inset-0 bg-white bg-opacity-90"
                style={{ backgroundColor: "#FFFFFFE5" }}
              ></div>
              <div className="relative p-6">
                <h2 className="text-4xl text-[#414D75] font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-[#8D9593] tracking-tight font-semibold leading-5 sm:text-lg md:text-xl">
                  If you&apos;re facing a complex legal issue, contact us
                  directly by phone or fill out the form to receive a free
                  consultation from our experienced trial lawyers.
                </p>
                <ul className="list-none mt-12 p-0 sm:text-lg">
                  <li className="flex items-center space-x-2 mb-2">
                    <MessageCircle size="24" color="#B79765" variant="Bold" />
                    <a
                      href="mailto:info@bullutmaitha.co.ke"
                      className="text-[#414D75] text-xl hover:text-blue-500"
                    >
                      info@bullutmaitha.co.ke
                    </a>
                  </li>
                
                  <li className="flex items-center space-x-2 mb-2">
                    <Call size="24" color="#B79765" variant="Bold" />
                    <a
                      href="tel:020-2100410"
                      className="text-[#414D75] text-xl hover:text-blue-500"
                    >
                      020-2100410
                    </a>
                  </li>

                  <li className="flex items-center space-x-2 mb-2">
                    <Location size="24" color="#B79765" variant="Bold" />
                    <p className="text-[#414D75] text-xl">
                      Riara Corporate Suites, 3rd Floor, Suite 305, Riara Road,
                      Nairobi.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white px-2 md:px-16 rounded-lg">
              {notification === "success" && (
                <div
                  id="toast-success"
                  className="flex items-center w-full border max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow-sm "
                  role="alert"
                >
                  <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="sr-only">Check icon</span>
                  </div>
                  <div className="ms-3 text-sm font-normal">
                    Message sent successfully.
                  </div>
                  <button
                    type="button"
                    className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
                    data-dismiss-target="#toast-success"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
              )}
              {notification === "error" && (
                <div className="text-sm font-normal text-red-600">
                  Failed to send email.
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <form onSubmit={sendEmail}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-[#414D75] text-sm font-bold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#414D75] leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-[#414D75] text-sm font-bold mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#414D75] leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-[#414D75] text-sm font-bold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#414D75] leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-[#414D75] text-sm font-bold mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message..."
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-[#414D75] leading-tight focus:outline-none focus:shadow-outline h-24"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#B79765] w-full text-white font-bold py-1.5 px-5 rounded"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </form>
            </div>
          </div>
          <Map position={position} popupText="We are here!" height="500px" />
        </div>
      </div>
    </>
  );
};

export default ContactForm;
