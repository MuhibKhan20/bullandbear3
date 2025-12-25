"use client"

import { Cpu, Layers, Settings, Zap, Play } from "lucide-react"

export function StrategyBuilder() {
  return (
    <section id="build" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(50,150,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
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
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-lg group hover:border-neon-blue/40 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-neon-blue" />
                  <span className="font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy Visualizer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-neon-blue/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-card border-2 border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/40">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-neon-green/50" />
                </div>
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  STRATEGY_DEVEL_V2.0
                </div>
              </div>

              <div className="p-8 space-y-6 bg-black/80">
                <div className="flex gap-4">
                  <div className="flex-1 p-4 rounded border border-neon-blue/30 bg-neon-blue/5">
                    <div className="text-[10px] text-neon-blue font-bold uppercase mb-2">ENTRY_TRIGGER</div>
                    <div className="h-8 bg-white/5 rounded border border-white/10" />
                  </div>
                  <div className="flex-none flex items-center">
                    <Zap className="text-neon-blue w-4 h-4" />
                  </div>
                  <div className="flex-1 p-4 rounded border border-neon-purple/30 bg-neon-purple/5">
                    <div className="text-[10px] text-neon-purple font-bold uppercase mb-2">RISK_LIMIT</div>
                    <div className="h-8 bg-white/5 rounded border border-white/10" />
                  </div>
                </div>

                <div className="p-4 rounded border border-white/10 bg-white/5 relative overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover/btn:opacity-10 transition-opacity" />
                  <div className="text-center font-bold text-sm tracking-widest uppercase py-2">DEPLOY_TO_LIVE</div>
                </div>
              </div>

              <div className="p-4 bg-neon-blue/10 flex items-center justify-center gap-2 group-hover:bg-neon-blue transition-colors cursor-pointer">
                <Play className="w-4 h-4 text-neon-blue group-hover:text-black" fill="currentColor" />
                <span className="text-xs font-bold text-neon-blue group-hover:text-black uppercase tracking-widest">
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
