"use client"

import { ScrollText, BarChart3, History, Target } from "lucide-react"

const recentTrades = [
  { id: 1, pair: "BTC/USDT", result: "+$1,240", type: "LONG", status: "WIN" },
  { id: 2, pair: "ETH/USDT", result: "-$420", type: "SHORT", status: "LOSS" },
  { id: 3, pair: "SOL/USDT", result: "+$890", type: "LONG", status: "WIN" },
]

export function TradingJournal() {
  return (
    <section id="journal" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side - HUD Chart */}
          <div className="relative group order-2 lg:order-1">
            <div className="absolute inset-0 bg-neon-pink/20 blur-[120px] opacity-20" />
            <div className="relative bg-card border-2 border-neon-pink/30 rounded-2xl overflow-hidden backdrop-blur-xl">
              <div className="p-4 border-b border-white/10 bg-black/60 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-neon-pink" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    PERFORMANCE_HUD_v4.2
                  </span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-neon-pink/30" />
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "WIN RATE", val: "68%", color: "text-neon-green" },
                    { label: "PROFIT", val: "+14.2%", color: "text-neon-green" },
                    { label: "DRAWDN", val: "2.1%", color: "text-neon-pink" },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 bg-white/5 rounded border border-white/5">
                      <div className="text-[8px] text-muted-foreground uppercase font-bold mb-1">{stat.label}</div>
                      <div className={`text-xl font-bold tracking-tighter ${stat.color}`}>{stat.val}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                    Recent Mission History
                  </div>
                  {recentTrades.map((trade) => (
                    <div
                      key={trade.id}
                      className="flex items-center justify-between p-3 bg-black/40 border border-white/5 rounded hover:border-neon-pink/40 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-1 h-8 rounded ${trade.status === "WIN" ? "bg-neon-green" : "bg-neon-pink"}`}
                        />
                        <div>
                          <div className="text-xs font-bold text-white">{trade.pair}</div>
                          <div className="text-[8px] text-muted-foreground uppercase">{trade.type}</div>
                        </div>
                      </div>
                      <div
                        className={`text-sm font-bold ${trade.status === "WIN" ? "text-neon-green" : "text-neon-pink"}`}
                      >
                        {trade.result}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-bold tracking-widest uppercase">
              <ScrollText className="w-3 h-3" /> Mission Debrief
            </div>

            <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter uppercase leading-none">
              REPLAY EVERY <br />
              <span className="text-neon-pink">ENGAGEMENT.</span>
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Analytics meets social combat. View your trade replays, compare stats with friends, and earn achievements
              based on your execution quality.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <History className="w-6 h-6 text-neon-pink shrink-0" />
                <div>
                  <h3 className="font-bold uppercase text-sm mb-1 tracking-tight">Trade Replays</h3>
                  <p className="text-xs text-muted-foreground">Frame-by-frame analysis of every entry and exit.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-neon-pink shrink-0" />
                <div>
                  <h3 className="font-bold uppercase text-sm mb-1 tracking-tight">Mission Goals</h3>
                  <p className="text-xs text-muted-foreground">Gamified objectives to keep your discipline sharp.</p>
                </div>
              </div>
            </div>

            <button className="h-14 px-8 border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-bold uppercase tracking-widest transition-all">
              Open Logbook
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
