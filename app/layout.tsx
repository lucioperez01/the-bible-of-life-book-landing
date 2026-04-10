import type { Metadata } from "next";
import { Geist, Poppins, Open_Sans, Fjalla_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";


const primary = Poppins({ 
  variable: "--font-primary",
  subsets: ["latin"], 
  weight: ["400", "700"],
  display: "swap",
});

const secundary = Geist({
  variable: "--font-secundary",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
})


export const metadata: Metadata = {
  title: "Legado Rod Montana",
  description: "Una guía clara para dejar de ser dominado y tomar las riendas de tu vida",
  generator: "fitness",
  applicationName: "Legado Rod Montana",
  referrer: "origin-when-cross-origin",
  keywords: ["fitness", "desarrollo personal", "guía de vida", "legado rod montana"],
  authors: [{ name: "Rod Montana" }],
  creator: "Legado Rod Montana",
  publisher: "Legado Rod Montana",
  twitter: {
    card: "summary_large_image",
    title: "Legado Rod Montana",
    description: "Una guía clara para dejar de ser dominado y tomar las riendas de tu vida",
    creator: "@RodMontana",
  },
  facebook: {
    card: "summary_large_image",
    title: "Legado Rod Montana",
    description: "Una guía clara para dejar de ser dominado y tomar las riendas de tu vida",
    creator: "@RodMontana",
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let theme: string= 'dark'

  return (
    <html lang="es">
      <body
        className={`${primary.variable} ${secundary.variable} antialiased overflow-x-hidden w-full`}
      >
        <Navbar theme={theme}/>
        {children}
      </body>
    </html>
  );
}
