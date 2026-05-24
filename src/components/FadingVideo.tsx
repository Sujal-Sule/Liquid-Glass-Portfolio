import { useEffect, useRef, useState, CSSProperties } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
  maxOpacity?: number;
  /** Percentage of the container height to fade at the top edge (0-50). Default 0 (no fade). */
  fadeTop?: number;
  /** Percentage of the container height to fade at the bottom edge (0-50). Default 0 (no fade). */
  fadeBottom?: number;
}

const FADE_MS = 1000;

export default function FadingVideo({
  src,
  className,
  style,
  maxOpacity = 1,
  fadeTop = 0,
  fadeBottom = 0,
}: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeRequestId = useRef<number | null>(null);
  
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const hasFadedIn = useRef(false);

  const fadeTo = (targetOpacity: number, duration: number) => {
    if (!videoRef.current) return;
    
    if (fadeRequestId.current !== null) {
      cancelAnimationFrame(fadeRequestId.current);
    }

    const startOpacity = parseFloat(videoRef.current.style.opacity || '0');
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      if (videoRef.current) {
        videoRef.current.style.opacity = currentOpacity.toString();
      }

      if (progress < 1) {
        fadeRequestId.current = requestAnimationFrame(animate);
      } else {
        fadeRequestId.current = null;
      }
    };

    fadeRequestId.current = requestAnimationFrame(animate);
  };

  // Intersection Observer to lazy load and pause when off-screen
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setHasLoaded(true);
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasLoaded(true);
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        rootMargin: '450px', // load ahead of scroll
        threshold: 0.01,
      }
    );

    observer.observe(container);
    return () => {
      observer.unobserve(container);
    };
  }, []);

  // Handle source changes - reset fade state
  useEffect(() => {
    hasFadedIn.current = false;
    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
    }
  }, [src]);

  // Control video play/pause and opacity fade-in
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hasLoaded) return;

    const handlePlaying = () => {
      if (!hasFadedIn.current) {
        fadeTo(maxOpacity, FADE_MS);
        hasFadedIn.current = true;
      } else {
        video.style.opacity = maxOpacity.toString();
      }
    };

    video.addEventListener('playing', handlePlaying);

    if (isInView) {
      video.play().catch(() => {
        // Safe catch for autoplay restrictions
      });
    } else {
      video.pause();
    }

    return () => {
      if (fadeRequestId.current !== null) {
        cancelAnimationFrame(fadeRequestId.current);
      }
      video.removeEventListener('playing', handlePlaying);
    };
  }, [hasLoaded, isInView, maxOpacity]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {hasLoaded && (
        <video
          ref={videoRef}
          src={src}
          style={{
            opacity: 0,
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            ...style, // Spreads video-specific styling (filter, objectPosition, scale) directly to video element
          }}
          muted
          playsInline
          loop
          preload="auto"
        />
      )}

      {/* Top edge fade: black → transparent */}
      {fadeTop > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: `${fadeTop}%`,
            background: 'linear-gradient(to bottom, black, transparent)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}

      {/* Bottom edge fade: transparent → black */}
      {fadeBottom > 0 && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: `${fadeBottom}%`,
            background: 'linear-gradient(to top, black, transparent)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      )}
    </div>
  );
}
