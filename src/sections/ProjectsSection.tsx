import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Globe, Code2 } from 'lucide-react';
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
  { id: "PROJECT 05", slug: "origyn", title: "Origyn", year: "2026", tagline: "Blockchain-Powered Supply Chain Traceability", description: "A blockchain-powered supply chain traceability platform with real-time tracking, IoT telemetry, and dual-client architecture.", github: "https://github.com/Sujal-Sule/Origyn", tech: ["React.js", "FastAPI", "Expo", "Web3", "Mapbox"], image: origynImg },
  { id: "PROJECT 06", slug: "aarogya-ai", title: "AAROGYA AI", year: "2025", tagline: "AI-Powered Preventive Health Ecosystem", description: "A preventive health ecosystem featuring Gemini-driven medical advice, real-time yoga posture correction, RAG analysis, and fall detection.", github: "https://github.com/Sujal-Sule/Team_CodeZilla_AAROGYA.AI", tech: ["React.js", "FastAPI", "TensorFlow", "Gemini AI", "OpenCV"], image: aarogyaImg },
];

export default function ProjectsSection() {
  return (
    <section id="archives" aria-label="Featured Projects" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen overflow-hidden">
      <FadingVideo src={import.meta.env.VITE_PROJECTS_VIDEO_URL} className="z-0" style={{ objectPosition: "center 94%", transform: "scale(1.15)" }} maxOpacity={0.28} fadeTop={22} fadeBottom={22} />
      <div className="relative z-10 container mx-auto">
        <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// ARCHIVES</span>
        <h2 className="font-heading italic text-white text-4xl sm:text-5xl md:text-6xl tracking-[-2px] mb-12 sm:mb-16">Featured Projects</h2>

        {/* Primary 4 projects with images — 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 mb-20">
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
              {/* Unified glass card */}
              <div className="liquid-glass rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col">

                {/* Image section with arrow hover overlay */}
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
                    {/* Arrow hover button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-14 h-14 liquid-glass rounded-full flex items-center justify-center backdrop-blur-xl shadow-lg">
                        <ArrowUpRight className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Glass info panel */}
                <Link to={`/projects/${project.slug}`} className="block p-6 sm:p-7 flex-1">
                  {/* ID & Year row */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{project.id}</span>
                    <span className="text-xs font-body text-white/30 italic">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h4 className="font-heading italic text-2xl sm:text-3xl text-white mb-2 group-hover:text-white/90 transition-colors">{project.title}</h4>

                  {/* Description */}
                  <p className="text-sm text-white/50 font-body font-light leading-relaxed mb-5">{project.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/70 font-body border border-white/5">{t}</span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-5 pt-4 border-t border-white/[0.06]">
                    <span className="text-[10px] uppercase tracking-widest text-white/80 flex items-center gap-1.5 font-medium">
                      View Details <ArrowUpRight className="w-3 h-3" />
                    </span>
                    {project.live && (
                      <span
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.live, '_blank'); }}
                        className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Globe className="w-3 h-3" /> Live Demo
                      </span>
                    )}
                    <span
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }}
                      className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Github className="w-3 h-3" /> GitHub
                    </span>
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-16" />

        {/* Additional projects — compact card style with stagger reveal */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
            <Code2 className="w-5 h-5 text-white/60" />
          </div>
          <h3 className="text-xs uppercase tracking-widest text-white/40 font-body">More Builds</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {compactProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, x: i === 0 ? -30 : 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              aria-label={`Project: ${project.title}`}
              className="group"
            >
              <div className="liquid-glass rounded-2xl border border-white/5 hover:bg-white/[0.025] transition-all duration-500 hover:border-white/10 h-full overflow-hidden flex flex-col">

                {/* Image with GitHub hover overlay */}
                {project.image && (
                  <div className="aspect-[16/9] relative overflow-hidden cursor-pointer" onClick={() => window.open(project.github, '_blank')}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                    {/* GitHub hover button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <div className="w-14 h-14 liquid-glass rounded-full flex items-center justify-center backdrop-blur-xl shadow-lg">
                        <Github className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Card content */}
                <Link to={`/projects/${project.slug}`} className="block p-6 sm:p-8 flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">{project.id}</span>
                    <span className="text-xs font-body text-white/30 italic">{project.year}</span>
                  </div>

                  <h4 className="font-heading italic text-2xl sm:text-3xl text-white mb-1 group-hover:text-white/90 transition-colors">{project.title}</h4>
                  <p className="text-xs text-white/50 font-body mb-4 italic">{project.tagline}</p>
                  <p className="text-sm text-white/50 font-body font-light leading-relaxed mb-6">{project.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="liquid-glass rounded-full px-3 py-1 text-[10px] text-white/70 font-body">{t}</span>
                    ))}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center gap-5">
                    <span className="text-[10px] uppercase tracking-widest text-white/80 flex items-center gap-1.5 font-medium">
                      View Details <ArrowUpRight className="w-3 h-3" />
                    </span>
                    {project.github && (
                      <span onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.open(project.github, '_blank'); }} className="text-[10px] uppercase tracking-widest text-white/50 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer">
                        <Github className="w-3 h-3" /> GitHub
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
