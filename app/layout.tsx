import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Druk 3D na zamówienie | Dąbrowa Górnicza",
  description: "Profesjonalny druk 3D FDM i projektowanie modeli 3D na zamówienie. PLA, PETG, ABS, ASA i LW-PLA. Odbiór w Dąbrowie Górniczej lub wysyłka.",
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
