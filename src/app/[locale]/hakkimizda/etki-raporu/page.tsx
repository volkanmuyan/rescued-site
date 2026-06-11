"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download, ArrowRight, BarChart3, Leaf, Droplets, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { Link } from "@/i18n/navigation";

const highlightIcons = [Leaf, BarChart3, Droplets, Zap];
const highlightColors = ["text-olive", "text-mustard", "text-terracotta", "text-olive"];
const highlightBgs = ["bg-olive/10", "bg-mustard/10", "bg-terracotta/10", "bg-olive/10"];

const sdgColors = [
  "bg-yellow-100 text-yellow-800",
  "bg-orange-100 text-orange-800",
  "bg-green-100 text-green-800",
  "bg-blue-100 text-blue-800",
];

export default function EtkiRaporuPage() {
  const t = useTranslations("EtkiRaporuPage");

  const highlights = t.raw("highlights.items") as Array<{ value: string; unit: string; label: string; desc: string }>;
  const reports = t.raw("reports.items") as Array<{ year: string; title: string; desc: string; badge: string }>;
  const sdgGoals = t.raw("sdg.goals") as Array<{ number: string; title: string }>;
  const charts = t.raw("charts.items") as Array<{ title: string; type: string }>;

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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="section-padding bg-ink relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream/5" aria-hidden="true" />
        <div className="container-wide mx-auto relative">
          <SectionHeading label={t("highlights.label")} title={t("highlights.title")} theme="dark" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => {
              const Icon = highlightIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-7 text-white"
                >
                  <div className={`w-11 h-11 ${highlightBgs[i]} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon size={20} className={highlightColors[i]} />
                  </div>
                  <div className={`text-4xl font-black ${highlightColors[i]} leading-none`}>{item.value}</div>
                  <div className="text-white/40 text-xs font-semibold mt-0.5 mb-2">{item.unit}</div>
                  <div className="text-sm font-bold text-white mb-2">{item.label}</div>
                  <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CHARTS */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("charts.label")}
            title={t("charts.title")}
            subtitle={t("charts.subtitle")}
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {charts.map((chart, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-6 shadow-soft aspect-[4/3] flex flex-col"
              >
                <h3 className="font-black text-ink text-sm mb-1">{chart.title}</h3>
                <p className="text-xs text-ink/40 mb-4">{chart.type}</p>
                <div className="flex-1 bg-cream rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 size={32} className="text-olive/20 mx-auto mb-2" />
                    <p className="text-ink/25 text-xs">{t("charts.placeholder")}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading
            label={t("sdg.label")}
            title={t("sdg.title")}
            subtitle={t("sdg.subtitle")}
          />
          <div className="grid sm:grid-cols-4 gap-4">
            {sdgGoals.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${sdgColors[i]} rounded-2xl p-5 text-center`}
              >
                <div className="text-4xl font-black mb-1">{goal.number}</div>
                <div className="text-xs font-bold">{goal.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REPORTS */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl">
          <SectionHeading label={t("reports.label")} title={t("reports.title")} />
          <div className="space-y-4">
            {reports.map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-soft flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 size={20} className="text-olive" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-black text-ink text-sm">{report.title}</span>
                      {report.badge && (
                        <span className="text-[10px] font-bold bg-olive text-white px-2 py-0.5 rounded-full">
                          {report.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-ink/50">{report.desc}</p>
                  </div>
                </div>
                <button
                  className="flex items-center gap-2 text-olive font-bold text-sm hover:bg-olive/10 px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
                  aria-label={`${report.title} ${t("reports.pdfButton")}`}
                >
                  <Download size={15} />
                  {t("reports.pdfButton")}
                </button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-ink/30 text-xs mt-6">{t("reports.disclaimer")}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-olive">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-white mb-3">{t("cta.title")}</h2>
          <p className="text-white/75 mb-6">{t("cta.desc")}</p>
          <Link href="/surdurulebilirlik" className="bg-white text-olive font-bold px-7 py-3.5 rounded-full hover:bg-cream transition-colors inline-flex items-center gap-2">
            {t("cta.button")}
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
