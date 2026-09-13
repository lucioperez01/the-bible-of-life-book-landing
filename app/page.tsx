import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import BookShowcase from "@/components/sections/BookShowcase";
import Benefits from "@/components/sections/Benefits";
import AboutTheAuthor from "@/components/sections/AboutTheAuthor";
import Pricing from "@/components/sections/Pricing";
import SocialProof from "@/components/sections/SocialProof";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center w-full overflow-hidden">
      <main className="flex flex-col min-h-screen max-w-5xl items-center py-5 px-4 lg:px-8 w-full">
        
        <Hero />

        <Problem />

        <BookShowcase />

        <Benefits />

        <Pricing />

        <SocialProof />

        <AboutTheAuthor />

        <FAQ />

        <FinalCTA />

        <Footer />

      </main>
    </div>
  );
}
