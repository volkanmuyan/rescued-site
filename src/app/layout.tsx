import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Rescued – Daha iyisi çöpe gitmesin",
    template: "%s | Rescued",
  },
  description:
    "Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar. Rescued ile her Sürpriz Paket bir öğün kurtarır, bir adım daha az israf demektir.",
  keywords: [
    "gıda kurtarma",
    "sürpriz paket",
    "yemek indirimi",
    "gıda israfı",
    "food rescue",
    "Türkiye",
  ],
  authors: [{ name: "Rescued" }],
  creator: "Rescued",
  metadataBase: new URL("https://rescued.com.tr"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://rescued.com.tr",
    siteName: "Rescued",
    title: "Rescued – Daha iyisi çöpe gitmesin",
    description:
      "Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rescued – Save the Bite",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rescued – Daha iyisi çöpe gitmesin",
    description:
      "Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={nunito.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rescued",
              url: "https://rescued.com.tr",
              logo: "https://rescued.com.tr/logo.png",
              description:
                "Türkiye'nin gıda kurtarma platformu. Sürpriz Paket ile gün sonu lezzetleri yarı fiyatına.",
              sameAs: [
                "https://instagram.com/rescuedtr",
                "https://twitter.com/rescuedtr",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
