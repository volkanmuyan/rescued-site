"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactFormProps {
  isBusinessForm?: boolean;
}

export function ContactForm({ isBusinessForm = false }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [kvkk, setKvkk] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
  };

  const businessTypes = [
    "Restoran",
    "Kafe",
    "Pastane",
    "Fırın",
    "Market / Bakkal",
    "Büfe",
    "Toptancı / Üretici",
    "Diğer",
  ];

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="w-16 h-16 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={32} className="text-olive" />
          </div>
          <h3 className="text-2xl font-black text-ink mb-2">Mesajın alındı!</h3>
          <p className="text-ink/60">En kısa sürede seninle iletişime geçeceğiz.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label={isBusinessForm ? "İşletme kayıt formu" : "İletişim formu"}
        >
          {isBusinessForm ? (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="biz-name">
                    İşletme Adı *
                  </label>
                  <input
                    id="biz-name"
                    type="text"
                    required
                    placeholder="Örn: Ayşe Hanım'ın Böreği"
                    className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="biz-type">
                    İşletme Türü *
                  </label>
                  <select
                    id="biz-type"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink text-sm transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Seçiniz</option>
                    {businessTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="biz-city">
                    Şehir *
                  </label>
                  <input
                    id="biz-city"
                    type="text"
                    required
                    placeholder="İstanbul"
                    className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="biz-phone">
                    Telefon *
                  </label>
                  <input
                    id="biz-phone"
                    type="tel"
                    required
                    placeholder="0532 000 00 00"
                    className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="biz-email">
                  E-posta *
                </label>
                <input
                  id="biz-email"
                  type="email"
                  required
                  placeholder="isletme@email.com"
                  className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="name">
                    Adın *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Adın ve soyadın"
                    className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="email">
                    E-posta *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="email@ornek.com"
                    className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="subject">
                  Konu *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Mesajının konusu"
                  className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-ink mb-1.5" htmlFor="message">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Bize yazmak istediğin her şey..."
                  className="w-full px-4 py-3 rounded-2xl bg-cream border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm transition-all resize-none"
                />
              </div>
            </>
          )}

          {/* KVKK */}
          <div className="flex items-start gap-3">
            <div className="relative mt-0.5">
              <input
                id="kvkk"
                type="checkbox"
                required
                checked={kvkk}
                onChange={(e) => setKvkk(e.target.checked)}
                className="sr-only"
              />
              <div
                onClick={() => setKvkk(!kvkk)}
                className={`w-5 h-5 rounded-md border-2 cursor-pointer flex items-center justify-center transition-colors ${
                  kvkk ? "bg-olive border-olive" : "bg-white border-olive/30"
                }`}
                role="checkbox"
                aria-checked={kvkk}
                tabIndex={0}
                onKeyDown={(e) => e.key === " " && setKvkk(!kvkk)}
              >
                {kvkk && (
                  <svg viewBox="0 0 10 8" fill="none" className="w-3 h-3">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
            </div>
            <label htmlFor="kvkk" className="text-sm text-ink/60 leading-snug cursor-pointer">
              <a href="/yasal/kvkk" className="text-olive underline underline-offset-2 hover:text-olive-dark">KVKK Aydınlatma Metni</a>&apos;ni
              okudum, kişisel verilerimin işlenmesine onay veriyorum. *
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "loading" || !kvkk}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {status === "loading" ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
                Gönderiliyor...
              </>
            ) : (
              <>
                <Send size={16} />
                {isBusinessForm ? "Kaydı Tamamla" : "Gönder"}
              </>
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
