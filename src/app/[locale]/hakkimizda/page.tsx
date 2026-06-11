"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Globe,
  Leaf,
  BarChart3,
  MapPin,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { ImpactCounter } from "@/components/ImpactCounter";
import { AppButtons } from "@/components/AppButtons";
import { Marquee } from "@/components/Marquee";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Link } from "@/i18n/navigation";

const tripleWinIcons = [TrendingUp, Users, Globe];
const tripleWinColors = ["bg-olive/10 text-olive", "bg-mustard/10 text-mustard", "bg-terracotta/10 text-terracotta"];

const team = [
  { name: "Ayşe Kaya", title: "Kurucu & CEO", bio: "Gıda teknolojisi ve sürdürülebilirlik alanında 8 yıl deneyim. Boğaziçi Üniversitesi mezunu." },
  { name: "Mehmet Demir", title: "Kurucu & CTO", bio: "Ölçeklenebilir tüketici uygulamaları üzerine 10 yıl. Daha önce 2 girişim kurdu." },
  { name: "Zeynep Arslan", title: "İşletme İlişkileri", bio: "Yerel işletmeler ve esnaf ekosistemiyle köklü ilişkiler. METU Gıda Mühendisliği mezunu." },
  { name: "Can Yıldız", title: "Ürün & Tasarım", bio: "Kullanıcı deneyimi odaklı ürün geliştirme. Daha önce büyük platformlarda UX lead." },
];

const subpageCardIcons = [BarChart3, MapPin];
const subpageCardColors = ["bg-olive/10 text-olive", "bg-mustard/10 text-mustard"];
const subpageCardHrefs = ["/hakkimizda/etki-raporu", "/hakkimizda/nerelerdeyiz"];

export default function HakkimizdaPage() {
  const t = useTranslations("HakkimizdaPage");

  const tripleWinItems = t.raw("model.items") as Array<{ who: string; title: string; desc: string }>;
  const timelineItems = t.raw("story.timeline") as Array<{ year: string; title: string; desc: string }>;

  const subpageTitles = [t("subpages.impactReport.title"), t("subpages.whereWeAre.title")];
  const subpageDescs = [t("subpages.impactReport.desc"), t("subpages.whereWeAre.desc")];

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-0 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink/90" aria-hidden="true" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-4xl pb-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] text-balance">
              {t("hero.title1")}{" "}
              <span className="text-olive-light">{t("hero.title2")}</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto"
        >
          <div className="w-full aspect-[16/6] bg-gradient-to-br from-olive/30 via-olive-dark/20 to-ink/60 rounded-t-3xl flex items-center justify-center border-t border-x border-white/10">
            <div className="text-center">
              <div className="text-5xl mb-3">🌱</div>
              <p className="text-white/30 text-sm">Team / mission visual goes here</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* VISION BAND */}
      <section className="bg-olive py-16 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight text-balance">
            {t("vision")}
          </p>
        </motion.div>
      </section>

      {/* IMPACT COUNTERS */}
      <section className="section-padding bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/20 via-transparent to-mustard/10" aria-hidden="true" />
        <div className="container-wide mx-auto relative">
          <SectionHeading
            label={t("impact.label")}
            title={t("impact.title")}
            subtitle={t("impact.subtitle")}
            theme="dark"
          />
          <div className="grid sm:grid-cols-3 gap-12 mb-12">
            <ImpactCounter value={47820} suffix="+" label={t("impact.counter1")} sublabel={t("impact.counter1sub")} color="olive" />
            <ImpactCounter value={18500} suffix="+" label={t("impact.counter2")} sublabel={t("impact.counter2sub")} color="mustard" />
            <ImpactCounter value={340} suffix="+" label={t("impact.counter3")} sublabel={t("impact.counter3sub")} color="terracotta" />
          </div>
          <div className="text-center">
            <AppButtons showLabel={true} />
            <p className="mt-4 text-white/30 text-xs">{t("impact.disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* STORY TEASER */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">{t("story.label")}</span>
              <h2 className="text-4xl font-black text-ink mt-3 mb-5 leading-tight">
                {t("story.title1")}{" "}
                <span className="text-olive">{t("story.title2")}</span>
              </h2>
              <div className="space-y-4 text-ink/65 leading-relaxed">
                <p>
                  {t("story.p1")} <em className="text-ink font-semibold">&ldquo;{t("story.quote")}&rdquo;</em>
                </p>
                <p>{t("story.p2")}</p>
              </div>
              <Link href="/hakkimizda/hikayemiz" className="mt-6 inline-flex items-center gap-2 text-olive font-bold hover:gap-3 transition-all">
                {t("story.readMore")}
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {timelineItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 bg-white rounded-2xl p-5 shadow-soft"
                >
                  <span className="text-2xl font-black text-olive flex-shrink-0 w-12">{item.year}</span>
                  <div>
                    <div className="font-black text-ink text-sm">{item.title}</div>
                    <div className="text-xs text-ink/55 mt-0.5">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
              <Link href="/hakkimizda/hikayemiz" className="flex items-center gap-2 text-olive text-sm font-bold hover:gap-3 transition-all pl-2">
                {t("story.allTimeline")}
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WIN-WIN-WIN */}
      <section className="section-padding bg-cream-dark overflow-hidden">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("model.label")}
            title={t("model.title")}
            subtitle={t("model.subtitle")}
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {tripleWinItems.map((item, i) => {
              const Icon = tripleWinIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-2xl ${tripleWinColors[i]} flex items-center justify-center mb-5`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="text-xs font-black text-ink/30 uppercase tracking-widest mb-2">{item.who}</div>
                  <h3 className="text-lg font-black text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-olive/8 border border-olive/15 rounded-3xl p-8 flex flex-col sm:flex-row gap-6 items-start"
          >
            <div className="w-12 h-12 bg-olive/15 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Leaf size={22} className="text-olive" />
            </div>
            <div>
              <h3 className="font-black text-ink mb-2">{t("model.climateTitle")}</h3>
              <p className="text-sm text-ink/65 leading-relaxed max-w-2xl">{t("model.climateDesc")}</p>
              <p className="text-xs text-ink/30 mt-3">
                {t("model.climateSource")}{" "}
                <Link href="/surdurulebilirlik" className="text-olive hover:underline">
                  {t("model.climateLink")}
                </Link>
                {t("model.climateSuffix")}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SUBPAGE CARDS */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {subpageTitles.map((title, i) => {
              const Icon = subpageCardIcons[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={subpageCardHrefs[i]} className="block bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                    <div className={`w-12 h-12 rounded-2xl ${subpageCardColors[i]} flex items-center justify-center mb-5`}>
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-black text-ink mb-2 group-hover:text-olive transition-colors">{title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed mb-4">{subpageDescs[i]}</p>
                    <span className="flex items-center gap-1.5 text-olive text-sm font-bold group-hover:gap-2.5 transition-all">
                      {t("subpages.explore")} <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}

            {/* ESG card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="sm:col-span-2 bg-olive rounded-3xl p-8 text-white"
            >
              <div className="grid sm:grid-cols-3 gap-6 items-center">
                <div className="sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2 block">{t("subpages.esgLabel")}</span>
                  <h3 className="text-2xl font-black mb-3">{t("subpages.esgTitle")}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{t("subpages.esgDesc")}</p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/surdurulebilirlik" className="flex items-center justify-between bg-white/15 hover:bg-white/20 transition-colors rounded-2xl px-5 py-3 font-bold text-sm">
                    {t("subpages.esgLink1")} <ArrowRight size={14} />
                  </Link>
                  <Link href="/hakkimizda/etki-raporu" className="flex items-center justify-between bg-white/15 hover:bg-white/20 transition-colors rounded-2xl px-5 py-3 font-bold text-sm">
                    {t("subpages.esgLink2")} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TEAM PREVIEW */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label={t("team.label")}
            title={t("team.title")}
            subtitle={t("team.subtitle")}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {team.map((member, i) => (
              <TeamMemberCard key={i} {...member} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/hakkimizda/ekip" className="btn-secondary inline-flex items-center gap-2">
              {t("team.viewAll")}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* CLOSING CTA */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <div>
              <RescuedBadge size="md" className="mb-4" />
              <h2 className="text-4xl font-black text-ink mb-3">{t("cta.title")}</h2>
              <p className="text-ink/60 text-lg">{t("cta.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AppButtons showLabel={true} />
            </div>

            <Link href="/isletmeler" className="flex items-center gap-2 text-olive font-bold hover:gap-3 transition-all">
              <div className="w-8 h-8 bg-olive/10 rounded-xl flex items-center justify-center">
                <Smartphone size={14} className="text-olive" />
              </div>
              {t("cta.businessLink")}
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
