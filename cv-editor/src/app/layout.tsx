import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-zen-maru",
  display: "swap",
});

const giaza = localFont({
  src: "../../public/fonts/Giaza.otf",
  variable: "--font-giaza",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CV Editor - Sami BENDRISS",
  description: "Éditeur de CV type Canva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${zenMaruGothic.variable} ${giaza.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
