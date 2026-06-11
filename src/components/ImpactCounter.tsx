"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ImpactCounterProps {
  value: number;
  suffix?: string;
  label: string;
  sublabel?: string;
  color?: "olive" | "mustard" | "terracotta";
}

function useCountUp(target: number, started: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, started, duration]);
  return count;
}

export function ImpactCounter({
  value,
  suffix = "",
  label,
  sublabel,
  color = "olive",
}: ImpactCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useCountUp(value, inView);

  const colorMap = {
    olive: "text-olive",
    mustard: "text-mustard",
    terracotta: "text-terracotta",
  };

  const lineColor = {
    olive: "bg-olive/60",
    mustard: "bg-mustard/60",
    terracotta: "bg-terracotta/60",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`text-6xl sm:text-7xl font-black ${colorMap[color]} leading-none tabular-nums`}>
        {count.toLocaleString("tr-TR")}
        {suffix}
      </div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className={`h-0.5 w-16 ${lineColor[color]} rounded-full mx-auto mt-3 mb-3 origin-left`}
      />
      <div className="text-base font-bold text-white/90">{label}</div>
      {sublabel && <div className="mt-1 text-sm text-white/40">{sublabel}</div>}
    </motion.div>
  );
}
