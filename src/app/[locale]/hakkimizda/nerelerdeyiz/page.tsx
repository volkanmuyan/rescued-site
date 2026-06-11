"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { WaitlistForm } from "@/components/WaitlistForm";
import { TurkeyMap } from "@/components/TurkeyMap";
import { Link } from "@/i18n/navigation";

const activeCities = [
  { name: "İstanbul", districts: "Beşiktaş, Kadıköy, Şişli, Bakırköy, Ümraniye", partnerCount: 180, since: "Ocak 2024" },
  { name: "Ankara", districts: "Çankaya, Keçiören, Mamak, Altındağ", partnerCount: 95, since: "Haziran 2024" },
  { name: "İzmir", districts: "Konak, Karşıyaka, Bornova, Buca", partnerCount: 65, since: "Haziran 2024" },
];

const comingSoon = [
  { name: "Bursa", eta: "2025 Q3" },
  { name: "Antalya", eta: "2025 Q4" },
  { name: "Adana", eta: "2026 Q1" },
  { name: "Trabzon", eta: "2026 Q1" },
  { name: "Konya", eta: "2026 Q2" },
  { name: "Gaziantep", eta: "2026 Q2" },
];

export default function NerelerdeyizPage() {
  const t = useTranslations("NerelerdeyizPage");

  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <Link href="/hakkimizda" className="text-white/40 hover:text-white/70 text-sm font-semibold transition-colors">
              ← About
            </Link>
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-balance">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAP */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("map.label")}
            title={t("map.title")}
            subtitle={t("map.subtitle")}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-soft max-w-2xl mx-auto"
          >
            <TurkeyMap />
          </motion.div>
        </div>
      </section>

      {/* ACTIVE CITIES */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading label={t("activeCities.label")} title={t("activeCities.title")} />
          <div className="grid sm:grid-cols-3 gap-6">
            {activeCities.map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={16} className="text-olive flex-shrink-0" />
                      <h3 className="text-xl font-black text-ink">{city.name}</h3>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} className="text-olive" />
                      <span className="text-xs text-olive font-bold">{t("activeCities.active")}</span>
                      <span className="text-xs text-ink/40">— {city.since} {t("activeCities.since")}</span>
                    </div>
                  </div>
                  <div className="bg-olive text-white text-sm font-black px-3 py-1.5 rounded-xl text-center">
                    {city.partnerCount}+
                    <div className="text-[10px] font-semibold opacity-70">{t("activeCities.businessCount")}</div>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink/40 font-bold uppercase tracking-wider mb-1.5">{t("activeCities.districts")}</div>
                  <p className="text-sm text-ink/65">{city.districts}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading
            label={t("comingSoon.label")}
            title={t("comingSoon.title")}
            subtitle={t("comingSoon.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comingSoon.map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-5 shadow-soft flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-mustard/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-mustard" />
                  </div>
                  <span className="font-bold text-ink">{city.name}</span>
                </div>
                <span className="text-xs font-semibold text-ink/40 bg-cream px-2.5 py-1 rounded-full">
                  {city.eta}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTIFY FORM */}
      <section className="section-padding bg-olive">
        <div className="container-wide mx-auto max-w-xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <RescuedBadge size="md" className="mb-5 !bg-white/15 border border-white/20" />
            <h2 className="text-3xl font-black text-white mb-3">{t("notify.title")}</h2>
            <p className="text-white/75 mb-8 leading-relaxed">{t("notify.desc")}</p>
            <div className="bg-white rounded-3xl p-7 shadow-soft-xl">
              <WaitlistForm />
            </div>
          </motion.div>
        </div>
      </section>

      {/* BUSINESS CTA */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-black text-ink mb-3">{t("businessCta.title")}</h2>
            <p className="text-ink/60 mb-6 text-sm">{t("businessCta.desc")}</p>
            <Link href="/isletmeler#kayit" className="btn-primary inline-flex items-center gap-2">
              {t("businessCta.button")}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
