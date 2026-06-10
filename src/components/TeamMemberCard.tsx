"use client";

import { motion } from "framer-motion";
import { Link2 } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  title: string;
  bio?: string;
  linkedinUrl?: string;
  index?: number;
}

export function TeamMemberCard({
  name,
  title,
  bio,
  linkedinUrl,
  index = 0,
}: TeamMemberCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const bgColors = [
    "bg-olive/20 text-olive-dark",
    "bg-mustard/20 text-mustard",
    "bg-terracotta/20 text-terracotta",
    "bg-olive/30 text-olive-dark",
  ];
  const color = bgColors[index % bgColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-3xl p-7 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
    >
      {/* Avatar placeholder — gerçek fotoğraf buraya gelecek */}
      <div
        className={`w-20 h-20 rounded-full ${color} flex items-center justify-center text-2xl font-black mb-4 flex-shrink-0`}
        aria-label={`${name} profil fotoğrafı`}
      >
        {initials}
      </div>

      <h3 className="text-base font-black text-ink leading-tight">{name}</h3>
      <p className="text-sm text-olive font-semibold mt-0.5 mb-3">{title}</p>

      {bio && (
        <p className="text-sm text-ink/55 leading-relaxed">{bio}</p>
      )}

      {linkedinUrl && (
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${name} LinkedIn profili`}
          className="mt-4 w-8 h-8 bg-olive/10 rounded-xl flex items-center justify-center text-olive hover:bg-olive hover:text-white transition-colors"
        >
          <Link2 size={14} />
        </a>
      )}
    </motion.div>
  );
}
