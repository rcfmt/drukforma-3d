import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DrukForma 3D | Druk 3D na zamówienie",
  description: "DrukForma 3D — profesjonalny druk 3D FDM i projektowanie modeli 3D na zamówienie. PLA, PETG, ABS, ASA i LW-PLA. Dąbrowa Górnicza i wysyłka.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
