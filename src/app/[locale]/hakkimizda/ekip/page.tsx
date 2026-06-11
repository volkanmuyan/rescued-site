"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { RescuedBadge } from "@/components/RescuedBadge";
import { TeamMemberCard } from "@/components/TeamMemberCard";

const founders = [
  {
    name: "Ayşe Kaya",
    title: "Kurucu & CEO",
    bio: "Gıda teknolojisi ve sürdürülebilirlik alanında 8 yıl deneyim. Boğaziçi Üniversitesi İşletme mezunu. Daha önce gıda sektöründe iki girişim kurdu.",
  },
  {
    name: "Mehmet Demir",
    title: "Kurucu & CTO",
    bio: "Ölçeklenebilir tüketici uygulamaları üzerine 10 yıl deneyim. ODTÜ Bilgisayar Mühendisliği. Daha önce iki startup'ı büyük şirketlere sattı.",
  },
  {
    name: "Zeynep Arslan",
    title: "Kurucu & COO",
    bio: "Yerel işletmeler ve esnaf ekosistemiyle köklü ilişkiler. METU Gıda Mühendisliği mezunu. Sürdürülebilirlik ve tedarik zinciri uzmanı.",
  },
  {
    name: "Can Yıldız",
    title: "Kurucu & CPO",
    bio: "Kullanıcı deneyimi odaklı ürün geliştirme. Bilkent Üniversitesi Endüstri Tasarımı. Daha önce büyük platformlarda UX lead rolü.",
  },
];

const team = [
  { name: "Buse Çelik", title: "Baş Mühendis" },
  { name: "Emre Şahin", title: "iOS Geliştirici" },
  { name: "Selin Koca", title: "Android Geliştirici" },
  { name: "Tarık Yılmaz", title: "Backend Geliştirici" },
  { name: "Naz Polat", title: "Ürün Tasarımcısı" },
  { name: "Ali Korkmaz", title: "İşletme İlişkileri — İstanbul" },
  { name: "Gözde Acar", title: "İşletme İlişkileri — Ankara" },
  { name: "Deniz Kılıç", title: "Pazarlama & İletişim" },
];

const advisors = [
  {
    name: "Prof. Dr. Leyla Güneş",
    title: "Danışman — Gıda Güvenliği",
    bio: "İTÜ Gıda Mühendisliği Prof. Gıda israfı ve gıda güvenliği politikaları üzerine 20 yıl araştırma.",
  },
  {
    name: "Hüseyin Öztürk",
    title: "Danışman — Girişim Ekosistemi",
    bio: "Istanbul Startup Studio kurucu ortağı. 40+ Türk girişimine melek yatırımcı.",
  },
  {
    name: "Dr. Pınar Yılmaz",
    title: "Danışman — Sürdürülebilirlik & ESG",
    bio: "UNDP Türkiye eski danışmanı. SKH uygulaması ve iklim finansmanı uzmanı.",
  },
];

export default function EkipPage() {
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
              Ekibimiz
            </h1>
            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Gıda israfına karşı savaşmak için bir araya gelen insanlar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KURUCULAR */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading label="Kurucu Ekip" title="Rescued'ı kuranlar" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {founders.map((member, i) => (
              <TeamMemberCard key={i} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EKİP */}
      <section className="section-padding bg-cream-dark">
        <div className="container-wide mx-auto">
          <SectionHeading label="Ekip" title="Birlikte inşa ediyoruz" subtitle="Her biri alanında uzman, aynı misyona bağlı." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl p-5 shadow-soft flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-olive/15 text-olive font-black text-sm flex items-center justify-center flex-shrink-0">
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">{member.name}</div>
                  <div className="text-xs text-ink/50 mt-0.5">{member.title}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DANIŞMA KURULU */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeading label="Danışma Kurulu" title="Bize rehberlik edenler" />
          <div className="grid sm:grid-cols-3 gap-6">
            {advisors.map((advisor, i) => (
              <TeamMemberCard key={i} {...advisor} index={i + 4} />
            ))}
          </div>
        </div>
      </section>

      {/* KARİYER CTA */}
      <section className="section-padding bg-olive">
        <div className="container-wide mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-black text-white mb-3">Sen de bu ekibe katıl</h2>
          <p className="text-white/75 mb-6">
            Gıda israfıyla mücadelede yer almak istiyorsan açık pozisyonlarımıza göz at.
          </p>
          <Link href="/kariyer" className="bg-white text-olive font-bold px-7 py-3.5 rounded-full hover:bg-cream transition-colors inline-flex items-center gap-2">
            Kariyer Sayfası
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
