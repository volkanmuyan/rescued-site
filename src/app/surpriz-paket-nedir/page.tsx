"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, XCircle, Package, MapPin, Clock, Smile } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { AppButtons } from "@/components/AppButtons";

const canContain = [
  "Fırın ürünleri: ekmek, simit, poğaça, börek",
  "Tatlılar: kek, kurabiye, pasta dilimleri, baklava",
  "Hazır yemekler: sıcak servis artıkları, porsiyonlar",
  "Sandviç ve wrap çeşitleri",
  "Meyve, sebze ve market ürünleri",
  "İçecekler: suyu, ayranı, meyve suyu vb.",
  "Kahvaltılık ürünler: peynir, zeytin, reçel vb.",
];

const cannotContain = [
  "Son kullanma tarihi geçmiş ürünler",
  "Görünür şekilde bozulmuş veya küflenmiş gıdalar",
  "Alkollü içecekler",
  "Gıda dışı ürünler",
];

const steps = [
  { icon: MapPin, title: "Yakınındaki paketi bul", desc: "Uygulamayı aç, konumuna en yakın Sürpriz Paketleri listele. Harita veya liste görünümü, tercihine göre." },
  { icon: Package, title: "Paketini seç ve öde", desc: "Beğendiğin işletmenin paketini seç. Uygulama içinden güvenle öde, onayın anında gelir." },
  { icon: Clock, title: "Belirtilen saatte git", desc: "İşletmenin belirlediği teslim saat aralığında işletmeye git. Genellikle kapanış öncesi 1-2 saatlik pencere." },
  { icon: Smile, title: "Sürprizi keşfet!", desc: "Paketi al, eve git, içindekileri keşfet. Her paket farklı — bu da eğlencenin bir parçası." },
];

export default function SurprizPaketPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Sürpriz Paket Nedir?
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Yerel işletmelerin gün sonu satılamayan ama tamamen taze ve lezzetli ürünlerini
              büyük indirimle sana sunan bir kurtarma paketi.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-4xl">
          <SectionHeading
            label="Konsept"
            title="Her gün yüzlerce yemek çöpe gidiyor"
            subtitle="Fırınlar, pastaneler, restoranlar ve marketler kapanışta artakalan ürünleri atmak zorunda kalıyor. Sürpriz Paket, bu ürünleri sana ulaştırır — hem ucuza hem de gezegenin iyiliğine."
          />

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-black text-ink mb-5 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-olive" />
                Pakette neler olabilir?
              </h3>
              <ul className="space-y-3">
                {canContain.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <CheckCircle2 size={15} className="text-olive flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-soft">
              <h3 className="text-lg font-black text-ink mb-5 flex items-center gap-2">
                <XCircle size={20} className="text-terracotta" />
                Pakette neler olamaz?
              </h3>
              <ul className="space-y-3">
                {cannotContain.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/70">
                    <XCircle size={15} className="text-terracotta flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-cream rounded-2xl">
                <p className="text-xs text-ink/50 leading-relaxed">
                  Tüm Rescued işletmeleri platform kurallarını kabul ederek kayıt olur.
                  Güvenli olmayan ürün bildirimleri 24 saat içinde incelenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-4xl">
          <SectionHeading label="İlk Paketin" title="İlk Sürpriz Paketini nasıl kurtarırsın?" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-4 mx-auto">
                  <step.icon size={22} />
                </div>
                <h3 className="font-black text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <SectionHeading label="Fiyatlandırma" title="Ne kadar ödeyeceğim?" />
          <div className="bg-white rounded-3xl p-8 shadow-soft mb-8">
            <p className="text-ink/70 leading-relaxed mb-6">
              Her Sürpriz Paket, içeriğin normal piyasa değerinin <strong className="text-olive">en az %50 altında</strong> fiyatlanır.
              Bir işletmenin 150 ₺&apos;lik ürünleri genellikle 40-70 ₺&apos;ye Sürpriz Paket olarak sunulur.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Ortalama paket değeri", value: "120-200 ₺" },
                { label: "Ortalama paket fiyatı", value: "45-80 ₺" },
                { label: "Ortalama tasarruf", value: "%55-70" },
              ].map((item, i) => (
                <div key={i} className="bg-cream rounded-2xl p-4">
                  <div className="text-xl font-black text-olive">{item.value}</div>
                  <div className="text-xs text-ink/50 mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <AppButtons showLabel={true} />
          <p className="mt-4 text-sm text-ink/40">Uygulama yakında — bekleme listesine katıl</p>
          <Link href="/#bekleme-listesi" className="text-olive text-sm font-bold hover:underline mt-2 inline-block">
            Bekleme Listesi →
          </Link>
        </div>
      </section>
    </>
  );
}
