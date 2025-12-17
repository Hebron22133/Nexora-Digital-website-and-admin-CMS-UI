import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { ServicesOverview } from "@/components/sections/services-overview"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Capabilities } from "@/components/sections/capabilities"
import { CTABanner } from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <Capabilities />
      <CTABanner />
      <Footer />
    </main>
  )
}
