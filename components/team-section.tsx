"use client"
import { Users, User, Shield, Target, Zap } from "lucide-react"

const team = [
  { name: "ZERO", role: "FOUNDER / QUANT", stats: "WIN: 74%", icon: Shield, color: "text-neon-green" },
  { name: "NEO", role: "CORE ARCHITECT", stats: "SYS: ACTIVE", icon: Target, color: "text-neon-blue" },
  { name: "V1XEN", role: "UI / HUD LEAD", stats: "VIS: 120FPS", icon: User, color: "text-neon-pink" },
  { name: "KAIROS", role: "STRAT ENGINE", stats: "LAT: <1MS", icon: Zap, color: "text-neon-purple" },
]

export function TeamSection() {
  return (
    <section className="relative py-32 bg-black/50 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground text-xs font-bold tracking-widest uppercase mb-4">
            <Users className="w-3 h-3" /> Squad Intel
          </div>
          <h2 className="text-5xl font-bold tracking-tighter uppercase mb-6">
            THE COMMAND <span className="text-muted-foreground">CREW.</span>
          </h2>
        </div>

        {/* Ticker Motion Team Cards */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative w-full max-w-[280px] aspect-[3/4] bg-card border-2 border-white/10 rounded-xl overflow-hidden hover:border-neon-green/50 transition-all cursor-pointer"
              >
                {/* Scanline Effect */}
                <div className="absolute inset-0 scanline opacity-20" />

                {/* Character Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <member.icon className="w-48 h-48" />
                </div>

                {/* Info Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6 space-y-2">
                  <div className={`text-[10px] font-black tracking-[0.2em] ${member.color}`}>{member.role}</div>
                  <div className="text-3xl font-black tracking-tighter text-white">{member.name}</div>

                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">{member.stats}</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-neon-green" />
                      <div className="w-1 h-1 rounded-full bg-neon-green" />
                      <div className="w-1 h-1 rounded-full bg-neon-green/30" />
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-neon-green opacity-0 group-hover:opacity-100 transition-opacity glow-green scale-105 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
