import { site } from "@/lib/site";
import Reveal from "@/components/ui/reveal";
import Book3D from "@/components/ui/book3d";
import CTALandingButton from "@/components/ui/CTALandingButton";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full pt-20 pb-12 lg:pt-24 lg:min-h-screen">
      {/* Background Effects: Aurora + Spotlight + Grain — extends beyond container */}
      <div className="absolute inset-0 w-[100vw] left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hero-aurora" />
        <div className="hero-spotlight" />
        <div className="hero-grain" />
      </div>

      {/* Content: Split Layout */}
      <div className="relative z-10 w-full max-w-7xl px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col gap-4 lg:gap-5 text-left">
            {/* Main headline */}
            <Reveal animation="slide-up" delay={0}>
              <h1 className="font-display text-text leading-tight" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}>
                {site.hero.title}
              </h1>
            </Reveal>

            <Reveal animation="slide-up" delay={100}>
              <div className="relative">
                <p className="font-display text-xl sm:text-2xl lg:text-4xl text-accent-brand leading-tight animate-float">
                  {site.hero.titleAccent}
                </p>
                {/* Glow behind text */}
                <div className="absolute -inset-3 lg:-inset-4 bg-accent-brand/10 blur-xl rounded-full -z-10" />
              </div>
            </Reveal>

            {/* Subtitle paragraphs */}
            <Reveal animation="slide-up" delay={200}>
              <div className="flex flex-col font-primary gap-2 lg:gap-3 text-sm sm:text-base lg:text-xl text-text-muted">
                <p>
                  {site.content.paragraphOne.title}{' '}
                  <span className="text-accent-gold font-medium">
                    {site.content.paragraphOne.accent}
                  </span>
                </p>
                <p>{site.content.paragraphTwo.title}</p>
              </div>
            </Reveal>

            {/* CTA Button */}
            <Reveal animation="slide-up" delay={300}>
              <div className="mt-4 lg:mt-6">
                <CTALandingButton
                  CTAtext={site.hero.ctaText}
                  href={site.hero.CTALink}
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: 3D Book */}
          <Reveal animation="fade-in" delay={400}>
            <div className="flex justify-center lg:justify-end">
              <Book3D size="sm" className="inline mt-5 lg:hidden"/>
              <Book3D size="xl" className="hidden lg:inline"/>
              
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
