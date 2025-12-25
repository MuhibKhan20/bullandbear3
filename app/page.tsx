import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { PowerSlide } from "@/components/power-slide"
import { GameSection } from "@/components/game-section"
import { SyncLearning } from "@/components/sync-learning"
import { StrategyBuilder } from "@/components/strategy-builder"
import { TradingJournal } from "@/components/trading-journal"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navigation />
      {/* The HeroCarousel now handles its own height/spacing for the 3D scroll system */}
      <HeroCarousel />
      <div className="relative z-10">
        <PowerSlide />
        <GameSection />
        <SyncLearning />
        <StrategyBuilder />
        <TradingJournal />
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
