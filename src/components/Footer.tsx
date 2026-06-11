"use client";

import { Leaf, Share2, MessageCircle, AtSign, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AppButtons } from "./AppButtons";

const socialLinks = [
  { icon: AtSign, key: "instagram", href: "https://instagram.com/rescuedtr" },
  { icon: MessageCircle, key: "twitter", href: "https://twitter.com/rescuedtr" },
  { icon: Users, key: "facebook", href: "https://facebook.com/rescuedtr" },
  { icon: Share2, key: "linkedin", href: "https://linkedin.com/company/rescuedtr" },
];

export function Footer() {
  const t = useTranslations("Footer");

  const footerSections = [
    {
      titleKey: "discover",
      links: [
        { key: "surpriseBagWhat", href: "/surpriz-paket-nedir" },
        { key: "sustainability", href: "/surdurulebilirlik" },
        { key: "forBusinesses", href: "/isletmeler" },
        { key: "faq", href: "/sss" },
      ],
    },
    {
      titleKey: "about",
      links: [
        { key: "overview", href: "/hakkimizda" },
        { key: "ourStory", href: "/hakkimizda/hikayemiz" },
        { key: "impactReport", href: "/hakkimizda/etki-raporu" },
        { key: "whereWeAre", href: "/hakkimizda/nerelerdeyiz" },
        { key: "ourTeam", href: "/hakkimizda/ekip" },
      ],
    },
    {
      titleKey: "businesses",
      links: [
        { key: "howItWorks", href: "/isletmeler" },
        { key: "businessRegistration", href: "/isletmeler#kayit" },
        { key: "businessLogin", href: "/isletmeler#giris" },
      ],
    },
    {
      titleKey: "support",
      links: [
        { key: "contact", href: "/iletisim" },
        { key: "press", href: "/basin" },
        { key: "careers", href: "/kariyer" },
      ],
    },
  ];

  const yasalLinks = [
    { key: "privacyPolicy", href: "/yasal/gizlilik" },
    { key: "cookiePolicy", href: "/yasal/cerez-politikasi" },
    { key: "termsOfService", href: "/yasal/kullanim-kosullari" },
    { key: "kvkk", href: "/yasal/kvkk" },
  ];

  return (
    <footer className="bg-ink text-white pt-16 pb-8" aria-label="Site footer">
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
              {t("tagline")}
            </p>
            <AppButtons showLabel={true} />
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, key, href }) => (
                <a
                  key={key}
                  href={href}
                  aria-label={t(key)}
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
          {footerSections.map((section) => (
            <div key={section.titleKey}>
              <h3 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">
                {t(section.titleKey)}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {t(link.key)}
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
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {yasalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
