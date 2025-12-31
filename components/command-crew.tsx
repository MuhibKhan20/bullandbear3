"use client"
import { Gamepad2, Zap, Target, Swords } from "lucide-react"
import { cn } from "@/lib/utils"

const crew = [
  {
    name: "SYNC LEARNING",
    description: "Learn together. Execute together.",
    stats: [
      { label: "SYNC RATE", value: "98.2%" },
      { label: "MENTORS", value: "142" },
    ],
    icon: Zap,
    color: "neon-green"
  },
  {
    name: "STRATEGY LAB",
    description: "Forge signals into weapons.",
    stats: [
      { label: "BUILDS", value: "12.4K" },
      { label: "SIM-ACC", value: "99.9%" },
    ],
    icon: Target,
    color: "neon-blue"
  },
  {
    name: "VIDEO GAME",
    description: "Trade against real players.",
    stats: [
      { label: "PLAYERS", value: "4.2K" },
      { label: "RANK", value: "S-TIER" },
    ],
    icon: Swords,
    color: "neon-purple"
  },
  {
    name: "TRADE JOURNAL",
    description: "Track. Analyze. Dominate.",
    stats: [
      { label: "TRADES", value: "2.4K" },
      { label: "WIN RATE", value: "74%" },
    ],
    icon: Gamepad2,
    color: "neon-pink"
  },
]

const getColorClasses = (color: string) => {
  switch (color) {
    case "neon-green":
      return {
        text: "text-neon-green",
        bg: "bg-neon-green",
        border: "border-neon-green/50",
        shadow: "shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)]",
        cardBg: "bg-white",
        innerBg: "bg-gradient-to-br from-neon-green/25 via-white to-white",
      }
    case "neon-blue":
      return {
        text: "text-neon-blue",
        bg: "bg-neon-blue",
        border: "border-neon-blue/50",
        shadow: "shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]",
        cardBg: "bg-white",
        innerBg: "bg-gradient-to-br from-neon-blue/25 via-white to-white",
      }
    case "neon-purple":
      return {
        text: "text-neon-purple",
        bg: "bg-neon-purple",
        border: "border-neon-purple/50",
        shadow: "shadow-[0_0_30px_rgba(191,0,255,0.3)] hover:shadow-[0_0_50px_rgba(191,0,255,0.5)]",
        cardBg: "bg-white",
        innerBg: "bg-gradient-to-br from-neon-purple/25 via-white to-white",
      }
    case "neon-pink":
      return {
        text: "text-neon-pink",
        bg: "bg-neon-pink",
        border: "border-neon-pink/50",
        shadow: "shadow-[0_0_30px_rgba(255,0,255,0.3)] hover:shadow-[0_0_50px_rgba(255,0,255,0.5)]",
        cardBg: "bg-white",
        innerBg: "bg-gradient-to-br from-neon-pink/25 via-white to-white",
      }
    default:
      return {
        text: "text-black",
        bg: "bg-white",
        border: "border-black/30",
        shadow: "",
        cardBg: "bg-white",
        innerBg: "bg-white",
      }
  }
}

export function CommandCrew() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      {/* Background Atmospheric Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
  

        {/* Feature Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {crew.map((member, i) => {
              const colors = getColorClasses(member.color)
              return (
                <div key={i} className="flex flex-col gap-4 items-center">
                  <div
                    className={cn(
                      "group relative w-full aspect-[3/4] rounded-lg sm:rounded-xl border-2 transition-all cursor-pointer",
                      colors.border,
                      colors.shadow,
                      colors.cardBg
                    )}
                  >
                    {/* Inner HUD UI */}
                    <div className="relative h-full w-full rounded-lg overflow-hidden flex flex-col p-4 sm:p-6 gap-4 bg-white">
                      {/* Themed Color Background */}
                      <div className={cn("absolute inset-0", colors.innerBg)} />

                      {/* Decorative Grid */}
                      <div className="absolute inset-0 grid-cyber opacity-10 group-hover:opacity-20 transition-opacity" />

                      {/* Scanline Effect */}
                      <div className="absolute inset-0 pointer-events-none bg-scanline opacity-[0.03] animate-scan" />

                      {/* TOP - ICON */}
                      <div className="flex flex-col items-center relative z-10 flex-grow justify-center">
                        <member.icon className={cn("w-20 h-20 sm:w-24 sm:h-24 mb-6", colors.text)} />
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tighter leading-none mb-2 text-center">
                          {member.name}
                        </h3>
                        <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-widest font-bold text-center px-4">
                          {member.description}
                        </p>
                      </div>

                      {/* BOTTOM - STATS */}
                      <div className="relative z-10 border-t border-black/10 pt-4">
                        <div className="grid grid-cols-2 gap-4">
                          {member.stats.map((stat, i) => (
                            <div key={i} className="space-y-1">
                              <div className="text-[8px] sm:text-[9px] text-muted-foreground uppercase font-black tracking-widest">
                                {stat.label}
                              </div>
                              <div className={cn("text-lg sm:text-xl font-bold tracking-tighter", colors.text)}>
                                {stat.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Cyber accents */}
                      <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-t border-l border-black/20" />
                      <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-t border-r border-black/20" />
                      <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-b border-l border-black/20" />
                      <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-b border-r border-black/20" />
                    </div>
                  </div>

                  {/* Learn More Button - Now below the card */}
                  <button className={cn(
                    "py-2 px-6 border-2 rounded text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn",
                    colors.border,
                    colors.text,
                    "bg-white/80"
                  )}>
                    <span className={cn(
                      "absolute inset-0 -inset-x-px translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300",
                      colors.bg
                    )} />
                    <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">LEARN MORE</span>
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
