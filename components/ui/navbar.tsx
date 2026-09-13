'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappUrl = site.brand.whatsapp;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo + Brand */}
          <Link href="#" className="flex items-center gap-2 text-sm font-display text-text">
            <Image
              src="/rod-academy-logo.png"
              alt="Rod Academy logo"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <span className="font-secundary">{site.brand.brandName}</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden sm:flex gap-6 text-sm font-secundary text-text-muted">
            <li><Link href="#" className="hover:text-text transition-colors">Inicio</Link></li>
            <li><Link href="#pricing" className="hover:text-text transition-colors">Pricing</Link></li>
            <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-text transition-colors">Contacto</a></li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="sm:hidden py-4 space-y-3 text-sm font-secundary text-text-muted border-t border-white/10">
            <li><Link href="#" className="block py-1 hover:text-text transition-colors" onClick={() => setMobileOpen(false)}>Inicio</Link></li>
            <li><Link href="#pricing" className="block py-1 hover:text-text transition-colors" onClick={() => setMobileOpen(false)}>Pricing</Link></li>
            <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-text transition-colors">Contacto</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
