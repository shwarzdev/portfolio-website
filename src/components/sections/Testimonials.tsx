"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  nameKey: string;
  roleKey: string;
  textKey: string;
  date: string;
  hash: string;
}

const testimonials: Testimonial[] = [
  { nameKey: "t1_name", roleKey: "t1_role", textKey: "t1_text", date: "2026-03-15", hash: "a3f9c21" },
  { nameKey: "t2_name", roleKey: "t2_role", textKey: "t2_text", date: "2026-02-28", hash: "c84e7b1" },
  { nameKey: "t3_name", roleKey: "t3_role", textKey: "t3_text", date: "2026-01-10", hash: "f51d908" },
  { nameKey: "t4_name", roleKey: "t4_role", textKey: "t4_text", date: "2025-12-05", hash: "92b6e34" },
];

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toISOString().slice(0, 10);
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 px-4 md:px-6 border-t border-line"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-term-green text-sm">▸</span>
          <span className="text-xs text-fg-muted">05 / git log --reviews</span>
          <span className="text-fg-subtle">—</span>
          <span className="text-fg-dim text-sm">{t("subtitle").toLowerCase()}</span>
          <div className="flex-1 h-px bg-line ml-2" />
          <span className="text-xs text-fg-muted">{testimonials.length} entries</span>
        </div>

        {/* Git log style */}
        <div className="space-y-0">
          {testimonials.map((tm, i) => (
            <motion.div
              key={tm.nameKey}
              initial={{ opacity: 0, x: -8 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="relative pl-7 md:pl-10 pb-8 last:pb-0"
            >
              {/* Tree line */}
              <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-term-green ring-4 ring-bg z-10 mt-1.5" />
                {i < testimonials.length - 1 && (
                  <div className="flex-1 w-px bg-line mt-1" />
                )}
              </div>

              {/* Commit-style card */}
              <div className="code-block p-5">
                {/* Hash + date */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs mb-3 pb-3 border-b border-line">
                  <span className="text-term-yellow">commit {tm.hash}</span>
                  <span className="text-fg-muted hidden sm:inline">·</span>
                  <span className="text-fg-muted">Date: {formatDate(tm.date)}</span>
                </div>

                {/* Author */}
                <div className="text-xs text-fg-muted mb-3">
                  <span>Author: </span>
                  <span className="text-term-cyan">{t(tm.nameKey)}</span>
                  <span className="text-fg-muted"> &lt;{t(tm.roleKey)}&gt;</span>
                </div>

                {/* Message */}
                <p className="text-sm md:text-base text-fg leading-relaxed">
                  {t(tm.textKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
