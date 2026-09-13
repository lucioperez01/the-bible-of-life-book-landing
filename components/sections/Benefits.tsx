import { site } from "@/lib/site";
import Reveal from "@/components/ui/reveal";

export default function Benefits() {
  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <h2 className="font-display text-2xl lg:text-4xl text-text text-center mb-3">
            {site.benefits.title}
          </h2>
          <p className="text-text-muted text-sm text-center mb-10 font-secundary">
            {site.benefits.titleDesc}
          </p>
        </Reveal>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {site.benefits.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="glass rounded-xl p-5 h-full hover:bg-white/[0.08] transition-colors duration-300">
                <h3 className="font-secundary text-base text-text mb-1">
                  {item.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
