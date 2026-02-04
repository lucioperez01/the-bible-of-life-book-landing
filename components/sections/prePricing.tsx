import { site } from "@/lib/site";
import { themes } from "@/lib/theme"
type PrePricingProps = {
    theme: string;
}

export default function PrePricing({theme}: PrePricingProps) {
    return (
        <div className="text-center font-secundary max-w-xs text-sm lg:text-xl lg:max-w-xl  text-slate-2 m-3 p-3 rounded-xl bg-accent-foreground/30 border border-accent-foreground/40">
            <p >{site.prePricing.p1}</p>
            <p >{site.prePricing.p2} <span className={`${themes[theme].bg} px-0.5`}> {site.prePricing.punchline}</span></p>
        </div>
    )
}