import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Globe, Code2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import FadingVideo from '../components/FadingVideo';
import proj1Img from '../assets/images/regenerated_image_1779527125445.png';
import proj2Img from '../assets/images/regenerated_image_1779527128713.png';
import proj3Img from '../assets/images/regenerated_image_1779526938706.png';
import proj4Img from '../assets/images/regenerated_image_1779527148841.png';
import origynImg from '../assets/images/Origyn.jpeg';
import aarogyaImg from '../assets/images/Arrogya_ai.jpeg';

const featuredProjects = [
  { id: "PROJECT 01", slug: "skillswap", title: "SkillSwap Platform", year: "2025", description: "A collaborative skill exchange platform focused on connecting users through learning, mentorship, and real-world collaboration.", live: "https://skillswap.sujalsule.in", github: "https://github.com/Sujal-Sule", image: proj1Img, tech: ["React.js", "Node.js", "MongoDB", "WebSocket"] },
  { id: "PROJECT 02", slug: "safepulse", title: "SafePulse", year: "2025", description: "An AI-driven crowd monitoring and emergency response system designed for smart city and public safety management.", live: "https://safepulse.teamcodezilla.in", github: "https://github.com/Sujal-Sule", image: proj2Img, tech: ["React.js", "FastAPI", "TensorFlow", "Mapbox"] },
  { id: "PROJECT 03", slug: "echobook", title: "EchoBook", year: "2026", description: "A modern social/content-sharing web platform focused on interaction, engagement, and scalable user experiences.", live: "https://echobook.sujalsule.in", github: "https://github.com/Sujal-Sule", image: proj3Img, tech: ["Next.js", "Supabase", "TypeScript", "Vercel"] },
  { id: "PROJECT 04", slug: "safeflow", title: "SafeFlow", year: "2025", description: "An intelligent traffic and crowd flow management system built to improve urban mobility, safety, and real-time monitoring.", live: "https://safeflow.teamcodezilla.in", github: "https://github.com/Sujal-Sule", image: proj4Img, tech: ["React.js", "FastAPI", "OpenCV", "Leaflet"] },
];

const compactProjects = [
  { id: "PROJECT 05", slug: "origyn", title: "Origyn", year: "2026", tagline: "Blockchain-Powered Supply Chain Traceability", github: "https://github.com/Sujal-Sule/Origyn", tech: ["React.js", "FastAPI", "Web3", "Mapbox"], image: origynImg },
  { id: "PROJECT 06", slug: "aarogya-ai", title: "AAROGYA AI", year: "2025", tagline: "AI-Powered Preventive Health Ecosystem", github: "https://github.com/Sujal-Sule/Team_CodeZilla_AAROGYA.AI", tech: ["React.js", "FastAPI", "TensorFlow", "Gemini AI"], image: aarogyaImg },
];

export default function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Track active card via scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !isMobile) return;
    const handleScroll = () => {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.offsetWidth;
      // If near the end of scroll, it must be the last card
      if (maxScroll > 0 && scrollLeft >= maxScroll - 10) {
        setActiveIndex(featuredProjects.length - 1);
        return;
      }
      const cardWidth = el.offsetWidth * 0.82;
      const gap = 16;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, featuredProjects.length - 1));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  const scrollToCard = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.82;
    const gap = 16;
    el.scrollTo({ left: index * (cardWidth + gap), behavior: 'smooth' });
  };

  return (
    <section id="archives" aria-label="Featured Projects" className="relative py-16 sm:py-32 px-0 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen overflow-hidden">
      <FadingVideo src={import.meta.env.VITE_PROJECTS_VIDEO_URL} className="z-0" style={{ objectPosition: "center 94%", transform: "scale(1.15)" }} maxOpacity={0.28} fadeTop={22} fadeBottom={22} />
      <div className="relative z-10 container mx-auto">
        <div className="px-6 sm:px-0">
          <span className="text-sm font-body text-white/40 mb-4 sm:mb-6 block tracking-widest uppercase">// ARCHIVES</span>
          <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl tracking-[-2px] mb-8 sm:mb-16">Featured Projects</h2>
        </div>

        {/* ===================== MOBILE: Horizontal Snap Carousel ===================== */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-6"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 snap-center"
                style={{ width: '82%' }}
              >
                <div className="liquid-glass rounded-2xl border border-white/5 overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <Link to={`/projects/${project.slug}`} className="block">
                    <div className="aspect-[16/10] relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      {/* Floating project number */}
                      <span className="absolute top-3 left-3 text-[9px] text-white/50 uppercase tracking-widest font-mono liquid-glass rounded-full px-2.5 py-1">{project.id}</span>
                      <span className="absolute top-3 right-3 text-[10px] font-body text-white/40 italic">{project.year}</span>
                    </div>
                  </Link>

                  {/* Content */}
                  <Link to={`/projects/${project.slug}`} className="block p-4 flex-1 flex flex-col">
                    <h4 className="font-heading italic text-xl text-white mb-1.5">{project.title}</h4>
                    <p className="text-[11px] text-white/50 font-body font-light leading-relaxed mb-3 line-clamp-2">{project.description}</p>

                    {/* Tech pills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.map(t => (
                        <span key={t} className="liquid-glass rounded-full px-2 py-0.5 text-[9px] text-white/70 font-body border border-white/5">{t}</span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-3 border-t border-white/[0.06]">
                      <span className="text-[10px] uppercase tracking-widest text-white/80 flex items-center gap-1 font-medium">
                        Details <ArrowUpRight className="w-3 h-3" />
                      </span>
                      {project.live && (
                        <span
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.live, '_blank'); }}
                          className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1 cursor-pointer"
                        >
                          <Globe className="w-3 h-3" /> Live
                        </span>
                      )}
                      <span
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }}
                        className="text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-1 cursor-pointer"
                      >
                        <Github className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination dots + arrows */}
          <div className="flex items-center justify-center gap-4 mt-4 px-6">
            <button onClick={() => scrollToCard(Math.max(0, activeIndex - 1))} className="w-8 h-8 liquid-glass rounded-full flex items-center justify-center text-white/50 active:scale-90 transition-transform">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {featuredProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToCard(i)}
                  className={`rounded-full transition-all duration-300 ${i === activeIndex ? 'w-6 h-1.5 bg-white/80' : 'w-1.5 h-1.5 bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={() => scrollToCard(Math.min(featuredProjects.length - 1, activeIndex + 1))} className="w-8 h-8 liquid-glass rounded-full flex items-center justify-center text-white/50 active:scale-90 transition-transform">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ===================== DESKTOP: 2x2 Grid (unchanged) ===================== */}
        <div className="hidden md:grid grid-cols-2 gap-x-8 gap-y-8 mb-20">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-80px" }}
              className="group"
              aria-label={`Project: ${project.title}`}
            >
              <div className="liquid-glass rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col">
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="aspect-[16/10] relative overflow-hidden cursor-pointer">
                    {project.image && (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="eager"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-14 h-14 liquid-glass rounded-full flex items-center justify-center backdrop-blur-xl shadow-lg">
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={`/projects/${project.slug}`} className="block p-7 flex-1">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{project.id}</span>
                    <span className="text-xs font-body text-white/30 italic">{project.year}</span>
                  </div>
                  <h4 className="font-heading italic text-3xl text-white mb-2 group-hover:text-white/90 transition-colors">{project.title}</h4>
                  <p className="text-sm text-white/50 font-body font-light leading-relaxed mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/70 font-body border border-white/5">{t}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-widest text-white/80 flex items-center gap-1.5 font-medium">
                      View Details <ArrowUpRight className="w-3 h-3" />
                    </span>
                    {project.live && (
                      <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.live, '_blank'); }} className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                        <Globe className="w-3 h-3" /> Live Demo
                      </span>
                    )}
                    <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }} className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                      <Github className="w-3 h-3" /> GitHub
                    </span>
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ===================== Divider ===================== */}
        <div className="border-t border-white/5 mb-8 sm:mb-16 mx-6 sm:mx-0" />

        {/* ===================== More Builds — Compact Horizontal Cards ===================== */}
        <div className="px-6 sm:px-0">
          <div className="mb-4 sm:mb-6 flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 liquid-glass rounded-xl flex items-center justify-center">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 font-body">More Builds</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {compactProjects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-40px" }}
                aria-label={`Project: ${project.title}`}
                className="group"
              >
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="liquid-glass rounded-2xl border border-white/5 hover:bg-white/[0.025] hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-row h-full">
                    {/* Image — left side, square on mobile */}
                    {project.image && (
                      <div className="relative w-28 sm:w-36 md:w-44 flex-shrink-0 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />
                      </div>
                    )}

                    {/* Content — right side */}
                    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center min-h-[120px]">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-white/30 uppercase tracking-widest font-mono">{project.id}</span>
                        <span className="text-[10px] font-body text-white/25 italic">{project.year}</span>
                      </div>
                      <h4 className="font-heading italic text-lg sm:text-xl text-white mb-0.5 group-hover:text-white/90 transition-colors">{project.title}</h4>
                      <p className="text-[10px] text-white/40 font-body italic mb-2">{project.tagline}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.tech.slice(0, 4).map(t => (
                          <span key={t} className="liquid-glass rounded-full px-2 py-0.5 text-[8px] text-white/60 font-body">{t}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 mt-auto">
                        <span className="text-[9px] uppercase tracking-widest text-white/70 flex items-center gap-1 font-medium">
                          Details <ArrowUpRight className="w-2.5 h-2.5" />
                        </span>
                        <span
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }}
                          className="text-[9px] uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Github className="w-2.5 h-2.5" /> GitHub
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
