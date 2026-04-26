"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
  const t = useTranslations("about");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: t("stats.projects"), label: t("stats.projects_label") },
    { value: t("stats.stack"), label: t("stats.stack_label") },
    { value: t("stats.languages"), label: t("stats.languages_label") },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/20">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-2"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              02 / {t("heading")}
            </div>
          </motion.div>

          {/* Big editorial essay */}
          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="serif-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tighter text-ink text-balance"
              style={{ fontVariationSettings: '"opsz" 96' }}
            >
              <span className="text-accent">—</span> {t("bio")}
            </motion.h2>
          </div>
        </div>

        {/* Stats — like editorial sidebar facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 md:mt-32 grid grid-cols-12 gap-x-6 gap-y-8 pt-6 border-t border-ink/20"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="col-span-12 md:col-span-4 flex items-baseline gap-4"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div
                  className="serif-display text-6xl md:text-7xl font-light leading-none text-ink mb-2"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
