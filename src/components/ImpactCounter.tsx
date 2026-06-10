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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className={`text-5xl sm:text-6xl font-black ${colorMap[color]} leading-none`}>
        {count.toLocaleString("tr-TR")}
        {suffix}
      </div>
      <div className="mt-3 text-lg font-bold text-ink">{label}</div>
      {sublabel && <div className="mt-1 text-sm text-ink/50">{sublabel}</div>}
    </motion.div>
  );
}
