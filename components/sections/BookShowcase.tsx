import { site } from '@/lib/site';
import Reveal from '@/components/ui/reveal';
import Book3D from '@/components/ui/book3d';
import CTALandingButton from '@/components/ui/CTALandingButton';

export default function BookShowcase() {
  return (
    <section id="book" className="relative w-full py-16 lg:py-24">
      {/* Background: extends beyond container */}
      <div className="absolute inset-0 w-[100vw] left-1/2 -translate-x-1/2 bookshowcase-bg" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left: 3D Book */}
          <Reveal animation="slide-right">
            <div className="flex justify-center">
              <Book3D size="md" />
            </div>
          </Reveal>

          {/* Right: Content */}
          <Reveal animation="slide-left">
            <div className=" lg:text-left">
              <span className="inline-block px-3 py-1 text-xs font-secundary text-accent-gold border border-accent-gold/30 rounded-full mb-4">
                {site.bookShowcase.badge}
              </span>

              <h2 className="font-display text-3xl lg:text-4xl text-text mb-2">
                {site.bookShowcase.title}
              </h2>

              <p className="text-accent-gold font-secundary text-lg mb-4">
                {site.bookShowcase.subtitle}
              </p>

              <p className="text-text-muted text-sm lg:text-base leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
                {site.bookShowcase.description}
              </p>

              <div className="flex flex-col items-center lg:items-start gap-3">
                <p className="font-display text-4xl text-accent-brand">
                  {site.bookShowcase.price}
                  <span className="text-2xl text-accent-brand/70">{site.bookShowcase.currency}</span>
                </p>

                <CTALandingButton
                  theme="dark"
                  CTAtext={site.bookShowcase.ctaText}
                  href={site.bookShowcase.ctaLink}
                  isTargetBlank
                />
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
