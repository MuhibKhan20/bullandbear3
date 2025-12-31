import { Navigation } from "@/components/navigation"
import { HeroCarousel } from "@/components/hero-carousel"
import { PowerSlide } from "@/components/power-slide"
import { GameSection } from "@/components/game-section"
import { SyncLearning } from "@/components/sync-learning"
import { StrategyBuilder } from "@/components/strategy-builder"
import { TradingJournal } from "@/components/trading-journal"
import { TeamSection } from "@/components/team-section"
import { CommandCrew } from "@/components/command-crew"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navigation />
      {/* The HeroCarousel now handles its own height/spacing for the 3D scroll system */}
            {/* 2 */}

      <HeroCarousel />
       <CommandCrew /> 
         
      <div className="relative z-10">
        <PowerSlide />
              {/* 3 */}
        <GameSection />
              {/* 4 */}
        <SyncLearning />
              {/* 5 */}
        <StrategyBuilder />
              {/* 6 */}
        <TradingJournal />  
          {/* 7 */}
        <TeamSection />
      </div>
      <Footer />
    </main>
  )
}
