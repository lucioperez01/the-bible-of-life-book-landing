'use client'
import { Instagram , Github } from "lucide-react"

export default function Footer() {
    return(
        <footer className="w-full flex flex-col items-center py-5 border-t border-white/20 mt-10 gap-2">
            <p className="text-sm text-gray-400">© 2026 Rod Montana. Todos los derechos reservados.</p>

            <div className="flex flex-col items-center gap-2">
                <p className="text-xs text-gray-600">Web desarrollada por Lutec.dev | Pérez Lucio Gabriel. Contacto:</p>

                <div className="flex items-center justify-center text-center gap-2">
                    <Instagram className=" text-gray-700 hover:text-gray-400 cursor-pointer " size={20} onClick={() => window.open("https://www.instagram.com/lutec.dev/","_blank")}/>
                    <Github className=" text-gray-700 hover:text-gray-400 cursor-pointer " size={20} onClick={() => window.open("https://github.com/lucioperez01")}/>
                </div>
            </div>
        </footer>
    )
}