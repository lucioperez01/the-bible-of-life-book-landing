import { Button } from "@/components/ui/button";
import { themes } from "@/lib/theme";
import { site } from "@/lib/site";

type VideoCTAProps = {
    theme: string;
}


export default function VideoCTA({ theme }: VideoCTAProps) {
    return (
        <section>
        <div className="flex flex-col items-center gap-8 max-w-80">
            <p className={`${themes[theme].bg} font-primary rounded-lg px-35 py-20`}  >VIDEO / IMAGEN</p>
            
            <div className="font-primary text-sm text-center">
              <p>{site.content[2].phraseOne}</p>
              <p className=" mt-2">{site.content[2].phraseTwo}</p>
              <p className=" text-amber-400">
              {site.content[2].punchline}
            </p>

            </div>
            
            <a href="#">
              <Button className={` ${themes[theme].ctaBg} font-primary ${themes[theme].text} cursor-pointer text-lg rounded-sm shadow-2xl border-transparent text-shadow-2xs py-6 backdrop-blur-3xl hover:brightness-110 hover:animate-none transition-colors duration-300}`}>
              {site.hero.ctaText}
              </Button>
            </a>
            <p className="text-center font-secundary text-sm">
              {site.content[2].comment}
            </p>
        </div>
        </section>
    )
}