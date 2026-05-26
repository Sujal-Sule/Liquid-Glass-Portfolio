import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ArrowLeft,
  Github,
  Globe,
  Calendar,
  Trophy,
  Sparkles,
  Code2,
  Layers,
  Lightbulb,
  Wrench,

} from "lucide-react";
import { getProjectBySlug, projects } from "../data/projects";
import proj1Img from '../assets/images/regenerated_image_1779527125445.png';
import proj2Img from '../assets/images/regenerated_image_1779527128713.png';
import proj3Img from '../assets/images/regenerated_image_1779526938706.png';
import proj4Img from '../assets/images/regenerated_image_1779527148841.png';
import origynImg from '../assets/images/Origyn.jpeg';
import aarogyaImg from '../assets/images/Arrogya_ai.jpeg';

const projectImages: Record<string, string> = {
  skillswap: proj1Img,
  safepulse: proj2Img,
  echobook: proj3Img,
  safeflow: proj4Img,
  origyn: origynImg,
  'aarogya-ai': aarogyaImg,
};

// Color accents for tech cards
const getTechColor = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('react')) return { bg: 'rgba(56,189,248,0.08)', border: 'rgba(56,189,248,0.2)', text: 'text-sky-400' };
  if (n.includes('next')) return { bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.15)', text: 'text-white' };
  if (n.includes('typescript')) return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', text: 'text-blue-400' };
  if (n.includes('vite')) return { bg: 'rgba(192,132,252,0.08)', border: 'rgba(192,132,252,0.2)', text: 'text-fuchsia-400' };
  if (n.includes('fastapi')) return { bg: 'rgba(20,184,166,0.08)', border: 'rgba(20,184,166,0.2)', text: 'text-teal-400' };
  if (n.includes('python')) return { bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.2)', text: 'text-blue-400' };
  if (n.includes('node')) return { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', text: 'text-emerald-400' };
  if (n.includes('mongo')) return { bg: 'rgba(34,197,94,0.08)', border: 'rgba(34,197,94,0.2)', text: 'text-green-400' };
  if (n.includes('firebase')) return { bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.2)', text: 'text-amber-400' };
  if (n.includes('gemini')) return { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', text: 'text-purple-400' };
  if (n.includes('websocket')) return { bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.2)', text: 'text-orange-400' };
  if (n.includes('vercel')) return { bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)', text: 'text-slate-300' };
  if (n.includes('supabase')) return { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', text: 'text-emerald-400' };
  if (n.includes('mapbox') || n.includes('leaflet')) return { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.2)', text: 'text-cyan-400' };
  if (n.includes('tensorflow') || n.includes('opencv')) return { bg: 'rgba(251,113,133,0.08)', border: 'rgba(251,113,133,0.2)', text: 'text-rose-400' };
  if (n.includes('expo')) return { bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.2)', text: 'text-indigo-400' };
  if (n.includes('web3')) return { bg: 'rgba(250,204,21,0.08)', border: 'rgba(250,204,21,0.2)', text: 'text-yellow-400' };
  if (n.includes('recharts')) return { bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.2)', text: 'text-purple-400' };
  if (n.includes('express')) return { bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.2)', text: 'text-emerald-400' };
  return { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.08)', text: 'text-white/80' };
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <Helmet>
          <title>Project Not Found | Sujal Sule</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="font-heading italic text-5xl mb-4">404</h1>
        <p className="text-white/60 font-body mb-8">Project not found.</p>
        <Link
          to="/"
          className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const fadeInUp = {
    initial: { opacity: 0, y: 20, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  // JSON-LD for this specific project
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.seoDescription,
    url: project.live || `https://sujalsule.in/projects/${project.slug}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Sujal Sule",
      url: "https://sujalsule.in/",
    },
    ...(project.live && { installUrl: project.live }),
    ...(project.github && {
      codeRepository: project.github,
    }),
    datePublished: `${project.year}-01-01`,
    keywords: project.seoKeywords.join(", "),
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sujalsule.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://sujalsule.in/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `https://sujalsule.in/projects/${project.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen text-white selection:bg-white/20 relative">
      {/* Textured background — film grain */}
      <div className="fixed inset-0 z-0" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #080808 40%, #0c0c0c 70%, #0a0a0a 100%)' }} />
      <div className="fixed inset-0 z-0 opacity-[0.12]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%270 0 512 512%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.65%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '512px 512px' }} />
      <div className="fixed inset-0 z-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,255,255,0.025) 0%, transparent 50%), radial-gradient(ellipse 90% 50% at 50% 100%, rgba(255,255,255,0.015) 0%, transparent 50%), radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.3) 100%)' }} />
      <div className="relative z-10">
      <Helmet>
        <title>{project.seoTitle}</title>
        <meta name="description" content={project.seoDescription} />
        <meta name="keywords" content={project.seoKeywords.join(", ")} />
        <link
          rel="canonical"
          href={`https://sujalsule.in/projects/${project.slug}`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://sujalsule.in/projects/${project.slug}`}
        />
        <meta property="og:title" content={project.seoTitle} />
        <meta property="og:description" content={project.seoDescription} />
        <meta property="og:site_name" content="Sujal Sule — Developer Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={project.seoTitle} />
        <meta name="twitter:description" content={project.seoDescription} />
        <meta name="twitter:creator" content="@SujalSule_31" />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify(projectSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Fixed top nav */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-6 sm:px-8 lg:px-16 flex items-center justify-between pointer-events-none">
        <Link
          to="/"
          className="w-12 h-12 liquid-glass flex items-center justify-center pointer-events-auto cursor-pointer group"
          aria-label="Back to portfolio homepage"
        >
          <span className="font-heading italic text-2xl lowercase transform -translate-y-0.5 group-hover:scale-110 transition-transform">
            ss
          </span>
        </Link>

        <Link
          to="/"
          className="liquid-glass rounded-full px-5 py-2.5 text-sm font-medium text-white/90 flex items-center gap-2 pointer-events-auto hover:bg-white/[0.04] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Portfolio
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 sm:px-8 md:px-16 lg:px-20 overflow-hidden">

        {/* Floating bg keyword decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          {project.techStack.slice(0, 6).map((tech, i) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 1 }}
              className="absolute font-mono text-[11px] text-white/[0.04] uppercase tracking-widest whitespace-nowrap"
              style={[
                { top: '12%',  left: '5%'  },
                { top: '28%',  right: '3%' },
                { top: '55%',  left: '2%'  },
                { top: '70%',  right: '6%' },
                { top: '82%',  left: '8%'  },
                { top: '90%',  right: '10%'},
              ][i] ?? { top: `${15 + i * 12}%`, left: '4%' }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Two-column hero layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT — text content */}
            <div>


              {/* Project ID & Year */}
              <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.1 }}
                className="flex flex-wrap items-center gap-3 mb-6"
              >
                <span className="text-[10px] font-mono tracking-widest bg-white/[0.04] border border-white/5 px-3 py-1.5 rounded-full text-white/50 uppercase">
                  {project.id}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-white/40 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {project.year}
                </span>
                {project.hackathon && (
                  <span className="text-[10px] font-mono tracking-widest bg-white/10 text-white/90 px-3 py-1.5 rounded-full uppercase flex items-center gap-1 border border-white/10">
                    <Trophy className="w-3 h-3" /> {project.hackathon.award}
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.15 }}
                className="font-heading italic text-4xl sm:text-5xl md:text-6xl text-white tracking-[-2px] leading-[0.9] mb-4"
              >
                {project.title}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/60 font-body font-light max-w-xl mb-10"
              >
                {project.tagline}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.25 }}
                className="flex flex-wrap items-center gap-4"
              >
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Globe className="w-4 h-4" /> View Live Demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Source Code
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </div>

            {/* RIGHT — project visual */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block"
            >
              {projectImages[project.slug] ? (
                /* Screenshot image card */
                <div className="liquid-glass rounded-2xl overflow-hidden border border-white/8 shadow-2xl relative group">
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="ml-3 text-[10px] font-mono text-white/20 truncate">{project.live || `localhost:3000/${project.slug}`}</span>
                  </div>
                  <img
                    src={projectImages[project.slug]}
                    alt={`${project.title} screenshot`}
                    className="w-full aspect-[16/10] object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  {/* Reflection shine */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                </div>
              ) : (
                /* Tech keyword cloud card for projects without a screenshot */
                <div className="liquid-glass rounded-2xl border border-white/8 p-8 relative overflow-hidden" style={{ minHeight: '320px' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest block mb-6">// Tech Stack</span>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.07, duration: 0.4, ease: 'easeOut' }}
                        className="liquid-glass rounded-full px-4 py-2 text-xs font-body text-white/70 border border-white/[0.08]"
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                  {/* Tagline watermark */}
                  <p className="absolute bottom-6 left-8 right-8 text-[11px] font-body text-white/15 italic leading-relaxed">
                    {project.tagline}
                  </p>
                </div>
              )}
            </motion.div>

          </div>
        </div>
      </header>

      {/* Gradient beam divider */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 lg:px-20">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.08) 80%, transparent 100%)' }} />
      </div>

      {/* Problem & Solution */}
      <section
        aria-label="Problem and Solution"
        className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-20"
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Problem — slides from left */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-white/70" />
              </div>
              <h2 className="text-xs uppercase tracking-widest text-white/40 font-body">
                The Problem
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/70 font-body font-light leading-relaxed">
              {project.problem}
            </p>
          </motion.div>

          {/* Solution — slides from right */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white/70" />
              </div>
              <h2 className="text-xs uppercase tracking-widest text-white/40 font-body">
                The Solution
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/70 font-body font-light leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section
        aria-label="Key Features"
        className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white/[0.01]"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
              <Layers className="w-5 h-5 text-white/70" />
            </div>
            <h2 className="text-xs uppercase tracking-widest text-white/40 font-body">
              Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-40px' }}
                className="liquid-glass rounded-2xl p-5 border border-white/5 hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[10px] font-mono text-white/50 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                    {feature}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        aria-label="Technology Stack"
        className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-20"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white/70" />
            </div>
            <h2 className="text-xs uppercase tracking-widest text-white/40 font-body">
              Technology Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.techStack.map((tech, i) => {
              const color = getTechColor(tech.name);
              return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 30, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: '-30px' }}
                className="rounded-2xl p-5 hover:scale-[1.02] transition-all duration-300 group"
                style={{ background: color.bg, border: `1px solid ${color.border}` }}
              >
                <h3 className={`font-heading italic text-lg mb-1 ${color.text}`}>
                  {tech.name}
                </h3>
                <p className="text-xs text-white/50 font-body font-light leading-relaxed">
                  {tech.role}
                </p>
              </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        aria-label="System Architecture"
        className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-20 bg-white/[0.01]"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white/70" />
              </div>
              <h2 className="text-xs uppercase tracking-widest text-white/40 font-body">
                Architecture & Design
              </h2>
            </div>
            <p className="text-base sm:text-lg text-white/70 font-body font-light leading-relaxed max-w-3xl">
              {project.architecture}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hackathon Context (if applicable) */}
      {project.hackathon && (
        <section
          aria-label="Hackathon Context"
          className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white/70" />
                </div>
                <h2 className="text-xs uppercase tracking-widest text-white/40 font-body">
                  Built At
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-body block mb-2">
                    Hackathon
                  </span>
                  <p className="font-heading italic text-xl text-white">
                    {project.hackathon.name}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-body block mb-2">
                    Organizer
                  </span>
                  <p className="text-sm text-white/70 font-body">
                    {project.hackathon.organizer}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-body block mb-2">
                    Achievement
                  </span>
                  <p className="text-sm text-white/90 font-body font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />{" "}
                    {project.hackathon.award}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-body block mb-2">
                    Role
                  </span>
                  <p className="text-sm text-white/70 font-body">
                    {project.hackathon.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section
        aria-label="More Projects"
        className="py-16 sm:py-24 px-6 sm:px-8 md:px-16 lg:px-20 border-t border-white/5"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-widest text-white/30 font-body mb-8 text-center"
          >
            Explore More Projects
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject && (
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
              <Link
                to={`/projects/${prevProject.slug}`}
                className="liquid-glass rounded-2xl p-6 border border-white/5 hover:bg-white/[0.03] transition-colors group flex flex-col h-full"
              >
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-body mb-2">
                  ← Previous
                </span>
                <span className="font-heading italic text-xl text-white group-hover:text-white/90 transition-colors">
                  {prevProject.title}
                </span>
                <span className="text-xs text-white/40 font-body mt-1">
                  {prevProject.tagline}
                </span>
              </Link>
              </motion.div>
            )}
            {nextProject && (
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }} className={!prevProject ? "sm:col-start-2" : ""}>
              <Link
                to={`/projects/${nextProject.slug}`}
                className={`liquid-glass rounded-2xl p-6 border border-white/5 hover:bg-white/[0.03] transition-colors group flex flex-col text-right h-full`}
              >
                <span className="text-[10px] text-white/30 uppercase tracking-widest font-body mb-2">
                  Next →
                </span>
                <span className="font-heading italic text-xl text-white group-hover:text-white/90 transition-colors">
                  {nextProject.title}
                </span>
                <span className="text-xs text-white/40 font-body mt-1">
                  {nextProject.tagline}
                </span>
              </Link>
              </motion.div>
            )}
          </div>

          {/* Back to all projects */}
          <div className="flex justify-center mt-10">
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("archives")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white/80 flex items-center gap-2 hover:bg-white/[0.04] transition-colors hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" /> View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 px-6 sm:px-8 md:px-16 lg:px-20 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-white/40 font-body text-sm mb-4">
            Interested in working together?
          </p>
          <a
            href="mailto:sujalsule31@gmail.com"
            className="text-white font-heading italic text-2xl sm:text-3xl hover:text-white/80 transition-colors"
          >
            sujalsule31@gmail.com
          </a>
          <div className="flex items-center justify-center gap-6 mt-6">
            <a
              href="https://github.com/Sujal-Sule"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors font-body"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sujal-sule/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors font-body"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/SujalSule_31"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white transition-colors font-body"
            >
              Twitter / X
            </a>
          </div>
          <p className="text-[10px] text-white/15 font-body mt-8">
            © 2026 Sujal Sule. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
    </div>
  );
}
