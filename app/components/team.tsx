import React from 'react';
import Image from 'next/image';
import { FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "MICHAEL DE-HART",
    role: "President",
    bio: "Michael has extensive global experience with a key focus on emerging markets and has worked in senior executive roles in market research, strategy & management consulting, social entrepreneurship, and also serves as an advisor and BOD member for high-potential startups. Michael manages the advanced analytics, project execution, client strategy development, and overall company performance.",
    image: "/images/team/michaelHart.png",
    linkedin: "https://linkedin.com/in/michael-chen",
    twitter: "https://twitter.com/michaelchen",
  },
  {
    name: "JACKLINE ONYANGO",
    role: "Vice President",
    bio: "Jackline has more than a decade of research and operations management experience, and is responsible for daily operations at Afrimatrix. She holds a Bachelor’s in Commerce & Procurement and is also a Level 5 CPA in Kenya. Jackline is also currently finishing her Masters in Strategic Management. She had previously served in management roles at KASNEB, Cyton Investments and KCB Group.",
    image: "/images/team/jackline.png",
    linkedin: "https://linkedin.com/in/jackline",
    email: "sarah@afrimatrix.com",
  },

  {
    name: "DAVID JABEDO",
    role: "DIRECTOR PROJECT MANAGEMENT",
    bio: "David holds a Masters in Public Health, and brings a wealth of over 25 years of market and social research to Afrimatrix. David has worked across a wide cross section of market research, social research, and strategy consulting organizations. David work across all aspects of the project life cycle from proposal creation to final deliverables.",
    image: "/images/team/jabedo.png",
    linkedin: "https://linkedin.com/in/david-jabedo",
    email: "david@afrimatrix.com",
  },
  {
    name: "TONNY ONYANGO",
    role: "BUSINESS DEVELOPMENT DIRECTOR",
    bio: "Tonny has over 8 years of progressive experience in market and social research across Africa and internationally. He holds a BSC. In Applied Statistics with IT concentration. Tony focuses on client relationship management, business development, and project workflow management.",
    image: "/images/team/david.jpg",
    linkedin: "https://linkedin.com/in/david-mbeki",
    twitter: "https://twitter.com/davidmbeki",
  },
  {
    name: "DERRICK OREK",
    role: "BUSINESS DEVELOPMENT DIRECTOR",
    bio: "Derrick Orek holds a Bachelors in Medical Biotechnology from Maseno university, and has extensive knowledge of research methods, data analysis and survey design. Derrick also has a wide range of qualitative research skills including IDIs, digital ethnography, and focus group moderation.",
    image: "/images/team/lisa.jpg",
    linkedin: "https://linkedin.com/in/lisa-patel",
    email: "lisa@afrimatrix.com",
  },
  {
    name: "PETER JUMA",
    role: "SNR.PROJECT MANAGER",
    bio: "Peter has over 10 year experience in market research having worked with leading global research firms in across project and client management roles. He holds a Bachelors in IT and a Masters in Project Planning and Management. Peter has a keen strength in spotting trends across mixed-methods data sets and serves as a lead on client engagements.",
    image: "/images/team/james.jpg",
    linkedin: "https://linkedin.com/in/james-okonkwo",
    twitter: "https://twitter.com/jamesokonkwo",
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-64 w-full flex items-center justify-center pt-8">
        <div className="relative w-48 h-48 rounded-full overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-neutral-800 mb-1">{member.name}</h3>
        <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
        <p className="text-neutral-600 text-sm mb-4">{member.bio}</p>

        {/* Social Links */}
        <div className="flex gap-3 justify-center">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-indigo-600 transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <FiLinkedin size={20} />
            </a>
          )}
          {member.twitter && (
            <a
              href={member.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-indigo-600 transition-colors"
              aria-label={`${member.name}'s Twitter`}
            >
              <FiTwitter size={20} />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-neutral-600 hover:text-indigo-600 transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <FiMail size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <div className="min-h-screen bg-neutral-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Our Team</h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Meet our team of experienced researchers and analysts dedicated to delivering
            exceptional market insights and strategic solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>

        {/* Join Us Section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-4">
            Join Our Team
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who are passionate about
            research and analytics. Check out our current openings.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
}
