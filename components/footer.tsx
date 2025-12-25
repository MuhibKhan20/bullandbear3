import { Zap, Github, Twitter, MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-20 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Zap className="w-8 h-8 text-neon-green" fill="currentColor" />
              <span className="text-2xl font-bold tracking-tighter text-white uppercase">TRADINGVERSE</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              The next evolution of competitive trading. Built for the elite, powered by the community, fueled by the
              grid.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-muted-foreground hover:text-neon-green hover:border-neon-green/40 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-6">Sectors</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-neon-green transition-colors">
                  The Arena
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-purple transition-colors">
                  Sync Lab
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Strategy Forge
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-pink transition-colors">
                  Data Log
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-white mb-6">Security</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Anti-Cheat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Node Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Legal HUD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <div>© 2025 TRADINGVERSE_OS. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy_Kernel
            </a>
            <a href="#" className="hover:text-white">
              Terms_of_Combat
            </a>
            <a href="#" className="hover:text-white">
              System_Status: GREEN
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
