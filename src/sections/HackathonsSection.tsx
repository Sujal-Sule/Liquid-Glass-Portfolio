import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Trophy, Sparkles, Calendar } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

const hackathons = [
  { id: "HACKATHON 01", title: "Glitch the Grid", sub: "GDG IIPS DAVV", year: "2026", award: "2nd Runner Up 🏆", project: "SkillSwap", role: "Full-Stack Developer (Solo Creator)", impact: ["Engineered the entire AI-powered skill exchange platform from scratch, enabling real-time collaboration with WebSockets, Gemini AI integration, and peer networking.", "Successfully built and fully programmed the entire project independently, although physically unable to attend the venue on-site.", "Designed and integrated real-time state synchronization using Firebase and custom peer-to-peer workspace matching mechanics."], tech: ["React.js", "TypeScript", "Vite", "FastAPI", "Python", "MongoDB", "Firebase", "Gemini AI", "WebSockets", "Vercel"], liveUrl: "https://skillswap.sujalsule.in/" },
  { id: "HACKATHON 02", title: "BGI Hackathon", sub: "Blockchain Supply Chain Challenge", year: "2026", award: "First Web3 & Blockchain Build", project: "Origyn", role: "Full-Stack Web3 Developer (Solo Creator)", impact: ["Engineered Origyn—a blockchain-powered supply chain traceability platform with real-time FastAPI endpoints, product tracking, and JWT auth.", "Sourced live telemetry via a background IoT Simulation task in Python, streaming critical warnings to map layers.", "Developed a dual-client system: a responsive React web dashboard with Recharts/Mapbox tracking, plus an Expo React Native mobile client."], tech: ["React.js", "TypeScript", "Vite", "FastAPI", "Python", "Expo", "WebSockets", "Web3"], github: "https://github.com/Sujal-Sule/Origyn" },
  { id: "HACKATHON 03", title: "Project Morpheus by SIT Lonavala", sub: "National Innovation Hackathon", year: "2026", award: "Finalist", project: "SafePulse", role: "Full-Stack Developer", impact: ["Engineered real-time smart crowd containment response systems for SafePulse, optimizing system throughput for smart-city public safety simulations.", "Constructed custom animated spatial indicator gauges with Motion layout transitions, presenting fully interactive dashboards to SIT Lonavala judges.", "Secured a place among top finalist teams, receiving high praise for polished technical execution and rapid prototype development."], tech: ["React.js", "TypeScript", "Vite", "Mapbox GL", "Python", "Firebase", "Supabase", "Vercel"], liveUrl: "https://safepulse.teamcodezilla.in/" },
  { id: "HACKATHON 04", title: "Gemini Live Agent Challenge", sub: "Google Cloud Global Hackathon", year: "2026", award: "Participant & Builder", project: "EchoBook", role: "AI Integration & Frontend Lead", impact: ["Conceptualized and developed EchoBook—an immersive dynamic storytelling experience leveraging Gemini multimodal agency.", "Engineered real-time state managers to seamlessly synchronize responsive environmental content flows with user vocal and chat logs.", "Optimized multi-turn prompting architecture and server routes under strict latency ceilings to achieve smooth interaction loops."], tech: ["Next.js", "React.js", "TypeScript", "FastAPI", "Python", "WebSockets", "Firebase", "Gemini Live API", "Vercel"], liveUrl: "https://echobook.sujalsule.in/" },
  { id: "HACKATHON 05", title: "HACKATRON by IIITM Gwalior", sub: "Infotsav '25", year: "2025", award: "Participant & Creator", project: "AAROGYA AI", role: "Lead Full-Stack & AI Developer (Solo Creator)", impact: ["Built AAROGYA AI—a preventive health ecosystem featuring Gemini-driven medical advice and doctor consultation simulations.", "Engineered real-time yoga posture correction utilizing human pose keypoint estimators with interactive canvas guidelines.", "Constructed custom RAG analysis engines for medical documents and integrated active low-latency fall detection nodes."], tech: ["React.js", "TypeScript", "Vite", "FastAPI", "Python", "Firebase", "Google Gemini", "TensorFlow", "OpenCV"], github: "https://github.com/Sujal-Sule/Team_CodeZilla_AAROGYA.AI" },
  { id: "HACKATHON 06", title: "Odoo Hackathon 2025", sub: "Gandhinagar, Gujarat — National Challenge", year: "2025", award: "Selected for Live Round (Top 200) 🚀", project: "SkillSwap (v1.0)", role: "Full-Stack Developer", impact: ["Engineered the very first, rapid prototype version of SkillSwap in a high-pressure, time-bounded 6-hour sprint.", "Selected among top 200 teams nationwide from thousands of registrations for the live offline finals at Odoo-Gujarat.", "Unable to attend physical finals in Gandhinagar due to university semester exams, but succeeded in validating the core architecture design."], tech: ["React.js", "TypeScript", "Vite", "Express", "Node.js"], github: "https://github.com/Rishiraj-1/Skill-Swap-Platform" },
];

const getTagStyle = (tag: string) => {
  const n = tag.toLowerCase();
  if (n.includes("fastapi")) return "bg-teal-500/10 border-teal-500/20 text-teal-400";
  if (n.includes("python")) return "bg-blue-600/10 border-blue-600/25 text-blue-400";
  if (n.includes("gemini")) return "bg-purple-500/10 border-purple-500/25 text-purple-400";
  if (n.includes("firebase")) return "bg-amber-500/10 border-amber-500/25 text-amber-400";
  if (n.includes("websockets")) return "bg-orange-500/10 border-orange-500/25 text-orange-400";
  if (n.includes("supabase")) return "bg-emerald-500/10 border-emerald-500/25 text-emerald-400";
  if (n.includes("next.js")) return "bg-zinc-800/40 border-zinc-700/30 text-zinc-300";
  if (n.includes("react")) return "bg-sky-500/10 border-sky-500/25 text-sky-400";
  if (n.includes("typescript")) return "bg-blue-500/10 border-blue-500/25 text-blue-300";
  if (n.includes("vite")) return "bg-fuchsia-500/10 border-fuchsia-500/25 text-fuchsia-400";
  if (n.includes("vercel")) return "bg-slate-500/10 border-slate-500/25 text-slate-300";
  if (n.includes("expo")) return "bg-indigo-500/10 border-indigo-500/25 text-indigo-400";
  if (n.includes("web3") || n.includes("blockchain")) return "bg-yellow-500/10 border-yellow-500/25 text-yellow-400";
  if (n.includes("express") || n.includes("node")) return "bg-emerald-500/10 border-emerald-500/25 text-emerald-400";
  if (n.includes("mongodb")) return "bg-green-600/10 border-green-600/25 text-green-400";
  if (n.includes("tensorflow") || n.includes("opencv") || n.includes("mediapipe")) return "bg-rose-500/10 border-rose-500/25 text-rose-400";
  if (n.includes("mapbox") || n.includes("leaflet") || n.includes("maps")) return "bg-cyan-500/10 border-cyan-500/25 text-cyan-400";
  return "bg-white/[0.03] border-white/5 text-white/70";
};

export default function HackathonsSection() {
  const [activeHackathon, setActiveHackathon] = useState(0);
  const hack = hackathons[activeHackathon];

  return (
    <section id="hackathons" aria-label="Hackathon Experience & Competitive Achievements" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen flex flex-col justify-center overflow-hidden">
      <FadingVideo src={import.meta.env.VITE_HACKATHONS_VIDEO_URL} className="z-0" style={{ filter: "grayscale(100%) brightness(0.24) contrast(1.25)" }} maxOpacity={0.38} fadeTop={22} fadeBottom={22} />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// COMPETITIVE BUILD EXPERIENCE</span>
          <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl tracking-[-2px]">Hackathons &amp; Prototyping</h2>
          <p className="mt-4 text-sm md:text-base text-white/50 max-w-2xl font-body font-light">Designing, engineering, and shipping fully functional systems under intense timeline constraints. Demonstrating high-velocity learning, architectural agility, and cross-disciplinary collaboration.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-4 lg:max-h-[640px]">
            <span className="text-xs text-white/30 uppercase tracking-widest font-mono hidden lg:block">Select Showcase</span>
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:overflow-x-hidden pb-4 lg:pb-0 pr-0 lg:pr-1 snap-x lg:snap-y scrollbar-none [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [ms-overflow-style:none]">
              {hackathons.map((h, index) => {
                const isActive = activeHackathon === index;
                return (
                  <button key={h.id} onClick={() => setActiveHackathon(index)} className="text-left flex-shrink-0 lg:flex-shrink snap-start w-72 lg:w-full relative px-6 py-5 rounded-[1.25rem] border transition-all duration-300 focus:outline-none focus:ring-0 cursor-pointer text-white" style={{ borderColor: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.02)', background: isActive ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.01)' }}>
                    {isActive && <motion.div layoutId="activeHackathonIndicator" className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-l-full hidden lg:block" transition={{ type: "spring", stiffness: 350, damping: 30 }} />}
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] tracking-widest font-mono text-white/40 uppercase">{h.id}</span>
                      <span className="text-xs font-mono text-white/30 flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 opacity-60" /> {h.year}</span>
                    </div>
                    <h3 className="text-lg font-heading italic text-white/95 group-hover:text-white transition-colors line-clamp-1 mb-2">{h.title}</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-5 h-5 rounded-full bg-white/5 border border-white/10"><Trophy className="w-3 h-3 text-white/60" /></div>
                      <span className="text-xs text-white/60 font-body font-light truncate">{h.award}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col">
            <motion.div key={activeHackathon} initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="liquid-glass border border-white/5 rounded-3xl p-5 sm:p-8 h-full min-h-[480px] sm:min-h-[540px] lg:min-h-[640px] flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono tracking-widest bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-full text-white/50 uppercase">{hack.sub}</span>
                      <span className="text-[10px] font-mono tracking-widest bg-white/10 text-white/90 px-2.5 py-1 rounded-full uppercase flex items-center gap-1 border border-white/10"><Sparkles className="w-2.5 h-2.5" />{hack.award}</span>
                    </div>
                    <h4 className="font-heading italic text-2xl md:text-3xl text-white tracking-tight leading-none">{hack.title}</h4>
                  </div>
                  <div className="flex-shrink-0 sm:text-right">
                    <span className="text-xs text-white/30 font-mono block">Project Built</span>
                    <span className="text-sm font-heading italic text-white whitespace-nowrap block mt-1">{hack.project}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-6 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-3 w-fit">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-white/50 uppercase tracking-widest">Role:</span>
                  <span className="text-xs font-body font-medium text-white">{hack.role}</span>
                </div>
                <div className="mb-8">
                  <h5 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">Key Innovation &amp; Architecture Impact</h5>
                  <ul className="space-y-4">
                    {hack.impact.map((point, index) => (
                      <li key={index} className="flex gap-3 items-start text-sm text-white/70 font-body font-light leading-relaxed">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/30 transform translate-y-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-white/5 pt-6 mt-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {hack.tech.map((tag) => (<span key={tag} className={`border text-[10px] font-mono px-2.5 py-1 rounded-full transition-colors duration-200 ${getTagStyle(tag)}`}>{tag}</span>))}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    {hack.liveUrl && (<a href={hack.liveUrl} target="_blank" rel="noopener noreferrer" className="liquid-glass-strong hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer text-white">View Showcase App <ArrowUpRight className="w-3.5 h-3.5" /></a>)}
                    {hack.github && (<a href={hack.github} target="_blank" rel="noopener noreferrer" className="liquid-glass-strong hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer text-white">View GitHub Repo <ArrowUpRight className="w-3.5 h-3.5" /></a>)}
                    {!hack.liveUrl && !hack.github && (<button onClick={() => document.getElementById('archives')?.scrollIntoView({ behavior: 'smooth' })} className="liquid-glass-strong hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold py-3 px-5 rounded-full flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer text-white">View Showcase App <ArrowUpRight className="w-3.5 h-3.5" /></button>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
