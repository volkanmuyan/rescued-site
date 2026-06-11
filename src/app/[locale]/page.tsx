"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const benefits = [
  {
    icon: Tag,
    title: "Yarı fiyat ve altı",
    desc: "Kaliteli yemeği bütçeni sarsmadan al. Her Sürpriz Paket piyasa değerinin en az %50 altında.",
    color: "bg-olive/10 text-olive",
  },
  {
    icon: MapPin,
    title: "Hemen yakınında",
    desc: "Mahallendeki fırından, kafeden, marketten — yürüme mesafesindeki işletmelerden kurtar.",
    color: "bg-mustard/10 text-mustard",
  },
  {
    icon: Globe,
    title: "Gezegen için",
    desc: "Her paket, önlenen CO₂e demek. Yemeğin kurtarıldığında ne kadar karbon tasarrufu ettiğini görürsün.",
    color: "bg-terracotta/10 text-terracotta",
  },
  {
    icon: Sparkles,
    title: "Yeni lezzetler keşfet",
    desc: "Daha önce hiç girmediğin o pastaneyi, o mahalle fırınını Sürpriz Paket sayesinde keşfet.",
    color: "bg-olive/10 text-olive-dark",
  },
];

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Keşfet",
    desc: "Yakınındaki Sürpriz Paketleri haritada ve listede gör. Kategori, mesafe ve saate göre filtrele.",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Rezerve et",
    desc: "Paketini seç, uygulamadan güvenle öde. Onay anında gelir, yetin güvende.",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Teslim al",
    desc: "Belirtilen saat aralığında işletmeye git. Uygulamadaki QR'ı kaydır, paketi al.",
  },
  {
    icon: Heart,
    number: "04",
    title: "Kurtardın!",
    desc: "Bir öğün daha çöpten döndü. Etkin profilinde birikiyor, her kurtarmada CO₂e tasarrufu görüyorsun.",
  },
];

const sustainabilityStats = [
  {
    value: "8–10%",
    desc: "Küresel sera gazı emisyonlarının yüzde 8–10'u gıda sisteminden kaynaklanıyor.",
    icon: "🌍",
  },
  {
    value: "6M ton",
    desc: "Türkiye'de her yıl yaklaşık 6 milyon ton gıda çöpe gidiyor — üretim maliyetiyle birlikte.",
    icon: "🇹🇷",
  },
  {
    value: "1/3",
    desc: "Dünyada üretilen gıdanın üçte biri hiç tüketilmeden atılıyor. Her ekmek, emek + su + enerji demek.",
    icon: "🌾",
  },
];

const testimonials = [
  {
    name: "Ayşe T.",
    role: "Ev Hanımı, İstanbul",
    text: "Her akşam 19:00'da fırının Sürpriz Paketini alıyorum. Hem taze ekmek hem börek, hem de cebim yanmıyor. Keşke yıllar önce olsaydı!",
  },
  {
    name: "Mehmet K.",
    role: "Pastane Sahibi, Ankara",
    text: "Eskiden gün sonu kalanları üzülerek çöpe atıyorduk. Şimdi her şey satılıyor, hem ek gelir var hem de müşteri tabanımız genişledi.",
  },
  {
    name: "Zeynep A.",
    role: "Üniversite Öğrencisi, İzmir",
    text: "Bütçem kısıtlı ama yemekten ödün vermek istemiyorum. Rescued sayesinde günde 5-6 TL'ye harika bir öğle yemeği yiyebiliyorum.",
  },
];

const businessBenefits = [
  { icon: TrendingUp, text: "Atılacak ürün, günlük ek gelire dönüşür" },
  { icon: Users, text: "Rescued kullanıcıları yeni ve sadık müşterilere dönüşür" },
  { icon: Recycle, text: "Sıfır israf hedefine her paketle bir adım yaklaş" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
        {/* Gerçek video buraya gelecek: yemek hazırlığı / fırın / paket sahneleri */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/80 to-ink/90" aria-hidden="true" />
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-olive/20 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-mustard/10 rounded-full blur-3xl" aria-hidden="true" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col items-center gap-6">
            <motion.div variants={fadeUp}>
              <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] text-balance">
              Daha iyisi{" "}
              <span className="text-olive-light">çöpe gitmesin.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed">
              Çevrendeki işletmelerin gün sonu lezzetlerini yarı fiyatına kurtar.
              Her Sürpriz Paket bir öğün kurtarır, bir adım daha az israf demektir.
            </motion.p>

            <motion.div variants={fadeUp}>
              <AppButtons showLabel={true} />
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link href="/isletmeler" className="text-white/60 hover:text-white text-sm font-semibold flex items-center gap-1.5 transition-colors group">
                İşletmeler için
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          aria-hidden="true"
        >
          <ChevronDown size={28} className="text-white/40" />
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
            Türkiye&apos;de her yıl milyonlarca ton gıda çöpe gidiyor.{" "}
            <span className="text-white/80">Biz bunu değiştirmek için varız.</span>
          </p>
          <p className="mt-3 text-white/70 text-base">
            Rescued, yerel işletmelerin gün sonu fazlasını toplulukla buluşturan bir gıda kurtarma platformudur.
          </p>
        </motion.div>
      </section>

      {/* NEDEN RESCUED */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Neden Rescued?"
            title="Hem cüzdanın hem gezegen kazanır"
            subtitle="Sürpriz Paket; sana indirim, işletmeye gelir, gezegene bir nefes."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${b.color} flex items-center justify-center mb-5`}>
                  <b.icon size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-ink mb-2">{b.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* KATEGORİ ŞERİDİ */}
      <Marquee />

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Nasıl Çalışır"
            title="Dört adımda bir öğün kurtar"
            subtitle="Uygulamayı aç, yakınındaki paketi bul, rezerve et — gerisini hallederiz."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%_-_16px)] w-8 h-0.5 bg-olive/20 z-10" aria-hidden="true" />
                )}
                <div className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-black text-olive/40 tracking-wider">{step.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-olive/10 flex items-center justify-center">
                      <step.icon size={18} className="text-olive" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-ink mb-2">{step.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ETKİ SAYAÇLARI */}
      <section className="section-padding bg-ink text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-olive-dark/30 via-transparent to-mustard/10" aria-hidden="true" />
        <div className="container-wide mx-auto relative">
          <SectionHeading
            label="Etki"
            title="Birlikte yarattığımız fark"
            subtitle="Her paket, gerçek bir etki. İşte o etki, sayılarla."
          />
          <div className="grid sm:grid-cols-3 gap-12">
            <ImpactCounter value={47820} suffix="+" label="Kurtarılan Öğün" sublabel="ve her gün artıyor" color="olive" />
            <ImpactCounter value={12400} suffix=" kg" label="Önlenen CO₂e" sublabel="eşdeğer CO₂ tasarrufu" color="mustard" />
            <ImpactCounter value={340} suffix="+" label="Partner İşletme" sublabel="Türkiye genelinde" color="terracotta" />
          </div>
          <p className="text-center text-white/30 text-xs mt-10">
            * Veriler gerçekçi placeholder değerler içermektedir. Canlı veriler uygulamanın lansmanında güncellenecektir.
          </p>
        </div>
      </section>

      {/* SÜRDÜRÜLEBİLİRLİK */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Sürdürülebilirlik"
            title="İsraf sadece yemek değil"
            subtitle="Her çöpe giden ekmek; emek, su, enerji ve para demek. Biz bu döngüyü kırmak için varız."
          />
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {sustainabilityStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-soft text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-black text-olive mb-3">{stat.value}</div>
                <p className="text-sm text-ink/60 leading-relaxed">{stat.desc}</p>
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
              Etki Metodolojimiz
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
              {/* Gerçek görsel buraya gelecek — işletme görseli / panel mockup */}
              <div className="aspect-[4/3] bg-gradient-to-br from-olive/20 to-mustard/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🏪</div>
                  <p className="text-ink/40 text-sm">İşletme görseli buraya gelecek</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-soft-lg p-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-olive/10 rounded-xl flex items-center justify-center">
                    <TrendingUp size={18} className="text-olive" />
                  </div>
                  <div>
                    <div className="text-xs text-ink/40">Bu ay</div>
                    <div className="text-sm font-black text-ink">+2.840 ₺ ek gelir</div>
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">İşletmeler için</span>
              <h2 className="text-4xl font-black text-ink mt-3 mb-4 leading-tight">
                İşletmeniz mi var?{" "}
                <span className="text-olive">Gün sonu fazlanızı gelire çevirin.</span>
              </h2>
              <p className="text-ink/60 leading-relaxed mb-8">
                Her akşam çöpe giden o raf fazlası artık kasana girebilir. Rescued&apos;ın işletme paneli ile
                Sürpriz Paketinizi dakikalar içinde yayına alın.
              </p>
              <ul className="space-y-4 mb-8">
                {businessBenefits.map((benefit, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 bg-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon size={16} className="text-olive" />
                    </div>
                    <span className="text-ink/80 font-medium text-sm">{benefit.text}</span>
                  </motion.li>
                ))}
              </ul>
              <Link href="/isletmeler" className="btn-primary inline-flex items-center gap-2">
                İşletmeni kaydet
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
            label="Topluluk"
            title="Yüzlerce işletme Rescued ile israfla mücadele ediyor"
            subtitle="Kullanıcılardan ve işletmelerden gelen ses."
          />
          {/* Partner logolar — gerçek logolar buraya gelecek */}
          <div className="flex flex-wrap justify-center gap-6 mb-14" aria-label="Partner işletme logoları">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-24 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white/30 text-xs font-bold">
                LOGO
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-7 border border-white/10"
              >
                <p className="text-white/90 text-sm leading-relaxed mb-5 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-white font-black text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{t.name}</div>
                    <div className="text-white/50 text-xs">{t.role}</div>
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
            {/* Gerçek görsel buraya gelecek — uygulama telefon mockup */}
            <div className="w-32 h-56 bg-gradient-to-b from-olive/20 to-olive/5 rounded-[2rem] border-2 border-olive/20 flex items-center justify-center mx-auto mb-8">
              <span className="text-3xl">📱</span>
            </div>
            <RescuedBadge size="md" className="mb-4" />
            <h2 className="text-4xl sm:text-5xl font-black text-ink mb-4 leading-tight">
              Rescued yakında cebinde
            </h2>
            <p className="text-ink/60 mb-8 text-lg">
              Uygulama çıktığında ilk sen haberdar ol. Yakınındaki Sürpriz Paketleri keşfetmeye hazır ol.
            </p>
            <WaitlistForm />
            <p className="mt-4 text-xs text-ink/30">
              Spam yok. İstediğin zaman listeden çıkabilirsin.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
