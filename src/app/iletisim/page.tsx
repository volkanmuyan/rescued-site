"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { RescuedBadge } from "@/components/RescuedBadge";

export default function IletisimPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ink via-olive-dark/70 to-ink" aria-hidden="true" />
        <div className="relative container-wide px-4 sm:px-6 lg:px-8 mx-auto text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-6">
            <RescuedBadge size="lg" className="!bg-white/15 border border-white/20" />
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight">
              İletişim
            </h1>
            <p className="text-lg text-white/70">
              Bir sorun mu var, bir fikrin mi var? Her mesaj okunur.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <SectionHeading label="Bize Ulaş" title="Mesajını gönder" center={false} />
              <div className="bg-white rounded-3xl p-8 shadow-soft">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-5">
              <SectionHeading label="Bilgiler" title="İletişim Bilgileri" center={false} className="mb-6" />
              {[
                { icon: Mail, label: "E-posta", value: "merhaba@rescued.com.tr" },
                { icon: MapPin, label: "Adres", value: "İstanbul, Türkiye" },
                { icon: Clock, label: "Yanıt süresi", value: "Genellikle 24 saat içinde" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-soft flex gap-4 items-start"
                >
                  <div className="w-10 h-10 bg-olive/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-olive" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-ink/40 uppercase tracking-wider mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-ink">{item.value}</div>
                  </div>
                </motion.div>
              ))}

              <div className="bg-olive/5 rounded-2xl p-5 border border-olive/10 mt-4">
                <p className="text-sm text-ink/60 leading-relaxed">
                  İşletme kaydı için ayrı bir form var —{" "}
                  <a href="/isletmeler#kayit" className="text-olive font-bold hover:underline">
                    buradan başvur
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
