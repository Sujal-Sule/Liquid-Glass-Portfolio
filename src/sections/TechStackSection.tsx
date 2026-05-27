import { motion } from 'motion/react';
import { Code2, Terminal, Cpu, Layout, Database, Atom, Triangle, Box, Server, Zap, Leaf, HardDrive, Flame, Cloud, GitBranch, Github, Globe } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

export default function TechStackSection() {
  return (
    <section id="stack" aria-label="Technical Stack — Languages, Frameworks, Databases & Tools" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen flex flex-col justify-center overflow-hidden">
      <FadingVideo
        src={import.meta.env.VITE_STACK_VIDEO_URL}
        className="z-0"
        maxOpacity={0.36}
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
                { name: 'MySQL', desc: 'SQL document database', icon: Database },
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
                { name: 'Render', desc: 'Unified cloud hosting', icon: Cloud },
                { name: 'AWS', desc: 'S3 object storage & CloudFront CDN for scalable video delivery', icon: Globe }
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
  );
}
