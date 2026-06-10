"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  center = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center" : ""} mb-12 ${className}`}
    >
      {label && (
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-olive mb-3">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ink leading-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-ink/60 max-w-2xl leading-relaxed text-balance mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
