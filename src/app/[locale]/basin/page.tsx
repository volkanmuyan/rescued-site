"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Download, Mail } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";

const kitIcons = ["🎨", "📐", "📄", "📸"];

export default function BasinPage() {
  const t = useTranslations("BasinPage");

  const kitItems = t.raw("kit.items") as Array<{ title: string; desc: string }>;

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
            <p className="text-lg text-white/70">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label={t("kit.label")} title={t("kit.title")} />

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {kitItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-soft flex items-center justify-between gap-4 group hover:shadow-soft-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{kitIcons[i]}</span>
                  <div>
                    <div className="font-bold text-ink">{item.title}</div>
                    <div className="text-sm text-ink/50">{item.desc}</div>
                  </div>
                </div>
                <button
                  className="w-9 h-9 bg-olive/10 rounded-xl flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-colors flex-shrink-0"
                  aria-label={`${item.title} ${t("kit.downloadLabel")}`}
                >
                  <Download size={16} />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="bg-olive/5 rounded-3xl p-8 border border-olive/10 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 bg-olive/10 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Mail size={22} className="text-olive" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-black text-ink mb-1">{t("contact.title")}</h3>
              <p className="text-ink/60 text-sm mb-3">{t("contact.desc")}</p>
              <a href={`mailto:${t("contact.email")}`} className="text-olive font-bold hover:underline">
                {t("contact.email")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
