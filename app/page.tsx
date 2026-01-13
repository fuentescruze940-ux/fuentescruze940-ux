import { PageTransition } from "@/components/page-transition"
import { HeroSection } from "@/components/hero-section"

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
    </PageTransition>
  )
}
