"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Zap, Target, Swords, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const PILLARS = [
  {
    id: "01",
    title: "SYNC LEARNING",
    description: "Learn together. Execute together.",
    icon: Zap,
    color: "neon-green",
    stats: [
      { label: "SYNC RATE", value: "98.2%" },
      { label: "MENTORS", value: "142" },
    ],
  },
  {
    id: "02",
    title: "STRATEGY LAB",
    description: "Forge signals into weapons.",
    icon: Target,
    color: "neon-blue",
    stats: [
      { label: "BUILDS", value: "12.4K" },
      { label: "SIM-ACC", value: "99.9%" },
    ],
  },
  {
    id: "03",
    title: "VIDEO GAME",
    description: "Trade against real players.",
    icon: Swords,
    color: "neon-purple",
    stats: [
      { label: "PLAYERS", value: "4.2K" },
      { label: "RANK", value: "S-TIER" },
    ],
  },
]

function HeroCard({
  pillar,
  index,
  scrollProgress,
}: {
  pillar: (typeof PILLARS)[0]
  index: number
  scrollProgress: any
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const getColorClasses = (color: string) => {
    switch (color) {
      case "neon-green":
        return {
          text: "text-neon-green",
          bg: "bg-neon-green",
          border: "border-neon-green/50",
          shadow: "shadow-[0_0_30px_rgba(57,255,20,0.3)] hover:shadow-[0_0_50px_rgba(57,255,20,0.5)]",
          cardBg: "bg-black",
          innerBg: "bg-gradient-to-br from-neon-green/25 via-black to-black",
        }
      case "neon-blue":
        return {
          text: "text-neon-blue",
          bg: "bg-neon-blue",
          border: "border-neon-blue/50",
          shadow: "shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:shadow-[0_0_50px_rgba(0,255,255,0.5)]",
          cardBg: "bg-black",
          innerBg: "bg-gradient-to-br from-neon-blue/25 via-black to-black",
        }
      case "neon-purple":
        return {
          text: "text-neon-purple",
          bg: "bg-neon-purple",
          border: "border-neon-purple/50",
          shadow: "shadow-[0_0_30px_rgba(191,0,255,0.3)] hover:shadow-[0_0_50px_rgba(191,0,255,0.5)]",
          cardBg: "bg-black",
          innerBg: "bg-gradient-to-br from-neon-purple/25 via-black to-black",
        }
      case "neon-pink":
        return {
          text: "text-neon-pink",
          bg: "bg-neon-pink",
          border: "border-neon-pink/50",
          shadow: "shadow-[0_0_30px_rgba(255,0,255,0.3)] hover:shadow-[0_0_50px_rgba(255,0,255,0.5)]",
          cardBg: "bg-black",
          innerBg: "bg-gradient-to-br from-neon-pink/25 via-black to-black",
        }
      default:
        return {
          text: "text-white",
          bg: "bg-white",
          border: "border-white/30",
          shadow: "",
          cardBg: "bg-black",
          innerBg: "bg-black",
        }
    }
  }

  const colors = getColorClasses(pillar.color)

  // Calculate position in the wheel based on scroll
  // Each card occupies a segment of the scroll range
  const range = [index - 1, index, index + 1]

  const x = useTransform(scrollProgress, range, ["-50%", "0%", "50%"])
  const z = useTransform(scrollProgress, range, [-200, 0, -200])
  const rotateY = useTransform(scrollProgress, range, [45, 0, -45])
  const opacity = useTransform(scrollProgress, range, [0.3, 1, 0.3])
  const scale = useTransform(scrollProgress, range, [0.7, 1.1, 0.7])
  const blur = useTransform(scrollProgress, range, [8, 0, 8])
  // Mouse parallax effect for the focused card (throttled for performance, disabled on mobile)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const mouseMoveRef = useRef<number | null>(null)
  const isMobileRef = useRef(false)

  useEffect(() => {
    isMobileRef.current = window.matchMedia('(max-width: 768px)').matches
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    // Disable mouse parallax on mobile for performance
    if (isMobileRef.current || mouseMoveRef.current) return

    mouseMoveRef.current = window.requestAnimationFrame(() => {
      if (!cardRef.current) {
        mouseMoveRef.current = null
        return
      }
      const rect = cardRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      setMousePos({
        x: (e.clientX - centerX) / (rect.width / 2),
        y: (e.clientY - centerY) / (rect.height / 2),
      })
      mouseMoveRef.current = null
    })
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      style={{
        x,
        z,
        rotateY,
        opacity,
        scale,
        perspective: 1000,
        filter: `blur(${blur}px)`,
      }}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] aspect-[16/9] rounded-lg sm:rounded-xl border-2 p-0.5 sm:p-1 will-change-transform",
        colors.border,
        colors.shadow,
        colors.cardBg,
        "cursor-pointer group",
      )}
    >
      {/* Inner HUD UI */}
      <div className="relative h-full w-full rounded-lg overflow-hidden flex flex-row p-3 sm:p-4 md:p-6 gap-2 sm:gap-4 md:gap-6 bg-black">
        {/* Themed Color Background */}
        <div className={cn("absolute inset-0", colors.innerBg)} />

        {/* Decorative Grid - Hidden on mobile for performance */}
        <div className="absolute inset-0 grid-cyber opacity-10 group-hover:opacity-20 transition-opacity will-change-[opacity] hidden sm:block" />

        {/* Scanline Effect - Reduced on mobile */}
        <div className="absolute inset-0 pointer-events-none bg-scanline opacity-[0.02] sm:opacity-[0.03] animate-scan will-change-[transform]" />

        {/* LEFT SIDE - ICON & ID */}
        <div className="flex flex-col justify-between items-start relative z-10 min-w-[50px] sm:min-w-[60px] md:min-w-[80px]">
          <div className="flex flex-col">
            <span className={cn("text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase", colors.text)}>
              MODE {pillar.id}
            </span>
            <div className={cn("h-[1.5px] sm:h-[2px] w-6 sm:w-8 mt-0.5 sm:mt-1", colors.bg)} />
          </div>
          <pillar.icon className={cn("w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12", colors.text)} />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-grow flex flex-col justify-center relative z-10 min-w-0">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tighter leading-none mb-1.5 sm:mb-2 md:mb-3 will-change-transform"
            style={{
              rotateX: mousePos.y * -10,
              rotateY: mousePos.x * 10,
            }}
          >
            {pillar.title}
          </motion.h2>
          <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-muted-foreground uppercase tracking-widest font-bold border-l border-l-2 border-white/20 pl-2 sm:pl-3 md:pl-4 py-0.5 sm:py-1">
            {pillar.description}
          </p>
        </div>

        {/* RIGHT SIDE - STATS */}
        <div className="relative z-10 flex items-center border-l border-white/10 pl-2 sm:pl-4 md:pl-6 min-w-[80px] sm:min-w-[120px] md:min-w-[160px] lg:min-w-[180px]">
          <div className="grid grid-cols-1 gap-2 sm:gap-3 md:gap-4">
            {pillar.stats.map((stat, i) => (
              <div key={i} className="space-y-0.5 sm:space-y-1">
                <div className="text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                  {stat.label}
                </div>
                <div className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tighter">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cyber accents */}
        <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-t border-l border-white/20" />
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-1.5 sm:w-2 h-1.5 sm:h-2 border-b border-r border-white/20" />
      </div>
    </motion.div>
  )
}

export function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  // Initialize scroll to middle position (showing middle card)
  useEffect(() => {
    // Only run on client side and only once
    if (typeof window === 'undefined') return

    let animationFrameId: number

    const scrollToMiddle = () => {
      const container = containerRef.current
      if (container && window.scrollY === 0) {
        const containerTop = container.offsetTop
        const containerHeight = container.scrollHeight

        // Calculate position for middle card (at 0.5 of the scroll progress)
        // This corresponds to index 1 in our transform
        const targetScroll = containerTop + (containerHeight - window.innerHeight) * 0.5

        // Use requestAnimationFrame for smoother rendering
        animationFrameId = requestAnimationFrame(() => {
          window.scrollTo({
            top: targetScroll,
            behavior: 'instant' as ScrollBehavior,
          })
        })
      }
    }

    // Delay to ensure layout is complete
    const timer = setTimeout(scrollToMiddle, 50)

    return () => {
      clearTimeout(timer)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  // Create a spring-smoothed version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
    mass: 1,
  })

  // Map scroll progress (0-1) to card indices (0 to PILLARS.length - 1)
  // Offset to start at index 1 (middle card) by default
  const cardProgress = useTransform(smoothProgress, [0, 0.5, 1], [0, 1, PILLARS.length - 1])

  return (
    <section ref={containerRef} className="relative h-[150vh] bg-black">
      {/* Sticky viewport for the carousel */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Background Atmospheric Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-neon-blue/5 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full" />
        </div>

        <div className="relative w-full max-w-7xl h-full flex items-center justify-center perspective-[1500px] sm:perspective-[2000px]">
          {/* Render Cards */}
          <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px] flex items-center justify-center">
            {PILLARS.map((pillar, index) => (
              <HeroCard key={pillar.id} pillar={pillar} index={index} scrollProgress={cardProgress} />
            ))}
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 sm:bottom-12 flex flex-col items-center gap-1.5 sm:gap-2 animate-bounce opacity-50 will-change-transform">
          <span className="text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/40">
            SCROLL TO ROTATE MODES
          </span>
          <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-white/40" />
        </div>
      </div>
    </section>
  )
}
