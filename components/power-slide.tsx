"use client"

import { useRef, useEffect } from "react"
import { Cpu, Globe, Zap, BarChart3, ShieldCheck } from "lucide-react"

const tools = [
  { name: "AUTO-SYNC", icon: Zap, value: "99.9%", label: "Uptime" },
  { name: "GLOBAL-NODE", icon: Globe, value: "12ms", label: "Latency" },
  { name: "MECH-STRAT", icon: Cpu, value: "v2.4", label: "Engine" },
  { name: "RISK-SHIELD", icon: ShieldCheck, value: "ACTIVE", label: "Security" },
  { name: "QUANT-DATA", icon: BarChart3, value: "REAL-TIME", label: "Feed" },
]

export function PowerSlide() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPos = 0

    const step = () => {
      scrollPos += 0.5
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="relative py-12 bg-black border-y border-neon-green/10 overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-10" />

      <div
        ref={scrollRef}
        className="flex gap-8 whitespace-nowrap overflow-hidden py-4"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        {/* Doubled list for seamless looping */}
        {[...tools, ...tools, ...tools].map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="flex items-center gap-6 px-8 py-4 bg-card/40 border border-white/5 rounded-lg group hover:border-neon-green/40 transition-colors"
          >
            <tool.icon className="w-8 h-8 text-neon-green group-hover:glow-green transition-all" />
            <div>
              <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase">{tool.name}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tighter text-white">{tool.value}</span>
                <span className="text-[10px] font-bold text-neon-green opacity-70 uppercase">{tool.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
