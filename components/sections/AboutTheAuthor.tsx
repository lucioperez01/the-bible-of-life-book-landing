export default function AboutTheAuthor() {
    return (
        <section className="max-w-sm flex flex-col items-center gap-5 border border-indigo-400/50 text-slate-200 text-[0.8rem] font-primary lg:flex-row lg:text-lg text-center  bg-blue-900 p-8  rounded-md justify-center lg:justify-start bg-size-[200%_200%] bg-clip-text lg:max-w-3xl">
            
            
            
                <img src="/rod-montana.jpg" alt="Rod Montana" className="h-80 lg:h-70 rounded-lg shadow-lg" />

                <div className="flex flex-col lg:max-h-90 ">
                    <h2 className="font-secundary text-4xl font-bold text-amber-500 mb-5 lg:text-2xl lg:mb-2 lg:text-start">Sobre el autor:</h2>
                    <p className="font-primary max-w-md text-sm lg:text-md text-justify ">Soy Rod Montana y comparto un enfoque directo y sin filtros sobre el desarrollo personal. Mi contenido está pensado para quienes se sienten estancados y saben que pueden dar más, pero necesitan un cambio real. Para mí, el carácter, el trabajo físico y el enfoque en resultados son claves.</p>

                    <p className="text-justify font-secundary text-amber-500 lg:text-md">Mi estilo puede incomodar, pero es honesto. Mi objetivo es simple: ayudarte a dejar excusas, recuperar el control y convertirte en alguien que se respeta.</p>
                </div>
            
        </section>
    )
}