"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, Leaf, Smartphone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link, useRouter } from "@/i18n/navigation";

function HakkimizdaDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations("Navbar");

  const dropdownItems = [
    { key: "ourStory", href: "/hakkimizda/hikayemiz" },
    { key: "impactReport", href: "/hakkimizda/etki-raporu" },
    { key: "whereWeAre", href: "/hakkimizda/nerelerdeyiz" },
    { key: "ourTeam", href: "/hakkimizda/ekip" },
  ];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
          open
            ? "text-olive bg-olive/10"
            : "text-ink/70 hover:text-olive hover:bg-olive/10"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {t("about")}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.18 }}>
          <ChevronDown size={14} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-soft-lg border border-olive/10 py-2 z-50"
          >
            <Link
              href="/hakkimizda"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-bold text-ink hover:bg-cream hover:text-olive transition-colors"
            >
              {t("aboutDropdown.overview")}
            </Link>
            <div className="h-px bg-olive/10 mx-3 my-1" />
            {dropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-semibold text-ink/70 hover:bg-cream hover:text-olive transition-colors"
              >
                {t(`aboutDropdown.${item.key}`)}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const isTr = !pathname.startsWith("/en");

  const handleSwitch = (locale: "tr" | "en") => {
    const path = pathname.replace(/^\/(en|tr)/, "") || "/";
    router.push(path, { locale });
  };

  return (
    <div className="flex items-center gap-1 border border-ink/10 rounded-xl p-0.5">
      <button
        onClick={() => handleSwitch("tr")}
        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
          isTr ? "bg-olive text-white shadow-sm" : "text-ink/50 hover:text-ink/80"
        }`}
        aria-label="Türkçe"
      >
        TR
      </button>
      <button
        onClick={() => handleSwitch("en")}
        className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
          !isTr ? "bg-olive text-white shadow-sm" : "text-ink/50 hover:text-ink/80"
        }`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileHakkiOpen, setMobileHakkiOpen] = useState(false);
  const t = useTranslations("Navbar");

  const navLinks = [
    { key: "howItWorks", href: "/#nasil-calisir" },
    { key: "surpriseBag", href: "/surpriz-paket-nedir" },
    { key: "sustainability", href: "/surdurulebilirlik" },
    { key: "forBusinesses", href: "/isletmeler" },
  ];

  const mobileNavLinks = [
    { key: "howItWorks", href: "/#nasil-calisir" },
    { key: "surpriseBag", href: "/surpriz-paket-nedir" },
    { key: "about", href: null },
    { key: "sustainability", href: "/surdurulebilirlik" },
    { key: "forBusinesses", href: "/isletmeler" },
  ];

  const mobileDropdownItems = [
    { key: "ourStory", href: "/hakkimizda/hikayemiz" },
    { key: "impactReport", href: "/hakkimizda/etki-raporu" },
    { key: "whereWeAre", href: "/hakkimizda/nerelerdeyiz" },
    { key: "ourTeam", href: "/hakkimizda/ekip" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-soft py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-wide px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Rescued">
            <div className="w-8 h-8 bg-olive rounded-xl flex items-center justify-center group-hover:bg-olive-dark transition-colors duration-200">
              <Leaf size={18} className="text-white" aria-hidden="true" />
            </div>
            <span className="text-xl font-black text-ink tracking-tight">Rescued</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-ink/70 hover:text-olive rounded-xl hover:bg-olive/10 transition-all duration-200"
              >
                {t(link.key)}
              </Link>
            ))}
            <HakkimizdaDropdown />
          </nav>

          {/* CTA + locale switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher />
            <button className="relative flex items-center gap-2 bg-olive text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-olive-dark transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5">
              <Smartphone size={15} aria-hidden="true" />
              {t("downloadApp")}
              <span className="absolute -top-1.5 -right-1.5 bg-mustard text-ink text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                {t("comingSoon")}
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-olive/10 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={22} className="text-ink" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-cream flex flex-col overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-5 flex-shrink-0">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <div className="w-8 h-8 bg-olive rounded-xl flex items-center justify-center">
                  <Leaf size={18} className="text-white" />
                </div>
                <span className="text-xl font-black text-ink">Rescued</span>
              </Link>
              <div className="flex items-center gap-3">
                <LocaleSwitcher />
                <button
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-olive/10 transition-colors"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X size={22} className="text-ink" />
                </button>
              </div>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-8 gap-1" aria-label="Mobile navigation">
              {mobileNavLinks.map((link, i) => {
                if (link.key === "about") {
                  return (
                    <motion.div key="hakki" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                      <button
                        className="flex items-center justify-between w-full text-3xl font-black text-ink hover:text-olive transition-colors py-3"
                        onClick={() => setMobileHakkiOpen((o) => !o)}
                      >
                        {t("about")}
                        <motion.div animate={{ rotate: mobileHakkiOpen ? 180 : 0 }} transition={{ duration: 0.18 }}>
                          <ChevronDown size={20} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {mobileHakkiOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4 border-l-2 border-olive/20 mb-2"
                          >
                            <Link href="/hakkimizda" className="block text-lg font-bold text-ink/70 hover:text-olive py-2 transition-colors" onClick={() => setMobileOpen(false)}>
                              {t("aboutDropdown.overview")}
                            </Link>
                            {mobileDropdownItems.map((item) => (
                              <Link key={item.href} href={item.href} className="block text-lg font-semibold text-ink/60 hover:text-olive py-2 transition-colors" onClick={() => setMobileOpen(false)}>
                                {t(`aboutDropdown.${item.key}`)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }
                return (
                  <motion.div key={link.key} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                    <Link href={link.href!} className="block text-3xl font-black text-ink hover:text-olive transition-colors py-3" onClick={() => setMobileOpen(false)}>
                      {t(link.key)}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="px-8 pb-12 flex-shrink-0">
              <button className="w-full relative flex items-center justify-center gap-2 bg-olive text-white font-bold py-4 rounded-2xl text-lg hover:bg-olive-dark transition-colors">
                <Smartphone size={18} />
                {t("downloadApp")}
                <span className="absolute -top-2 right-4 bg-mustard text-ink text-[9px] font-bold px-2 py-0.5 rounded-full">
                  {t("comingSoon")}
                </span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
