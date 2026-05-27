import { motion } from 'motion/react';
import { Image, Film, Lightbulb } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

const expertiseCards = [
  {
    icon: Image,
    tags: ['React.js', 'Next.js', 'Tailwind', 'Responsive UI'],
    title: 'Frontend Systems',
    desc: 'Building fast, responsive, and modern user interfaces focused on smooth user experience and clean design execution.',
  },
  {
    icon: Film,
    tags: ['Node.js', 'Express', 'FastAPI', 'MongoDB', 'REST APIs'],
    title: 'Backend Architecture',
    desc: 'Designing scalable backend systems, API architectures, database structures, and efficient server-side workflows.',
  },
  {
    icon: Lightbulb,
    tags: ['AI Tools', 'Hackathons', 'Automation', 'Problem Solving'],
    title: 'AI & Innovation',
    desc: 'Exploring AI-powered products, rapid prototyping, and practical solutions through hackathons and experimental builds.',
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" aria-label="Development Expertise — Frontend, Backend & AI" className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">
      <FadingVideo
        src={import.meta.env.VITE_EXPERTISE_VIDEO_URL}
        className="z-0"
        style={{ filter: "brightness(0.7) contrast(1.05)", objectPosition: "center center" }}
        maxOpacity={0.32}
        fadeTop={22}
        fadeBottom={22}
      />

      <div className="relative z-10 px-6 sm:px-8 md:px-16 lg:px-20 pt-20 sm:pt-32 pb-12 sm:pb-20 flex flex-col min-h-screen container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-auto"
        >
          <span className="text-sm font-body text-white/40 mb-4 sm:mb-6 block tracking-widest uppercase">// EXPERTISE</span>
          <h2 className="font-heading italic text-white text-4xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[0.85] tracking-[-3px]">
            Development  <br />&amp; Engineering
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-20">
          {expertiseCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-[160px] sm:min-h-[400px] flex flex-col group hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 liquid-glass rounded-[0.75rem] flex items-center justify-center text-white flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-wrap justify-end gap-1 sm:gap-1.5 max-w-[70%]">
                    {card.tags.map(tag => (
                      <span key={tag} className="liquid-glass rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] text-white/80 font-body whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden sm:block flex-1" />
                <div className="mt-4 sm:mt-8">
                  <h3 className="font-heading italic text-2xl sm:text-3xl md:text-4xl text-white tracking-[-1px] leading-none">{card.title}</h3>
                  <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-white/60 font-body font-light leading-relaxed max-w-[32ch]">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
