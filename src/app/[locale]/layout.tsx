import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "../globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isTr = locale === "tr";

  return {
    title: {
      default: isTr ? "Rescued – Daha iyisi çöpe gitmesin" : "Rescued – Better doesn't go to waste",
      template: "%s | Rescued",
    },
    description: isTr
      ? "Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar. Rescued ile her Sürpriz Paket bir öğün kurtarır, bir adım daha az israf demektir."
      : "Rescue end-of-day treats from local businesses at half price. Every Surprise Bag saves a meal — one less step toward waste.",
    keywords: isTr
      ? ["gıda kurtarma", "sürpriz paket", "yemek indirimi", "gıda israfı", "food rescue", "Türkiye"]
      : ["food rescue", "surprise bag", "food discount", "food waste", "Turkey"],
    authors: [{ name: "Rescued" }],
    creator: "Rescued",
    metadataBase: new URL("https://rescued.com.tr"),
    openGraph: {
      type: "website",
      locale: isTr ? "tr_TR" : "en_US",
      url: "https://rescued.com.tr",
      siteName: "Rescued",
      title: isTr ? "Rescued – Daha iyisi çöpe gitmesin" : "Rescued – Better doesn't go to waste",
      description: isTr
        ? "Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar."
        : "Rescue end-of-day treats from local businesses at half price.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Rescued – Save the Bite" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isTr ? "Rescued – Daha iyisi çöpe gitmesin" : "Rescued – Better doesn't go to waste",
      description: isTr
        ? "Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar."
        : "Rescue end-of-day treats from local businesses at half price.",
      images: ["/og-image.jpg"],
    },
    robots: { index: true, follow: true },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={nunito.variable}>
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
                locale === "tr"
                  ? "Türkiye'nin gıda kurtarma platformu. Sürpriz Paket ile gün sonu lezzetleri yarı fiyatına."
                  : "Turkey's food rescue platform. End-of-day treats at half price with Surprise Bags.",
              sameAs: [
                "https://instagram.com/rescuedtr",
                "https://twitter.com/rescuedtr",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
