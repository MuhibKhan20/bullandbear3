"use client"

import { Button } from "@/components/ui/button"
import { Swords, Trophy, Users, Zap } from "lucide-react"

export function GameSection() {
  return (
    <section id="game" className="relative py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-neon-blue glow-blue">
              <div className="absolute inset-0 bg-[url('/futuristic-pvp-trading-hud-arena.jpg')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Overlay HUD Elements */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/80 border border-neon-blue/40 rounded rounded-bl-none text-xs font-bold tracking-widest">
                <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
                LIVE ARENA SECTOR 7
              </div>

              <div className="absolute bottom-4 right-4 flex gap-4">
                <div className="px-4 py-2 bg-black/80 border border-neon-green/40 rounded text-center">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold">Player 1</div>
                  <div className="text-neon-green font-bold">+$4,290.00</div>
                </div>
                <div className="px-4 py-2 bg-black/80 border border-neon-pink/40 rounded text-center">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold">Opponent</div>
                  <div className="text-neon-pink font-bold">-$1,120.45</div>
                </div>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-neon-blue/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-neon-purple/20 rounded-full animate-ping" />
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-bold tracking-widest uppercase">
              <Zap className="w-3 h-3" /> Competitive Arena
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none">
              THIS IS NOT TRADING.
              <br />
              <span className="text-neon-blue">THIS IS WAR.</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Step into the arena where signals meet combat. Face off against traders worldwide in real-time PvP
              battles. No spreadsheets, just high-stakes execution and raw performance.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <Trophy className="w-6 h-6 text-neon-blue" />
                <h3 className="font-bold tracking-tight uppercase">Ranked Ladders</h3>
                <p className="text-sm text-muted-foreground">Climb the tiers from Novice to Grandmaster.</p>
              </div>
              <div className="space-y-2">
                <Users className="w-6 h-6 text-neon-blue" />
                <h3 className="font-bold tracking-tight uppercase">Party Modes</h3>
                <p className="text-sm text-muted-foreground">Squad up with your signal providers for team raids.</p>
              </div>
            </div>

            <Button
              size="lg"
              className="h-14 px-8 bg-neon-blue hover:bg-neon-blue/90 text-white font-bold uppercase tracking-widest group"
            >
              <Swords className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Join the Battle
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
