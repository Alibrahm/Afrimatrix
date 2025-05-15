import { offerings } from "@/app/data/offerings";

export async function generateStaticParams() {
  return offerings.map((offering) => ({
    slug: offering.slug,
  }));
} 