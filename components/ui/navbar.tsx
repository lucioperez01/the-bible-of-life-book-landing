import { themes, ThemeKey } from "@/lib/theme";
type NavbarProps = {
  theme: ThemeKey;
};

export default function Navbar({ theme }: NavbarProps) {
  const t = themes[theme];

  return (
    <nav className={`${t.bg} ${t.text} p-3 w-full text-center`}>
        <p>Oferta navideña!</p>
        
    </nav>
  );
}