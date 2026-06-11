"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { Link } from "@/i18n/navigation";

export default function KariyerPage() {
  const t = useTranslations("KariyerPage");

  const positions = t.raw("positions.items") as Array<{ title: string; location: string }>;

  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label={t("positions.label")} title={t("positions.title")} />

          <div className="space-y-4">
            {positions.map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase size={18} className="text-olive" />
                  </div>
                  <div>
                    <div className="font-bold text-ink group-hover:text-olive transition-colors">{pos.title}</div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-xs text-ink/50">
                        <MapPin size={11} /> {pos.location}
                      </span>
                      <span className="text-xs bg-olive/10 text-olive px-2 py-0.5 rounded-full font-semibold">
                        {t("positions.fullTime")}
                      </span>
                    </div>
                  </div>
                </div>
                <ArrowRight size={18} className="text-olive/40 group-hover:text-olive group-hover:translate-x-1 transition-all flex-shrink-0" />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-olive/5 rounded-3xl p-8 text-center border border-olive/10">
            <h3 className="text-xl font-black text-ink mb-2">{t("spontaneous.title")}</h3>
            <p className="text-ink/60 mb-5 text-sm">{t("spontaneous.desc")}</p>
            <Link href="/iletisim" className="btn-primary inline-flex items-center gap-2">
              {t("spontaneous.cta")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
