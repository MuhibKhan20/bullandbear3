"use client"

import { Brain, Radio, Users, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

const activeStreams = [
  { id: 1, name: "ALPHA_LEAK", viewers: "1.2k", signal: "BUY", color: "text-neon-green" },
  { id: 2, name: "MACRO_VOID", viewers: "842", signal: "SELL", color: "text-neon-pink" },
  { id: 3, name: "QUANT_CORE", viewers: "2.5k", signal: "HOLD", color: "text-neon-blue" },
]

export function SyncLearning() {
  return (
    <section id="learn" className="relative py-32 bg-black/50 overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold tracking-widest uppercase mb-4">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Signal Feed */}
          <div className="lg:col-span-2 space-y-4">
            <div className="p-1 rounded-xl bg-gradient-to-r from-neon-purple/40 to-transparent">
              <div className="bg-card rounded-lg p-6 border border-white/5">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold tracking-tighter text-xl uppercase flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-neon-purple" /> Active Signal Pulse
                  </h3>
                  <div className="px-2 py-1 bg-neon-purple/20 text-neon-purple text-[10px] font-bold rounded uppercase">
                    324 Mentors Live
                  </div>
                </div>

                <div className="space-y-4">
                  {activeStreams.map((stream) => (
                    <div
                      key={stream.id}
                      className="group flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-lg hover:border-neon-purple/40 transition-all cursor-pointer"
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
          <div className="space-y-4">
            <div className="bg-card/40 border border-white/5 p-6 rounded-xl flex flex-col justify-between h-full">
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

              <button className="w-full py-4 bg-neon-purple/10 border border-neon-purple/40 text-neon-purple font-bold uppercase tracking-widest mt-8 hover:bg-neon-purple hover:text-white transition-all">
                Sync My Brain
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
