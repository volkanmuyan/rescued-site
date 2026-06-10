"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Placeholder — gerçek entegrasyon sonraki fazda
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 bg-olive/10 text-olive font-bold px-6 py-4 rounded-2xl"
        >
          <CheckCircle2 size={22} />
          <span>Harika! Uygulama çıktığında seni ilk haberdar edeceğiz.</span>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          aria-label="Bekleme listesi formu"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta adresin"
            required
            aria-label="E-posta adresin"
            className="flex-1 px-5 py-3.5 rounded-full bg-white border border-olive/20 focus:border-olive focus:outline-none focus:ring-2 focus:ring-olive/20 text-ink placeholder-ink/40 text-sm font-medium transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary flex items-center gap-2 justify-center whitespace-nowrap"
          >
            {status === "loading" ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
            ) : (
              <Send size={15} />
            )}
            Haberdar Et
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
