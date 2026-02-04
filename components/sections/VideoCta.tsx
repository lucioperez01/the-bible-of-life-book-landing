import { Button } from "@/components/ui/button";
import { themes } from "@/lib/theme";
import { site } from "@/lib/site";
import CTALandingButton from "@/components/ui/CTALandingButton";

type VideoCTAProps = {
    theme: string;
}


export default function VideoCTA({ theme }: VideoCTAProps) {
    return (
        <section className="flex flex-col items-center justify-center gap-3 lg:gap-0 ">
            <h2 className="font-secundary text-xl lg:text-2xl">{site.videoCTA.title}</h2>
            <div className="flex flex-col items-center justify-center gap-6 max-w-80 lg:max-w-2xl lg:gap-0">
                <p className={`${themes[theme].bg} font-primary rounded-lg px-35 py-20 lg:px-40 lg:py-25 lg:row-span-2 `}>VIDEO / IMAGEN</p>
                
                
                <div className="font-primary text-sm text-center lg:text-left lg:mt-0 lg:mb-0 lg:items-center-safe lg:justify-center lg:flex lg:flex-col lg:gap-2">
                    {/* <p className="lg:text-2xl lg:text-center lg:max-w-120 ">{site.content[2].phraseOne}</p> */}
                    <p className="text-lg lg:text-2xl lg:mt-0">{site.videoCTA.phraseTwo}</p>
                    <p className=" text-amber-400 text-lg lg:text-center lg:text-2xl font-bold">
                        {site.videoCTA.punchline}
                    </p>
                </div>

                <div className="flex flex-row items-center justify-center">
                    <CTALandingButton theme={theme} CTAtext={site.hero.ctaText} href={site.hero.CTALink} />
                </div>

                
            </div>
            <p className="text-center font-secundary text-xs text-slate-300 ">
                    {site.videoCTA.comment}
                </p>
        </section>
    )
}