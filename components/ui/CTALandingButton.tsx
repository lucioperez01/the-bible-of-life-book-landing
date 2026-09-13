"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

type CTALandingButtonProps = {
  theme?: string; // kept for backward compat, not used
  CTAtext: string;
  href: string;
  isTargetBlank?: boolean;
};

export default function CTALandingButton({ CTAtext, href, isTargetBlank }: CTALandingButtonProps) {
  const target = isTargetBlank ? "_blank" : "_self";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If it's an internal anchor link (starts with #), handle scroll manually
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link href={href} target={target} onClick={handleClick}>
      <Button className="bg-accent-brand hover:bg-accent-brand-hover text-white cursor-pointer text-lg rounded-sm shadow-2xl border-transparent py-5 hover:brightness-110 hover:animate-none transition-colors duration-300 ease-in-out lg:text-xl lg:py-6 font-secundary">
        {CTAtext}
      </Button>
    </Link>
  );
}
