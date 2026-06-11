"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle2, XCircle, Package, MapPin, Clock, Smile } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { AppButtons } from "@/components/AppButtons";
import { Link } from "@/i18n/navigation";

const stepIcons = [MapPin, Package, Clock, Smile];

export default function SurprizPaketPage() {
  const t = useTranslations("SurprizPaketPage");

  const canContain = t.raw("concept.canContain") as string[];
  const cannotContain = t.raw("concept.cannotContain") as string[];
  const steps = t.raw("howTo.steps") as Array<{ title: string; desc: string }>;

  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-4xl">
          <SectionHeading
            label={t("concept.label")}
            title={t("concept.title")}
            subtitle={t("concept.subtitle")}
          />

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-black text-ink mb-5 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-olive" />
                {t("concept.canContainTitle")}
              </h3>
              <ul className="space-y-3">
                {canContain.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <CheckCircle2 size={15} className="text-olive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-black text-ink mb-5 flex items-center gap-2">
                <XCircle size={20} className="text-terracotta" />
                {t("concept.cannotContainTitle")}
              </h3>
              <ul className="space-y-3">
                {cannotContain.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <XCircle size={15} className="text-terracotta flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-cream rounded-2xl">
                <p className="text-xs text-ink/50 leading-relaxed">
                  {t("concept.safetyNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-4xl">
          <SectionHeading label={t("howTo.label")} title={t("howTo.title")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-7 shadow-soft text-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-4 mx-auto">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-black text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <SectionHeading label={t("pricing.label")} title={t("pricing.title")} />
          <div className="bg-white rounded-3xl p-8 shadow-soft mb-8">
            <p className="text-ink/70 leading-relaxed mb-6">
              {t("pricing.desc")}
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: t("pricing.avgValue"), value: t("pricing.avgValueNum") },
                { label: t("pricing.avgPrice"), value: t("pricing.avgPriceNum") },
                { label: t("pricing.avgSaving"), value: t("pricing.avgSavingNum") },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-2xl p-4">
                  <div className="text-xl font-black text-olive">{item.value}</div>
                  <div className="text-xs text-ink/50 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <AppButtons showLabel={true} />
          <p className="mt-4 text-sm text-ink/40">{t("pricing.appNote")}</p>
          <Link href="/#bekleme-listesi" className="text-olive text-sm font-bold hover:underline mt-2 inline-block">
            {t("pricing.waitlistLink")}
          </Link>
        </div>
      </section>
    </>
  );
}
