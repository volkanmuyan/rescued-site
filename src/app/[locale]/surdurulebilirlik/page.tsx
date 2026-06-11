"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { ImpactCounter } from "@/components/ImpactCounter";

export default function SurdurulebilirlikPage() {
  const t = useTranslations("SurdurulebilirlikPage");

  const methodology = t.raw("methodology.steps") as Array<{ title: string; desc: string }>;
  const goals = t.raw("goals.items") as Array<{ target: string; unit: string; label: string }>;

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

      <section className="section-padding bg-ink text-white">
        <div className="container-wide mx-auto">
          <SectionHeading label={t("impact.label")} title={t("impact.title")} theme="dark" />
          <div className="grid sm:grid-cols-3 gap-12">
            <ImpactCounter value={47820} suffix="+" label={t("impact.savedMeals")} color="olive" />
            <ImpactCounter value={12400} suffix=" kg" label={t("impact.savedCO2")} color="mustard" />
            <ImpactCounter value={6800} suffix=" lt" label={t("impact.savedWater")} sublabel={t("impact.savedWaterSub")} color="terracotta" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading
            label={t("methodology.label")}
            title={t("methodology.title")}
            subtitle={t("methodology.subtitle")}
          />
          <div className="space-y-6">
            {methodology.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft flex gap-5"
              >
                <span className="text-3xl font-black text-olive/20 flex-shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-black text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-olive/5 rounded-2xl border border-olive/15">
            <p className="text-sm text-ink/60 leading-relaxed">
              <strong className="text-ink">{t("methodology.sources")}</strong> {t("methodology.sourcesText")}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label={t("goals.label")} title={t("goals.title")} />
          <div className="grid sm:grid-cols-2 gap-6">
            {goals.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft"
              >
                <div className="text-3xl font-black text-olive">{item.target}</div>
                <div className="text-sm text-olive/70 font-semibold mb-1">{item.unit}</div>
                <div className="text-sm text-ink/60">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
