import { site } from "@/lib/site"

export default function FAQ() {
    return (
        <section className="flex flex-col items-center font-secundary gap-2 max-w-80 border-t border-white/10 pt-5 ">
            <h2>{site.faq.title}</h2>
            <div className="flex flex-col gap-5 lg:w-lg">
                {site.faq.items.map((item,idx) => (
                    <details key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-4" >
                        <summary className="cursor-pointer font-semibold text-white flex items-center justify-between"> {item.q} </summary>

                        <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out group-open:grid-rows-[1fr]">
                            <div className="overflow-hidden">
                            <p className="mt-3 text-white/70 leading-relaxed">{item.a}</p>
                            </div>
                        </div>
                    </details>
                ))}
            </div>
        </section>
    )
}