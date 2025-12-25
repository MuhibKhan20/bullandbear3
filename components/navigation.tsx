import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter text-white">TRADINGVERSE</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#" className="hover:text-white transition-colors">
            MARKET
          </a>
          <a href="#" className="hover:text-white transition-colors">
            ARENA
          </a>
          <a href="#" className="hover:text-white transition-colors">
            NEURAL SYNC
          </a>
          <a href="#" className="hover:text-white transition-colors">
            DEBRIEF
          </a>
        </div>
        <Button variant="outline" className="border-cyan-500/50 text-cyan-500 hover:bg-cyan-500/10 bg-transparent">
          CONNECT HUD
        </Button>
      </div>
    </nav>
  )
}
