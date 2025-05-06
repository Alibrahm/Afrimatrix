import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface ContentProps {
  title: string;
  description: string;
  subDescription: string;
  ctaText: string;
}

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  content: ContentProps;
}

export const TextParallaxContentExample = () => {
  const marketResearchContent = {
    section1: {
      title: "Data-Driven Market Intelligence",
      description: "Our comprehensive market research methodologies combine quantitative and qualitative analysis to deliver actionable insights that drive strategic decision-making.",
      subDescription: "From consumer behavior analysis to competitive intelligence, we help businesses understand their market position and identify growth opportunities.",
      ctaText: "View Our Methodology"
    },
    section2: {
      title: "Consumer Insights & Analytics",
      description: "Deep dive into consumer preferences, behaviors, and trends with our advanced analytics platform. Transform raw data into meaningful patterns that predict market movements.",
      subDescription: "Leverage our proprietary research tools and methodologies to stay ahead of market shifts and consumer demands.",
      ctaText: "Explore Insights"
    },
    section3: {
      title: "Strategic Market Analysis",
      description: "Our expert analysts provide in-depth market assessments, helping organizations navigate complex market dynamics and make informed strategic decisions.",
      subDescription: "With our comprehensive market reports and trend analysis, you'll have the intelligence needed to outperform competitors and capture market opportunities.",
      ctaText: "Access Reports"
    }
  };

  return (
    <div className="bg-white">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Research"
        heading="Market Intelligence"
        content={marketResearchContent.section1}
      />
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Analytics"
        heading="Consumer Insights"
        content={marketResearchContent.section2}
      />
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1526378787940-576a539ba69d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Strategy"
        heading="Market Analysis"
        content={marketResearchContent.section3}
      />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, content }: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      <ExampleContent {...content} />
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: { subheading: string; heading: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, description, subDescription, ctaText }: ContentProps) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {title}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        {description}
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        {subDescription}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        {ctaText} <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
