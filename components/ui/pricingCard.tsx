import { site } from "@/lib/site";
import TiltCard from "@/components/ui/tiltCard";
import CTALandingButton from "@/components/ui/CTALandingButton";

type SiteData = {
  title: string;
  desc: string;
  items: {
    title: string;
    price?: number;
  }[];
  price: number;
  currency: string;
  cardCTA: string;
  CTALink: string;
  sideText: string;
  finalPhrase: string;
}

type PricingCardProps = {
  siteData: SiteData;
  highlighted?: boolean;
}

export default function PricingCard({ siteData, highlighted }: PricingCardProps) {
  const sideTextColor = highlighted ? 'text-accent-gold' : 'text-accent-brand/60';
  const borderColor = highlighted ? 'border-accent-gold' : 'border-accent-brand/30';

  return (
    <TiltCard className="w-full m-auto">
      <section className={` m-auto flex flex-col items-center font-primary max-w-xs lg:max-w-xs bg-canvas-elevated/50 rounded-xl shadow-xl border-2 ${borderColor} py-6 px-5`}>
        {/* Side badge */}
        <div className="absolute">
          <p className={`${sideTextColor} relative -left-30 -top-6 lg:-left-31 lg:-top-6 p-2 rounded-br-md rounded-tl-md text-xs font-bold bg-accent-brand/10`}>
            {siteData.sideText}
          </p>
        </div>

        {/* Header */}
        <div className="flex flex-col w-full pb-3 border-b border-white/10 items-center">
          <p className="text-xl font-extrabold text-text">{siteData.title}</p>
          <p className="text-xs text-text-subtle font-light">{siteData.desc}</p>
        </div>

        {/* Items list */}
        <div className="flex flex-col gap-1 mt-2 w-full">
          {siteData.items.map((item) => (
            <div key={item.title} className="flex p-1 items-baseline justify-between border-b border-accent-gold/20">
              <p className="text-sm text-text-muted">{item.title}</p>
              {(item.price !== undefined) && (
                <p className="text-sm text-text-subtle ml-5">{`${item.price}${siteData.currency}`}</p>
              )}
            </div>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex flex-col p-3 items-center">
          <p className="font-display text-3xl text-accent-gold mb-2">
            {siteData.price}{siteData.currency}
          </p>

          <CTALandingButton
            theme="dark"
            CTAtext={siteData.cardCTA}
            href={siteData.CTALink}
          />

          <p className="text-xs text-text-subtle mt-4">{siteData.finalPhrase}</p>
        </div>
      </section>
    </TiltCard>
  );
}
