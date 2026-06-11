"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { Timeline, type TimelineEvent } from "@/components/Timeline";
import { Link } from "@/i18n/navigation";

export default function HikayemizPage() {
  const t = useTranslations("HikayemizPage");

  const rawEvents = t.raw("timeline.events") as Array<{
    year: string;
    title: string;
    description: string;
    badge?: string;
  }>;

  const timelineEvents: TimelineEvent[] = rawEvents.map((e) => ({
    year: e.year,
    title: e.title,
    description: e.description,
    badge: e.badge,
  }));

  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-mustard/5 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/hakkimizda" className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm font-semibold transition-colors">
              ← {t("related.impactReport").split(" ")[0]}
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

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-soft border-l-4 border-olive"
          >
            <p className="text-2xl font-black text-ink leading-snug mb-4">
              &ldquo;{t("opening.quote")}&rdquo;
            </p>
            <p className="text-ink/65 leading-relaxed">{t("opening.text")}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark pt-0">
        <div className="container-wide mx-auto max-w-2xl text-center mb-16">
          <SectionHeading
            label={t("timeline.label")}
            title={t("timeline.title")}
            subtitle={t("timeline.subtitle")}
          />
        </div>

        <div className="container-wide mx-auto max-w-4xl">
          <Timeline events={timelineEvents} />
        </div>
      </section>

      <section className="bg-olive py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            {t("missionBand.headline")}
          </p>
          <p className="text-white/75 text-lg mb-8">{t("missionBand.text")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#bekleme-listesi" className="bg-white text-olive font-bold px-7 py-3.5 rounded-full hover:bg-cream transition-colors flex items-center gap-2">
              {t("missionBand.cta1")}
              <ArrowRight size={15} />
            </Link>
            <Link href="/isletmeler" className="border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
              {t("missionBand.cta2")}
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/hakkimizda/etki-raporu" className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all flex items-center justify-between gap-4 group">
              <div>
                <div className="text-xs font-bold text-ink/40 uppercase tracking-wider mb-1">{t("related.next")}</div>
                <div className="font-black text-ink group-hover:text-olive transition-colors">{t("related.impactReport")}</div>
              </div>
              <ArrowRight size={18} className="text-olive flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/hakkimizda/ekip" className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all flex items-center justify-between gap-4 group">
              <div>
                <div className="text-xs font-bold text-ink/40 uppercase tracking-wider mb-1">{t("related.explore")}</div>
                <div className="font-black text-ink group-hover:text-olive transition-colors">{t("related.ourTeam")}</div>
              </div>
              <ArrowRight size={18} className="text-olive flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
