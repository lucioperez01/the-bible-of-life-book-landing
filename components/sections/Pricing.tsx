import { themes } from "@/lib/theme"
import { site } from "@/lib/site"
import TiltCard from "@/components/ui/tiltCard"

type PricingProps = {
    theme: string;
}

export default function Pricing({ theme }: PricingProps) {
    return (
        <section className="w-full flex flex-col gap-5 items-center">
            <div className="text-center font-secundary max-w-80 text-sm text-slate-2 m-3  p-4 rounded-xl bg-accent-foreground/30 border border-accent-foreground/40">
                <p >Te felicito, llegaste hasta aquí, diste un gran paso.</p>
                <p >Pero ahora es el momento dónde se separan los que hablan de los que hacen.</p>
            </div>
        
        <TiltCard className={` ${themes[theme].bgCardGradient} rounded-2xl shadow-xl animate-border-flow flex flex-col items-center gap-2 font-primary`}>
            <section className={`${themes[theme].bg} flex flex-col items-center max-w-70 p-8 rounded-lg bg-transparent ${themes[theme].borderColor} border`}>
                <div className="flex flex-col w-full pb-1 border-b items-center">
                    <p className="text-xl font-extrabold">{site.pricing.secondCard.title}</p>
                    <p className="text-xs font-light">{site.pricing.secondCard.desc}</p>
                </div>
                <div className="flex flex-col gap-1 mt-3 ">{site.pricing.secondCard.items.map((item) => (
                    <div key={item.title} className="flex p-1 items-baseline justify-between border-b border-amber-400">
                        <p className="text-xs">{item.title}</p>
                        <p className="text-xs font-light ml-5">{`${item.price}${site.pricing.secondCard.currency}`}</p>
                    </div>
                ))}
                </div>

                <div>

                </div>

            </section>
                    
        </TiltCard>
        </section>
    )
}