import { themes } from "@/lib/theme"
import { site } from "@/lib/site"

type BenefitsProps = {
    theme: string;
}

export default function Benefits({ theme }: BenefitsProps) {
    return(
        <div className="flex flex-col items-center">
            <h3 className={`font-primary text-xl max-w-sm font-extrabold ${themes[theme].bgLinearText} to-amber-400 bg-size-[200%_200%] bg-clip-text text-transparent text-center lg:max-w-4xl lg:text-3xl w-full`}
                >{site.benefits.title} 
            </h3>
            <section className={` flex flex-col items-center max-w-sm p-8 rounded-lg ${themes[theme].borderColor} lg:max-w-2xl`}>
                <div className={`absolute -inset-px rounded-2xl opacity-10 -z-10`}></div>
                
                <div className="flex flex-col items-center justify-center lg:max-w-4xl">
                    <p className="text-slate-400 font-secundary -translate-y-3.75 text-sm lg:text-xl">
                        {site.benefits.titleDesc}
                    </p>
                </div>

                    <div className={` text-slate-200 text-[0.8rem] font-primary flex flex-col gap-3 w-full lg:grid lg:grid-cols-2 lg:gap-2 lg:text-lg text-center`}>
                        {site.benefits.items.map((item, idx) => (
                            <p key={idx} className={`border ${themes[theme].borderColor} bg-blue-950/60 p-4 rounded-md flex items-center justify-center ${idx === site.benefits.items.length - 1 ? "lg:col-span-2 p-5" : ""}`}>
                            {item.title}: {item.desc}
                            </p>
                        ))}
                </div>
            </section>
        </div>

    )
}