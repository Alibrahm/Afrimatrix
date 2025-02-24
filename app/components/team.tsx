import Image, { StaticImageData } from "next/image";
import jeptum from "../../public/images/JeptumHeadshots.svg";
import martin from "../../public/images/MartinHeadshot.svg";
import chris from "../../public/images/ChrisHeadShot.svg";
import ian from "../../public/images/IanHeadshot.svg";
import { FC } from "react";

// Interface for a social link object
interface SocialLink {
  href: string; // URL of the social link
  icon: FC<{ className: string }>; // Icon component, receiving a className prop
}

// Interface for a team member
interface TeamMember {
  name: string; // Team member's name
  role: string; // Team member's role
  image: string | StaticImageData; // Image can either be a string or a StaticImageData
  alt: string; // Alternative text for the image
  socialLinks: SocialLink[]; // Array of social links for the team member
}

// Interface for the props of the TeamMemberCard component
interface TeamMemberCardProps {
  member: TeamMember; // Team member object passed to the card component
}

const teamMembers = [
  {
    name: "Jeptum Bullut",
    role: "Partner",
    image: jeptum,
    alt: "jeptum",
    socialLinks: [
      { href: "#", icon: FacebookIcon },
      { href: "#", icon: TwitterIcon },
      { href: "#", icon: LinkedIn },
    ],
  },
  {
    name: "Martin Maitha",
    role: "Partner",
    image: martin,
    alt: "martin",
    socialLinks: [
      { href: "#", icon: FacebookIcon },
      { href: "#", icon: TwitterIcon },
      { href: "#", icon: LinkedIn },
    ],
  },
  {
    name: "Christopher Ntagaiti",
    role: "Associate",
    image: chris,
    alt: "chris",
    socialLinks: [
      { href: "#", icon: FacebookIcon },
      { href: "#", icon: TwitterIcon },
      { href: "#", icon: LinkedIn },
    ],
  },
  {
    name: "Ian Waithaka",
    role: "Associate",
    image: ian,
    alt: "ian",
    socialLinks: [
      { href: "#", icon: FacebookIcon },
      { href: "#", icon: TwitterIcon },
      { href: "#", icon: LinkedIn },
    ],
  },
];

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="group bg-white shadow-lg shadow-gray-200 rounded-xl py-6 transition-all duration-500 w-full hover:shadow-2xl">
      <div className="rounded-3xl flex justify-center">
        <Image
          alt={member.alt}
          src={member.image}
          className="w-36 h-36 mb-3 rounded-full shadow-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center py-3 gap-4 text-center">
        <h4 className="font-manrope font-medium tracking-wide text-xl text-[#414D75] text-center">
          {member.name}
        </h4>
        <p className="text-base font-medium text-gray-500 mb-4 text-center">
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="relative bg-cover bg-center overflow-hidden">
      <div className="absolute left-0 top-0">
        <svg
          width="416"
          height="228"
          viewBox="0 0 416 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="193.5"
            cy="5.5"
            r="222.5"
            fill="url(#paint0_linear_215_6878)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_215_6878"
              x1="391.402"
              y1="-9.03518"
              x2="169.647"
              y2="241.044"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F3F3F3" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="md:py-6 py-5">
        <div className="flex flex-col justify-center items-center mb-6">
          <div className="text-3xl text-[#414D75] tracking-widest">
            Our Team
          </div>
          {/* <div className="text-[#8D9593] flex text-xl justify-center">
            Our team members are experienced and intelligent lawyers
          </div> */}
          <hr className="my-2 h-[1.5px] bg-[#B79765] border-0 w-20" />
        </div>
        {/* Overlay gradients */}
        <div className="absolute inset-0 top-full bg-[#F6F6F6]">
          <div className="absolute bottom-14 py-2  justify-center w-full  hidden">
            <span className="flex w-7 h-1.5 me-1.5 bg-[#AEAEAE] rounded-full"></span>
            <span className="flex w-5 h-1.5 me-1.5 bg-gray-300 rounded-full "></span>
            <span className="flex w-5 h-1.5 me-1.5 bg-gray-300 rounded-full"></span>
            <span className="flex w-5 h-1.5 me-1.5 bg-gray-300 rounded-full"></span>
          </div>
        </div>
        <div className="px-4 sm:px-16 md:pb-6">
          {/* Grid for mobile and larger screens */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-full flex items-center justify-center"
              >
                <TeamMemberCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Icons as separate components for reuse
function FacebookIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 72 72"
      fill="none"
    >
      <path
        d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
        fill="#02261D2E"
      />
    </svg>
  );
}

function TwitterIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_352_1057)">
        <path
          d="M16 3.039C15.405 3.3 14.771 3.473 14.11 3.557C14.790 3.151 15.309 2.513 15.553 1.744C14.919 2.122 14.219 2.389 13.473 2.538C12.871 1.897 12.013 1.5 11.077 1.5C9.261 1.5 7.799 2.974 7.799 4.781C7.799 5.041 7.821 5.291 7.875 5.529C5.148 5.396 2.735 4.089 1.114 2.098C0.831 2.589 0.665 3.151 0.665 3.756C0.665 4.892 1.250 5.899 2.122 6.508C1.552 6.492 1.027 6.326 0.594 6.069C0.593 6.079 0.593 6.089 0.593 6.099C0.593 7.577 1.634 8.786 3.071 9.096C2.348 9.384 1.508 9.513 0.64 9.482C2.07 10.702 3.959 11.5 5.98 11.5C11.089 11.5 14.372 8.743 14.372 5.017C14.372 4.888 14.369 4.761 14.366 4.633C15.046 4.279 15.564 3.739 16 3.039Z"
          fill="#02261D2E"
        />
      </g>
      <defs>
        <clipPath id="clip0_352_1057">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function LinkedIn({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 0H2C0.89 0 0 0.89 0 2V22C0 23.11 0.89 24 2 24H22C23.11 24 24 23.11 24 22V2C24 0.89 23.11 0 22 0ZM9.5 19H6.5V9H9.5V19ZM8 7.5C7.17 7.5 6.5 6.83 6.5 6C6.5 5.17 7.17 4.5 8 4.5C8.83 4.5 9.5 5.17 9.5 6C9.5 6.83 8.83 7.5 8 7.5ZM20.5 19H17.5V13.6C17.5 12.5 17.5 11.2 16.5 11.2C15.5 11.2 15 12.2 15 13.3V19H12V9H15V10.5H15.4C15.8 9.9 16.8 9.8 17.6 9.8C19.6 9.8 20.5 11.3 20.5 13.5V19Z"
        fill="#02261D2E"
      />
    </svg>
  );
}
