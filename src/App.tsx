import { useState, useEffect, useCallback } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Preloader from './components/Preloader';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './sections/Navbar';
import HeroSection from './sections/HeroSection';
import ExpertiseSection from './sections/ExpertiseSection';
import AboutSection from './sections/AboutSection';
import TechStackSection from './sections/TechStackSection';
import ProjectsSection from './sections/ProjectsSection';
import HackathonsSection from './sections/HackathonsSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    // Slight rAF delay so the DOM has fully settled before fading in
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  }, []);

  // Lock body scroll during preloader
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [loading]);

  return (
    <main className="bg-black text-white selection:bg-white/20" role="main">
      {/* SEO: Screen-reader-only h1 for proper heading hierarchy */}
      <h1 className="sr-only">Sujal Sule — MERN Stack Developer, Full-Stack Engineer & Hackathon Builder from India</h1>

      {/* Vercel Speed Insights */}
      <SpeedInsights />

      {/* Preloader */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Scroll progress indicator */}
      {!loading && <ScrollProgress />}

      {/* Main content — invisible until preloader fully exits, then fades in */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.6s ease',
          visibility: visible ? 'visible' : 'hidden',
        }}
      >
        {/* Navigation */}
        <Navbar />

        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Expertise */}
        <ExpertiseSection />

        {/* Section 3: About */}
        <AboutSection />

        {/* Section 4: Tech Stack */}
        <TechStackSection />

        {/* Section 5: Featured Projects */}
        <ProjectsSection />

        {/* Section 6: Hackathons */}
        <HackathonsSection />

        {/* Section 7: Contact */}
        <ContactSection />

        {/* Footer */}
        <FooterSection />
      </div>
    </main>
  );
}
