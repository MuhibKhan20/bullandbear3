"use client"

import { useRef, useEffect, useState } from "react"
import { Cpu, Globe, Zap, BarChart3, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react"

const tools = [
  { name: "AUTO-SYNC", icon: Zap, value: "99.9%", label: "Uptime" },
  { name: "GLOBAL-NODE", icon: Globe, value: "12ms", label: "Latency" },
  { name: "MECH-STRAT", icon: Cpu, value: "v2.4", label: "Engine" },
  { name: "RISK-SHIELD", icon: ShieldCheck, value: "ACTIVE", label: "Security" },
  { name: "QUANT-DATA", icon: BarChart3, value: "REAL-TIME", label: "Feed" },
]

export function PowerSlide() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [speed, setSpeed] = useState(0.5)
  const baseSpeed = 0.5

  const handleBoost = (direction: "left" | "right") => {
    const boostSpeed = direction === "right" ? 8 : -8
    setSpeed(boostSpeed)
    setTimeout(() => setSpeed(baseSpeed), 500)
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPos = scrollContainer.scrollLeft || 0

    const step = () => {
      scrollPos += speed
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0
      }
      if (scrollPos < 0) {
        scrollPos = scrollContainer.scrollWidth / 2
      }
      scrollContainer.scrollLeft = scrollPos
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [speed])

  return (
    <section className="relative bg-white overflow-hidden py-4">
      <div className="absolute inset-0 grid-cyber opacity-10" />

      {/* Arrow Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 flex gap-2">
        <button
          onClick={() => handleBoost("left")}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-neon-green hover:glow-green transition-all active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex gap-2">
        <button
          onClick={() => handleBoost("right")}
          className="w-10 h-10 rounded-lg flex items-center justify-center text-neon-green hover:glow-green transition-all active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 whitespace-nowrap overflow-hidden"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
      >
        {/* Doubled list for seamless looping */}
        {[...tools, ...tools, ...tools].map((tool, i) => (
          <div
            key={`${tool.name}-${i}`}
            className="flex items-center gap-6 px-8 py-4 bg-card/40 border border-black/5 rounded-lg group hover:border-neon-green/40 transition-colors"
          >
            <tool.icon className="w-8 h-8 text-neon-green group-hover:glow-green transition-all" />
            <div>
              <div className="text-xs font-bold tracking-widest text-muted-foreground uppercase">{tool.name}</div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tighter text-black">{tool.value}</span>
                <span className="text-[10px] font-bold text-neon-green opacity-70 uppercase">{tool.label}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
