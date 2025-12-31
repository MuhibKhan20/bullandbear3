"use client"
import { Users, User, Shield, Target, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const team = [
  { name: "ZERO", role: "FOUNDER / QUANT", stats: "WIN: 74%", icon: Shield, color: "text-neon-green", image: "/zero.jpg" },
  { name: "NEO", role: "CORE ARCHITECT", stats: "SYS: ACTIVE", icon: Target, color: "text-neon-blue", image: "/neo.jpg" },
  { name: "V1XEN", role: "UI / HUD LEAD", stats: "VIS: 120FPS", icon: User, color: "text-neon-pink", image: "/vixen.jpeg" },
  { name: "KAIROS", role: "STRAT ENGINE", stats: "LAT: <1MS", icon: Zap, color: "text-neon-purple", image: "/KAIROS.jpeg" },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 bg-white border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-75'}`}>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-black/10 text-muted-foreground text-xs font-bold tracking-widest uppercase mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <Users className="w-3 h-3" /> Squad Intel
          </div>
          <h2 className={`text-5xl font-bold tracking-tighter uppercase mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-90'}`}>
            THE COMMAND <span className="text-muted-foreground">CREW.</span>
          </h2>
        </div>

        {/* Ticker Motion Team Cards */}
        <div className="relative">
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 150}ms` }}
                className={`group relative w-full max-w-[280px] aspect-[3/4] bg-white border-2 border-black/10 rounded-xl overflow-hidden hover:border-neon-green hover:shadow-2xl hover:shadow-neon-green/50 transition-all duration-700 cursor-pointer hover:-translate-y-4 hover:rotate-1 ${isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-40 scale-50 -rotate-12'}`}
              >
                {/* Scanline Effect */}
                <div className="absolute inset-0 scanline opacity-20 z-20 pointer-events-none" />

                {/* Character Image - Visible by default */}
                <div className="absolute inset-0 opacity-100 transition-all duration-500">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-125 group-hover:rotate-2"
                  />
                </div>


                {/* Text Overlay - Shows below image with dark shade */}
                <div className="absolute inset-x-0 bottom-0 opacity-100 transition-opacity duration-700 z-30">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent" />
                  <div className="relative p-6 space-y-2">
                    <div className={`text-[10px] font-black tracking-[0.2em] ${member.color}`}>{member.role}</div>
                    <div className="text-3xl font-black tracking-tighter text-white drop-shadow-2xl">{member.name}</div>

                    <div className="pt-4 flex items-center justify-between border-t border-white/20">
                      <span className="text-[10px] font-bold text-gray-300 uppercase">{member.stats}</span>
                      <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-neon-green" />
                        <div className="w-1 h-1 rounded-full bg-neon-green" />
                        <div className="w-1 h-1 rounded-full bg-neon-green/30" />
                      </div>
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
