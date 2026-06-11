"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Tag,
  MapPin,
  Globe,
  Sparkles,
  Search,
  CreditCard,
  ShoppingBag,
  Heart,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Users,
  Leaf,
  Recycle,
} from "lucide-react";
import { RescuedBadge } from "@/components/RescuedBadge";
import { AppButtons } from "@/components/AppButtons";
import { Marquee } from "@/components/Marquee";
import { ImpactCounter } from "@/components/ImpactCounter";
import { SectionHeading } from "@/components/SectionHeading";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Link } from "@/i18n/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const benefitIcons = [Tag, MapPin, Globe, Sparkles];
const benefitAccents = [
  "from-olive to-olive-light",
  "from-mustard to-mustard/50",
  "from-terracotta to-terracotta/50",
  "from-olive-dark to-olive",
];
const benefitIconBgs = ["bg-olive/10", "bg-mustard/10", "bg-terracotta/10", "bg-olive/10"];
const benefitIconColors = ["text-olive", "text-mustard", "text-terracotta", "text-olive-dark"];
const benefitNumbers = ["01", "02", "03", "04"];

const stepIcons = [Search, CreditCard, ShoppingBag, Heart];

const businessBenefitIcons = [TrendingUp, Users, Recycle];

export default function HomePage() {
  const t = useTranslations("HomePage");

  const benefitItems = t.raw("benefits.items") as Array<{ title: string; desc: string }>;
  const stepItems = t.raw("steps.items") as Array<{ title: string; desc: string }>;
  const sustainabilityStats = t.raw("sustainability.stats") as Array<{ value: string; desc: string }>;
  const testimonials = t.raw("testimonials.items") as Array<{ name: string; role: string; text: string }>;
  const businessBenefitTexts = t.raw("business.benefits") as string[];

  const sustainabilityIcons = ["🌍", "🇹🇷", "🌾"];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/80 to-ink/90" aria-hidden="true" />
        <motion.div
          className="absolute top-1/4 right-10 w-64 h-64 bg-olive/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-96 h-96 bg-mustard/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.18, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.div variants={fadeUp}>
              <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] text-balance">
              {t("hero.headline1")}{" "}
              <span className="text-olive-light">{t("hero.headline2")}</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </motion.p>

            <motion.div variants={fadeUp}>
              <AppButtons showLabel={true} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/isletmeler" className="text-white/60 hover:text-white text-sm font-semibold flex items-center gap-1.5 transition-colors group">
                {t("hero.forBusinesses")}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <span className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">{t("hero.scrollHint")}</span>
          <div className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center">
            <ChevronDown size={13} className="text-white/50" />
          </div>
        </motion.div>

        {/* Floating social proof */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
          className="absolute bottom-28 right-8 sm:right-16 hidden sm:flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3"
        >
          <div className="flex -space-x-2">
            {["A", "M", "Z"].map((c, k) => (
              <div key={k} className="w-7 h-7 rounded-full bg-gradient-to-br from-olive to-olive-dark border-2 border-ink flex items-center justify-center text-white text-[10px] font-black">
                {c}
              </div>
            ))}
          </div>
          <div>
            <div className="text-white text-xs font-bold leading-tight">{t("hero.socialProof")}</div>
            <div className="text-white/50 text-[10px]">{t("hero.socialProofSub")}</div>
          </div>
        </motion.div>
      </section>

      {/* MİSYON BANDI */}
      <section className="bg-olive py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-white text-xl sm:text-2xl font-bold leading-relaxed">
            {t("mission.text")}{" "}
            <span className="text-white/80">{t("mission.sub")}</span>
          </p>
          <p className="mt-3 text-white/70 text-base">{t("mission.desc")}</p>
        </motion.div>
      </section>

      {/* NEDEN RESCUED */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("benefits.label")}
            title={t("benefits.title")}
            subtitle={t("benefits.subtitle")}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefitItems.map((b, i) => {
              const Icon = benefitIcons[i];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group relative bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border border-transparent hover:border-olive/10"
                >
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${benefitAccents[i]} rounded-t-3xl`} />
                  <span className="absolute top-4 right-5 text-6xl font-black text-ink/[0.035] select-none leading-none pointer-events-none">
                    {benefitNumbers[i]}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl ${benefitIconBgs[i]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={benefitIconColors[i]} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-ink mb-2">{b.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* KATEGORİ ŞERİDİ */}
      <Marquee />

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("steps.label")}
            title={t("steps.title")}
            subtitle={t("steps.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stepItems.map((step, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative"
                >
                  {i < stepItems.length - 1 && (
                    <div className="hidden lg:flex absolute top-10 left-[calc(100%_-_12px)] w-8 items-center z-10" aria-hidden="true">
                      <div className="h-px w-full bg-gradient-to-r from-olive/30 to-olive/10" />
                      <div className="w-1.5 h-1.5 rounded-full bg-olive/25 flex-shrink-0" />
                    </div>
                  )}
                  <div className="group bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden border border-transparent hover:border-olive/10">
                    <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-olive/[0.05] rounded-full group-hover:scale-150 group-hover:bg-olive/[0.08] transition-all duration-700" />
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-olive to-olive-dark flex items-center justify-center shadow-soft group-hover:shadow-soft-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                        <Icon size={20} className="text-white" aria-hidden="true" />
                      </div>
                      <span className="text-5xl font-black text-ink/[0.05] leading-none select-none">0{i + 1}</span>
                    </div>
                    <h3 className="text-xl font-black text-ink mb-2 relative z-10">{step.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed relative z-10">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ETKİ SAYAÇLARI */}
      <section className="section-padding bg-ink text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/30 via-transparent to-mustard/10" aria-hidden="true" />
        <div className="container-wide mx-auto relative">
          <SectionHeading
            label={t("impact.label")}
            title={t("impact.title")}
            subtitle={t("impact.subtitle")}
            theme="dark"
          />
          <div className="grid sm:grid-cols-3 gap-12">
            <ImpactCounter value={47820} suffix="+" label={t("impact.counter1Label")} sublabel={t("impact.counter1Sub")} color="olive" />
            <ImpactCounter value={12400} suffix=" kg" label={t("impact.counter2Label")} sublabel={t("impact.counter2Sub")} color="mustard" />
            <ImpactCounter value={340} suffix="+" label={t("impact.counter3Label")} sublabel={t("impact.counter3Sub")} color="terracotta" />
          </div>
          <p className="text-center text-white/30 text-xs mt-10">
            {t("impact.disclaimer")}
          </p>
        </div>
      </section>

      {/* SÜRDÜRÜLEBİLİRLİK */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("sustainability.label")}
            title={t("sustainability.title")}
            subtitle={t("sustainability.subtitle")}
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {sustainabilityStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 text-center overflow-hidden relative border border-transparent hover:border-olive/10"
              >
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-olive/[0.05] rounded-full group-hover:scale-150 transition-transform duration-700" />
                <div className="text-5xl mb-4">{sustainabilityIcons[i]}</div>
                <div className="text-3xl font-black text-olive mb-3">{stat.value}</div>
                <p className="text-sm text-ink/60 leading-relaxed relative z-10">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/surdurulebilirlik" className="btn-secondary inline-flex items-center gap-2">
              <Leaf size={16} />
              {t("sustainability.ctaButton")}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* İŞLETME TEASER */}
      <section className="section-padding bg-cream-dark overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-olive/20 to-mustard/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏪</div>
                  <p className="text-ink/40 text-sm">{t("business.mockupLabel")}</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-soft-lg p-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-olive/10 rounded-xl flex items-center justify-center">
                    <TrendingUp size={18} className="text-olive" />
                  </div>
                  <div>
                    <div className="text-xs text-ink/40">{t("business.thisMonth")}</div>
                    <div className="text-sm font-black text-ink">{t("business.extraIncome")}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">{t("business.label")}</span>
              <h2 className="text-4xl font-black text-ink mt-3 mb-4 leading-tight">
                {t("business.title")}{" "}
                <span className="text-olive">{t("business.titleHighlight")}</span>
              </h2>
              <p className="text-ink/60 leading-relaxed mb-8">{t("business.desc")}</p>
              <ul className="space-y-4 mb-8">
                {businessBenefitTexts.map((text, i) => {
                  const Icon = businessBenefitIcons[i];
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 bg-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={16} className="text-olive" />
                      </div>
                      <span className="text-ink/80 font-medium text-sm">{text}</span>
                    </motion.li>
                  );
                })}
              </ul>
              <Link href="/isletmeler" className="btn-primary inline-flex items-center gap-2">
                {t("business.cta")}
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOSYAL KANIT */}
      <section className="section-padding bg-olive overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white,transparent)]" />
        </div>
        <div className="container-wide mx-auto relative">
          <SectionHeading
            label={t("testimonials.label")}
            title={t("testimonials.title")}
            subtitle={t("testimonials.subtitle")}
            theme="dark"
          />
          {/* Partner logos placeholder */}
          <div className="flex flex-wrap justify-center gap-6 mb-14" aria-label="Partner logos">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-24 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/30 text-xs font-bold">
                LOGO
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-7 border border-white/15 hover:border-white/25 hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <span key={j} className="text-mustard text-sm leading-none">★</span>
                  ))}
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-5 flex-1">&ldquo;{item.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/25 to-white/10 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0 border border-white/20">
                    {item.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{item.name}</div>
                    <div className="text-white/50 text-xs">{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BEKLEME LİSTESİ */}
      <section className="section-padding bg-cream" id="bekleme-listesi">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-56 bg-gradient-to-b from-olive/20 to-olive/5 rounded-[2rem] border-2 border-olive/20 flex items-center justify-center mx-auto mb-8">
              <span className="text-3xl">📱</span>
            </div>
            <RescuedBadge size="md" className="mb-4" />
            <h2 className="text-4xl sm:text-5xl font-black text-ink mb-4 leading-tight">
              {t("waitlist.title")}
            </h2>
            <p className="text-ink/60 mb-8 text-lg">{t("waitlist.subtitle")}</p>
            <WaitlistForm />
            <p className="mt-4 text-xs text-ink/30">{t("waitlist.spamNote")}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
