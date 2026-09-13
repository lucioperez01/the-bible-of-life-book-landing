import { site } from "@/lib/site";
import CTALandingButton from "@/components/ui/CTALandingButton";
import Reveal from "@/components/ui/reveal";

export default function FinalCTA() {
  return (
    <section className="w-full py-16">
      <div className="max-w-xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="font-display text-2xl lg:text-3xl text-text mb-3">
            {site.finalCTA.title}
          </h2>
          <p className="font-primary text-text-muted mb-2 leading-relaxed">
            {site.finalCTA.desc}
          </p>
          <p className="font-secundary text-accent-gold text-lg mb-6">
            {site.finalCTA.punchline}
          </p>
          <div className="flex justify-center">
            <CTALandingButton
              theme="dark"
              CTAtext={site.finalCTA.CTAText}
              href={site.finalCTA.CTALink}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
