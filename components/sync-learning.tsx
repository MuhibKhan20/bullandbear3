"use client"

import { Button } from "@/components/ui/button"
import { Brain, Radio, Users, BookOpen, TrendingUp, Zap, Signal } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

const activeStreams = [
  { id: 1, name: "ALPHA_LEAK", viewers: "1.2k", signal: "BUY", color: "text-neon-green" },
  { id: 2, name: "MACRO_VOID", viewers: "842", signal: "SELL", color: "text-neon-pink" },
  { id: 3, name: "QUANT_CORE", viewers: "2.5k", signal: "HOLD", color: "text-neon-blue" },
]

export function SyncLearning() {
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
    <section ref={sectionRef} id="learn" className="relative py-16 bg-black/50 overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold tracking-widest uppercase mb-4 hover:bg-neon-purple/20 hover:scale-105 transition-all duration-300">
            <Radio className="w-3 h-3 animate-pulse" /> Live Signal Sync
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter mb-6 uppercase">
            LEARN BY <span className="text-neon-purple">DOING.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No boring courses. Sync with mentor signals in real-time. Watch the flow, understand the logic, win
            together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Signal Feed */}
          <div className={`lg:col-span-2 space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="p-1 rounded-xl bg-gradient-to-r from-neon-purple/40 to-transparent">
              <div className="bg-card rounded-lg p-6 border border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold tracking-tighter text-xl uppercase flex items-center gap-2">
                    <Signal className="w-5 h-5 text-neon-purple" /> Active Signal Pulse
                  </h3>
                  <div className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-[10px] font-bold rounded uppercase">
                    324 Mentors Live
                  </div>
                </div>

                <div className="space-y-4">
                  {activeStreams.map((stream) => (
                    <div
                      key={stream.id}
                      className="group flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-lg hover:border-neon-purple/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-10 h-10 rounded bg-neon-purple/20 flex items-center justify-center">
                            <Users className="w-5 h-5 text-neon-purple" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full border-2 border-black animate-pulse" />
                        </div>
                        <div>
                          <div className="font-bold tracking-tight uppercase group-hover:text-neon-purple transition-colors">
                            {stream.name}
                          </div>
                          <div className="text-[10px] text-muted-foreground uppercase">{stream.viewers} Watching</div>
                        </div>
                      </div>
                      <div className={cn("font-black tracking-widest px-4 py-1 rounded border", stream.color)}>
                        {stream.signal}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof / Gamified Stats */}
          <div className={`space-y-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="bg-card/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between h-full hover:border-neon-purple/30 hover:scale-105 transition-all duration-300">
              <div className="space-y-6">
                <Brain className="w-12 h-12 text-neon-purple mb-4" />
                <h3 className="text-2xl font-bold tracking-tighter uppercase leading-none">
                  Neural Sync <br /> Architecture
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our proprietary sync engine connects your execution environment directly to mentor inputs with sub-ms
                  latency.
                </p>

                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase">
                    <span>Sync Accuracy</span>
                    <span className="text-neon-purple">98.2%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-neon-purple glow-purple" />
                  </div>
                </div>
              </div>

              <Button className="w-full mt-8 h-12 bg-neon-purple/10 border border-neon-purple/40 text-neon-purple font-bold uppercase tracking-widest hover:bg-neon-purple hover:text-white transition-all">
                Sync My Brain
              </Button>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className={`mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter uppercase mb-4">
              How <span className="text-neon-purple">SYNC</span> Works
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From subscription to execution—in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative bg-gradient-to-br from-neon-purple/10 to-transparent border-2 border-neon-purple/30 rounded-xl p-8 hover:border-neon-purple hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/50 transition-all duration-500 cursor-pointer">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-purple rounded-lg flex items-center justify-center font-black text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                1
              </div>
              <BookOpen className="w-12 h-12 text-neon-purple mb-6 mt-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold tracking-tight uppercase mb-3">Choose Your Mentor</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Browse verified signal providers. Check their live trading journals, win rates, and verified performance—no faking allowed.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-neon-blue/10 to-transparent border-2 border-neon-blue/30 rounded-xl p-8 hover:border-neon-blue hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/50 transition-all duration-500 cursor-pointer">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-blue rounded-lg flex items-center justify-center font-black text-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                2
              </div>
              <Zap className="w-12 h-12 text-neon-blue mb-6 mt-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold tracking-tight uppercase mb-3">Auto-Sync Signals</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Subscribe and their signals automatically flow into your trading account. See exactly what they trade, when they trade it.
              </p>
            </div>

            <div className="group relative bg-gradient-to-br from-neon-green/10 to-transparent border-2 border-neon-green/30 rounded-xl p-8 hover:border-neon-green hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/50 transition-all duration-500 cursor-pointer">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-green rounded-lg flex items-center justify-center font-black text-2xl text-black group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                3
              </div>
              <TrendingUp className="w-12 h-12 text-neon-green mb-6 mt-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold tracking-tight uppercase mb-3">Learn & Execute</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Execute their strategy in real-time. Understand the "why" behind every trade. Build your skills day by day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
