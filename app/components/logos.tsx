import Image from "next/image";
import Mlogg from "../../public/images/M.svg";
import triangle from "../../public/images/triangle.svg";
import shield from "../../public/images/shield.svg";
import arrow from "../../public/images/arrow.svg";
import boatlogo from "../../public/images/boatlogo.svg";	

export default function Logos() {
  return (
    <section className="relative py-16 bg-cover bg-center border bg-[#F6F6F6] overflow-hidden">
      <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-36 w-full justify-center items-center">
        <Image
          src={Mlogg}
          alt="Calendar"
          className="transition my-auto text-[#B79765] duration-500 ease-in-out w-20 md:w-28 lg:w-auto"
        />

        <Image
          src={triangle}
          alt="Calendar"
          className="transition my-auto text-[#B79765] duration-500 ease-in-out w-20 md:w-28 lg:w-auto"
        />

        <Image
          src={boatlogo}
          alt="Calendar"
          className="transition my-auto text-[#B79765] duration-500 ease-in-out w-20 md:w-28 lg:w-auto"
        />

        <Image
          src={shield}
          alt="Calendar"
          className="transition my-auto text-[#B79765] duration-500 ease-in-out w-20 md:w-28 lg:w-auto"
        />

        <Image
          src={arrow}
          alt="Calendar"
          className="transition my-auto text-[#B79765] duration-500 ease-in-out w-20 md:w-28 lg:w-auto"
        />
      </div>
    </section>
  );
}
