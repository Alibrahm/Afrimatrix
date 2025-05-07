"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiUsers, FiTarget, FiStar, FiCheckCircle } from "react-icons/fi";

const ResearchPage = () => {
  const steps = [
    {
      title: "Focus Groups",
      description: "In-depth discussions with target consumers to gather qualitative insights and initial reactions.",
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      title: "Online Survey",
      description: "Quantitative research to validate findings and gather broader market perspectives.",
      icon: <FiTarget className="w-6 h-6" />,
    },
    {
      title: "Advanced Analytics",
      description: "Data analysis and pattern recognition to identify key trends and opportunities.",
      icon: <FiTrendingUp className="w-6 h-6" />,
    },
    {
      title: "Report & Personas",
      description: "Detailed documentation and consumer persona development for strategic planning.",
      icon: <FiStar className="w-6 h-6" />,
    },
    {
      title: "Segment Simulator",
      description: "Interactive modeling to test different market scenarios and segment responses.",
      icon: <FiCheckCircle className="w-6 h-6" />,
    },
    {
      title: "Implementation Workshop",
      description: "Collaborative session to develop actionable strategies based on research findings.",
      icon: <FiUsers className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market Research Excellence
            </h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Discover how our innovative research methodologies and deep market insights
              help businesses make data-driven decisions across African markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Examples of Afrimatrix Innovation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-6 rounded-lg shadow-lg">
                <FiTrendingUp className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-neutral-600">
                  Leveraged machine learning algorithms to predict market trends in the
                  FMCG sector, achieving 85% accuracy in forecasting consumer behavior
                  patterns across West African markets.
                </p>
              </div>
              <div className="bg-neutral-50 p-6 rounded-lg shadow-lg">
                <FiUsers className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Digital Ethnography</h3>
                <p className="text-neutral-600">
                  Conducted real-time consumer behavior studies using mobile ethnography,
                  providing deep insights into daily routines and purchase decisions
                  across urban and rural communities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Segmentation Studies Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Segmentation Studies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FiTarget className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Demographic Analysis</h3>
                <p className="text-neutral-600">
                  Comprehensive profiling of consumer segments across age groups,
                  income levels, and geographic locations in major African markets.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FiUsers className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Psychographic Mapping</h3>
                <p className="text-neutral-600">
                  Deep dive into consumer lifestyles, values, and attitudes to identify
                  unique market segments and opportunities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FiTrendingUp className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Behavioral Insights</h3>
                <p className="text-neutral-600">
                  Analysis of purchase patterns, brand loyalty, and usage behaviors to
                  optimize marketing strategies and product positioning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept Testing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Concept Testing Process
            </h2>
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-neutral-200 ml-6 md:ml-8" />
              
              {/* Steps */}
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative flex items-start"
                  >
                    {/* Step Number */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#B79765] text-white z-10">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <div className="flex items-center">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 text-[#B79765] mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-neutral-600 ml-14">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Ambassador Analysis Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
              Brand Ambassador Analysis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FiUsers className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Influencer Impact</h3>
                <p className="text-neutral-600">
                  Comprehensive analysis of influencer effectiveness and audience
                  engagement across social media platforms in African markets.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <FiStar className="w-12 h-12 text-[#B79765] mb-4" />
                <h3 className="text-xl font-semibold mb-4">Brand Alignment</h3>
                <p className="text-neutral-600">
                  Evaluation of brand ambassador alignment with target audience values
                  and brand positioning to maximize campaign effectiveness.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage; 