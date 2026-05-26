import { Image, Film, Lightbulb } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

export default function ExpertiseSection() {
  return (
    <section id="expertise" aria-label="Development Expertise — Frontend, Backend & AI" className="relative min-h-screen w-full bg-black flex flex-col overflow-hidden">
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
            Development  <br />&amp; Engineering
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
  );
}
