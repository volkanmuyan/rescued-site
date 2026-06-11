"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
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

const tripleWin = [
  {
    icon: TrendingUp,
    who: "İşletmeler",
    color: "bg-olive/10 text-olive",
    title: "Fazlası gelire dönüşür",
    desc: "Gün sonu atılacak ürünler ek gelir kaynağına ve yeni müşteri kazanımına dönüşür.",
  },
  {
    icon: Users,
    who: "Kullanıcılar",
    color: "bg-mustard/10 text-mustard",
    title: "Uygun fiyata iyi yemek",
    desc: "Kaliteli, taze yemeğe yarı fiyatına ulaşırken mahallelerindeki gizli lezzetleri keşfederler.",
  },
  {
    icon: Globe,
    who: "Gezegen",
    color: "bg-terracotta/10 text-terracotta",
    title: "Her paketle bir nefes",
    desc: "Kurtarılan her paket, önlenen CO₂e emisyonu ve korunan doğal kaynaklar demektir.",
  },
];


const team = [
  {
    name: "Ayşe Kaya",
    title: "Kurucu & CEO",
    bio: "Gıda teknolojisi ve sürdürülebilirlik alanında 8 yıl deneyim. Boğaziçi Üniversitesi mezunu.",
  },
  {
    name: "Mehmet Demir",
    title: "Kurucu & CTO",
    bio: "Ölçeklenebilir tüketici uygulamaları üzerine 10 yıl. Daha önce 2 girişim kurdu.",
  },
  {
    name: "Zeynep Arslan",
    title: "İşletme İlişkileri",
    bio: "Yerel işletmeler ve esnaf ekosistemiyle köklü ilişkiler. METU Gıda Mühendisliği mezunu.",
  },
  {
    name: "Can Yıldız",
    title: "Ürün & Tasarım",
    bio: "Kullanıcı deneyimi odaklı ürün geliştirme. Daha önce büyük platformlarda UX lead.",
  },
];

const subpageCards = [
  {
    icon: BarChart3,
    title: "Etki Raporumuz",
    desc: "Kurtarılan öğünler, önlenen CO₂e ve su/enerji eşdeğerleri — rakamlarla etki.",
    href: "/hakkimizda/etki-raporu",
    color: "bg-olive/10 text-olive",
  },
  {
    icon: MapPin,
    title: "Nerelerdeyiz?",
    desc: "Şu an hangi şehirlerde aktifiz ve yakında nereye genişliyoruz.",
    href: "/hakkimizda/nerelerdeyiz",
    color: "bg-mustard/10 text-mustard",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-0 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink/90" aria-hidden="true" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-4xl pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] text-balance">
              Gıda israfına karşı,{" "}
              <span className="text-olive-light">birlikte.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
              Rescued, herkesi gıda israfıyla mücadeleye davet eden bir sosyal etki girişimidir.
            </p>
          </motion.div>
        </div>

        {/* Geniş görsel placeholder */}
        {/* Gerçek görsel buraya gelecek — ekip fotoğrafı veya misyon sahnesi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto"
        >
          <div className="w-full aspect-[16/6] bg-gradient-to-br from-olive/30 via-olive-dark/20 to-ink/60 rounded-t-3xl flex items-center justify-center border-t border-x border-white/10">
            <div className="text-center">
              <div className="text-5xl mb-3">🌱</div>
              <p className="text-white/30 text-sm">Ekip / misyon görseli buraya gelecek</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* HAYAL BANDI */}
      <section className="bg-olive py-16 px-4 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight text-balance">
            Gıdanın israf edilmediği bir{" "}
            <span className="text-white/60">Türkiye hayal ediyoruz.</span>
          </p>
        </motion.div>
      </section>

      {/* ETKİ SAYAÇLARI */}
      <section className="section-padding bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/20 via-transparent to-mustard/10" aria-hidden="true" />
        <div className="container-wide mx-auto relative">
          <SectionHeading
            label="Etki"
            title="Topluluğumuzun yarattığı fark"
            subtitle="Her öğün gerçek bir hikâye. İşte o hikâyenin sayısal özeti."
          />
          <div className="grid sm:grid-cols-3 gap-12 mb-12">
            <ImpactCounter value={47820} suffix="+" label="Kurtarılan Öğün" sublabel="ve her gün artıyor" color="olive" />
            <ImpactCounter value={18500} suffix="+" label="Kayıtlı Kullanıcı" sublabel="aktif topluluk üyesi" color="mustard" />
            <ImpactCounter value={340} suffix="+" label="Partner İşletme" sublabel="Türkiye genelinde" color="terracotta" />
          </div>
          <div className="text-center">
            <AppButtons showLabel={true} />
            <p className="mt-4 text-white/30 text-xs">
              * Veriler gerçekçi placeholder değerler içermektedir.
            </p>
          </div>
        </div>
      </section>

      {/* HİKÂYEMİZ TEASER */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">Hikâyemiz</span>
              <h2 className="text-4xl font-black text-ink mt-3 mb-5 leading-tight">
                Her şey sıradan bir{" "}
                <span className="text-olive">akşamla başladı.</span>
              </h2>
              <div className="space-y-4 text-ink/65 leading-relaxed">
                <p>
                  Mahalledeki fırın kapanmak üzereydi, vitrin doluydu — ama kalanların bir kısmı çöpe gidecekti.
                  Bu görüntü bize bir soru sordu: <em className="text-ink font-semibold">&ldquo;Bu neden böyle olmalı?&rdquo;</em>
                </p>
                <p>
                  Türkiye&apos;de her yıl milyonlarca ton gıda israf ediliyor. Çözüm, zincirin tamamını değiştirmeyi
                  gerektirmiyordu — sadece son birkaç saate odaklanmak yeterliydi.
                </p>
              </div>
              <Link
                href="/hakkimizda/hikayemiz"
                className="mt-6 inline-flex items-center gap-2 text-olive font-bold hover:gap-3 transition-all"
              >
                Devamını oku
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Timeline mini preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                { year: "2023", title: "Fikir doğdu", desc: "İstanbul&apos;da ilk araştırmalar ve problem keşfi." },
                { year: "2024", title: "İlk partnerler", desc: "Beşiktaş ve Kadıköy&apos;de 12 pilot işletme ile başladık." },
                { year: "2025", title: "Büyüme", desc: "3 şehir, 340+ işletme, 47.000+ kurtarılan öğün." },
              ].map((item, i) => (
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
                Tüm zaman çizelgesi
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* İŞ MODELİ: KAZAN-KAZAN-KAZAN */}
      <section className="section-padding bg-cream-dark overflow-hidden">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="İş Modeli"
            title="Kazan · Kazan · Kazan"
            subtitle="Rescued'da hiçbir taraf fedakârlık yapmaz. Her paket üç taraf için de net kazanç üretir."
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {tripleWin.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon size={22} aria-hidden="true" />
                </div>
                <div className="text-xs font-black text-ink/30 uppercase tracking-widest mb-2">{item.who}</div>
                <h3 className="text-lg font-black text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* İklim bağlantısı */}
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
              <h3 className="font-black text-ink mb-2">Gıda israfı ve iklim krizi</h3>
              <p className="text-sm text-ink/65 leading-relaxed max-w-2xl">
                Gıda israfını azaltmak, bireylerin iklim kriziyle mücadelede alabileceği en etkili aksiyonlardan biridir.
                Dünyada üretilen gıdanın üçte biri hiç tüketilmeden atılıyor ve bu süreç küresel sera gazı emisyonlarının
                yaklaşık %8–10&apos;undan sorumlu. Her Sürpriz Paket bu döngüyü kırar.
              </p>
              <p className="text-xs text-ink/30 mt-3">
                Kaynak: FAO (2011), IPCC AR6 (2022) — metodoloji detayları için{" "}
                <Link href="/surdurulebilirlik" className="text-olive hover:underline">
                  Sürdürülebilirlik sayfamıza
                </Link>{" "}
                bakın.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SÜRDÜRÜLEBİLİRLİK & ETKİ TEASER */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {subpageCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={card.href} className="block bg-white rounded-3xl p-8 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center mb-5`}>
                    <card.icon size={22} />
                  </div>
                  <h3 className="text-xl font-black text-ink mb-2 group-hover:text-olive transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed mb-4">{card.desc}</p>
                  <span className="flex items-center gap-1.5 text-olive text-sm font-bold group-hover:gap-2.5 transition-all">
                    Keşfet <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* ESG özeti */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="sm:col-span-2 bg-olive rounded-3xl p-8 text-white"
            >
              <div className="grid sm:grid-cols-3 gap-6 items-center">
                <div className="sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2 block">ESG Yaklaşımı</span>
                  <h3 className="text-2xl font-black mb-3">Sürdürülebilirlik, çalışma şeklimizdir</h3>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Çevresel etki ölçümü, sosyal kapsayıcılık ve şeffaf yönetişim Rescued&apos;ın DNA&apos;sında var.
                    Yıllık etki raporlarımız, metodolojimizi ve hedeflerimizi kamuoyuyla paylaşır.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link href="/surdurulebilirlik" className="flex items-center justify-between bg-white/15 hover:bg-white/20 transition-colors rounded-2xl px-5 py-3 font-bold text-sm">
                    Sürdürülebilirlik
                    <ArrowRight size={14} />
                  </Link>
                  <Link href="/hakkimizda/etki-raporu" className="flex items-center justify-between bg-white/15 hover:bg-white/20 transition-colors rounded-2xl px-5 py-3 font-bold text-sm">
                    Etki Raporu
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EKİBİMİZ */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Ekibimiz"
            title="Bu işi kim yapıyor?"
            subtitle="Gıda israfına karşı savaşmak için bir araya geldik."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {team.map((member, i) => (
              <TeamMemberCard key={i} {...member} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/hakkimizda/ekip" className="btn-secondary inline-flex items-center gap-2">
              Tüm Ekibi & Danışma Kurulunu Gör
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <Marquee />

      {/* KAPANIŞ CTA ÇİFTİ */}
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
              <h2 className="text-4xl font-black text-ink mb-3">Her öğün değerli.</h2>
              <p className="text-ink/60 text-lg">
                Uygulamayı indir, yakınındaki Sürpriz Paketleri keşfet — ya da işletmeni Rescued ailesine katmak için hemen başvur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <AppButtons showLabel={true} />
            </div>

            <Link
              href="/isletmeler"
              className="flex items-center gap-2 text-olive font-bold hover:gap-3 transition-all"
            >
              <div className="w-8 h-8 bg-olive/10 rounded-xl flex items-center justify-center">
                <Smartphone size={14} className="text-olive" />
              </div>
              İşletmeni kaydet
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
