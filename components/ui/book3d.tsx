import TiltCard from '@/components/ui/tiltCard';
import Image from 'next/image';

type Book3DProps = {
  coverSrc?: string;
  alt?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
};

const sizes = {
  sm: { width: 180, height: 270, thickness: 40 },
  md: { width: 240, height: 360, thickness: 50 },
  lg: { width: 300, height: 450, thickness: 60 },
  xl: { width: 360, height: 540, thickness: 70 },
};

export default function Book3D({
  coverSrc = '/la-biblia-de-la-vida-cover.jpg',
  alt = 'La Biblia de la Vida - Rod Montana',
  className,
  size = 'lg',
}: Book3DProps) {
  const { width, height, thickness } = sizes[size];
  const pageInset = 3;

  return (
    <div className={`relative ${className}`}>
      {/* Ambient glow behind the book */}
      <div
        className="absolute animate-book-glow rounded-full blur-xl -z-10"
        style={{
          width: width * 1.6,
          height: height * 1.4,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, oklch(0.65 0.22 25 / 0.3) 0%, oklch(0.75 0.18 85 / 0.1) 40%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Floating shadow */}
      <div
        className="absolute animate-shadow-breathe rounded-full -z-10"
        style={{
          width: width * 0.8,
          height: 24,
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(ellipse, oklch(0 0 0 / 0.6) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <TiltCard className="animate-book-float" maxRotate={8} perspective={1200} scale={1.05}>
        {/* Book container with perspective */}
        <div
          style={{
            perspective: '700px',
            perspectiveOrigin: '40% 50%',
          }}
        >
          {/* Book with base rotation */}
          <div
            style={{
              width,
              height,
              position: 'relative',
              transformStyle: 'preserve-3d',
              transform: 'rotateY(-28deg)',
              transition: 'transform 0.5s ease',
            }}
          >
            {/* === FRONT COVER (first child, no transform) === */}
            <div
              style={{
                width,
                height,
                position: 'relative',
              }}
            >
              <div className="relative w-full h-full rounded-r-md overflow-hidden">
                <Image
                  src={coverSrc}
                  alt={alt}
                  width={width}
                  height={height}
                  className="rounded-r-md object-cover w-full h-full"
                  priority
                />
                {/* Shimmer overlay */}
                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ mixBlendMode: 'overlay' }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 animate-shimmer"
                    style={{
                      width: '60%',
                      background: 'linear-gradient(105deg, transparent 30%, oklch(1 0 0 / 0.2) 45%, oklch(1 0 0 / 0.3) 50%, oklch(1 0 0 / 0.2) 55%, transparent 70%)',
                    }}
                  />
                </div>
                {/* Inner edge shadow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-r-md"
                  style={{
                    boxShadow: 'inset 3px 0 12px oklch(0 0 0 / 0.25), inset -1px 0 4px oklch(0 0 0 / 0.1)',
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* === PAGES (::before equivalent) === */}
            <div
              style={{
                position: 'absolute',
                top: pageInset,
                left: 0,
                width: thickness,
                height: height - pageInset * 2,
                transform: `translateX(${width - thickness / 2 - pageInset}px) rotateY(90deg) translateX(${thickness / 2}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background: `repeating-linear-gradient(
                    0deg,
                    oklch(0.96 0.003 85) 0px,
                    oklch(0.96 0.003 85) 1.5px,
                    oklch(0.9 0.003 85) 1.5px,
                    oklch(0.9 0.003 85) 2px
                  )`,
                  boxShadow: 'inset -2px 0 8px oklch(0 0 0 / 0.08), inset 2px 0 4px oklch(0 0 0 / 0.04)',
                }}
              />
            </div>

            {/* === BACK COVER (::after equivalent) === */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width,
                height,
                transform: `translateZ(${-thickness}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="w-full h-full rounded-l-md"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.15 0.02 280) 0%, oklch(0.1 0.015 280) 100%)',
                  boxShadow: 'inset 0 0 30px oklch(0 0 0 / 0.3)',
                }}
              />
            </div>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}
