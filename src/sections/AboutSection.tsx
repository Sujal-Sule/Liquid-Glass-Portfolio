import FadingVideo from '../components/FadingVideo';

export default function AboutSection() {
  return (
    <section id="about" aria-label="About Sujal Sule" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black overflow-hidden w-full flex justify-center">
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
  );
}
