'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  once?: boolean; // only animate once
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right';
};

export default function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  animation = 'slide-up',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  const animationClasses: Record<string, string> = {
    'fade-in': 'animate-in fade-in',
    'slide-up': 'animate-in fade-in slide-in-from-bottom-8',
    'slide-left': 'animate-in fade-in slide-in-from-left-8',
    'slide-right': 'animate-in fade-in slide-in-from-right-8',
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible
          ? cn(animationClasses[animation], 'duration-700 fill-mode-both')
          : 'opacity-0',
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
