"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download, ArrowRight, BarChart3, Leaf, Droplets, Zap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";

const highlights = [
  {
    icon: Leaf,
    value: "47.820",
    unit: "öğün",
    label: "Kurtarılan Öğün",
    desc: "Türkiye'de açlık sınırı altında yaşayan bireylerin aylık besin ihtiyacının ~1.600 katı.",
    color: "text-olive",
    bg: "bg-olive/10",
  },
  {
    icon: BarChart3,
    value: "12.400",
    unit: "kg CO₂e",
    label: "Önlenen Emisyon",
    desc: "Yaklaşık 850 uçuş saatinin karbonunu telafi etmeye eşdeğer bir tasarruf.",
    color: "text-mustard",
    bg: "bg-mustard/10",
  },
  {
    icon: Droplets,
    value: "6.800",
    unit: "litre",
    label: "Korunan Su",
    desc: "Kurtarılan gıdanın üretiminde kullanılan su miktarı — bu su tekrar doğaya kazandırıldı.",
    color: "text-terracotta",
    bg: "bg-terracotta/10",
  },
  {
    icon: Zap,
    value: "4.200",
    unit: "kWh",
    label: "Tasarruf Edilen Enerji",
    desc: "Atılmayan gıda üretiminin gerektireceği enerji miktarı.",
    color: "text-olive",
    bg: "bg-olive/10",
  },
];

const annualReports = [
  {
    year: "2024",
    title: "Rescued Etki Raporu 2024",
    desc: "İlk tam yıl etki değerlendirmesi. Metodoloji, şehir bazlı dağılım, sektör analizi.",
    badge: "Yeni",
  },
  {
    year: "2023",
    title: "Rescued Etki Raporu 2023",
    desc: "Kuruluş yılı pilot verileri. Metodoloji temelleri ve ilk öğrenimler.",
    badge: null,
  },
];

const sdgGoals = [
  { number: "2", title: "Açlığa Son", color: "bg-yellow-100 text-yellow-800" },
  { number: "12", title: "Sorumlu Tüketim", color: "bg-orange-100 text-orange-800" },
  { number: "13", title: "İklim Eylemi", color: "bg-green-100 text-green-800" },
  { number: "17", title: "Güçlü Ortaklıklar", color: "bg-blue-100 text-blue-800" },
];

export default function EtkiRaporuPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-6"
          >
            <Link href="/hakkimizda" className="text-white/40 hover:text-white/70 text-sm font-semibold transition-colors">
              ← Hakkımızda
            </Link>
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Etki Raporu
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Topluluğumuzun yarattığı gerçek fark. Ölçülebilir, şeffaf, doğrulanabilir.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ÖNCÜ RAKAMLAR */}
      <section className="section-padding bg-ink relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cream/5" aria-hidden="true" />
        <div className="container-wide mx-auto relative">
          <SectionHeading label="2024 Özeti" title="Öne çıkan rakamlar" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 text-white"
              >
                <div className={`w-11 h-11 ${item.bg} rounded-2xl flex items-center justify-center mb-5`}>
                  <item.icon size={20} className={item.color} />
                </div>
                <div className={`text-4xl font-black ${item.color} leading-none`}>
                  {item.value}
                </div>
                <div className="text-white/40 text-xs font-semibold mt-0.5 mb-2">{item.unit}</div>
                <div className="text-sm font-bold text-white mb-2">{item.label}</div>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GRAFİK PLACEHOLDER'LAR */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Görsel Analiz"
            title="Etki verileri, görsel olarak"
            subtitle="Aylık büyüme, şehir bazlı dağılım ve sektör kırılımı."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Aylık Kurtarılan Öğün", type: "Çizgi Grafik" },
              { title: "Şehir Bazlı Dağılım", type: "Pasta Grafik" },
              { title: "Sektör Kırılımı", type: "Bar Grafik" },
            ].map((chart, i) => (
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
                {/* Grafik placeholder — gerçek grafik buraya gelecek (Recharts veya Chart.js) */}
                <div className="flex-1 bg-cream rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 size={32} className="text-olive/20 mx-auto mb-2" />
                    <p className="text-ink/25 text-xs">Grafik buraya gelecek</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BM SÜRDÜRÜLEBİLİR KALKINMA HEDEFLERİ */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading
            label="BM SKH"
            title="Sürdürülebilir Kalkınma Hedefleri"
            subtitle="Rescued'ın faaliyetleri Birleşmiş Milletler'in aşağıdaki SKH'leriyle doğrudan örtüşmektedir."
          />
          <div className="grid sm:grid-cols-4 gap-4">
            {sdgGoals.map((goal, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`${goal.color} rounded-2xl p-5 text-center`}
              >
                <div className="text-4xl font-black mb-1">{goal.number}</div>
                <div className="text-xs font-bold">{goal.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İNDİRİLEBİLİR PDF RAPORLAR */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl">
          <SectionHeading label="Arşiv" title="Yıllık raporları indir" />
          <div className="space-y-4">
            {annualReports.map((report, i) => (
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
                {/* PDF indirme — gerçek dosya linki sonraki fazda */}
                <button
                  className="flex items-center gap-2 text-olive font-bold text-sm hover:bg-olive/10 px-4 py-2.5 rounded-xl transition-colors flex-shrink-0"
                  aria-label={`${report.title} PDF indir`}
                >
                  <Download size={15} />
                  PDF
                </button>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-ink/30 text-xs mt-6">
            * PDF raporlar lansman sonrası yayınlanacaktır.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-olive">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-white mb-3">Metodolojimizi incele</h2>
          <p className="text-white/75 mb-6">
            CO₂e hesaplama yöntemi, veri kaynakları ve doğrulama sürecimiz hakkında daha fazla bilgi al.
          </p>
          <Link href="/surdurulebilirlik" className="bg-white text-olive font-bold px-7 py-3.5 rounded-full hover:bg-cream transition-colors inline-flex items-center gap-2">
            Sürdürülebilirlik Sayfası
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
