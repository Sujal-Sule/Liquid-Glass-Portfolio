import { useEffect, useRef, useState, CSSProperties } from 'react';

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: CSSProperties;
  maxOpacity?: number;
  fadeTop?: number;
  fadeBottom?: number;
  /** Controls video preloading. Use 'metadata' for above-fold, 'none' for below-fold. Default: 'none' */
  preload?: 'none' | 'metadata' | 'auto';
  /** Hint browser this is high priority (above-fold hero). Default: false */
  fetchPriority?: 'high' | 'low' | 'auto';
}

const FADE_MS = 1000;

export default function FadingVideo({
  src,
  className,
  style,
  maxOpacity = 1,
  fadeTop = 0,
  fadeBottom = 0,
  preload = 'none',
  fetchPriority = 'auto',
}: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fadeRequestId = useRef<number | null>(null);
  
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

  // Intersection Observer to safely pause playback when off-screen for CPU/GPU efficiency
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: '150px', // Strict margin to ensure off-screen videos pause immediately to save GPU threads
        threshold: 0,
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
    if (!video) return;

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
  }, [isInView, maxOpacity, src]);

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
          ...style,
        }}
        autoPlay
        muted
        playsInline
        loop
        preload={preload}
        fetchPriority={fetchPriority}
      />

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
