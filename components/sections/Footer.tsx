'use client';
import { Instagram, Github } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-white/10 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-3">
        <p className="text-sm text-text-subtle">{site.footer.copyright}</p>

        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-text-subtle/60">{site.footer.devCredit}. Contacto:</p>

          <div className="flex items-center gap-3">
            <Instagram
              className="text-text-subtle/40 hover:text-text-muted cursor-pointer transition-colors"
              size={20}
              onClick={() => window.open(site.footer.instagram, "_blank")}
            />
            <Github
              className="text-text-subtle/40 hover:text-text-muted cursor-pointer transition-colors"
              size={20}
              onClick={() => window.open(site.footer.github, "_blank")}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
