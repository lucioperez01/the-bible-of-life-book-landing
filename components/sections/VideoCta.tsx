import { Button } from "@/components/ui/button";
import { themes } from "@/lib/theme";
import { site } from "@/lib/site";
import CTALandingButton from "@/components/ui/CTALandingButton";

type VideoCTAProps = {
    theme: string;
}


export default function VideoCTA({ theme }: VideoCTAProps) {
    return (
        <section className="flex flex-col items-center justify-center gap-3 lg:gap-1 ">
            {/* <h2 className="font-secundary text-xl lg:text-2xl">{site.videoCTA.title}</h2> */}
            <div className="flex flex-col items-center justify-center gap-6 max-w-90 lg:max-w-2xl lg:gap-0">
                
                
                <div className="font-primary text-sm text-center lg:text-left lg:mt-0 lg:mb-0 items-center justify-center flex flex-col lg:flex-row-reverse  lg:gap-0">

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-4 lg:p-9 p-5 bg-blue-900/10 rounded-lg border border-indigo-400/10 justify-center items-center">

                    {/* Imagen (columna izquierda ocupando todo) */}
                    <img 
                        src="/la-biblia-de-la-vida-cover.png"
                        alt="La Biblia de la Vida: Meditaciones de Rod Montana"
                        className="lg:col-start-1 lg:row-span-3 h-90 w-full lg:h-95 object-cover rounded-lg shadow-lg"
                    />

                    {/* Contenido derecha */}
                    <p className="row-span-2 lg:col-start-2 lg:row-start-1 lg:row-end-3 self-center  text-lg lg:text-3xl lg:text-center">
                        {site.videoCTA.phraseTwo} <span className="text-amber-400 font-bold">{site.videoCTA.punchline}</span>
                    </p>

                    {/* <p className="lg:col-start-2 text-amber-400 text-lg lg:text-2xl font-bold lg:text-center">
                        {site.videoCTA.punchline}
                    </p> */}

                    <div className="lg:col-start-2  flex flex-col items-center justify-center mt-3 gap-1">
                        <CTALandingButton 
                        theme={theme} 
                        CTAtext={site.hero.ctaText} 
                        href={site.hero.CTALink} 
                        />
                        <p className="text-center font-secundary text-xs text-slate-300 mt-1">
                        {site.videoCTA.comment}
                        </p>
                    </div>

                    </div>
                </div>

                

                
            </div>
            
        </section>
    )
}