import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { AboutPreview } from "@/components/home/about-preview"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutPreview />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
