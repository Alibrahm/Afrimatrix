"use client";

import dynamic from "next/dynamic";

const ProgramsSection = dynamic(() => import("./ProgramsSection"), {
  ssr: false,
});
const CTA = dynamic(() => import("./cta"), {
  ssr: false,
});
const EvaluationSection = dynamic(() => import("./EvaluationSection"), {
  ssr: false,
});
const AnalyticsSection = dynamic(() => import("./AnalyticsSection"), {
  ssr: false,
});
export function ProgramsClientWrapper() {
  return <ProgramsSection />;
}

export function CTAWrapper() {
  return <CTA />;
}

export function EvaluationWrapper() {
  return <EvaluationSection />;
}

export function AnalyticsWrapper() {
  return <AnalyticsSection />;
}
