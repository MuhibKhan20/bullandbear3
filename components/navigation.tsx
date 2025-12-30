 
import { Button } from "@/components/ui/button"
import Image from "next/image"

type CubeLinkProps = {
  label: string
  href?: string
}

function CubeLink({ label, href = "#" }: CubeLinkProps) {
  const cubeHeight = 24 // 6 * 4 = 24px (h-6 = 1.5rem = 24px)

  return (
    <a
      href={href}
      className="group relative inline-block h-6 overflow-hidden [perspective:600px]"
    >
      <span
        className="
          relative block h-6
          transition-transform duration-500
          ease-[cubic-bezier(0.4,0,0.2,1)]
          [transform-style:preserve-3d]
          group-hover:[transform:rotateX(90deg)]
        "
        style={{
          transformOrigin: 'bottom center'
        }}
      >
        {/* Front face */}
        <span
          className="
            block h-6 leading-6
            
            
          "
        >
          {label}
        </span>

        {/* Bottom face (becomes visible on rotation) */}
        <span
          className="
            absolute left-0 top-0 h-6 leading-6
            text-white
            [backface-visibility:hidden]
          "
          style={{
            transformOrigin: 'bottom center',
            transform: `rotateX(-90deg) translateZ(${cubeHeight / 2}px)`
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
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        <div className="flex items-center h-10">
          <Image
            src="/logo.png"
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
