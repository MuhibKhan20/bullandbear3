 
import { Button } from "@/components/ui/button"
import Image from "next/image"

type CubeLinkProps = {
  label: string
  href?: string
}

function CubeLink({ label, href = "#" }: CubeLinkProps) {
  const cubeHeight = 24 // h-6 = 1.5rem = 24px

  return (
    <a
      href={href}
      className="group relative inline-block h-6 overflow-hidden [perspective:800px]"
    >
      <span
        className="
          relative block h-6
          transition-transform duration-600
          ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]
          [transform-style:preserve-3d]
          group-hover:[transform:rotateX(90deg)]
        "
        style={{
          transformOrigin: 'center center'
        }}
      >
        {/* Front face */}
        <span
          className="
            block h-6 leading-6
            text-gray-700
            bg-gradient-to-r from-transparent via-black/5 to-transparent
            [backface-visibility:hidden]
          "
          style={{
            transform: 'translateZ(12px)'
          }}
        >
          {label}
        </span>

        {/* Bottom face (becomes visible on rotation) */}
        <span
          className="
            absolute left-0 top-0 h-6 leading-6 w-full
            text-black
            [backface-visibility:hidden]
          "
          style={{
            transform: `rotateX(-90deg) translateZ(12px)`
          }}
        >
          {label}
        </span>

        {/* Top face (adds depth) */}
        <span
          className="
            absolute left-0 top-0 w-full h-6
            bg-gradient-to-b from-gray-800/50 to-transparent
            [backface-visibility:hidden]
            pointer-events-none
          "
          style={{
            transform: `rotateX(90deg) translateZ(12px)`
          }}
        />

        {/* Back face (adds depth) */}
        <span
          className="
            absolute left-0 top-0 h-6 leading-6 w-full
            text-gray-400
            bg-gray-50
            [backface-visibility:hidden]
          "
          style={{
            transform: 'translateZ(-12px) rotateX(180deg)'
          }}
        >
          {label}
        </span>
      </span>
    </a>
  )
}

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-black/10 bg-white backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center h-10">
          <Image
            src="/BULLINBEAR.png"
            alt="Bull and Bear Logo"
            width={150}
            height={40}
            priority
            className="object-contain"
            style={{ width: '150px', height: '40px' }}
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <CubeLink label="MARKET" />
          <CubeLink label="ARENA" />
          <CubeLink label="NEURAL SYNC" />
          <CubeLink label="DEBRIEF" />
        </div>

        <Button
          variant="outline"
          className="border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10 bg-transparent"
        >
          CONNECT HUD
        </Button>

      </div>
    </nav>
  )
}
