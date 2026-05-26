import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState(0);
  // phase 0: initial black
  // phase 1: logo appears
  // phase 2: line expands + name reveals
  // phase 3: subtitle appears
  // phase 4: exit

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 900),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2600),
      setTimeout(() => onComplete(), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const nameLetters = 'SUJAL SULE'.split('');

  return (
    <AnimatePresence>
      {phase < 4 && (
        <motion.div
          key="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
        >
          {/* Subtle radial glow behind the logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={phase >= 1 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute pointer-events-none"
            style={{
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            }}
          />

          {/* Logo container — overflow-hidden here clips the shimmer correctly */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6, filter: 'blur(20px)' }}
            animate={
              phase >= 1
                ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
                : {}
            }
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Glass logo box */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 liquid-glass-strong rounded-2xl flex items-center justify-center relative overflow-hidden">
              <span className="font-heading italic text-4xl sm:text-5xl text-white lowercase select-none transform -translate-y-0.5 relative z-10">
                ss
              </span>

              {/* Diagonal glass shimmer — clipped by parent overflow-hidden */}
              <motion.div
                initial={{ x: '-120%' }}
                animate={phase >= 1 ? { x: '220%' } : {}}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  width: '55%',
                  background: 'linear-gradient(105deg, transparent 0%, rgba(255,255,255,0.06) 30%, rgba(255,255,255,0.28) 50%, rgba(255,255,255,0.06) 70%, transparent 100%)',
                }}
              />
            </div>
          </motion.div>

          {/* Expanding line divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              phase >= 2
                ? { scaleX: 1, opacity: 1 }
                : {}
            }
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-10 h-[1px] w-16 sm:w-24 origin-center"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            }}
          />

          {/* Name — letter-by-letter reveal */}
          <div className="mt-6 sm:mt-8 flex items-center gap-[2px] sm:gap-1 overflow-hidden">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={
                  phase >= 2
                    ? { y: 0, opacity: 1 }
                    : {}
                }
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-sm sm:text-base tracking-[0.35em] font-body font-light text-white/80 uppercase"
              >
                {letter === ' ' ? '\u00A0\u00A0' : letter}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.span
            initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
            animate={
              phase >= 3
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : {}
            }
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-3 sm:mt-4 text-[10px] sm:text-xs tracking-[0.25em] font-body text-white/30 uppercase"
          >
            Full-Stack Developer
          </motion.span>

          {/* Loading bar */}
          <div className="absolute bottom-12 sm:bottom-16 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-[1px] bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), rgba(255,255,255,0.6))',
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
