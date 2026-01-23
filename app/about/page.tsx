import HeroSection from "@/components/about/HeroSection"
import OurStorySection from "@/components/about/OurStorySection"
import StatsSection from "@/components/about/StatsSection"
import ValuesSection from "@/components/about/ValuesSection"
import FinalCTA from "@/components/about/FinalCTA"
import TestimonialsSection from "@/components/testimonials/TestimonialSection"

export default function AboutPage() {
  return (
    <main className="pt-20 bg-[#fafaf9] text-[#111718]">
      <HeroSection />
      <OurStorySection />
      <StatsSection />
      <ValuesSection />
      <TestimonialsSection/>
      <FinalCTA />
    </main>
  )
}
