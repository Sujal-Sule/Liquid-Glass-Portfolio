import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function FooterSection() {
  const [copied, setCopied] = useState(false);
  const EMAIL = 'sujalsule31@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navLinks = [
    { name: 'Portfolio', target: 'portfolio' },
    { name: 'Expertise', target: 'expertise' },
    { name: 'About', target: 'about' },
    { name: 'Tech Stack', target: 'stack' },
    { name: 'Projects', target: 'archives' },
    { name: 'Hackathons', target: 'hackathons' },
    { name: 'Contact', target: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { name: 'GitHub', href: 'https://github.com/Sujal-Sule' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sujal-sule/' },
    { name: 'X / Twitter', href: 'https://x.com/SujalSule_31' },
    { name: 'Instagram', href: 'https://www.instagram.com/sujal_sule31' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(255,255,255,0.025) 0%, transparent 70%)' }} />
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-16 pb-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 flex flex-col gap-6">
            <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-12 h-12 liquid-glass flex items-center justify-center cursor-pointer group self-start">
              <span className="font-heading italic text-2xl lowercase transform -translate-y-0.5 group-hover:scale-110 transition-transform">ss</span>
            </div>
            <p className="text-sm text-white/40 font-body font-light leading-relaxed max-w-[26ch]">Full-Stack Developer crafting scalable web systems and modern digital experiences.</p>
            <div className="flex items-center gap-2.5 liquid-glass rounded-full px-4 py-2.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-body text-green-400 font-medium">Available for Hire</span>
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-6 flex flex-col gap-4">
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-body">Navigation</span>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <button key={link.name} onClick={() => scrollToSection(link.target)} className="text-sm text-white/45 hover:text-white transition-colors font-body font-light text-left cursor-pointer">{link.name}</button>
              ))}
            </nav>
          </div>
          <div className="md:col-span-3 md:col-start-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-body">Connect</span>
              <nav className="flex flex-col gap-2.5">
                {socials.map(s => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/45 hover:text-white transition-colors font-body font-light flex items-center gap-1.5 group">
                    {s.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </nav>
            </div>
            <button onClick={handleCopy} className="liquid-glass rounded-2xl p-4 flex flex-col gap-2 text-left group cursor-pointer hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200 w-full">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-body">Get in touch</span>
              <span className="font-body text-sm text-white/80 group-hover:text-white transition-colors break-all leading-snug">{EMAIL}</span>
              <span className={`text-[10px] font-body transition-all duration-300 flex items-center gap-1.5 ${copied ? 'text-green-400' : 'text-white/30 group-hover:text-white/50'}`}>
                {copied ? (<><CheckCircle2 className="w-3 h-3" /> Copied to clipboard!</>) : (<><ArrowUpRight className="w-3 h-3" /> Click to copy email</>)}
              </span>
            </button>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-body tracking-widest uppercase">© 2026 Sujal Sule. All rights reserved.</p>
          <p className="text-xs text-white/15 font-body">Built with React · Vite · Tailwind CSS · Motion</p>
        </div>
      </div>
    </footer>
  );
}
