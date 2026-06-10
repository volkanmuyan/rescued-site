"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { Timeline, type TimelineEvent } from "@/components/Timeline";

const timelineEvents: TimelineEvent[] = [
  {
    year: "Şubat 2023",
    title: "Sorun fark edildi",
    description:
      "İstanbul Beşiktaş'ta bir fırın vitrininin kapanışta nasıl boşaltıldığını izlemek her şeyi değiştirdi. Araştırmalar başladı: Türkiye'de yıllık gıda israfı, hangi sektörler, hangi çözümler.",
    badge: "Başlangıç",
  },
  {
    year: "Mayıs 2023",
    title: "İlk prototip",
    description:
      "Tek bir mahallede, 5 işletmeyle manuel test: WhatsApp grubu, günlük paket bildirimi, kullanıcı geri bildirimi. Konsept doğrulandı — insanlar hem istedi hem de geldiler.",
  },
  {
    year: "Eylül 2023",
    title: "Ekip kuruldu",
    description:
      "Dört ortak bir araya geldi. Teknoloji, işletme ilişkileri, ürün tasarımı ve sürdürülebilirlik alanlarında uzman bir çekirdek ekip. İlk yatırım turu başladı.",
    badge: "Ekip",
  },
  {
    year: "Ocak 2024",
    title: "İlk uygulama versiyonu",
    description:
      "Beta uygulaması Beşiktaş ve Kadıköy'de 12 partner işletme ile yayına girdi. İlk haftada 340 paket kurtarıldı. Kullanıcı memnuniyet skoru 4.7/5.",
  },
  {
    year: "Haziran 2024",
    title: "Ankara & İzmir'e açıldık",
    description:
      "İstanbul başarısı sonrası Ankara ve İzmir operasyonları hayata geçti. 80 yeni partner işletme onboarding sürecini tamamladı. Toplamda 120+ aktif işletmeye ulaşıldı.",
    badge: "Büyüme",
  },
  {
    year: "Aralık 2024",
    title: "10.000. öğün kurtarıldı",
    description:
      "Önemli bir kilometre taşı: 10.000. kurtarılan öğün. Topluluk büyümeye devam etti. Etki raporu yayınlandı, CO₂e metodolojisi bağımsız olarak doğrulandı.",
  },
  {
    year: "2025",
    title: "Ölçekleme ve yeni özellikler",
    description:
      "340+ işletme, 18.500+ kullanıcı, 47.000+ kurtarılan öğün. Yeni şehirlere açılım planları hazırlanıyor. Kurumsal ESG paketleri ve B2B çözümler geliştiriliyor.",
    badge: "Bugün",
  },
];

export default function HikayemizPage() {
  return (
    <>
      {/* HERO */}
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
            <Link
              href="/hakkimizda"
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 text-sm font-semibold transition-colors"
            >
              ← Hakkımızda
            </Link>
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-balance">
              Hikâyemiz
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Sıradan bir akşam gözleminden başlayarak 47.000+ kurtarılan öğüne uzanan yolculuk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AÇILIŞ */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-10 shadow-soft border-l-4 border-olive"
          >
            <p className="text-2xl font-black text-ink leading-snug mb-4">
              &ldquo;Bu neden böyle olmalı?&rdquo;
            </p>
            <p className="text-ink/65 leading-relaxed">
              2023&apos;ün soğuk bir şubat akşamında İstanbul&apos;da bir fırın vitrini bize bu soruyu sordu.
              Doludan boşa dönen raflar, çöpe gidecek lezzetler. Bu sorudan Rescued doğdu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ZİYARET ÖNCESI BAĞLAM */}
      <section className="section-padding bg-cream-dark pt-0">
        <div className="container-wide mx-auto max-w-2xl text-center mb-16">
          <SectionHeading
            label="Kilometre Taşları"
            title="Fikrinden bugüne, adım adım"
            subtitle="Küçük bir gözlemden ölçeklenebilir bir platforma uzanan gerçek yolculuk."
          />
        </div>

        {/* TIMELINE */}
        <div className="container-wide mx-auto max-w-4xl">
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* MISYON BANT */}
      <section className="bg-olive py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
            Bu hikâye henüz bitmedi.
          </p>
          <p className="text-white/75 text-lg mb-8">
            Her yeni şehir, her yeni işletme, her kurtarılan paket bu hikâyenin bir sonraki sayfası.
            Sen de bu hikâyenin bir parçasısın.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#bekleme-listesi" className="bg-white text-olive font-bold px-7 py-3.5 rounded-full hover:bg-cream transition-colors flex items-center gap-2">
              Uygulamayı Bekle
              <ArrowRight size={15} />
            </Link>
            <Link href="/isletmeler" className="border-2 border-white/40 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
              İşletmeni Kaydet
            </Link>
          </div>
        </motion.div>
      </section>

      {/* İLGİLİ SAYFALAR */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/hakkimizda/etki-raporu" className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all flex items-center justify-between gap-4 group">
              <div>
                <div className="text-xs font-bold text-ink/40 uppercase tracking-wider mb-1">Sıradaki</div>
                <div className="font-black text-ink group-hover:text-olive transition-colors">Etki Raporumuz</div>
              </div>
              <ArrowRight size={18} className="text-olive flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/hakkimizda/ekip" className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all flex items-center justify-between gap-4 group">
              <div>
                <div className="text-xs font-bold text-ink/40 uppercase tracking-wider mb-1">Keşfet</div>
                <div className="font-black text-ink group-hover:text-olive transition-colors">Ekibimiz</div>
              </div>
              <ArrowRight size={18} className="text-olive flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
