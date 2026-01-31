import Image from "next/image";
import { themes } from "@/lib/theme";
import TiltCard from "@/components/ui/tiltCard";
import { site } from "@/lib/site";
import Hero from "@/components/sections/Hero";
import VideoCTA from "@/components/sections/VideoCta";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/Pricing";

const theme: string = 'dark';

export default function Home() {
  return (
    <div className={`flex min-h-screen items-center justify-center ${themes[theme].bgRadial}`}>
      <main className={`flex flex-col min-h-screen max-w-4xl  items-center py-16 px-8 gap-5 ${themes[theme].text}`}>
        
        <Hero theme={theme}/>

        <VideoCTA theme={theme}/>

        <Benefits theme={theme}/>

        <Pricing theme={theme}/>
      </main>
    </div>
  );
}
