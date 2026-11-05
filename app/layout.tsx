import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drukforma3d.pl"),
  title: {
    default: "DrukForma 3D | Druk 3D na zamówienie",
    template: "%s | DrukForma 3D",
  },
  description: "DrukForma 3D — profesjonalny druk 3D FDM i projektowanie modeli 3D na zamówienie. PLA, PETG, ABS, ASA i LW-PLA. Dąbrowa Górnicza i wysyłka.",
  alternates: { canonical: "/" },
  keywords: ["druk 3D na zamówienie", "druk 3D Dąbrowa Górnicza", "druk 3D Śląsk", "projektowanie 3D", "druk FDM", "części zamienne 3D"],
  authors: [{ name: "DrukForma 3D" }],
  creator: "DrukForma 3D",
  publisher: "DrukForma 3D",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://drukforma3d.pl",
    siteName: "DrukForma 3D",
    title: "DrukForma 3D | Druk 3D na zamówienie",
    description: "Profesjonalny druk 3D FDM i projektowanie modeli na zamówienie. Dąbrowa Górnicza, Śląsk i wysyłka w całej Polsce.",
    images: [{ url: "/assets/hero-3d-printer.png", width: 1586, height: 992, alt: "Druk 3D FDM w DrukForma 3D" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DrukForma 3D | Druk 3D na zamówienie",
    description: "Druk 3D FDM i projektowanie modeli 3D — Dąbrowa Górnicza i cała Polska.",
    images: ["/assets/hero-3d-printer.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://drukforma3d.pl/#business",
              name: "DrukForma 3D",
              url: "https://drukforma3d.pl",
              image: "https://drukforma3d.pl/assets/hero-3d-printer.png",
              description: "Profesjonalny druk 3D FDM i projektowanie modeli 3D na zamówienie.",
              priceRange: "Wycena indywidualna",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dąbrowa Górnicza",
                addressRegion: "śląskie",
                addressCountry: "PL",
              },
              areaServed: [
                { "@type": "City", name: "Dąbrowa Górnicza" },
                { "@type": "AdministrativeArea", name: "województwo śląskie" },
                { "@type": "Country", name: "Polska" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Usługi DrukForma 3D",
                itemListElement: [
                  "Druk 3D FDM z plików STL i 3MF",
                  "Projektowanie modeli 3D na zamówienie",
                  "Części zamienne i elementy techniczne",
                  "Prototypy i krótkie serie",
                  "Części do modelarstwa RC",
                ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
