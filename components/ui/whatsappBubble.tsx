"use client"

import { useEffect, useState } from "react"

export default function WhatsAppBubble() {
const [open, setOpen] = useState(false)

useEffect(() => {
    // abrir a los 7s
    const openTimer = setTimeout(() => {
    setOpen(true)
    }, 2000)

    // cerrar 5s después de abrir
    const closeTimer = setTimeout(() => {
    setOpen(false)
    }, 15000)

    return () => {
    clearTimeout(openTimer)
    clearTimeout(closeTimer)
    }
}, [])

const phone = "573001660020" // tu número con código país (Argentina +54)
const message = "Hola, tengo dudas sobre el libro de Legado Rod Montana. ¿Podrían ayudarme?" // mensaje predefinido para el usuario

const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center">
        
        {/* Mensaje */}
        <div
        className={`mr-3 mb-2 transition-all duration-300 ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"}`}
        >
        <div className="relative bg-linear-to-br from-green-500 to-green-600/ px-5 py-4 lg:py-4 pr-15 translate-x-15  translate-y-1.5 rounded-xl shadow-lg">
        <p className="text-md lg:text-sm text-white "><a href={url}>¿Tienes dudas? Contactanos por WhatsApp!</a></p>
        
        </div>
        </div>

    {/* Botón */}
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-10"
    >
        <img
        src="/WhatsApp.svg.png" // poné tu icono en public/
        alt="WhatsApp"
        className="w-7 lg:w-6 h-7 lg:h-6 z-100"

        />
    </a>
    </div>
)
}