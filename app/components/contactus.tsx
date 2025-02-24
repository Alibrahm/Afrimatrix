"use client";
import React, { useEffect } from "react";
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css'; // Import default Flatpickr styling


export default function ExperienceComponent() {

     useEffect(() => {
       flatpickr("#datepicker-actions", {
         enableTime: true,
         dateFormat: "Y-m-d H:i",
         defaultDate: "today", // Auto-select today
         weekNumbers: true,
         onChange: (selectedDates, dateStr,) => {
           console.log("Selected Date:", dateStr); // Handle date selection
         },
       });
     }, []);
  return (
    <section className="h-screen flex flex-col w-full justify-evenly bg-white">
      {/* Left Side - Full Height Iframe */}
      <div className="text-2xl tracking-tight text-center font-medium text-[#414D75]">
        Book your Consultation with us
      </div>
      <div className="w-full  h-full">
        <iframe
          className="w-full h-full"
          src="https://bullutmaithaadvocatesllp.zohobookings.com/portal-embed#/bullutmaithaadvocatesllp"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      {/* Right Side - Image (Hidden on Mobile) */}
      {/* <div className="hidden md:flex w-1/2 items-center justify-center">
        <Image
          src={consultancy}
          alt="Hero Background"
          className="h-auto max-h-[90vh] w-auto"
          objectFit="cover"
          quality={95}
          priority
        />
      </div> */}
    </section>
  );
}
