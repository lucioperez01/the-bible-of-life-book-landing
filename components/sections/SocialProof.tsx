import { site } from "@/lib/site";
import Reveal from "@/components/ui/reveal";

export default function SocialProof() {
  return (
    <section className="w-full py-16">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-10">
            <p className="font-primary text-text-subtle font-light text-sm tracking-widest uppercase">
              {site.socialProof.title}
            </p>
            <h2 className="font-display text-2xl lg:text-3xl text-text mt-1">
              {site.socialProof.desc}
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {site.socialProof.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className={`glass rounded-xl p-5 h-full ${idx === site.socialProof.items.length - 1 ? 'sm:col-span-2 sm:max-w-lg sm:mx-auto' : ''}`}>
                <div className="mb-2">
                  <span className="text-yellow-400 text-sm">{item.stars}</span>
                </div>
                <p className="text-text-muted text-sm italic leading-relaxed mb-3">
                  {item.text}
                </p>
                <p className="text-text-subtle text-sm font-secundary">
                  — {item.name}, {item.age}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
