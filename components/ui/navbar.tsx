import Image from "next/image";
import { themes, ThemeKey } from "@/lib/theme";
import Link from "next/link";

type NavbarProps = {
  theme: ThemeKey;
};

export default function Navbar({ theme }: NavbarProps) {
  const t = themes[theme];

  return (
    <nav className={`${t.bg} ${t.text} hidden w-full text-center sm:flex items-center justify-center`}>
        <div className="w-[40dvw] flex items-center justify-between position-fixed relative">
          <Link href="#" className="flex items-center gap-2 text-sm lg:text-md">
            <Image
                src="/rod-academy-logo.png"
                alt="Rod Academy logo"
                width={0}
                height={50}
                className="mx-auto h-10 w-10 "
            ></Image>
            <p className="font-secundary">Legado Rod Montana</p>
          </Link>
        </div>

        <div className="text-md font-secundary text-sm lg:text-md">
          <ul className="flex gap-2 text-sm lg:text-md">
            <Link href="#"><li>Inicio</li></Link>
            <Link href="#pricing"><li>Pricing</li></Link>
            <Link href="#contact"><li>Contacto</li></Link>
          </ul>
        </div>
        
    </nav>
  );
}