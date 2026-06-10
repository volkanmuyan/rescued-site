"use client";

import { motion } from "framer-motion";

const categories = [
  "🥙 PİDE",
  "🥐 SİMİT",
  "🥧 BÖREK",
  "🫓 LAHMACUN",
  "🥖 POĞAÇA",
  "🍮 BAKLAVA",
  "🥟 MANTI",
  "🍢 KÖFTE",
  "🛒 MARKET",
  "🥗 SALATA",
  "🌯 DÖNER",
  "🍣 SUSHI",
  "🍕 PİZZA",
  "🍰 TATLI",
  "🍳 KAHVALTILIK",
  "🥪 SANDVIÇ",
  "☕ KAHVE",
  "🧃 MEYVE SUYU",
];

export function Marquee() {
  const doubled = [...categories, ...categories];

  return (
    <div className="bg-olive/5 border-y border-olive/10 py-5 overflow-hidden" aria-hidden="true">
      <div className="flex gap-0">
        {/* Row 1 — left to right */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-sm font-bold text-olive/70 tracking-wide"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-0 mt-3">
        {/* Row 2 — right to left */}
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          style={{ willChange: "transform" }}
        >
          {doubled.map((item, i) => (
            <span
              key={i}
              className="text-sm font-bold text-mustard/60 tracking-wide"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
