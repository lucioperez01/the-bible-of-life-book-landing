import Reveal from '@/components/ui/reveal';

export default function AboutTheAuthor() {
  return (
    <section id="author" className="w-full py-16">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <div className="glass rounded-2xl p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Author photo */}
              <div className="shrink-0">
                <img
                  src="/rod-montana.jpg"
                  alt="Rod Montana"
                  className="w-60 h-60 lg:w-40 lg:h-72 object-cover rounded-xl shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col text-center lg:text-left">
                <h2 className="font-display text-2xl lg:text-3xl text-accent-gold mb-4">
                  Sobre el autor:
                </h2>
                <p className="text-text-muted text-sm lg:text-base leading-relaxed mb-4 max-w-md">
                  Soy Rod Montana y comparto un enfoque directo y sin filtros sobre el desarrollo personal. Mi contenido está pensado para quienes se sienten estancados y saben que pueden dar más, pero necesitan un cambio real. Para mí, el carácter, el trabajo físico y el enfoque en resultados son claves.
                </p>
                <p className="font-secundary text-accent-gold text-sm lg:text-base">
                  Mi estilo puede incomodar, pero es honesto. Mi objetivo es simple: ayudarte a dejar excusas, recuperar el control y convertirte en alguien que se respeta.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
