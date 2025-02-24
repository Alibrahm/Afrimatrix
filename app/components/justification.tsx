import Image from "next/image";
import justification from "../../public/images/justification.png";
import attorney from "../../public/images/attorney.png"
import personalized from "../../public/images/personalized.png"
import results from "../../public/images/results.png"
import integrity from "../../public/images/integrity.png"
import whychoose from "../../public/images/whyuslogo.png"
export default function WhyChooseUs() {
  return (
    <section className="relative py-16 bg-cover bg-center  overflow-hidden">
      <div className="flex justify-between">
        <div className="flex justify-between">
          <div className="mb-12 flex mx-auto justify-center flex-col">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Image
                alt="contact"
                src={whychoose}
                placeholder="blur"
                className="w-14 h-14 ml-2"
              />
              <p className="text-xl text-black font-medium tracking-wide ">
                Why choose us
              </p>
              <div className="w-12 h-[2px] bg-[#B79765]"></div>
            </div>
            <div className="flex w-full justify-center md:justify-start max-w-xl">
              <div className="text-[#414D75] flex text-4xl md:ml-[5rem] tracking-widest font-semibold mb-4 text-center md:text-left">
                Reasons why we are the best law firm for you
              </div>
            </div>
          </div>
          <div className=" right-44 absolute hidden md:flex top-1/4 max-w-xl justify-end ">
            <p className="text-[#808382] tracking-widest max-w-xl">
              Our clients know of our unique legal strengths, our ability to
              effectively advocate difficult and complex cases, and they feel
              satisfied when working with us.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <Image
            src={justification}
            alt="Background image"
            height={350}
            width={550}
            quality={100}
            priority={true}
            className="absolute right-0"
          />
          {/* Overlay gradients */}
          <div className="absolute inset-0 top-2/3 bg-[#F6F6F6]"></div>
        </div>
      </div>

      <div className="container mx-auto relative px-6 lg:px-12 text-center">
        {/* Top Row: Heading and Description */}

        {/* Bottom Row: Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Expertise Card */}
          <div className="p-6 hover:bg-[#414D75] bg-white text-gray-600 hover:text-gray-100 shadow-lg rounded-md text-center">
            <div className="mb-4 flex justify-center text-yellow-600">
              <Image
                alt="contact"
                src={attorney}
                placeholder="blur"
                className="w-14 h-14 ml-2"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="">
              Our team of lawyers possess extensive experience and knowledge
              in commercial and corporate law.
            </p>
          </div>

          {/* Personalized Service Card */}
          <div className="p-6 hover:bg-[#414D75] bg-white text-gray-600 hover:text-gray-100 shadow-lg rounded-md text-center">
            <div className="mb-4 flex justify-center text-yellow-600">
              <Image
                alt="contact"
                src={personalized}
                placeholder="blur"
                className="w-14 h-14 ml-2"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
            <p className="">
              We offer customized legal solutions and dedicate significant time
              to understanding our clients&apos; businesses.
            </p>
          </div>

          {/* Results-Oriented Card */}
          <div className="p-6 hover:bg-[#414D75] bg-white text-gray-600 hover:text-gray-100 shadow-lg rounded-md text-center">
            <div className="mb-4 flex justify-center text-yellow-600">
              <Image
                alt="contact"
                src={results}
                placeholder="blur"
                className="w-14 h-14 ml-2"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Results-Oriented</h3>
            <p className="">
              We are committed to achieving the best possible outcomes for our
              clients through meticulous preparation and strategic execution.
            </p>
          </div>

          {/* Integrity Card */}
          <div className="p-6 hover:bg-[#414D75] bg-white text-gray-600 hover:text-gray-100 shadow-lg rounded-md text-center">
            <div className="mb-4 flex justify-center text-yellow-600">
              <Image
                alt="contact"
                src={integrity}
                placeholder="blur"
                className="w-14 h-14 ml-2"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="">
              We uphold the highest standards of professionalism and ethics in
              all our dealings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}








