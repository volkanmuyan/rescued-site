"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { RescuedBadge } from "@/components/RescuedBadge";
import Link from "next/link";

const userFaqs = [
  {
    question: "Sürpriz Paket nedir?",
    answer: "Sürpriz Paket, yerel işletmelerin gün sonu satılamayan ama tamamen taze ve tüketilebilir ürünlerini büyük indirimle sana sunan bir kurtarma paketidir. İçerik her gün farklıdır — bu da eğlencenin bir parçası.",
  },
  {
    question: "Paketi nereden alabilirim?",
    answer: "Uygulamayı indirip konumuna izin verdiğinde, yakınındaki tüm aktif Sürpriz Paket işletmelerini haritada görebilirsin. Tercih ettiğin paketi rezerve edip, belirlenen saatte işletmeye gitmen yeterli.",
  },
  {
    question: "Pakette ne olduğunu önceden bileceğim mi?",
    answer: "Genel kategori (fırın ürünleri, tatlı, hazır yemek vb.) ile olası içerikler listelenir. Ama tam içerik her gün değişir — bu da sürprizin ve keşfin tadıdır.",
  },
  {
    question: "Alerjen ürün var mı?",
    answer: "İşletmeler temel alerjen bilgilerini (gluten, süt, yumurta, kuruyemiş vb.) profilde belirtmekle yükümlüdür. Ciddi alerjiniz varsa, rezervasyon öncesinde işletmeyle doğruca iletişime geçebilirsin.",
  },
  {
    question: "Ödeme güvenli mi?",
    answer: "Evet. Tüm ödemeler Rescued altyapısı üzerinden güvenli şekilde işlenir. Kart bilgilerin işletmeyle paylaşılmaz.",
  },
  {
    question: "Paketi iptal edebilir miyim?",
    answer: "Teslim saatinden en az 2 saat önce iptal ettiğinde tam iade alırsın. Sonraki iptallerde iade politikası uygulamada detaylandırılmıştır.",
  },
  {
    question: "İşletme kapalıysa ne olur?",
    answer: "Böyle bir durumda tam iade yapılır ve destek ekibimiz seni bilgilendirir. Tekrarlayan güvenilirlik sorunları olan işletmeler platformdan kaldırılır.",
  },
  {
    question: "Kaç paket alabiliririm?",
    answer: "Şu an her kullanıcı, bir işletmeden günde 1 paket alabilir. Bu kural, fırsatın toplulukla adil paylaşılması içindir.",
  },
];

export default function SSSPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-lg text-white/70">
              Aklındaki sorunun cevabını burada bulamazsan, bize yaz.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading label="Kullanıcılar için" title="Uygulama ve Sürpriz Paket Hakkında" />
          <FAQAccordion items={userFaqs} />

          <div className="mt-12 bg-olive/5 rounded-3xl p-8 text-center border border-olive/10">
            <p className="text-ink/60 mb-4">Cevap bulamadın mı?</p>
            <Link href="/iletisim" className="btn-primary inline-flex">
              Bize Yaz
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-ink/40 text-sm mb-2">İşletme sahibi misin?</p>
            <Link href="/isletmeler#sss" className="text-olive font-bold hover:underline text-sm">
              İşletmelere özel SSS →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
