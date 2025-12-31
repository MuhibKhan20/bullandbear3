import { Github, X, MessageSquare, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative py-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <Image
                src="/BULLINBEAR.png"
                alt="Bull and Bear Logo"
                width={150}
                height={40}
              />
            </div>
            <p className="text-muted-foreground max-w-sm">
              The next evolution of competitive trading. Built for the elite, powered by the community, fueled by the
              grid.
            </p>
            <div className="flex gap-4">
              {[X, Github, Linkedin, Instagram, Youtube, MessageSquare].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded border border-black/10 flex items-center justify-center text-muted-foreground hover:text-neon-green hover:border-neon-green/40 transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-black mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neon-green" />
                <a href="mailto:contact@bullandbear.com" className="hover:text-black transition-colors">
                  contact@bullandbear.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-neon-green" />
                <a href="tel:+1234567890" className="hover:text-black transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neon-green" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-black mb-6">Security</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Anti-Cheat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Node Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Legal HUD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <div>© 2025 BULLINBEAR. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-black">
              Privacy_Kernel
            </a>
            <a href="#" className="hover:text-black">
              Terms_of_Combat
            </a>
            <a href="#" className="hover:text-black">
              System_Status: GREEN
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
