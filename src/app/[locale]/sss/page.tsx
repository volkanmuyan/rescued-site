"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RescuedBadge } from "@/components/RescuedBadge";
import { Link } from "@/i18n/navigation";

export default function SSSPage() {
  const t = useTranslations("SSSPage");

  const faqs = t.raw("faqs") as Array<{ question: string; answer: string }>;

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
          <SectionHeading label={t("userFaqsLabel")} title={t("userFaqsTitle")} />
          <FAQAccordion items={faqs} />

          <div className="mt-12 bg-olive/5 rounded-3xl p-8 text-center border border-olive/10">
            <p className="text-ink/60 mb-4">{t("notFoundText")}</p>
            <Link href="/iletisim" className="btn-primary inline-flex">
              {t("notFoundCta")}
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-ink/40 text-sm mb-2">{t("businessOwner")}</p>
            <Link href="/isletmeler#sss" className="text-olive font-bold hover:underline text-sm">
              {t("businessFaqLink")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
