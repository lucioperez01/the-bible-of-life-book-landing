import { site } from "@/lib/site"
import PricingCard from "../ui/pricingCard"


type PricingProps = {
    theme: string;
}

export default function Pricing({ theme }: PricingProps) {

    return (
        <section id="pricing" className="w-full flex flex-col gap-5 items-center">
        <p className="font-secundary font-bold text-xl">Elige uno:</p>
        
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:gap-5">
            <PricingCard theme={theme} siteData={site.pricing.firstCard} highlighted={true}/>
            <PricingCard theme={theme} siteData={site.pricing.secondCard}/>
        </div>
        </section>
    )
}