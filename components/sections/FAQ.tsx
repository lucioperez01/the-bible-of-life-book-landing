import { site } from "@/lib/site";
import Reveal from "@/components/ui/reveal";

export default function FAQ() {
  return (
    <section className="w-full py-16">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="font-display text-2xl lg:text-3xl text-text text-center mb-8">
            {site.faq.title}
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {site.faq.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <details className="group glass rounded-xl">
                <summary className="cursor-pointer font-secundary text-text px-5 py-4 flex items-center justify-between list-none">
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-text-muted transition-transform duration-300 group-open:rotate-45 text-xl leading-none">
                    +
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-text-muted text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
