import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';
import BlurText from '../components/BlurText';

const fadeInUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' }
};

export default function HeroSection() {
  return (
    <section id="portfolio" aria-label="Hero — Sujal Sule Full-Stack Developer" className="relative h-screen w-full overflow-hidden bg-black flex flex-col pt-24">
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
            Let's Connect <div className="w-6 h-6 flex items-center justify-center liquid-glass rounded-full"><ArrowUpRight className="w-3 h-3" /></div>
          </button>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
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
  );
}
