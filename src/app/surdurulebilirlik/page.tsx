"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { ImpactCounter } from "@/components/ImpactCounter";

const methodology = [
  {
    step: "01",
    title: "Kurtarılan ürün ağırlığı ölçülür",
    desc: "Her Sürpriz Paket için işletme tarafından girilen içerik bilgileri ve ortalama ağırlık değerleri kullanılarak kurtarılan gıda miktarı hesaplanır.",
  },
  {
    step: "02",
    title: "CO₂e çevrim faktörü uygulanır",
    desc: "FAO ve WRAP kaynaklı gıda kategorisi bazlı CO₂e emisyon faktörleri ile kurtarılan ağırlık çarpılır.",
  },
  {
    step: "03",
    title: "Etki raporlanır",
    desc: "Her kullanıcı ve işletme, kendi profilinde kümülatif etki verilerini görebilir. Yıllık raporlar kamuoyuyla paylaşılır.",
  },
];

export default function SurdurulebilirlikPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Sürdürülebilirlik
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Gıda israfını azaltmak, iklim kriziyle mücadelenin en güçlü araçlarından biridir.
              Rescued&apos;da her paketin çevresel etkisini şeffaf bir şekilde ölçüyoruz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-ink text-white">
        <div className="container-wide mx-auto">
          <SectionHeading label="Etki" title="Sayılarla Rescued etkisi" />
          <div className="grid sm:grid-cols-3 gap-12">
            <ImpactCounter value={47820} suffix="+" label="Kurtarılan Öğün" color="olive" />
            <ImpactCounter value={12400} suffix=" kg" label="Önlenen CO₂e" color="mustard" />
            <ImpactCounter value={6800} suffix=" lt" label="Tasarruf Edilen Su" sublabel="gıda üretiminde kullanılan" color="terracotta" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label="Metodoloji" title="Etkiyi nasıl hesaplıyoruz?" subtitle="Şeffaflık ilkemiz gereği, tüm etki hesaplama yöntemimizi açık paylaşıyoruz." />
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
                <span className="text-3xl font-black text-olive/20 flex-shrink-0">{item.step}</span>
                <div>
                  <h3 className="font-black text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-olive/5 rounded-2xl border border-olive/15">
            <p className="text-sm text-ink/60 leading-relaxed">
              <strong className="text-ink">Kaynaklar:</strong> FAO (2011) Global food losses and food waste; WRAP (2021) The food we waste;
              IPCC AR6 (2022) Food system emissions data. Metodoloji detayları ve yıllık raporlar şeffaflık belgelerimizde yayınlanmaktadır.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label="Hedefler" title="2026 Sürdürülebilirlik Hedefleri" />
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { target: "500.000", unit: "öğün", label: "kurtarılmış öğün" },
              { target: "1.000+", unit: "işletme", label: "aktif partner işletme" },
              { target: "130 ton", unit: "CO₂e", label: "önlenmiş emisyon" },
              { target: "10+", unit: "şehir", label: "Türkiye geneli kapsama" },
            ].map((item, i) => (
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
