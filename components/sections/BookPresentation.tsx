import { themes } from "@/lib/theme"
import { Button } from "../ui/button"

type BookPresentationProps = {
    theme: string;
}

export default function BookPresentation( { theme }: BookPresentationProps) {
    return (
        <div className={`border border-indigo-400/50 text-slate-200 text-[0.8rem] font-primary flex flex-col gap-2 w-[90%] lg:w-[80%]  lg:grid lg:grid-cols-2 lg:gap-2 lg:text-lg text-center items-center bg-blue-900 p-4 lg:p-3 rounded-md justify-center lg:justify-start bg-size-[200%_200%] bg-clip-text lg:max-w-3xl`}>
            <div className="flex justify-center">
                <img src="/book_logo.png" alt="Book Cover" className="w-80 lg:w-68 rounded-lg shadow-md" />
                </div>
            <div className="max-w-sm text-center lg:text-left flex flex-col justify-center items-center p-3 lg:justify-around lg:items-start gap-2">
                <h2 className="text-2xl font-bold text-amber-400 lg:text-3xl lg:text-center ">Ebook: La Biblia de la Vida:</h2>
                <p className="text-lg mb-3 lg:text-xl lg:text-center">Meditaciones de Rod Montana</p>
                <p className="text-md lg:text-sm text-white mb-6 text-justify lg:max-w-full">Un sistema práctico y directo para construir disciplina, fuerza mental y control real sobre tu vida. Deja excusas, toma decisiones firmes y desarrolla hábitos que te vuelvan más enfocado, independiente y consistente.
                Menos teoría. Más acción.</p>
                <a href="#pricing" className="inline-block bg-transparent border border-blue-500/50 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition lg:text-sm self-center" >
                    Descubre más
                </a>
            </div>
        </div>
    )
}