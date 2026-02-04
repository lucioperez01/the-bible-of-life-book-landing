import { themes } from "@/lib/theme"
import { site } from "@/lib/site";
import SocialProofCard from "../ui/socialProofCard";

type SocialProofProps = {
    theme: string;
}

export default function SocialProof({theme}: SocialProofProps) {
    let siteData = site.socialProof.items
    return(
        <section className="mt-5 flex flex-col w-full gap-10">
            <div className="flex flex-col items-center justify-center ">
                <h2 className="font-primary text-slate-400 font-extralight">{site.socialProof.title}</h2>
                <p className="font-secundary">{site.socialProof.desc}</p>
            </div>

            <div className="flex flex-col items-center">
                <SocialProofCard items={siteData}/>
            </div>
        </section>
    )
}