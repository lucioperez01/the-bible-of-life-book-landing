import { themes } from "@/lib/theme"
import { site } from "@/lib/site";
import Image from "next/image";

type HeroProps = {
    theme: string;
}

export default function Hero({theme}: HeroProps) {
    return(
        <section className="flex flex-col items-center justify-center gap-2 w-full">
            {/* <div className={`${themes[theme].bg} p-2 rounded-md`}>
                {/* <p className={`font-primary text-center text-4xl `}></p> */}
            {/* </div> */} 
            
                <div className="flex flex-col font-secundary text-center text-xl items-center max-w-sm lg:max-w-xl lg:text-4xl">
                    <h1 className="lg:text-4xl lg:max-w-lg lg:text-justify font-extrabold "
                        >{site.hero.title}
                    </h1>
                    
                <div className="lg:flex lg:flex-col items-center flex flex-col justify-center gap-1">
                    
                        <div className= {`${themes[theme].bg} text-xl p-1 text-center lg:text-4xl rounded-xs lg:max-w-xl`}>
                            <p>
                                {site.hero.titleAccent}
                            </p>
                        </div>
                        <Image 
                            src="/logo-transparencia.png"
                            alt="Rod Academy logo"
                            width={500}
                            height={500}
                            className="w-32 h-32 mt-3 lg:w-48 lg:h-48"
                        ></Image>
                    
                        <div className="flex flex-col font-secundary mt-5 gap-2 text-lg text-center lg:text-xl lg:max-w-lg font-primary lg:text-justify">
                            <p> 
                                {site.content.paragraphOne.title} <span className={`${themes[theme].bg} text-center max-w-lg px-1 `}>{site.content.paragraphOne.accent}</span>  </p>

                            <p>
                                {site.content.paragraphTwo.title}
                            </p>
                        </div>
                </div>
                </div>
        </section>
    )
}