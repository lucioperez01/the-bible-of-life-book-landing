import { site } from "@/lib/site"
import CTALandingButton from "@/components/ui/CTALandingButton"

type FinalCTAProps = {
    theme: string;
}

export default function FinalCTA({theme}: FinalCTAProps) {
    return(
        <section className="font-secundary flex flex-col items-center gap-1 text-center max-w-80 p-5 overflow-x-hidden lg:max-w-xl">
            <h2 className="text-xl lg:text-2xl">{site.finalCTA.title}</h2>
            <p className="font-primary mb-3 lg:text-2xl lg:max-w-md">{site.finalCTA.desc}
            <span className="text-amber-300 font-secundary"> {site.finalCTA.punchline}</span></p>
            <CTALandingButton theme={theme} CTAtext={site.finalCTA.CTAText} href={site.finalCTA.CTALink}/>
        </section>
    )
}