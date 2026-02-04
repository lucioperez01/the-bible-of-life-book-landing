"use client";

import React, { useRef } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
  maxRotate?: number;     // grados
  perspective?: number;   // px
  scale?: number;         // zoom al hover
};

export default function TiltCard({
  children,
  className = "h-full w-full",
  maxRotate = 1.5,
  perspective = 900,
  scale = 1.02,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1

    const dx = x - 0.5; // -0.5..0.5
    const dy = y - 0.5;

    const rotateY = dx * maxRotate * 2;
    const rotateX = -dy * maxRotate * 2;

    el.style.transform = `
      perspective(${perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(${scale})
    `;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform = `
      perspective(${perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`will-change-transform transition-transform duration-250 ease-out shadow-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}
