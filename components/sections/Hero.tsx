import { themes } from "@/lib/theme"
import { site } from "@/lib/site";
type HeroProps = {
    theme: string;
}

export default function Hero({theme}: HeroProps) {
    return(
        <section className="flex flex-col items-center justify-center gap-3">
            <div className={`${themes[theme].bg} p-5`}>
                <p className={`font-primary text-center text-4xl `}>LOGO</p>
            </div>
                <div className="flex flex-col font-secundary text-center text-xl items-center max-w-80">
                    <h1
                        >{site.hero.title}
                    </h1>
        
                    <div className= {`${themes[theme].bg} font-secundary text-xl p-1 text-center`}>
                        <p>
                            {site.hero.titleAccent}
                        </p>
                    </div>
                
                    <div className="flex flex-col font-secundary mt-5 gap-5 text-sm text-center">
                        <p> 
                            {site.content[0].paragraphOne} <span className={`${themes[theme].bg}`}>{site.content[0].accent}</span>  </p>
                        <p>
                            {site.content[1].paragraphTwo}
                        </p>
                    </div>
                </div>
        </section>
    )
}