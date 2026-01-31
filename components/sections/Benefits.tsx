import { themes } from "@/lib/theme"
import { site } from "@/lib/site"

type BenefitsProps = {
    theme: string;
}

export default function Benefits({ theme }: BenefitsProps) {
    return(
        <div className="flex flex-col items-center gap-2">
                    <h3 className={`font-primary text-lg max-w-80 font-extrabold ${themes[theme].bgLinearText} to-amber-400 bg-size-[200%_200%] bg-clip-text text-transparent text-center`}
                        >{site.benefits[0].title} 
                    </h3>
        
                    <section className={`${themes[theme].bg} flex flex-col items-center max-w-80 p-8 rounded-lg ${themes[theme].borderColor}`}>
                        <div className={`absolute -inset-px rounded-2xl bg-linear-to-r ${themes[theme].bgCardGradient} blur opacity-10`}></div>
                        
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-slate-300 font-secundary -translate-y-3.75 text-sm">
                                {site.benefits[1].title}: {site.benefits[1].desc}
                            </p>
                        </div>
        
                            <div className={`${themes[theme].bg} text-slate-200 text-[0.8rem] font-primary flex flex-col gap-3`}>
                            <p>
                                {site.benefits[2].title}: {site.benefits[2].desc}
                                </p>
            
                                <p>
                                    {site.benefits[3].title}: {site.benefits[3].desc}
                                </p>
            
                                <p>
                                    {site.benefits[4].title}: {site.benefits[4].desc}
                                </p>
            
                                <p>
                                    {site.benefits[5].title}: {site.benefits[5].desc}
                                </p>
                        </div>
                    </section>
                    </div>

    )
}