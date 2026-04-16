import { site } from "@/lib/site"
import { themes } from "@/lib/theme"
import TiltCard from "@/components/ui/tiltCard"
import { Button } from "@/components/ui/button"
import CTALandingButton from "@/components/ui/CTALandingButton"

type siteData = {
    title: string;
    desc: string;
    items: {
        title: string;
        price?: number;
    }[];
    price:number;
    currency: string;
    cardCTA: string;
    CTALink:string;
    sideText: string;
    finalPhrase: string;
}

type PricingCardProps = {
    theme: string;
    siteData: siteData;
    highlighted?: boolean;
}

export default function PricingCard({ theme, siteData, highlighted }: PricingCardProps) {
    let highlight = themes[theme].borderColor;
    let sideTextColor = themes[theme].bgPricingCardIndigo
    if (highlighted) {
        sideTextColor = themes[theme].bgPricingCardAmber
        highlight = themes[theme].bColorHighlight;
    }

    function finalPrice(siteData: siteData) {
        let finalPriceResult = 0;
        for (let item of siteData.items) {
            if(item.price !== undefined) {
                finalPriceResult += item.price; 
            }
        }
        return finalPriceResult;
    }

    let finalPriceResult = finalPrice(siteData).toFixed(2);

    return (
        <TiltCard className={`animate-border-flow flex flex-col items-center font-primary`}>
            <section className={` flex flex-col items-center max-w-70 bg-gray-800/20 rounded-md shadow-xl py-5 px-6 ${highlight} border-2 lg:max-w-96 lg:w-80`}>
                
                <div className="absolute"><p className={`${sideTextColor} relative -left-27.5 -top-5 p-1 rounded-br-md rounded-tl-md text-xs lg:-left-32.5 `}>{siteData.sideText}</p></div>
                
                <div className="flex flex-col w-full pb-1 border-b items-center">
                    <p className="text-xl font-extrabold">{siteData.title}</p>
                    <p className="text-xs font-light">{siteData.desc}</p>
                </div>
                
                <div className="flex flex-col gap-1 mt-1 ">{siteData.items.map((item) => (
                    <div key={item.title} className="flex p-1  items-baseline justify-between border-b border-amber-400">
                        <p className="text-sm">{item.title}</p>

                        {(item.price) && (
                            <p className="text-sm font-light ml-5">{`${item.price}${siteData.currency}`}</p>
                        )}

                        {item.price === 0 && (
                            <p className="text-sm font-light ml-5"></p>
                        )}
                    </div>
                ))}
                </div>
                <div className="flex flex-col p-2 items-center"> 

                    {finalPriceResult !== "0.00" && (<div className="relative before:content-[''] before:h-px before:top-3 before:-left-0.5 before:w-18 before:absolute before:bg-amber-600 opacity-40 text-amber-600 text-lg  ">{`${finalPriceResult}${siteData.currency}`}</div>)
                        }
                    

                    <p className={`rounded-lg text-3xl p-1 mb-2 text-amber-400`}>{`${siteData.price}${siteData.currency}`}</p>
                    
                    <CTALandingButton theme={theme} CTAtext={siteData.cardCTA} href={siteData.CTALink}/>
                    
                    <p className="text-xs mt-6">{siteData.finalPhrase}</p>
                </div>
            </section>
        </TiltCard>
    )
}