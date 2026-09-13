import { site } from '@/lib/site';
import Reveal from '@/components/ui/reveal';

export default function Problem() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="font-display text-3xl lg:text-5xl text-text text-center mb-10">
            {site.problem.title}
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {site.problem.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-secundary text-lg text-accent-brand mb-2">
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
