import { useState, useEffect, useCallback, FormEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock, Globe, Image, Film, Lightbulb, Code2, Terminal, Cpu, Layout, Database, Atom, Triangle, Box, Server, Zap, Leaf, HardDrive, Flame, Cloud, GitBranch, Github, Loader2, CheckCircle2, Trophy, Sparkles, Calendar, Menu, X } from 'lucide-react';
import FadingVideo from './components/FadingVideo';
import BlurText from './components/BlurText';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';

import proj1Img from './assets/images/regenerated_image_1779527125445.png';
import proj2Img from './assets/images/regenerated_image_1779527128713.png';
import proj3Img from './assets/images/regenerated_image_1779526938706.png';
import proj4Img from './assets/images/regenerated_image_1779527148841.png';

const hackathons = [
  {
    id: "HACKATHON 01",
    title: "Glitch the Grid",
    sub: "GDG IIPS DAVV",
    year: "2026",
    award: "2nd Runner Up 🏆",
    project: "SkillSwap",
    role: "Full-Stack Developer (Solo Creator)",
    impact: [
      "Engineered the entire AI-powered skill exchange platform from scratch, enabling real-time collaboration with WebSockets, Gemini AI integration, and peer networking.",
      "Successfully built and fully programmed the entire project independently, although physically unable to attend the venue on-site.",
      "Designed and integrated real-time state synchronization using Firebase and custom peer-to-peer workspace matching mechanics."
    ],
    tech: ["React.js", "TypeScript", "Vite", "FastAPI", "Python", "MongoDB", "Firebase", "Gemini AI", "WebSockets", "Vercel"],
    liveUrl: "https://skillswap.sujalsule.in/",
  },
  {
    id: "HACKATHON 02",
    title: "BGI Hackathon",
    sub: "Blockchain Supply Chain Challenge",
    year: "2026",
    award: "First Web3 & Blockchain Build",
    project: "Origyn",
    role: "Full-Stack Web3 Developer (Solo Creator)",
    impact: [
      "Engineered Origyn—a blockchain-powered supply chain traceability platform with real-time FastAPI endpoints, product tracking, and JWT auth.",
      "Sourced live telemetry via a background IoT Simulation task in Python, streaming critical warnings to map layers.",
      "Developed a dual-client system: a responsive React web dashboard with Recharts/Mapbox tracking, plus an Expo React Native mobile client."
    ],
    tech: ["React.js", "TypeScript", "Vite", "FastAPI", "Python", "Expo", "WebSockets", "Web3"],
    github: "https://github.com/Sujal-Sule/Origyn"
  },
  {
    id: "HACKATHON 03",
    title: "Project Morpheus by SIT Lonavala",
    sub: "National Innovation Hackathon",
    year: "2026",
    award: "Finalist",
    project: "SafePulse",
    role: "Full-Stack Developer",
    impact: [
      "Engineered real-time smart crowd containment response systems for SafePulse, optimizing system throughput for smart-city public safety simulations.",
      "Constructed custom animated spatial indicator gauges with Motion layout transitions, presenting fully interactive dashboards to SIT Lonavala judges.",
      "Secured a place among top finalist teams, receiving high praise for polished technical execution and rapid prototype development."
    ],
    tech: ["React.js", "TypeScript", "Vite", "Mapbox GL", "Python", "Firebase", "Supabase", "Vercel"],
    liveUrl: "https://safepulse.teamcodezilla.in/",
  },
  {
    id: "HACKATHON 04",
    title: "Gemini Live Agent Challenge",
    sub: "Google Cloud Global Hackathon",
    year: "2026",
    award: "Participant & Builder",
    project: "EchoBook",
    role: "AI Integration & Frontend Lead",
    impact: [
      "Conceptualized and developed EchoBook—an immersive dynamic storytelling experience leveraging Gemini multimodal agency.",
      "Engineered real-time state managers to seamlessly synchronize responsive environmental content flows with user vocal and chat logs.",
      "Optimized multi-turn prompting architecture and server routes under strict latency ceilings to achieve smooth interaction loops."
    ],
    tech: ["Next.js", "React.js", "TypeScript", "FastAPI", "Python", "WebSockets", "Firebase", "Gemini Live API", "Vercel"],
    liveUrl: "https://echobook.sujalsule.in/",
  },
  {
    id: "HACKATHON 05",
    title: "HACKATRON by IIITM Gwalior",
    sub: "Infotsav '25",
    year: "2025",
    award: "Participant & Creator",
    project: "AAROGYA AI",
    role: "Lead Full-Stack & AI Developer (Solo Creator)",
    impact: [
      "Built AAROGYA AI—a preventive health ecosystem featuring Gemini-driven medical advice and doctor consultation simulations.",
      "Engineered real-time yoga posture correction utilizing human pose keypoint estimators with interactive canvas guidelines.",
      "Constructed custom RAG analysis engines for medical documents and integrated active low-latency fall detection nodes."
    ],
    tech: ["React.js", "TypeScript", "Vite", "FastAPI", "Python", "Firebase", "Google Gemini", "TensorFlow", "OpenCV"],
    github: "https://github.com/Sujal-Sule/Team_CodeZilla_AAROGYA.AI"
  },
  {
    id: "HACKATHON 06",
    title: "Odoo Hackathon 2025",
    sub: "Gandhinagar, Gujarat — National Challenge",
    year: "2025",
    award: "Selected for Live Round (Top 200) 🚀",
    project: "SkillSwap (v1.0)",
    role: "Full-Stack Developer",
    impact: [
      "Engineered the very first, rapid prototype version of SkillSwap in a high-pressure, time-bounded 6-hour sprint.",
      "Selected among top 200 teams nationwide from thousands of registrations for the live offline finals at Odoo-Gujarat.",
      "Unable to attend physical finals in Gandhinagar due to university semester exams, but succeeded in validating the core architecture design."
    ],
    tech: ["React.js", "TypeScript", "Vite", "Express", "Node.js"],
    github: "https://github.com/Rishiraj-1/Skill-Swap-Platform"
  }
];

const getTagStyle = (tag: string) => {
  const normalized = tag.toLowerCase();
  
  if (normalized.includes("fastapi")) {
    return "bg-teal-500/10 border-teal-500/20 text-teal-400";
  }
  if (normalized.includes("python")) {
    return "bg-blue-600/10 border-blue-600/25 text-blue-400";
  }
  if (normalized.includes("gemini")) {
    return "bg-purple-500/10 border-purple-500/25 text-purple-400";
  }
  if (normalized.includes("firebase")) {
    return "bg-amber-500/10 border-amber-500/25 text-amber-400";
  }
  if (normalized.includes("websockets")) {
    return "bg-orange-500/10 border-orange-500/25 text-orange-400";
  }
  if (normalized.includes("supabase")) {
    return "bg-emerald-500/10 border-emerald-500/25 text-emerald-400";
  }
  if (normalized.includes("next.js")) {
    return "bg-zinc-800/40 border-zinc-700/30 text-zinc-300";
  }
  if (normalized.includes("react")) {
    return "bg-sky-500/10 border-sky-500/25 text-sky-400";
  }
  if (normalized.includes("typescript")) {
    return "bg-blue-500/10 border-blue-500/25 text-blue-300";
  }
  if (normalized.includes("vite")) {
    return "bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-400";
  }
  if (normalized.includes("vercel")) {
    return "bg-slate-500/10 border-slate-500/25 text-slate-300";
  }
  if (normalized.includes("expo")) {
    return "bg-indigo-500/10 border-indigo-500/25 text-indigo-400";
  }
  if (normalized.includes("web3") || normalized.includes("blockchain")) {
    return "bg-yellow-500/10 border-yellow-500/25 text-yellow-400";
  }
  if (normalized.includes("express") || normalized.includes("node")) {
    return "bg-emerald-500/10 border-emerald-500/25 text-emerald-400";
  }
  if (normalized.includes("mongodb")) {
    return "bg-green-600/10 border-green-600/25 text-green-400";
  }
  if (normalized.includes("tensorflow") || normalized.includes("opencv") || normalized.includes("mediapipe")) {
    return "bg-rose-500/10 border-rose-500/25 text-rose-400";
  }
  if (normalized.includes("mapbox") || normalized.includes("leaflet") || normalized.includes("maps")) {
    return "bg-cyan-500/10 border-cyan-500/25 text-cyan-400";
  }
  
  return "bg-white/[0.03] border-white/5 text-white/70";
};

function FooterSection() {
  const [copied, setCopied] = useState(false);
  const EMAIL = 'sujalsule31@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Projects', href: '#archives' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'GitHub', href: 'https://github.com/Sujal-Sule' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sujal-sule/' },
    { name: 'X / Twitter', href: 'https://x.com/SujalSule_31' },
    { name: 'Instagram', href: 'https://www.instagram.com/sujal_sule31' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(255,255,255,0.025) 0%, transparent 70%)' }} />

      {/* Main footer body */}
      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-16 pb-10 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-12 h-12 liquid-glass flex items-center justify-center cursor-pointer group self-start"
            >
              <span className="font-heading italic text-2xl lowercase transform -translate-y-0.5 group-hover:scale-110 transition-transform">ss</span>
            </div>
            <p className="text-sm text-white/40 font-body font-light leading-relaxed max-w-[26ch]">
              Full-Stack Developer crafting scalable web systems and modern digital experiences.
            </p>
            {/* Availability pill */}
            <div className="flex items-center gap-2.5 liquid-glass rounded-full px-4 py-2.5 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-xs font-body text-green-400 font-medium">Available for Hire</span>
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 md:col-start-6 flex flex-col gap-4">
            <span className="text-[10px] text-white/25 uppercase tracking-widest font-body">Navigation</span>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-white/45 hover:text-white transition-colors font-body font-light"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social + Email CTA column */}
          <div className="md:col-span-3 md:col-start-10 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-body">Connect</span>
              <nav className="flex flex-col gap-2.5">
                {socials.map(s => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/45 hover:text-white transition-colors font-body font-light flex items-center gap-1.5 group"
                  >
                    {s.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5 transition-all" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Email CTA card */}
            <button
              onClick={handleCopy}
              className="liquid-glass rounded-2xl p-4 flex flex-col gap-2 text-left group cursor-pointer hover:bg-white/[0.04] active:scale-[0.98] transition-all duration-200 w-full"
            >
              <span className="text-[10px] text-white/25 uppercase tracking-widest font-body">Get in touch</span>
              <span className="font-body text-sm text-white/80 group-hover:text-white transition-colors break-all leading-snug">
                {EMAIL}
              </span>
              <span className={`text-[10px] font-body transition-all duration-300 flex items-center gap-1.5 ${copied ? 'text-green-400' : 'text-white/30 group-hover:text-white/50'}`}>
                {copied ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" /> Copied to clipboard!
                  </>
                ) : (
                  <>
                    <ArrowUpRight className="w-3 h-3" /> Click to copy email
                  </>
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-body tracking-widest uppercase">© 2026 Sujal Sule. All rights reserved.</p>
          <p className="text-xs text-white/15 font-body">Built with React · Vite · Tailwind CSS · Motion</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeHackathon, setActiveHackathon] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  // Lock body scroll when mobile menu is open OR during preloader
  useEffect(() => {
    if (mobileMenuOpen || loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen, loading]);

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#stack' },
    { name: 'Projects', href: '#archives' },
    { name: 'Hackathons', href: '#hackathons' },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMessage('');

    // 1. Basic Frontend Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before sending.');
      return;
    }
    
    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Capture the submission data before resetting the form
    const submissionData = { ...formData };

    // 2. OPTIMISTIC UPDATE: Transition to success instantly for a premium, fast feel
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Revert status back to idle after 5 seconds
    setTimeout(() => {
      setStatus('idle');
    }, 5000);

    // 3. BACKGROUND SEND: Fire and forget in the background
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submissionData),
    })
      .then(async (response) => {
        if (!response.ok) {
          const contentType = response.headers.get("content-type");
          let errorData;
          if (contentType && contentType.includes("application/json")) {
            errorData = await response.json();
          }
          console.warn("[Background Contact Form] Send warning:", errorData?.error || response.statusText);
        } else {
          console.log("[Background Contact Form] Message sent successfully in background.");
        }
      })
      .catch((error) => {
        console.error("[Background Contact Form] Background network error:", error);
      });
  };

  const fadeInUp = {
    initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
    animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  };

  const projects = [
    {
      id: "PROJECT 01",
      title: "SkillSwap Platform",
      year: "2025",
      description: "A collaborative skill exchange platform focused on connecting users through learning, mentorship, and real-world collaboration.",
      live: "https://skillswap.sujalsule.in",
      github: "https://github.com/Sujal-Sule",
      image: proj1Img
    },
    {
      id: "PROJECT 02",
      title: "SafePulse",
      year: "2025",
      description: "An AI-driven crowd monitoring and emergency response system designed for smart city and public safety management.",
      live: "https://safepulse.teamcodezilla.in",
      github: "https://github.com/Sujal-Sule",
      image: proj2Img
    },
    {
      id: "PROJECT 03",
      title: "EchoBook",
      year: "2025",
      description: "A modern social/content-sharing web platform focused on interaction, engagement, and scalable user experiences.",
      live: "https://echobook.sujalsule.in",
      github: "https://github.com/Sujal-Sule",
      image: proj3Img
    },
    {
      id: "PROJECT 04",
      title: "SafeFlow",
      year: "2025",
      description: "An intelligent traffic and crowd flow management system built to improve urban mobility, safety, and real-time monitoring.",
      live: "https://safeflow.teamcodezilla.in",
      github: "https://github.com/Sujal-Sule",
      image: proj4Img
    }
  ];

  return (
    <main className="bg-black text-white selection:bg-white/20">
      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Scroll progress indicator */}
      {!loading && <ScrollProgress />}

      {/* Custom Cursor with dynamic feedback */}
      <CustomCursor />
      {/* Navbar */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 flex items-center justify-between pointer-events-none" data-no-cursor-grow>
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 liquid-glass flex items-center justify-center pointer-events-auto cursor-pointer group"
        >
          <span className="font-heading italic text-2xl lowercase transform -translate-y-0.5 group-hover:scale-110 transition-transform">ss</span>
        </div>

        {/* Desktop nav — Apple-style liquid glass hover */}
        <div
          className="hidden lg:flex liquid-glass p-1.5 pointer-events-auto rounded-full items-center"
          onMouseLeave={() => setHoveredNav(null)}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => setHoveredNav(link.name)}
              className="relative px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
            >
              {hoveredNav === link.name && (
                <motion.div
                  layoutId="navHoverPill"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.08) 100%)',
                    backdropFilter: 'blur(50px)',
                    WebkitBackdropFilter: 'blur(50px)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(255,255,255,0.1), 0 0 16px rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.25)',
                    borderTop: '1px solid rgba(255,255,255,0.35)',
                    borderLeft: '1px solid rgba(255,255,255,0.18)',
                    borderRight: '1px solid rgba(255,255,255,0.18)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                />
              )}
              <span className="relative z-[1]">{link.name}</span>
            </a>
          ))}
          <button
            onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            onMouseEnter={() => setHoveredNav('cta')}
            className="relative bg-white text-black px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 ml-1 whitespace-nowrap active:scale-95 transition-transform z-[2]"
          >
            Get In Touch <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden w-12 h-12 liquid-glass flex items-center justify-center pointer-events-auto cursor-pointer"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>

        {/* Desktop spacer */}
        <div className="w-12 h-12 invisible hidden lg:block" />
      </nav>

      {/* Mobile menu overlay */}
      <motion.div
        initial={false}
        animate={mobileMenuOpen ? { opacity: 1, pointerEvents: 'auto' as const } : { opacity: 0, pointerEvents: 'none' as const }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[60] lg:hidden"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <motion.div
          initial={false}
          animate={mobileMenuOpen ? { x: 0 } : { x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-black/60 backdrop-blur-3xl border-l border-white/5 flex flex-col"
        >
          {/* Close button */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4">
            <span className="text-[10px] uppercase tracking-widest text-white/30 font-body">Navigation</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 liquid-glass flex items-center justify-center cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col px-6 pt-4 gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                initial={false}
                animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.3, delay: mobileMenuOpen ? 0.1 + i * 0.05 : 0 }}
                className="py-4 text-2xl font-heading italic text-white/80 hover:text-white transition-colors border-b border-white/5 flex items-center justify-between group"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors" />
              </motion.a>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 pt-4 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300);
              }}
              className="bg-white text-black w-full py-4 rounded-full text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
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

      {/* Section 1: Hero */}
      <section id="portfolio" className="relative h-screen w-full overflow-hidden bg-black flex flex-col pt-24">
        <FadingVideo
          src={import.meta.env.VITE_HERO_VIDEO_URL}
          className="z-0"
          style={{ objectPosition: 'center top' }}
          maxOpacity={0.4}
          fadeBottom={22}
        />

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
          {/* Badge */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.4 }}
            className="liquid-glass rounded-full flex items-center p-1 pr-4 mb-8"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full mr-3">Sujal Sule</span>
            <span className="text-sm text-white/90 font-light">Full-Stack Developer</span>
          </motion.div>

          {/* Headline */}
          <BlurText 
            text="Crafting Scalable Web Systems & Modern Digital Experiences" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-heading italic text-white leading-[0.85] max-w-3xl text-center tracking-[-2px]"
          />

          {/* Subheading */}
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.8 }}
            className="mt-8 text-sm md:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed text-center"
          >
            Focused on building fast, scalable, and user-centric web applications with clean architecture, modern technologies, and practical problem-solving.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-6 mt-10"
          >
            <button onClick={() => { document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' }) }} className="liquid-glass-strong rounded-full px-7 py-3 text-sm font-medium text-white flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
              View My Work <ArrowUpRight className="w-5 h-5" />
            </button>
            <button onClick={() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }} className="flex items-center gap-2 text-sm font-medium hover:text-white/80 transition-opacity">
              Let’s Connect <div className="w-6 h-6 flex items-center justify-center liquid-glass rounded-full"><ArrowUpRight className="w-3 h-3" /></div>
            </button>
          </motion.div>


        </div>

        {/* Scroll Indicator Instead of Partners */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 1.4 }}
          className="relative z-10 flex flex-col items-center gap-4 pb-12 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => { document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' }) }}
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest font-body font-light text-white">SCROLL TO EXPLORE</span>
        </motion.div>
      </section>

      {/* Section 2: Expertise */}
      <section id="expertise" className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">
        <FadingVideo
          src={import.meta.env.VITE_EXPERTISE_VIDEO_URL}
          className="z-0"
          style={{ filter: "brightness(0.7) contrast(1.05)" }}
          maxOpacity={0.32}
          fadeTop={22}
          fadeBottom={22}
        />

        <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-20 pt-24 sm:pt-32 pb-16 sm:pb-20 flex flex-col min-h-screen container mx-auto">
          <div className="mb-auto">
            <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// EXPERTISE</span>
            <h2 className="font-heading italic text-white text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-[-3px]">
              Development  <br />& Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            {/* Card 1 */}
            <div className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-[280px] sm:min-h-[400px] flex flex-col group hover:bg-white/[0.03] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center text-white">
                  <Image className="w-5 h-5" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {['React.js', 'Next.js', 'Tailwind', 'Responsive UI'].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/80 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl text-white tracking-[-1px] leading-none">Frontend Systems</h3>
                <p className="mt-4 text-sm text-white/60 font-body font-light leading-relaxed max-w-[32ch]">
                  Building fast, responsive, and modern user interfaces focused on smooth user experience and clean design execution.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-[280px] sm:min-h-[400px] flex flex-col group hover:bg-white/[0.03] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center text-white">
                  <Film className="w-5 h-5" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {['Node.js', 'Express', 'FastAPI', 'MongoDB', 'REST APIs'].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/80 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl text-white tracking-[-1px] leading-none">Backend Architecture</h3>
                <p className="mt-4 text-sm text-white/60 font-body font-light leading-relaxed max-w-[32ch]">
                  Designing scalable backend systems, API architectures, database structures, and efficient server-side workflows.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-[280px] sm:min-h-[400px] flex flex-col group hover:bg-white/[0.03] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center text-white">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5 max-w-[70%]">
                  {['AI Tools', 'Hackathons', 'Automation', 'Problem Solving'].map(tag => (
                    <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/80 font-body whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex-1" />
              <div className="mt-8">
                <h3 className="font-heading italic text-3xl md:text-4xl text-white tracking-[-1px] leading-none">AI & Innovation</h3>
                <p className="mt-4 text-sm text-white/60 font-body font-light leading-relaxed max-w-[32ch]">
                  Exploring AI-powered products, rapid prototyping, and practical solutions through hackathons and experimental builds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About */}
      <section id="about" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black overflow-hidden w-full flex justify-center">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-white/[0.02] to-black" />
        <div className="relative z-10 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
            {/* Video Container (Portrait Dimensions) */}
            <div className="relative w-full md:w-5/12 aspect-[3/4] sm:aspect-[9/16] max-w-xs sm:max-w-md mx-auto md:mx-0 liquid-glass rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group flex-shrink-0">
              <div className="absolute inset-2 md:inset-4 rounded-[2rem] overflow-hidden bg-black">
                <FadingVideo
                  src={import.meta.env.VITE_ABOUT_VIDEO_URL}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  maxOpacity={0.9}
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="flex-1">
              <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// ABOUT ME</span>
              <h3 className="font-heading italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                Passionate about building<br />digital products that combine<br />performance, creativity, and impact.
              </h3>
              <p className="text-lg text-white/60 font-body font-light leading-relaxed mb-8">
                I focus on developing scalable web applications, intuitive user experiences, and practical solutions using modern technologies. My approach combines clean development practices, continuous learning, and strong problem-solving.
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {[
                  { name: 'GitHub', href: 'https://github.com/Sujal-Sule' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sujal-sule/' },
                  { name: 'X / Twitter', href: 'https://x.com/SujalSule_31' },
                  { name: 'Instagram', href: 'https://www.instagram.com/sujal_sule31' }
                ].map(social => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/40 hover:text-white transition-colors font-body">{social.name}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Section 4: Tech Stack */}
      <section id="stack" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen flex flex-col justify-center overflow-hidden">
        <FadingVideo
          src={import.meta.env.VITE_STACK_VIDEO_URL}
          className="z-0"
          maxOpacity={0.4}
          fadeTop={22}
          fadeBottom={22}
        />
        <div className="relative z-10 container mx-auto">
          <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// Technical Arsenal</span>
          <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl tracking-[-2px] mb-12 sm:mb-16">The Stack</h2>
          
          <div className="flex flex-col gap-16">
            {[
              {
                category: "Languages",
                skills: [
                  { name: 'JavaScript', desc: 'Dynamic client & server scripting', icon: Code2 },
                  { name: 'Python', desc: 'General-purpose & API dev', icon: Terminal },
                  { name: 'C / C++', desc: 'High-performance system dev', icon: Cpu },
                  { name: 'HTML & CSS', desc: 'Semantic markup & styling', icon: Layout },
                  { name: 'SQL', desc: 'Relational data querying', icon: Database },
                ]
              },
              {
                category: "Frameworks & Runtimes",
                skills: [
                  { name: 'React', desc: 'Component-driven UI architecture', icon: Atom },
                  { name: 'Next.js', desc: 'Server-rendered React apps', icon: Triangle },
                  { name: 'Node.js', desc: 'Asynchronous event-driven runtime', icon: Box },
                  { name: 'Express', desc: 'Fast, unopinionated web framework', icon: Server },
                  { name: 'FastAPI', desc: 'High-performance API development', icon: Zap },
                ]
              },
              {
                category: "Data & Cloud",
                skills: [
                  { name: 'MongoDB', desc: 'NoSQL document database', icon: Leaf },
                  { name: 'Supabase', desc: 'Open source Firebase alt', icon: HardDrive },
                  { name: 'Firebase', desc: 'Realtime database & auth', icon: Flame },
                  { name: 'Google Cloud', desc: 'Scalable cloud infrastructure', icon: Cloud },
                ]
              },
              {
                category: "Tools & Deploy",
                skills: [
                  { name: 'Git', desc: 'Version control system', icon: GitBranch },
                  { name: 'GitHub', desc: 'Collaborative code hosting', icon: Github },
                  { name: 'Vercel', desc: 'Frontend deployment & hosting', icon: Triangle },
                  { name: 'Render', desc: 'Unified cloud hosting', icon: Cloud }
                ]
              }
            ].map((section) => (
              <div key={section.category}>
                <h3 className="text-xl text-white/70 font-body mb-6 border-b border-white/10 pb-4">{section.category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {section.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="group relative h-32 liquid-glass rounded-2xl p-5 border border-white/5 overflow-hidden flex flex-col justify-end"
                      >
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
                        
                        <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-6 flex flex-col gap-2">
                          <Icon className="w-5 h-5 text-white/30 group-hover:text-white/80 transition-colors duration-500" />
                          <h4 className="text-xl font-heading italic text-white/90">{skill.name}</h4>
                        </div>
  
                        <div className="absolute bottom-5 left-5 right-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          <p className="text-xs text-white/50 font-body leading-tight font-light">{skill.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Archives */}
      <section id="archives" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen overflow-hidden">
        <FadingVideo
          src={import.meta.env.VITE_PROJECTS_VIDEO_URL}
          className="z-0"
          style={{ 
            filter: "saturate(2.0) brightness(1.2) contrast(1.15)", 
            objectPosition: "center 94%", 
            transform: "scale(1.15)"
          }}
          maxOpacity={0.52}
          fadeTop={22}
          fadeBottom={22}
        />
        <div className="relative z-10 container mx-auto">
          <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// ARCHIVES</span>
          <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl tracking-[-2px] mb-12 sm:mb-16">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="aspect-video liquid-glass rounded-3xl mb-8 overflow-hidden relative group/img cursor-pointer">
                  {project.image && (
                    <motion.img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.1, rotate: 1 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  <a 
                    href={project.live || project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <div className="w-16 h-16 liquid-glass rounded-full flex items-center justify-center backdrop-blur-xl hover:scale-110 active:scale-95 transition-transform">
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                  </a>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-body">{project.id}</span>
                      <h4 className="font-heading italic text-3xl text-white mt-1">{project.title}</h4>
                    </div>
                    <span className="text-xs font-body text-white/30 italic">{project.year}</span>
                  </div>
                  
                  <p className="text-sm text-white/50 font-body font-light leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-6 mt-2">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-1.5 border-b border-white/10 pb-1">
                        Live Demo <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-white/60 hover:text-white transition-colors flex items-center gap-1.5 border-b border-white/10 pb-1">
                      GitHub <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.5: Hackathons */}
      <section id="hackathons" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen flex flex-col justify-center overflow-hidden">
        <FadingVideo
          src={import.meta.env.VITE_HACKATHONS_VIDEO_URL}
          className="z-0"
          style={{ filter: "grayscale(100%) brightness(0.24) contrast(1.25)" }}
          maxOpacity={0.38}
          fadeTop={22}
          fadeBottom={22}
        />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// COMPETITIVE BUILD EXPERIENCE</span>
            <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl tracking-[-2px]">
              Hackathons & Prototyping
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/50 max-w-2xl font-body font-light">
              Designing, engineering, and shipping fully functional systems under intense timeline constraints. Demonstrating high-velocity learning, architectural agility, and cross-disciplinary collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left side: Interactive Tab Selectors */}
            <div className="lg:col-span-5 flex flex-col gap-4 lg:max-h-[640px]">
              <span className="text-xs text-white/30 uppercase tracking-widest font-mono hidden lg:block">Select Showcase</span>
              <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-4 lg:pb-0 pr-0 lg:pr-1 snap-x lg:snap-y scrollbar-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [ms-overflow-style:none]">
                {hackathons.map((hack, index) => {
                  const isActive = activeHackathon === index;
                  return (
                    <button
                      key={hack.id}
                      onClick={() => setActiveHackathon(index)}
                      className="text-left flex-shrink-0 lg:flex-shrink snap-start w-72 lg:w-full relative px-6 py-5 rounded-[1.25rem] border transition-all duration-300 focus:outline-none focus:ring-0 cursor-pointer text-white"
                      style={{
                        borderColor: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.02)',
                        background: isActive ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)',
                      }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeHackathonIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-l-full hidden lg:block"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] tracking-widest font-mono text-white/40 uppercase">
                          {hack.id}
                        </span>
                        <span className="text-xs font-mono text-white/30 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 opacity-60" /> {hack.year}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading italic text-white/95 group-hover:text-white transition-colors line-clamp-1 mb-2">
                        {hack.title}
                      </h3>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10">
                          <Trophy className="w-3 h-3 text-white/60" />
                        </div>
                        <span className="text-xs text-white/60 font-body font-light truncate">
                          {hack.award}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side: Detailed Feature Screen */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.div
                key={activeHackathon}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="liquid-glass border border-white/5 rounded-3xl p-5 sm:p-8 h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[640px] flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  {/* Top Segment */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono tracking-widest bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-full text-white/50 uppercase">
                          {hackathons[activeHackathon].sub}
                        </span>
                        <span className="text-[10px] font-mono tracking-widest bg-white/10 text-white/90 px-2.5 py-1 rounded-full uppercase flex items-center gap-1 border border-white/10">
                          <Sparkles className="w-2.5 h-2.5" />
                          {hackathons[activeHackathon].award}
                        </span>
                      </div>
                      <h4 className="font-heading italic text-2xl md:text-3xl text-white tracking-tight leading-none">
                        {hackathons[activeHackathon].title}
                      </h4>
                    </div>

                    <div className="flex-shrink-0 sm:text-right">
                      <span className="text-xs text-white/30 font-mono block">Project Built</span>
                      <span className="text-sm font-heading italic text-white whitespace-nowrap block mt-1">
                        {hackathons[activeHackathon].project}
                      </span>
                    </div>
                  </div>

                  {/* Role Segment */}
                  <div className="flex items-center gap-3 mb-6 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 w-fit">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Role:</span>
                    <span className="text-xs font-body font-medium text-white">{hackathons[activeHackathon].role}</span>
                  </div>

                  {/* Impact Highlights */}
                  <div className="mb-8">
                    <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Key Innovation & Architecture Impact</h5>
                    <ul className="space-y-4">
                      {hackathons[activeHackathon].impact.map((point, index) => (
                        <li key={index} className="flex gap-3 items-start text-sm text-white/70 font-body font-light leading-relaxed">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30 transform translate-y-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer and Tech */}
                <div className="border-t border-white/5 pt-6 mt-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    {/* Tech tag list */}
                    <div className="flex flex-wrap gap-2">
                      {hackathons[activeHackathon].tech.map((tag) => (
                        <span
                          key={tag}
                          className={`border text-[10px] font-mono px-2.5 py-1 rounded-full transition-colors duration-200 ${getTagStyle(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View project action buttons linking to Live URL, GitHub or scrolling to #archives */}
                    <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                      {hackathons[activeHackathon].liveUrl && (
                        <a
                          href={hackathons[activeHackathon].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="liquid-glass-strong hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer text-white"
                        >
                          View Showcase App <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {hackathons[activeHackathon].github && (
                        <a
                          href={hackathons[activeHackathon].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="liquid-glass-strong hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer text-white"
                        >
                          View GitHub Repo <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {!hackathons[activeHackathon].liveUrl && !hackathons[activeHackathon].github && (
                        <button
                          onClick={() => {
                            const archivesSec = document.getElementById('archives');
                            if (archivesSec) {
                              archivesSec.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                          className="liquid-glass-strong hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer text-white"
                        >
                          View Showcase App <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Contact */}
      <section id="contact" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen overflow-hidden flex flex-col justify-center">
        <FadingVideo
          src={import.meta.env.VITE_CONTACT_VIDEO_URL}
          className="z-0"
          style={{ filter: "hue-rotate(90deg) saturate(1.2) brightness(0.5)", transform: "scale(1.1)" }}
          maxOpacity={0.3}
          fadeTop={22}
          fadeBottom={22}
        />
        <div className="relative z-10 container mx-auto max-w-5xl">
          <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// Contact</span>
          <h2 className="font-heading italic text-white text-5xl sm:text-6xl md:text-7xl tracking-[-2px] mb-12 sm:mb-16">Start a conversation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-lg text-white/60 font-body font-light mb-12 leading-relaxed">
                Currently open for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="flex flex-col gap-6">
                <a href="mailto:sujalsule31@gmail.com" className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white/80 font-body group-hover:text-white transition-colors text-lg">sujalsule31@gmail.com</span>
                </a>
                <a href="https://www.linkedin.com/in/sujal-sule/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                  <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white/80 font-body group-hover:text-white transition-colors text-lg">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input 
                type="text" 
                placeholder="Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full liquid-glass rounded-2xl px-6 py-4 text-white placeholder-white/40 font-body focus:outline-none focus:bg-white/[0.03] transition-all bg-transparent border border-transparent focus:border-white/10"
              />
              <input 
                type="email" 
                placeholder="Email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full liquid-glass rounded-2xl px-6 py-4 text-white placeholder-white/40 font-body focus:outline-none focus:bg-white/[0.03] transition-all bg-transparent border border-transparent focus:border-white/10"
              />
              <textarea 
                placeholder="Your Message..." 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full liquid-glass rounded-2xl px-6 py-4 text-white placeholder-white/40 font-body focus:outline-none focus:bg-white/[0.03] transition-all resize-none bg-transparent border border-transparent focus:border-white/10"
              />
              
              {status === 'error' && (
                <div className="text-red-400 text-sm font-body px-2">
                  {errorMessage}
                </div>
              )}

              {status === 'success' && (
                <div className="text-green-400 text-sm font-body px-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Message sent successfully!
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors mt-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Send Message <ArrowUpRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
