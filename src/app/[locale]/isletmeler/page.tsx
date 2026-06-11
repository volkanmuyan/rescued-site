"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Package,
  Clock,
  BarChart3,
  Coffee,
  ShoppingCart,
  Utensils,
  Store,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { RescuedBadge } from "@/components/RescuedBadge";

const howItWorks = [
  {
    icon: Package,
    title: "Fazlanı paketle",
    desc: "Gün sonu kalan ürünleri 'Sürpriz Paket' olarak koy. Ne koyduğunu senin belirleyebilirsin.",
  },
  {
    icon: Clock,
    title: "Teslim saatini sen belirle",
    desc: "Günlük adet ve teslim saat aralığını kendin ayarlarsın. Panel üzerinden saniyeler içinde güncelle.",
  },
  {
    icon: Users,
    title: "Yakın müşterilere ulaş",
    desc: "Rescued kullanıcıları seni keşfeder, rezerve eder ve belirlediğin saatte kapına gelir.",
  },
  {
    icon: TrendingUp,
    title: "İsrafını ve maliyetini düşür",
    desc: "Atılacak ürünler gelire dönüşür, atık bertaraf masrafın azalır, yeni müşteri kazanırsın.",
  },
];

const businessTypes = [
  {
    icon: Utensils,
    title: "Restoran",
    desc: "Günlük menü artıklarını, porsiyon fazlalarını değerlendirin. Mutfak israfını sıfıra yaklaştırın.",
    tag: "En Popüler",
  },
  {
    icon: Coffee,
    title: "Kafe & Pastane",
    desc: "Gün sonu kek, kurabiye, sandviç ve içecekleri Sürpriz Paket'e dönüştürün. Taze ürün, taze gelir.",
    tag: null,
  },
  {
    icon: Store,
    title: "Market & Bakkal",
    desc: "Son kullanma tarihi yaklaşan ürünleri, taze sebze-meyveleri indirimleniyle sahiple bulun.",
    tag: null,
  },
  {
    icon: ShoppingCart,
    title: "Büfe & Açık Büfe",
    desc: "Gün sonu hazır yemek ve atıştırmalıkları pakete koy, yeni müşterilerle tanış.",
    tag: null,
  },
  {
    icon: Truck,
    title: "Toptancı & Üretici",
    desc: "Küçük partileri, görünüm kusurlu ürünleri Rescued kanalıyla toplulukla buluş.",
    tag: null,
  },
];

const faqs = [
  {
    question: "Sürpriz Pakete ne koymalıyım?",
    answer:
      "Gün sonu kalan, taze ve tüketilebilir her türlü gıdayı koyabilirsiniz. Ekmek, tatlı, sandviç, sıcak yemek, market ürünleri... Tek kural: güvenli ve tüketilebilir olması. İçeriği net belirtmek zorunda değilsiniz — 'sürpriz' olması ürünün bir parçası.",
  },
  {
    question: "Komisyon nasıl işliyor?",
    answer:
      "Rescued, her satılan paketin satış fiyatından küçük bir platform komisyonu alır. Bu komisyon oranı kategoriye göre değişmekte olup kayıt sonrasında işletme panelinizde açıkça görüntülenir. Atılacak ürünler üzerinden elde edilen gelirde net kazanç hâlâ çok daha yüksektir.",
  },
  {
    question: "Günlük kaç paket satabilirim?",
    answer:
      "İstediğiniz kadar. Günlük adet limitini kendiniz belirlersiniz — 1 paketten başlayabilir, yüzlerce pakete çıkabilirsiniz. İşletme panelinizden anlık olarak güncelleyebilirsiniz.",
  },
  {
    question: "Gıda güvenliği sorumluluğu kimde?",
    answer:
      "Ürünlerin gıda güvenliği standartlarına uygun olması işletmenin sorumluluğundadır. Mevcut gıda işletmesi lisansınız geçerli olmaya devam eder. Rescued, güvenli ve tüketilebilir ürünlerin satışa sunulmasını platform kuralı olarak şart koşar.",
  },
  {
    question: "Ödemeler ne zaman yapılır?",
    answer:
      "Ödemeler haftalık olarak hesabınıza aktarılır. İşletme panelinde gerçek zamanlı satış ve gelir takibi yapabilirsiniz.",
  },
  {
    question: "Kaydı tamamlamak ne kadar sürer?",
    answer:
      "Online kayıt formu yaklaşık 5 dakika sürer. Ekibimiz başvurunuzu 24-48 saat içinde inceler ve onay sonrasında işletme paneliniz aktif hale gelir. İlk paketinizi aynı gün yayına alabilirsiniz.",
  },
  {
    question: "Fiyatı ben mi belirlerim?",
    answer:
      "Evet, ama bir minimum indirim kuralı var: Sürpriz Paket, içeriğin normal piyasa değerinin en az %50 altında fiyatlanmalıdır. Bu kural, Rescued'ın kullanıcı vaadini koruması içindir. Birçok işletme %60-70 indirimle yayına giriyor ve hızla satıyor.",
  },
  {
    question: "Paneli kullanmak zor mu?",
    answer:
      "Panel son derece basit tutulmuştur. Paket oluştur, adet gir, saat aralığı belirle — hepsi bu. Telefon ve tablet uyumlu, teknik bilgi gerektirmez. Destek ekibimiz ilk kurulum için her zaman hazır.",
  },
];

export default function IsletmelerPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-ink overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-olive/15 rounded-full blur-3xl" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6 max-w-3xl mx-auto"
          >
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight text-balance">
              Fazlanız çöpe değil,{" "}
              <span className="text-olive-light">kasanıza gitsin.</span>
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Her akşam çöpe giden o raf fazlası ek gelire dönüşebilir. Rescued ile Sürpriz Paketi
              yayına almak 5 dakika sürer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#kayit" className="btn-primary flex items-center gap-2">
                İşletmeni Kaydet
                <ArrowRight size={16} />
              </a>
              <a href="#nasil-calisir" className="border-2 border-white/30 text-white font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors flex items-center gap-2">
                Nasıl Çalışır?
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SORUN */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <SectionHeading
            label="Gerçek Maliyet"
            title="Çöpe giden sadece yemek değil"
            subtitle="Her atılan ürün, hem üretim maliyeti hem de atık bertaraf maliyeti demektir. İşletmeler çoğunlukla iki kez kaybeder."
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              { value: "~%30", label: "Üretilen gıdanın ortalama israf oranı", icon: "🗑️" },
              { value: "2x", label: "Kayıp: üretim maliyeti + atık bertaraf", icon: "💸" },
              { value: "Sıfır", label: "Rescued'da atılacak ürün → satılmış gelir", icon: "✅" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft text-center"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-3xl font-black text-olive mb-2">{item.value}</div>
                <p className="text-sm text-ink/60">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NASIL ÇALIŞIR */}
      <section id="nasil-calisir" className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Süreç"
            title="Sürpriz Paket modeli nasıl işliyor?"
            subtitle="Dört adımda gün sonu fazlanız gelire dönüşür."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-5">
                  <step.icon size={22} />
                </div>
                <div className="text-xs font-black text-olive/40 tracking-wider mb-1">0{i + 1}</div>
                <h3 className="text-lg font-black text-ink mb-2">{step.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GELİR VURGUSU */}
      <section className="section-padding bg-olive">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Örnek Senaryo</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-6 leading-tight">
                Atılacak ürün, günlük ek gelire dönüşür
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Her gün kapanış öncesinde 5 Sürpriz Paket hazırlayan bir pastane, haftada yaklaşık
                700-900 ₺ ek gelir elde edebilir — tamamen yoktan yaratılmış bir kaynak.
              </p>
              <ul className="space-y-3">
                {[
                  "Atık bertaraf masrafın azalır",
                  "Yeni müşteri kazanım maliyeti sıfır",
                  "Panelden her şey anlık takip edilir",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                    <CheckCircle2 size={16} className="text-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-soft-xl"
            >
              <h3 className="text-lg font-black text-ink mb-5">Tahmini Aylık Gelir</h3>
              {/* Placeholder hesap kartı */}
              <div className="space-y-4">
                {[
                  { label: "Günlük paket sayısı", value: "5 paket" },
                  { label: "Paket başı ortalama fiyat", value: "65 ₺" },
                  { label: "Aylık brüt gelir", value: "~9.750 ₺", highlight: true },
                  { label: "Platform komisyonu (~%15)", value: "~1.463 ₺", muted: true },
                  { label: "Net kazanç", value: "~8.287 ₺", highlight: true },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex justify-between items-center py-3 border-b border-cream last:border-0 ${row.highlight ? "font-black text-olive" : ""} ${row.muted ? "text-ink/40 text-sm" : ""}`}
                  >
                    <span className={row.highlight ? "" : "text-ink/60 text-sm"}>{row.label}</span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink/30 mt-4">
                * Tahmini örnek değerlerdir. Gerçek kazanç işletme tipine ve lokasyona göre değişir.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YENİ MÜŞTERİ */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto max-w-3xl text-center">
          <SectionHeading
            label="Büyüme"
            title="Sürpriz Paket, bir tanışma daveti"
            subtitle="Paketi almaya gelen kullanıcıların önemli bir kısmı ek alışveriş yapar ya da düzenli müşteriye dönüşür. Rescued, yeni kitleye açılan bir penceredir."
          />
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: "%68", desc: "Kullanıcı memnuniyeti ile işletmeye tekrar ziyaret" },
              { stat: "3.2x", desc: "Sürpriz Paket kullanıcısının ortalama işletme keşfi" },
              { stat: "4.8★", desc: "Rescued işletme paneli kullanıcı puanı" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-7 shadow-soft text-center"
              >
                <div className="text-4xl font-black text-olive mb-3">{item.stat}</div>
                <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-ink/30 mt-6">* Placeholder değerler. Canlı veriler lansman sonrası güncellenecektir.</p>
        </div>
      </section>

      {/* İŞLETME TİPLERİ */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading
            label="Sektörler"
            title="Her tür işletmeye uygun çözüm"
            subtitle="Fırından markete, kafeden toptancıya — gıda satan her işletme Rescued'a katılabilir."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300"
              >
                {type.tag && (
                  <span className="absolute top-5 right-5 bg-mustard/10 text-mustard text-xs font-bold px-2.5 py-1 rounded-full">
                    {type.tag}
                  </span>
                )}
                <div className="w-12 h-12 rounded-2xl bg-olive/10 text-olive flex items-center justify-center mb-5">
                  <type.icon size={22} />
                </div>
                <h3 className="text-lg font-black text-ink mb-2">{type.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL MOCKUP */}
      <section className="section-padding bg-cream overflow-hidden">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-olive">İşletme Paneli</span>
              <h2 className="text-3xl sm:text-4xl font-black text-ink mt-3 mb-5 leading-tight">
                Her şey elinizin altında
              </h2>
              <p className="text-ink/60 leading-relaxed mb-6">
                Gerçek zamanlı satış takibi, kurtarılan öğün sayacı, önlenen CO₂e ve detaylı raporlar — hepsi tek panelde.
              </p>
              <ul className="space-y-3">
                {[
                  "Paket yayınla, düzenle, kapat — saniyeler içinde",
                  "Günlük, haftalık, aylık gelir raporları",
                  "Kurtarılan öğün ve CO₂e sayacı",
                  "Müşteri değerlendirmeleri ve puanlar",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-ink/80 text-sm">
                    <div className="w-5 h-5 bg-olive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart3 size={10} className="text-olive" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Panel görsel mockup — gerçek ekran görüntüsü buraya gelecek */}
              <div className="aspect-[4/3] bg-gradient-to-br from-cream to-cream-dark rounded-3xl border border-olive/10 shadow-soft-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart3 size={48} className="text-olive/30 mx-auto mb-4" />
                  <p className="text-ink/30 text-sm">İşletme paneli ekran görüntüsü buraya gelecek</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto max-w-3xl">
          <SectionHeading
            label="SSS"
            title="Aklındaki soruları sormadan kayıt olmak zorunda değilsin"
          />
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* KAYIT FORMU */}
      <section id="kayit" className="section-padding bg-olive">
        <div className="container-wide mx-auto max-w-2xl">
          <SectionHeading
            label="Hadi Başlayalım"
            title="İşletmeni Rescued'a kaydet"
            subtitle="Formu doldurun, ekibimiz 24 saat içinde sizi arasın."
          />
          <div className="bg-white rounded-3xl p-8 shadow-soft-xl">
            <ContactForm isBusinessForm={true} />
          </div>
        </div>
      </section>
    </>
  );
}
