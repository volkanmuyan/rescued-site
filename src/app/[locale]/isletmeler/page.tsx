"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Package,
  Clock,
  BarChart3,
  Coffee,
  ShoppingCart,
  Utensils,
  Store,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { RescuedBadge } from "@/components/RescuedBadge";

const howItWorksIcons = [Package, Clock, Users, TrendingUp];
const businessTypeIcons = [Utensils, Coffee, Store, ShoppingCart, Truck];
const problemIcons = ["🗑️", "💸", "✅"];

export default function IsletmelerPage() {
  const t = useTranslations("IsletmelerPage");

  const howItWorksSteps = t.raw("howItWorks.steps") as Array<{ title: string; desc: string }>;
  const businessTypes = t.raw("businessTypes.items") as Array<{ title: string; desc: string }>;
  const problemStats = t.raw("problem.stats") as Array<{ value: string; label: string }>;
  const growthStats = t.raw("growth.stats") as Array<{ stat: string; desc: string }>;
  const panelFeatures = t.raw("panel.features") as string[];
  const incomeBenefits = t.raw("income.benefits") as string[];
  const incomeRows = t.raw("income.rows") as Array<{ label: string; value: string }>;
  const faqItems = t.raw("faq.items") as Array<{ question: string; answer: string }>;

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-olive/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 max-w-3xl mx-auto"
          >
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-balance">
              {t("hero.title1")}{" "}
              <span className="text-olive-light">{t("hero.title2")}</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">{t("hero.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kayit" className="btn-primary flex items-center gap-2">
                {t("hero.cta1")}
                <ArrowRight size={16} />
              </a>
              <a href="#nasil-calisir" className="border-2 border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                {t("hero.cta2")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <SectionHeading
            label={t("problem.label")}
            title={t("problem.title")}
            subtitle={t("problem.subtitle")}
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {problemStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft text-center"
              >
                <div className="text-3xl mb-3">{problemIcons[i]}</div>
                <div className="text-3xl font-black text-olive mb-2">{item.value}</div>
                <p className="text-sm text-ink/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="nasil-calisir" className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("howItWorks.label")}
            title={t("howItWorks.title")}
            subtitle={t("howItWorks.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, i) => {
              const Icon = howItWorksIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <div className="text-xs font-black text-olive/40 tracking-wider mb-1">0{i + 1}</div>
                  <h3 className="text-lg font-black text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INCOME */}
      <section className="section-padding bg-olive">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{t("income.exampleLabel")}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6 leading-tight">
                {t("income.title")}
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">{t("income.desc")}</p>
              <ul className="space-y-3">
                {incomeBenefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                    <CheckCircle2 size={16} className="text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-soft-xl"
            >
              <h3 className="text-lg font-black text-ink mb-5">{t("income.calcTitle")}</h3>
              <div className="space-y-4">
                {incomeRows.map((row, i) => {
                  const isHighlight = i === 2 || i === 4;
                  const isMuted = i === 3;
                  return (
                    <div
                      key={i}
                      className={`flex justify-between items-center py-3 border-b border-cream last:border-0 ${isHighlight ? "font-black text-olive" : ""} ${isMuted ? "text-ink/40 text-sm" : ""}`}
                    >
                      <span className={isHighlight ? "" : "text-ink/60 text-sm"}>{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-ink/30 mt-4">{t("income.calcDisclaimer")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GROWTH */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <SectionHeading
            label={t("growth.label")}
            title={t("growth.title")}
            subtitle={t("growth.subtitle")}
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {growthStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft text-center"
              >
                <div className="text-4xl font-black text-olive mb-3">{item.stat}</div>
                <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-ink/30 mt-6">{t("growth.disclaimer")}</p>
        </div>
      </section>

      {/* BUSINESS TYPES */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("businessTypes.label")}
            title={t("businessTypes.title")}
            subtitle={t("businessTypes.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((type, i) => {
              const Icon = businessTypeIcons[i];
              const isFirst = i === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {isFirst && (
                    <span className="absolute top-5 right-5 bg-mustard/10 text-mustard text-xs font-bold px-2.5 py-1 rounded-full">
                      {t("businessTypes.popular")}
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-5">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-black text-ink mb-2">{type.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{type.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PANEL */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">{t("panel.label")}</span>
              <h2 className="text-3xl sm:text-4xl font-black text-ink mt-3 mb-5 leading-tight">{t("panel.title")}</h2>
              <p className="text-ink/60 leading-relaxed mb-6">{t("panel.desc")}</p>
              <ul className="space-y-3">
                {panelFeatures.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink/80 text-sm">
                    <div className="w-5 h-5 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 size={10} className="text-olive" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="aspect-[4/3] bg-gradient-to-br from-cream to-cream-dark rounded-3xl border border-olive/10 shadow-soft-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart3 size={48} className="text-olive/30 mx-auto mb-4" />
                  <p className="text-ink/30 text-sm">{t("panel.mockupLabel")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label={t("faq.label")} title={t("faq.title")} />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* REGISTER FORM */}
      <section id="kayit" className="section-padding bg-olive">
        <div className="container-wide mx-auto max-w-2xl">
          <SectionHeading
            label={t("register.label")}
            title={t("register.title")}
            subtitle={t("register.subtitle")}
            theme="dark"
          />
          <div className="bg-white rounded-3xl p-8 shadow-soft-xl">
            <ContactForm isBusinessForm={true} />
          </div>
        </div>
      </section>
    </>
  );
}
