"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="about" className="py-20 md:py-28 px-4 md:px-6 border-t border-line">
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-term-green text-sm">▸</span>
          <span className="text-xs text-fg-muted">02 / about</span>
          <span className="text-fg-subtle">—</span>
          <span className="text-fg text-sm">{t("heading").toLowerCase()}</span>
          <div className="flex-1 h-px bg-line ml-2" />
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          {/* Bio block — README style */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="col-span-12 lg:col-span-8"
          >
            <div className="code-block p-6 md:p-8">
              <div className="flex items-center gap-2 pb-4 mb-6 border-b border-line">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-term-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-term-yellow" />
                  <div className="w-2.5 h-2.5 rounded-full bg-term-green" />
                </div>
                <span className="text-xs text-fg-muted ml-3">README.md</span>
              </div>

              <div className="space-y-4 text-sm md:text-base">
                <p className="text-term-cyan">
                  # whoami
                </p>
                <p className="text-fg leading-relaxed">
                  {t("bio")}
                </p>

                <p className="text-term-cyan pt-4">
                  ## focus
                </p>
                <ul className="space-y-1 text-fg-dim">
                  <li>
                    <span className="text-term-green">-</span> Web apps with React / Next.js
                  </li>
                  <li>
                    <span className="text-term-green">-</span> Telegram bots & Mini Apps
                  </li>
                  <li>
                    <span className="text-term-green">-</span> AI integrations (Claude, OpenAI, Groq)
                  </li>
                  <li>
                    <span className="text-term-green">-</span> REST APIs & SaaS products
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 lg:col-span-4 flex flex-col gap-3"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="code-block p-5 flex items-baseline gap-4"
              >
                <span className="text-fg-subtle text-xs shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <div className="text-3xl md:text-4xl font-bold text-term-green leading-none mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-fg-muted">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
