import type { Metadata } from "next";
import { Geist, Poppins, Open_Sans, Fjalla_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import Script from 'next/script'
import { Analytics } from "@vercel/analytics/next"
import WhatsAppBubble from "@/components/ui/whatsappBubble";
import { site } from "@/lib/site";

// Preconnect to Google Fonts for faster loading

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

const display = Fjalla_One({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
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
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Schema Markup for SEO and AI Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Book",
                "name": "La Biblia de la Vida",
                "author": {
                  "@type": "Person",
                  "name": "Rod Montana"
                },
                "description": site.bookShowcase.description,
                "offers": {
                  "@type": "Offer",
                  "price": site.bookShowcase.price,
                  "priceCurrency": site.bookShowcase.currency,
                  "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "5",
                  "reviewCount": "3528"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": site.faq.items.map(item => ({
                  "@type": "Question",
                  "name": item.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.a
                  }
                }))
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": site.brand.brandName,
                "url": "https://legadorodmontana.com",
                "description": site.hero.title + " " + site.hero.titleAccent,
                "founder": {
                  "@type": "Person",
                  "name": "Rod Montana"
                }
              }
            ])
          }}
        />
      </head>
      <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>

        <Analytics />

      <body
        className={`${primary.variable} ${secundary.variable} ${display.variable} antialiased overflow-x-hidden w-full bg-canvas text-text`}
      >
        <Navbar />
        <WhatsAppBubble />
        {children}
      </body>
    </html>
  );
}
