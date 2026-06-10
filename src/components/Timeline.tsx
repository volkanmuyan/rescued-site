"use client";

import { motion } from "framer-motion";

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  badge?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-olive/15 -translate-x-1/2"
        aria-hidden="true"
      />

      <div className="space-y-10">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex items-start gap-6 sm:gap-0 ${
                isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Content side */}
              <div
                className={`pl-16 sm:pl-0 sm:w-[calc(50%-2rem)] ${
                  isLeft ? "sm:pr-10 sm:text-right" : "sm:pl-10"
                }`}
              >
                <div className="bg-white rounded-3xl p-6 shadow-soft hover:shadow-soft-lg transition-shadow">
                  {event.badge && (
                    <span className="inline-block text-xs font-bold bg-olive/10 text-olive px-2.5 py-1 rounded-full mb-3">
                      {event.badge}
                    </span>
                  )}
                  <div className="text-2xl font-black text-olive mb-1">{event.year}</div>
                  <h3 className="text-base font-black text-ink mb-2">{event.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{event.description}</p>
                </div>
              </div>

              {/* Center dot */}
              <div
                className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-olive border-4 border-cream flex-shrink-0 z-10"
                aria-hidden="true"
              />

              {/* Empty spacer for opposite side on desktop */}
              <div className="hidden sm:block sm:w-[calc(50%-2rem)]" aria-hidden="true" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
