import FeatureCard from "./FeatureCard"
import { GraduationCap, MapPinned, Users } from "lucide-react"

export default function WhatWeOffer() {
  return (
    <section className="px-6 lg:px-12 py-20 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <div className="h-1.5 w-12 bg-[#0d94af] rounded-full mb-4" />
          <h2 className="text-4xl font-extrabold">What We Offer</h2>
          <p className="text-[#618389] mt-3 max-w-xl">
            Discover how Setlinn helps you navigate your path to global success.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={GraduationCap}
          title="Scholarships"
          description="Curated funding opportunities across 50+ countries."
          cta="Find opportunities"
        />

        <FeatureCard
          icon={MapPinned}
          title="Migration Guides"
          description="Step-by-step advice for visas and relocation."
          cta="Explore guides"
        />

        <FeatureCard
          icon={Users}
          title="Community"
          description="Learn from real experiences and global peers."
          cta="Join discussion"
        />
      </div>
    </section>
  )
}
