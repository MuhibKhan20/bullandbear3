"use client"

import { ScrollText, BarChart3, History, Target, Users, Camera, Play, TrendingUp, Award, Share2, Eye, ChevronUp, ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const recentTrades = [
  { id: 1, pair: "BTC/USDT", result: "+$1,240", type: "LONG", status: "WIN" },
  { id: 2, pair: "ETH/USDT", result: "-$420", type: "SHORT", status: "LOSS" },
  { id: 3, pair: "SOL/USDT", result: "+$890", type: "LONG", status: "WIN" },
]

// Mock user data that rotates every 2 seconds
const tradersData = [
  { name: "Alex Morgan", avatar: "AM", winRate: 72, profit: "+18.4%", trades: 243, rank: 1, trend: "up" },
  { name: "Sarah Chen", avatar: "SC", winRate: 68, profit: "+14.2%", trades: 189, rank: 2, trend: "up" },
  { name: "Mike Johnson", avatar: "MJ", winRate: 65, profit: "+12.8%", trades: 301, rank: 3, trend: "down" },
  { name: "Emma Davis", avatar: "ED", winRate: 71, profit: "+16.9%", trades: 156, rank: 4, trend: "up" },
  { name: "James Wilson", avatar: "JW", winRate: 63, profit: "+11.3%", trades: 278, rank: 5, trend: "up" },
  { name: "Lisa Anderson", avatar: "LA", winRate: 69, profit: "+15.7%", trades: 201, rank: 6, trend: "down" },
]

// Generate random chart data points for animation
const generateChartData = () => {
  return Array.from({ length: 20 }, (_, i) => ({
    x: i,
    y: 30 + Math.random() * 40,
    isGreen: Math.random() > 0.4
  }))
}

export function TradingJournal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [currentTraderIndex, setCurrentTraderIndex] = useState(0)
  const [chartData, setChartData] = useState(generateChartData())
  const [liveStats, setLiveStats] = useState({
    winRate: 68,
    profit: 14.2,
    drawdown: 2.1
  })

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

  // Rotate through traders every 2 seconds
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentTraderIndex((prev) => (prev + 1) % tradersData.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible])

  // Update chart data every 2 seconds
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setChartData(generateChartData())
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible])

  // Animate stats slightly every 2 seconds
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setLiveStats({
        winRate: 65 + Math.random() * 8,
        profit: 12 + Math.random() * 6,
        drawdown: 1.5 + Math.random() * 2
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible])

  const currentTrader = tradersData[currentTraderIndex]

  return (
    <section ref={sectionRef} id="journal" className="relative py-12 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with aggressive slide-in animation */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-bold tracking-widest uppercase mb-4 animate-pulse">
            <ScrollText className="w-3.5 h-3.5" /> TRADING JOURNAL SYSTEM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-none mb-3">
            YOUR COMPLETE <br />
            <span className="text-neon-pink">TRADING COMMAND CENTER</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Auto-synced broker integration, social accountability, video replays, and AI-powered analytics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Visual Side - REAL-TIME ANIMATED DASHBOARD */}
          <div className={`relative group order-2 lg:order-1 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-95'}`}>
            <div className="absolute inset-0 bg-neon-pink/20 blur-[120px] opacity-20 animate-pulse" />
            <div className="relative bg-card border-2 border-neon-pink/30 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-neon-pink/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,20,147,0.3)]">

              {/* Header with Live Indicator */}
              <div className="p-4 border-b border-white/10 bg-black/60 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-neon-pink animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                    LIVE TRADING ANALYTICS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                  <span className="text-[8px] text-neon-green font-bold uppercase">LIVE</span>
                </div>
              </div>

              <div className="p-4 space-y-4">
                {/* Rotating Trader Profile */}
                <div className="bg-gradient-to-br from-neon-pink/10 to-neon-purple/10 border border-neon-pink/20 rounded-xl p-3 transition-all duration-500">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-pink to-neon-purple flex items-center justify-center text-lg font-bold text-white animate-pulse">
                        {currentTrader.avatar}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full ${currentTrader.trend === 'up' ? 'bg-neon-green' : 'bg-neon-pink'} flex items-center justify-center animate-bounce`}>
                        {currentTrader.trend === 'up' ? <ChevronUp className="w-3 h-3 text-black" /> : <ChevronDown className="w-3 h-3 text-black" />}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white mb-0.5 transition-all duration-500 truncate">{currentTrader.name}</div>
                      <div className="flex items-center gap-2 text-[9px]">
                        <span className="text-muted-foreground">RANK #{currentTrader.rank}</span>
                        <span className="text-neon-green font-bold">{currentTrader.profit}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-neon-green">{currentTrader.winRate}%</div>
                      <div className="text-[7px] text-muted-foreground uppercase">Win Rate</div>
                    </div>
                  </div>
                </div>

                {/* Real-time Animated Graph */}
                <div className="bg-black/40 border border-white/5 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold text-white uppercase tracking-widest">Performance Chart</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                      <span className="text-[7px] text-muted-foreground">Real-time</span>
                    </div>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="h-28 flex items-end justify-between gap-0.5">
                    {chartData.map((point, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t transition-all duration-500 ${point.isGreen ? 'bg-neon-green' : 'bg-neon-pink'} hover:opacity-80 relative group/bar`}
                        style={{
                          height: `${point.y}%`,
                          animation: 'slideUp 0.5s ease-out forwards',
                          animationDelay: `${i * 20}ms`
                        }}
                      >
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity text-[7px] font-bold text-white whitespace-nowrap">
                          {point.isGreen ? '+' : '-'}{Math.floor(point.y)}%
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-1.5 flex justify-between text-[7px] text-muted-foreground">
                    <span>20 Sessions</span>
                    <span>Live Data</span>
                  </div>
                </div>

                {/* Live Stats Grid */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 bg-white/5 rounded border border-white/5 hover:border-neon-green/40 transition-all duration-500 hover:scale-110 hover:bg-white/10">
                    <div className="text-[7px] text-muted-foreground uppercase font-bold mb-0.5">WIN RATE</div>
                    <div className="text-lg font-bold tracking-tighter text-neon-green transition-all duration-500">
                      {liveStats.winRate.toFixed(1)}%
                    </div>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded border border-white/5 hover:border-neon-green/40 transition-all duration-500 hover:scale-110 hover:bg-white/10">
                    <div className="text-[7px] text-muted-foreground uppercase font-bold mb-0.5">PROFIT</div>
                    <div className="text-lg font-bold tracking-tighter text-neon-green transition-all duration-500">
                      +{liveStats.profit.toFixed(1)}%
                    </div>
                  </div>
                  <div className="p-2.5 bg-white/5 rounded border border-white/5 hover:border-neon-pink/40 transition-all duration-500 hover:scale-110 hover:bg-white/10">
                    <div className="text-[7px] text-muted-foreground uppercase font-bold mb-0.5">DRAWDN</div>
                    <div className="text-lg font-bold tracking-tighter text-neon-pink transition-all duration-500">
                      {liveStats.drawdown.toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* Auto-sync indicator */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[9px] text-neon-green">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    <span className="font-bold uppercase tracking-widest">AUTO-SYNC ACTIVE</span>
                  </div>
                  <div className="text-[7px] text-muted-foreground">
                    Updates: 2s
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side with staggered animations */}
          <div className={`space-y-5 order-1 lg:order-2 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-xs font-bold tracking-widest uppercase animate-pulse">
              <ScrollText className="w-3 h-3" /> Mission Debrief
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-none">
              REPLAY EVERY <br />
              <span className="text-neon-pink">ENGAGEMENT.</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              Auto-synced from your broker, enhanced with video replays, social sharing, and picture-tagged models.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                { icon: History, title: "Trade Replays", desc: "Frame-by-frame analysis of every trade." },
                { icon: Target, title: "Mission Goals", desc: "Gamified objectives for peak performance." },
                { icon: Users, title: "Accountability", desc: "Compare performance in real-time." },
                { icon: Camera, title: "Picture Tags", desc: "Tag models for instant access." },
              ].map((feature, i) => (
                <div key={i} className={`flex gap-3 p-3 rounded-lg border border-white/5 bg-white/5 hover:border-neon-pink/40 hover:bg-white/10 transition-all duration-500 hover:scale-105 ${isVisible ? 'animate-[slideUp_0.8s_ease-out_forwards]' : 'opacity-0'}`} style={{ animationDelay: `${500 + i * 100}ms` }}>
                  <feature.icon className="w-5 h-5 text-neon-pink shrink-0" />
                  <div>
                    <h3 className="font-bold uppercase text-xs mb-0.5 tracking-tight">{feature.title}</h3>
                    <p className="text-[10px] text-muted-foreground leading-tight">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="h-12 px-6 border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black font-bold uppercase tracking-widest text-sm transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(255,20,147,0.5)] relative overflow-hidden group">
              <span className="relative z-10">Open Logbook</span>
              <div className="absolute inset-0 bg-neon-pink translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
            </button>
          </div>
        </div>

        {/* New Social & Analytics Features Section */}
        <div className={`grid md:grid-cols-3 gap-4 pt-8 border-t border-white/10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="p-4 rounded-xl border border-neon-pink/20 bg-gradient-to-br from-neon-pink/5 to-transparent hover:border-neon-pink/40 transition-all duration-500 hover:scale-105 group">
            <Share2 className="w-6 h-6 text-neon-pink mb-2 group-hover:rotate-12 transition-transform duration-500" />
            <h3 className="font-bold uppercase text-sm mb-1 tracking-tight">Social Trading</h3>
            <p className="text-xs text-muted-foreground">Share with friends and build accountability partnerships.</p>
          </div>

          <div className="p-4 rounded-xl border border-neon-green/20 bg-gradient-to-br from-neon-green/5 to-transparent hover:border-neon-green/40 transition-all duration-500 hover:scale-105 group">
            <TrendingUp className="w-6 h-6 text-neon-green mb-2 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="font-bold uppercase text-sm mb-1 tracking-tight">Performance Tracking</h3>
            <p className="text-xs text-muted-foreground">Compare stats and compete with friends.</p>
          </div>

          <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent hover:border-purple-500/40 transition-all duration-500 hover:scale-105 group">
            <Award className="w-6 h-6 text-purple-400 mb-2 group-hover:rotate-12 transition-transform duration-500" />
            <h3 className="font-bold uppercase text-sm mb-1 tracking-tight">Achievements</h3>
            <p className="text-xs text-muted-foreground">Earn rewards based on execution quality.</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-center transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {[
            { icon: Eye, label: "Real-time Sync", value: "Auto" },
            { icon: Play, label: "Video Replays", value: "Built-in" },
            { icon: Users, label: "Social Sharing", value: "Active" },
            { icon: Camera, label: "Picture Tags", value: "Enabled" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 group hover:scale-110 transition-transform duration-500">
              <stat.icon className="w-4 h-4 text-neon-pink group-hover:rotate-12 transition-transform duration-500" />
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                <div className="text-xs font-bold text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
