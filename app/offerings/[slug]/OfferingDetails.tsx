"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, People, Chart2, Lamp, Star1, ArrowRight } from "iconsax-react";

// Define the types based on the offerings data structure
interface Tag {
  label: string;
  color: string;
}

interface Offering {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: Tag[];
}

interface OfferingDetailsProps {
  offering: Offering;
}

export default function OfferingDetails({ offering }: OfferingDetailsProps) {
  const isMarketResearchProgram = offering.slug === "market-research-programs";

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 transform hover:scale-105 transition-transform duration-700">
          <Image
            src={offering.imageUrl}
            alt={offering.name}
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-20">
            <Link
              href="/"
              className="inline-flex items-center text-white mb-8 hover:opacity-80 transition-opacity group"
            >
              <ArrowLeft
                size="20"
                className="mr-2 group-hover:-translate-x-1 transition-transform"
              />
              Back to Offerings
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
              {offering.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              {offering.tags.map((tag: Tag, i: number) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium text-white transform hover:scale-105 transition-transform"
                  style={{ backgroundColor: tag.color }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-8">{offering.description}</p>

            {/* Key Features Section with Hover Effects */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What You&apos;ll Learn
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Advanced market research methodologies
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Data analysis and interpretation techniques
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Strategic insights development
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Program Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Expert-led training sessions
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Hands-on project experience
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                      •
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Industry-recognized certification
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Afrimatrix Innovation Section with Enhanced Visuals */}
            {isMarketResearchProgram && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Examples of Afrimatrix Innovation in Market Research
                </h2>
                <div className="grid gap-8">
                  {/* Local Language Focus Groups */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <People
                            size={32}
                            className="text-blue-600 group-hover:rotate-12 transition-transform"
                            variant="Bold"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                          Local Language Focus Groups
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Our specialized focus groups conducted in local
                          languages provide authentic insights into consumer
                          behavior and preferences. We ensure cultural nuances
                          are captured through native-speaking moderators and
                          culturally-adapted discussion guides.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Multi-language moderation expertise
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Cultural context integration
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Real-time translation services
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Segmentation Studies */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Chart2
                            size={32}
                            className="text-purple-600 group-hover:rotate-12 transition-transform"
                            variant="Bold"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                          Segmentation Studies
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Advanced segmentation analysis that goes beyond
                          demographics to identify meaningful consumer segments
                          based on behavior, attitudes, and cultural factors
                          specific to African markets.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Behavioral pattern analysis
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Cultural segment identification
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Custom segment development
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Concept Testing */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Lamp
                            size={32}
                            className="text-yellow-600 group-hover:rotate-12 transition-transform"
                            variant="Bold"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors">
                          Concept Testing
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Comprehensive concept testing methodology that
                          evaluates product and service ideas through the lens
                          of local market dynamics and consumer preferences.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Rapid concept iteration
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Market fit assessment
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Competitive positioning analysis
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Brand Ambassador Analysis */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-pink-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Star1
                            size={32}
                            className="text-pink-600 group-hover:rotate-12 transition-transform"
                            variant="Bold"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
                          Brand Ambassador Analysis
                        </h3>
                        <p className="text-gray-700 mb-4">
                          In-depth analysis of brand ambassadors and influencer
                          effectiveness in African markets, measuring impact and
                          engagement across various cultural contexts.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Influencer impact measurement
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              Cultural relevance assessment
                            </span>
                          </li>
                          <li className="flex items-start group">
                            <span className="text-green-500 mr-2 group-hover:scale-110 transition-transform">
                              •
                            </span>
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                              ROI tracking and analysis
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Enhanced CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your Market Research Skills?
              </h3>
              <p className="text-gray-300 mb-6">
                Join our program and gain the expertise to drive data-driven
                decisions
              </p>
              <button
                onClick={() =>
                  window.open("https://ee.kobotoolbox.org/x/FkxPfYwC", "_blank")
                }
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
              >
                Enroll Now
                <ArrowRight
                  size={20}
                  className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </main>
  );
} 