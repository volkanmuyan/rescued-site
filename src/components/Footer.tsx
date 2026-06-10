"use client";

import Link from "next/link";
import { Leaf, Share2, MessageCircle, AtSign, Users } from "lucide-react";
import { AppButtons } from "./AppButtons";

const footerLinks = {
  kesfet: {
    title: "Keşfet",
    links: [
      { label: "Sürpriz Paket Nedir", href: "/surpriz-paket-nedir" },
      { label: "Sürdürülebilirlik", href: "/surdurulebilirlik" },
      { label: "İşletmeler", href: "/isletmeler" },
      { label: "SSS", href: "/sss" },
    ],
  },
  hakkimizda: {
    title: "Hakkımızda",
    links: [
      { label: "Genel Bakış", href: "/hakkimizda" },
      { label: "Hikâyemiz", href: "/hakkimizda/hikayemiz" },
      { label: "Etki Raporu", href: "/hakkimizda/etki-raporu" },
      { label: "Nerelerdeyiz", href: "/hakkimizda/nerelerdeyiz" },
      { label: "Ekibimiz", href: "/hakkimizda/ekip" },
    ],
  },
  isletmeler: {
    title: "İşletmeler",
    links: [
      { label: "Nasıl Çalışır", href: "/isletmeler" },
      { label: "İşletme Kaydı", href: "/isletmeler#kayit" },
      { label: "İşletme Girişi", href: "/isletmeler#giris" },
    ],
  },
  destek: {
    title: "Destek",
    links: [
      { label: "İletişim", href: "/iletisim" },
      { label: "Basın", href: "/basin" },
      { label: "Kariyer", href: "/kariyer" },
    ],
  },
};

const yasal = [
  { label: "Gizlilik Politikası", href: "/yasal/gizlilik" },
  { label: "Çerez Politikası", href: "/yasal/cerez-politikasi" },
  { label: "Kullanım Koşulları", href: "/yasal/kullanim-kosullari" },
  { label: "KVKK Aydınlatma Metni", href: "/yasal/kvkk" },
];

const socialLinks = [
  { icon: AtSign, label: "Instagram", href: "https://instagram.com/rescuedtr" },
  { icon: MessageCircle, label: "Twitter / X", href: "https://twitter.com/rescuedtr" },
  { icon: Users, label: "Facebook", href: "https://facebook.com/rescuedtr" },
  { icon: Share2, label: "LinkedIn", href: "https://linkedin.com/company/rescuedtr" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-8" aria-label="Site alt bilgi">
      <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-9 h-9 bg-olive rounded-xl flex items-center justify-center group-hover:bg-olive-light transition-colors">
                <Leaf size={18} className="text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">Rescued</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Daha iyisi çöpe gitmesin. Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtarıyoruz.
            </p>
            <AppButtons showLabel={true} />
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-olive transition-colors flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Rescued. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {yasal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
