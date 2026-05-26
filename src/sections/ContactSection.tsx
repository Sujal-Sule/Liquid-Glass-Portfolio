import { useState, FormEvent } from 'react';
import { ArrowUpRight, Loader2, CheckCircle2 } from 'lucide-react';
import FadingVideo from '../components/FadingVideo';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setErrorMessage('');
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill out all fields before sending.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    const submissionData = { ...formData };
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submissionData),
    })
      .then(async (response) => {
        if (!response.ok) {
          const contentType = response.headers.get("content-type");
          let errorData;
          if (contentType && contentType.includes("application/json")) errorData = await response.json();
          console.warn("[Background Contact Form] Send warning:", errorData?.error || response.statusText);
        } else {
          console.log("[Background Contact Form] Message sent successfully in background.");
        }
      })
      .catch((error) => console.error("[Background Contact Form] Background network error:", error));
  };

  return (
    <section id="contact" aria-label="Contact Sujal Sule — Get In Touch" className="relative py-20 sm:py-32 px-6 sm:px-8 md:px-16 lg:px-20 bg-black min-h-screen overflow-hidden flex flex-col justify-center">
      <FadingVideo src={import.meta.env.VITE_CONTACT_VIDEO_URL} className="z-0" style={{ filter: "hue-rotate(90deg) saturate(1.2) brightness(0.5)", transform: "scale(1.1)" }} maxOpacity={0.3} fadeTop={22} fadeBottom={22} />
      <div className="relative z-10 container mx-auto max-w-5xl">
        <span className="text-sm font-body text-white/40 mb-6 block tracking-widest uppercase">// Contact</span>
        <h2 className="font-heading italic text-white text-5xl sm:text-6xl md:text-7xl tracking-[-2px] mb-12 sm:mb-16">Start a conversation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-lg text-white/60 font-body font-light mb-12 leading-relaxed">Currently open for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!</p>
            <div className="flex flex-col gap-6">
              <a href="mailto:sujalsule31@gmail.com" className="flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center transition-transform group-hover:scale-110"><ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" /></div>
                <span className="text-white/80 font-body group-hover:text-white transition-colors text-lg">sujalsule31@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/sujal-sule/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group w-fit">
                <div className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center transition-transform group-hover:scale-110"><ArrowUpRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" /></div>
                <span className="text-white/80 font-body group-hover:text-white transition-colors text-lg">LinkedIn Profile</span>
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input type="text" id="contact-name" aria-label="Your Name" placeholder="Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full liquid-glass rounded-2xl px-6 py-4 text-white placeholder-white/40 font-body focus:outline-none focus:bg-white/[0.03] transition-all bg-transparent border border-transparent focus:border-white/10" />
            <input type="email" id="contact-email" aria-label="Your Email Address" placeholder="Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full liquid-glass rounded-2xl px-6 py-4 text-white placeholder-white/40 font-body focus:outline-none focus:bg-white/[0.03] transition-all bg-transparent border border-transparent focus:border-white/10" />
            <textarea id="contact-message" aria-label="Your Message" placeholder="Your Message..." rows={5} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full liquid-glass rounded-2xl px-6 py-4 text-white placeholder-white/40 font-body focus:outline-none focus:bg-white/[0.03] transition-all resize-none bg-transparent border border-transparent focus:border-white/10" />
            {status === 'error' && <div className="text-red-400 text-sm font-body px-2">{errorMessage}</div>}
            {status === 'success' && <div className="text-green-400 text-sm font-body px-2 flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Message sent successfully!</div>}
            <button type="submit" disabled={status === 'loading'} className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-medium text-white flex items-center justify-center gap-2 hover:bg-white/10 transition-colors mt-2 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
              {status === 'loading' ? (<>Sending... <Loader2 className="w-4 h-4 animate-spin" /></>) : (<>Send Message <ArrowUpRight className="w-4 h-4" /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
