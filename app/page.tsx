import { themes } from "@/lib/theme";
import Hero from "@/components/sections/Hero";
import VideoCTA from "@/components/sections/VideoCta";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import PrePricing from "@/components/sections/prePricing";


const theme: string = 'dark';

export default function Home() {
  return (
    <div className={`flex min-h-screen items-center justify-center ${themes[theme].bgRadial} w-full`}>
      <main className={`flex flex-col min-h-screen max-w-4xl items-center py-5 px-8 gap-y-20 ${themes[theme].text} `}>
        
        <Hero theme={theme}/>

        <VideoCTA theme={theme}/>

        <Benefits theme={theme}/>

        <PrePricing theme={theme}/>

        <Pricing theme={theme}/>

        <SocialProof theme={theme}/>

        <FinalCTA theme={theme}/>

        <FAQ />

        <Footer />

      </main>
    </div>
  );
}
