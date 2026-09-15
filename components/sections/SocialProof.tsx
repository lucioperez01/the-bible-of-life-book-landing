import Image from "next/image";
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

        {site.socialProof.whatsapp?.length ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {site.socialProof.whatsapp.map((item, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="text-text-subtle text-xs font-primary tracking-wide uppercase">
                      Conversación real de WhatsApp
                    </span>
                  </div>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1080}
                    height={540}
                    className="rounded-xl w-full h-auto object-contain"
                  />
                  <p className="text-text-muted text-sm mt-3 leading-relaxed">
                    {item.transcription}
                  </p>
                  {item.author && (
                    <p className="text-text-subtle text-xs mt-1">— {item.author}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
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
