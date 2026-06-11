"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  theme?: "light" | "dark";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  className = "",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center" : ""} mb-12 ${className}`}
    >
      {label && (
        <span
          className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-4 ${
            isDark ? "bg-white/10 text-white/70" : "bg-olive/10 text-olive"
          }`}
        >
          <span
            className={`w-1 h-1 rounded-full flex-shrink-0 ${isDark ? "bg-white/50" : "bg-olive"}`}
            aria-hidden="true"
          />
          {label}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-balance ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl leading-relaxed text-balance ${center ? "mx-auto" : ""} ${
            isDark ? "text-white/60" : "text-ink/60"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
