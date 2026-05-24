import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[90]"
    >
      <div
        className="w-full h-full"
        style={{
          background:
            'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.5), rgba(255,255,255,0.8))',
        }}
      />
    </motion.div>
  );
}
