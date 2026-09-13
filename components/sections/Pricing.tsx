import { site } from "@/lib/site";
import PricingCard from "../ui/pricingCard";
import Reveal from "@/components/ui/reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full py-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Pre-pricing subtitle */}
        <Reveal>
          <div className="text-center font-secundary max-w-sm mx-auto text-sm lg:text-xl lg:max-w-xl mb-10 p-4 glass rounded-xl">
            <p className="text-text-muted">{site.prePricing.p1}</p>
            <p className="text-text-muted">
              {site.prePricing.p2}{' '}
              <span className="text-accent-brand font-bold">
                {site.prePricing.punchline}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="font-display text-xl text-text text-center mb-8">Elige uno:</p>
        </Reveal>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-6">
          <Reveal animation="slide-right" delay={200}>
            <PricingCard siteData={site.pricing.firstCard} highlighted />
          </Reveal>
          <Reveal animation="slide-left" delay={300}>
            <PricingCard siteData={site.pricing.secondCard} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
