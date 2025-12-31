"use client"

import { Cpu, Layers, Settings, Zap, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function StrategyBuilder() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="build" className="relative py-16 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,150,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Text Side - Left - with slide from left animation */}
          <div className={`space-y-8 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-bold tracking-widest uppercase">
              <Cpu className="w-3 h-3" /> Strat-Gen Engine
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter uppercase leading-none">
              BUILD YOUR <br />
              <span className="text-neon-blue">PERFECT WEAPON.</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Modular UI blocks designed for high-speed strategy construction. Drag, drop, and deploy your edge without
              writing a single line of code.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { icon: Layers, text: "Multi-layered logic stacking" },
                { icon: Settings, text: "Advanced broker-agnostic execution" },
                { icon: Zap, text: "Automated backtesting at scale" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 bg-gray-50 border border-black/5 rounded-lg group hover:border-neon-blue/40 transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'}`}
                  style={{ animationDelay: `${400 + i * 150}ms` }}
                >
                  <item.icon className="w-6 h-6 text-neon-blue" />
                  <span className="font-bold uppercase tracking-tight group-hover:text-black transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Visualizer - Right - with slide from right animation */}
          <div className={`relative group transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95'}`}>
            <div className="relative bg-card border-2 border-black/10 rounded-2xl overflow-hidden shadow-2xl hover:border-neon-blue/40 hover:shadow-[0_0_50px_rgba(50,150,255,0.3)] transition-all duration-500">
              <div className="flex items-center justify-between p-4 border-b border-black/10 bg-gray-100">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-neon-green/50" />
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  STRATEGY_DEVEL_V2.0
                </div>
              </div>

              <div className="p-8 space-y-6 bg-white/90">
                <div className={`flex gap-4 transition-all duration-800 ${isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
                  <div className="flex-1 p-4 rounded border border-neon-blue/30 bg-neon-blue/5 hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-all duration-300">
                    <div className="text-[10px] text-neon-blue font-bold uppercase mb-2">ENTRY_TRIGGER</div>
                    <div className="h-8 bg-gray-50 rounded border border-black/10" />
                  </div>
                  <div className="flex-none flex items-center">
                    <Zap className="text-neon-blue w-4 h-4" />
                  </div>
                  <div className="flex-1 p-4 rounded border border-neon-purple/30 bg-neon-purple/5 hover:border-neon-purple/50 hover:bg-neon-purple/10 transition-all duration-300">
                    <div className="text-[10px] text-neon-purple font-bold uppercase mb-2">RISK_LIMIT</div>
                    <div className="h-8 bg-gray-50 rounded border border-black/10" />
                  </div>
                </div>

                <div className={`p-4 rounded border border-black/10 bg-gray-50 relative overflow-hidden group/btn hover:border-neon-blue/40 hover:bg-gray-100 transition-all duration-500 hover:scale-105 cursor-pointer ${isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
                  <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                  <div className="text-center font-bold text-sm tracking-widest uppercase py-2">DEPLOY_TO_LIVE</div>
                </div>
              </div>

              <div className="p-4 bg-neon-blue/10 flex items-center justify-center gap-2 group-hover:bg-neon-blue transition-all duration-500 cursor-pointer hover:scale-105">
                <Play className="w-4 h-4 text-neon-blue group-hover:text-black transition-colors" fill="currentColor" />
                <span className="text-xs font-bold text-neon-blue group-hover:text-black uppercase tracking-widest transition-colors">
                  Run Simulation
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
