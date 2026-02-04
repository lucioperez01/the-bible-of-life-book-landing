import { Button } from "@/components/ui/button"
import { themes } from "@/lib/theme"
import Link from "next/link";

type CTALandingButtonProps = {
    theme: string;
    CTAtext: string;
    href: string
    isTargetBlank?: boolean;
}

export default function CTALandingButton({ theme, CTAtext, href, isTargetBlank }: CTALandingButtonProps) {
    let targetBlank = isTargetBlank ? "_blank" : "_self";
    return (
        <div>
            <Link href={href} target={targetBlank}>
                <Button className={` ${themes[theme].ctaBg} font-secundary ${themes[theme].text} cursor-pointer text-lg  rounded-sm shadow-2xl border-transparent text-shadow-2xs py-5 backdrop-blur-3xl hover:brightness-110 hover:animate-none transition-colors duration-300 ease-in-out lg:text-xl lg:py-6`} >
                        {CTAtext}
                </Button> 
            </Link>
        </div>
    )
}