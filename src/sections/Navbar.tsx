import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Portfolio', target: 'portfolio' },
  { name: 'Expertise', target: 'expertise' },
  { name: 'About', target: 'about' },
  { name: 'Tech Stack', target: 'stack' },
  { name: 'Projects', target: 'archives' },
  { name: 'Hackathons', target: 'hackathons' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 flex items-center justify-between pointer-events-none" data-no-cursor-grow>
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 liquid-glass flex items-center justify-center pointer-events-auto cursor-pointer group">
          <span className="font-heading italic text-2xl lowercase transform -translate-y-0.5 group-hover:scale-110 transition-transform">ss</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex liquid-glass p-1.5 pointer-events-auto rounded-full items-center" onMouseLeave={() => setHoveredNav(null)}>
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => scrollToSection(link.target)} onMouseEnter={() => setHoveredNav(link.name)} className="relative px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors cursor-pointer">
              {hoveredNav === link.name && (
                <motion.div layoutId="navHoverPill" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.08) 100%)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.1), 0 0 16px rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.25)', borderTop: '1px solid rgba(255,255,255,0.35)', borderLeft: '1px solid rgba(255,255,255,0.18)', borderRight: '1px solid rgba(255,255,255,0.18)', borderBottom: '1px solid rgba(255,255,255,0.08)' }} transition={{ type: 'spring', stiffness: 400, damping: 28 }} />
              )}
              <span className="relative z-[1]">{link.name}</span>
            </button>
          ))}
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} onMouseEnter={() => setHoveredNav('cta')} className="relative bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 ml-1 whitespace-nowrap active:scale-95 transition-transform z-[2]">
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden w-12 h-12 liquid-glass flex items-center justify-center pointer-events-auto cursor-pointer" aria-label="Open navigation menu">
          <Menu className="w-5 h-5 text-white" />
        </button>

        {/* Desktop spacer */}
        <div className="w-12 h-12 invisible hidden lg:block" />
      </nav>

      {/* Mobile menu overlay */}
      <motion.div initial={false} animate={mobileMenuOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }} transition={{ duration: 0.3 }} className="fixed inset-0 z-[60] lg:hidden">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" onClick={() => setMobileMenuOpen(false)} />
        <motion.div initial={false} animate={mobileMenuOpen ? { x: 0 } : { x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-black/60 backdrop-blur-3xl border-l border-white/5 flex flex-col">
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-body">Navigation</span>
            <button onClick={() => setMobileMenuOpen(false)} className="w-10 h-10 liquid-glass flex items-center justify-center cursor-pointer" aria-label="Close navigation menu">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 pt-4 gap-1">
            {navLinks.map((link, i) => (
              <motion.button key={link.name} onClick={() => { setMobileMenuOpen(false); setTimeout(() => scrollToSection(link.target), 300); }} initial={false} animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.1 + i * 0.05 : 0 }} className="py-4 text-2xl font-heading italic text-white/80 hover:text-white transition-colors border-b border-white/5 flex items-center justify-between group w-full text-left cursor-pointer">
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
              </motion.button>
            ))}
          </nav>
          <div className="px-6 pb-8 pt-4 flex flex-col gap-4">
            <button onClick={() => { setMobileMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); }} className="bg-white text-black w-full py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
              Get In Touch <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-body text-green-400/80">Available for Hire</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
