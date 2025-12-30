"use client"

import { Button } from "@/components/ui/button"
import { Gamepad2, Trophy, Target, Users, Zap, Swords } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function GameSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} id="game" className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side - Video Game UI */}
          <div className={`relative order-2 lg:order-1 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-neon-purple glow-purple bg-gradient-to-br from-purple-950/50 to-blue-950/50 hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-[url('/section3.png')] bg-cover bg-center opacity-40 hover:opacity-60 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Game HUD - Top Bar */}
              <div className={`absolute top-4 left-4 right-4 flex items-center justify-between transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <div className="flex items-center gap-2 px-3 py-1 bg-black/90 border border-neon-purple/60 rounded text-xs font-bold tracking-widest hover:border-neon-purple hover:scale-105 transition-all duration-300">
                  <Gamepad2 className="w-3 h-3 text-neon-purple animate-pulse" />
                  <span className="text-neon-purple">PvP MODE</span>
                  <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse ml-2" />
                </div>
                <div className="px-3 py-1 bg-black/90 border border-yellow-500/60 rounded text-xs font-bold hover:scale-110 transition-transform duration-300">
                  <span className="text-yellow-500 animate-pulse">⏱ 02:45</span>
                </div>
              </div>

              {/* Player Stats - Gaming Style */}
              <div className={`absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex-1 bg-black/90 border-2 border-neon-green rounded-lg p-3 hover:border-neon-green/100 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">YOU</span>
                    <Trophy className="w-3 h-3 text-yellow-500 animate-bounce" />
                  </div>
                  <div className="text-neon-green font-bold text-lg animate-pulse">+$4,290</div>
                  <div className="w-full bg-black/50 h-1.5 rounded-full mt-1 overflow-hidden">
                    <div className="bg-neon-green h-full w-3/4 rounded-full animate-pulse shadow-lg shadow-neon-green/50" />
                  </div>
                </div>
                <div className="flex-1 bg-black/90 border-2 border-red-500/60 rounded-lg p-3 hover:border-red-500 hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-muted-foreground uppercase font-bold">OPPONENT</span>
                    <Target className="w-3 h-3 text-red-500 animate-spin" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="text-red-500 font-bold text-lg">-$1,120</div>
                  <div className="w-full bg-black/50 h-1.5 rounded-full mt-1 overflow-hidden">
                    <div className="bg-red-500 h-full w-1/3 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Achievement Notification */}
              <div className={`absolute top-20 right-4 px-4 py-2 bg-black/95 border border-yellow-500/80 rounded-lg shadow-lg transition-all duration-500 delay-900 hover:scale-110 hover:shadow-yellow-500/50 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-500/20">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <div className="text-yellow-500 text-xs font-bold">STREAK +5!</div>
                    <div className="text-[10px] text-muted-foreground">Winning Trades</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Gaming Elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 border-2 border-neon-purple/20 rounded-lg rotate-12 animate-pulse hover:rotate-45 hover:border-neon-purple/40 transition-all duration-1000" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 border border-neon-blue/20 rounded-lg -rotate-12 animate-pulse hover:-rotate-45 hover:border-neon-blue/40 transition-all duration-1000" />
          </div>

          {/* Text Side */}
          <div className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold tracking-widest uppercase hover:bg-neon-purple/20 hover:border-neon-purple/60 hover:scale-105 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <Gamepad2 className="w-3 h-3 animate-pulse" /> The Video Game
            </div>

            <h2 className={`text-5xl sm:text-6xl font-bold tracking-tighter leading-none transition-all duration-1000 delay-[450ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              TRADING MEETS
              <br />
              <span className="text-neon-purple hover:text-neon-pink transition-colors duration-500">COMPETITIVE GAMING.</span>
            </h2>

            <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Experience trading like never before. Battle friends in PvP matches, train in specialized modes, and climb global leaderboards. It's not just trading—it's a video game.
            </p>

            {/* Match Types Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className={`space-y-2 p-4 rounded-lg border border-neon-blue/30 bg-neon-blue/5 hover:border-neon-blue hover:bg-neon-blue/10 hover:scale-110 hover:shadow-xl hover:shadow-neon-blue/50 hover:-rotate-2 transition-all duration-700  cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Swords className="w-6 h-6 text-neon-blue group-hover:animate-spin" />
                <h3 className="font-bold tracking-tight uppercase text-sm">1v1 PvP</h3>
                <p className="text-xs text-muted-foreground">Challenge friends to trading duels</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg border border-neon-purple/30 bg-neon-purple/5 hover:border-neon-purple hover:bg-neon-purple/10 hover:scale-110 hover:shadow-xl hover:shadow-neon-purple/50 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom duration-700">
                <Target className="w-6 h-6 text-neon-purple" />
                <h3 className="font-bold tracking-tight uppercase text-sm">Training</h3>
                <p className="text-xs text-muted-foreground">Practice modes & tutorials</p>
              </div>
              <div className="space-y-2 p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 hover:border-yellow-500 hover:bg-yellow-500/10 hover:scale-110 hover:shadow-xl hover:shadow-yellow-500/50 hover:rotate-2 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom duration-700">
                <Trophy className="w-6 h-6 text-yellow-500 hover:animate-bounce" />
                <h3 className="font-bold tracking-tight uppercase text-sm">Leaderboards</h3>
                <p className="text-xs text-muted-foreground">Rank from Rookie to Legend</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
              <Button
                size="lg"
                className="h-14 px-8 bg-neon-purple hover:bg-neon-purple/90 hover:scale-110 hover:shadow-2xl hover:shadow-neon-purple/50 text-white font-bold uppercase tracking-widest group transition-all duration-300"
              >
                <Gamepad2 className="w-5 h-5 mr-2 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                Join PvP Match
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-blue hover:scale-105 hover:shadow-xl hover:shadow-neon-blue/50 font-bold uppercase tracking-widest group transition-all duration-300"
              >
                <Target className="w-5 h-5 mr-2 group-hover:scale-125 transition-transform duration-300" />
                Start Training
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
