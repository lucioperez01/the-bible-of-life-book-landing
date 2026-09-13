"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export default function WhatsAppBubble() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    const closeTimer = setTimeout(() => {
      setOpen(false);
    }, 15000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  const whatsappUrl = site.brand.whatsapp;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end">
      {/* Message bubble */}
      <div
        className={`mr-3 mb-2 transition-all duration-300 ${
          open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5 pointer-events-none"
        }`}
      >
        <div className="relative bg-gradient-to-br from-green-500 to-green-600 px-4 py-2 pr-12 rounded-xl shadow-lg glass">
          <p className="text-sm text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              ¿Tienes dudas? Contactanos por WhatsApp!
            </a>
          </p>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-green-600 rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src="/WhatsApp.svg.png"
          alt="WhatsApp"
          className="w-7 h-7"
        />
      </a>
    </div>
  );
}
