import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isVisibleRef = useRef(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configurations for clean organic dragging trace
  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect mobile / touch devices – skip cursor on touch screens for pure UX
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const checkAndAddListeners = () => {
      // Find all clickable assets/navigation points/interactive items
      const interactives = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, .liquid-glass-strong'
      );
      
      interactives.forEach((el) => {
        // First clean up to ensure we don't double bind
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
        
        // Skip hover grow for elements inside [data-no-cursor-grow]
        if (el.closest('[data-no-cursor-grow]')) return;
        
        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
      });
    };

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial binding
    checkAndAddListeners();

    // Monitor DOM for dynamically rendered links & badges without recreation overhead
    const observer = new MutationObserver(checkAndAddListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();

      const interactives = document.querySelectorAll(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Elegant Trailing Halo Ring */}
      <motion.div
        id="custom-cursor-outer"
        className="fixed top-0 left-0 w-7 h-7 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1.0,
          backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          borderWidth: isHovered ? '1px' : '1px',
          borderColor: isHovered ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.25)',
          boxShadow: isHovered 
            ? '0 0 12px rgba(255, 255, 255, 0.2), inset 0 0 4px rgba(255, 255, 255, 0.05)' 
            : '0 0 0px rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      />
      {/* Inner Glowing Core Pin */}
      <motion.div
        id="custom-cursor-inner"
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovered ? 0.5 : 1.0,
          backgroundColor: '#ffffff',
          boxShadow: isHovered 
            ? '0 0 6px rgba(255, 255, 255, 0.8)' 
            : '0 0 4px rgba(255, 255, 255, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 355, damping: 25 }}
      />
    </>
  );
}
