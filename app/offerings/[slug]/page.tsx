import { offerings } from "@/app/data/offerings";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, People, Chart2, Lamp, Star1 } from "iconsax-react";
import {
  ProgramsClientWrapper,
  CTAWrapper,
  EvaluationWrapper,
  AnalyticsWrapper,
} from "../../components/ProgramsClientWrapper";


export async function generateStaticParams() {
  return offerings.map((offering) => ({
    slug: offering.slug,
  }));
}

export default function OfferingPage({ params }: { params: { slug: string } }) {
  const offering = offerings.find((o) => o.slug === params.slug);

  if (!offering) {
    return <div>Offering not found</div>;
  }

  const isMarketResearchProgram = offering.slug === "market-research-programs";
    const isMarketResearch = offering.slug === "market-research";
    const isEvaluation = offering.slug === "social-research";
    const isAnalytics = offering.slug === "advanced-survey-analytics";
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={offering.imageUrl}
          alt={offering.name}
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-20">
            <Link
              href="/"
              className="inline-flex items-center text-white mb-8 hover:opacity-80 transition-opacity"
            >
              <ArrowLeft size="20" className="mr-2" />
              Back to Offerings
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {offering.name}
            </h1>
            <div className="flex flex-wrap gap-2">
              {offering.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium text-white"
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
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 mb-8">{offering.description}</p>

            {/* Key Features Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What You&apos;ll Learn
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Advanced market research methodologies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Data analysis and interpretation techniques
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Strategic insights development
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Program Benefits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Expert-led training sessions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Hands-on project experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">
                      Industry-recognized certification
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Afrimatrix Innovation Section - Only for Market Research Programs */}
            {isMarketResearchProgram && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Examples of Afrimatrix Innovation in Market Research
                </h2>
                <div className="grid gap-8">
                  {/* Local Language Focus Groups */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center">
                          <People size={32} color="#2563eb" variant="Bold" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
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
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Multi-language moderation expertise
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Cultural context integration
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Real-time translation services
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Segmentation Studies */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center">
                          {/* <Chart2
                            size={32}
                            className="text-purple-600"
                            variant="Bold"
                          /> */}
                          <Chart2 size="32" color="#9333ea" variant="Bold" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          Segmentation Studies
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Advanced segmentation analysis that goes beyond
                          demographics to identify meaningful consumer segments
                          based on behavior, attitudes, and cultural factors
                          specific to African markets.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Behavioral pattern analysis
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Cultural segment identification
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Custom segment development
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Concept Testing */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-yellow-50 rounded-xl flex items-center justify-center">
                          <Lamp
                            size={32}
                            // className="text-yellow-600"
                            variant="Bold"
                            color="#9333ea"
                            // variant="Broken"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          Concept Testing
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Comprehensive concept testing methodology that
                          evaluates product and service ideas through the lens
                          of local market dynamics and consumer preferences.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Rapid concept iteration
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Market fit assessment
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Competitive positioning analysis
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Brand Ambassador Analysis */}
                  <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-pink-50 rounded-xl flex items-center justify-center">
                          <Star1
                            size={32}
                            // className="text-pink-600"
                            variant="Bold"
                            color="#db2777"
                            // variant="Broken"
                          />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                          Brand Ambassador Analysis
                        </h3>
                        <p className="text-gray-700 mb-4">
                          In-depth analysis of brand ambassadors and influencer
                          effectiveness in African markets, measuring impact and
                          engagement across various cultural contexts.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Influencer impact measurement
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
                              Cultural relevance assessment
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-700">
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

            {isMarketResearch && <ProgramsClientWrapper />}
            {isEvaluation && <EvaluationWrapper />}
            {isAnalytics && <AnalyticsWrapper />}

            {/* CTA Section */}
            <CTAWrapper />
          </div>
        </div>
      </div>
    </main>
  );
} 