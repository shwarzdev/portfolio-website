"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack, techCategories } from "@/data/tech-stack";

export default function TechStack() {
  const t = useTranslations("techStack");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stack"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/20 bg-cream-50"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-x-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              04 / Apparatus
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2
              className="serif-display text-5xl md:text-7xl font-light leading-[0.95] tracking-tighter text-ink"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              {t("heading")}
            </h2>
            <p className="serif-text italic text-xl md:text-2xl text-ink-muted mt-4">
              {t("subtitle")}.
            </p>
          </div>
        </div>

        {/* Index-style listing */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          {techCategories.map((category, catIdx) => {
            const items = techStack.filter((t) => t.category === category.key);
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: catIdx * 0.06 }}
                className="col-span-12 md:col-span-6 lg:col-span-4 border-t border-ink pt-4"
              >
                <div className="flex items-baseline justify-between mb-5">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink">
                    {String(catIdx + 1).padStart(2, "0")} · {category.label}
                  </h3>
                  <span className="font-mono text-[10px] text-ink-muted">
                    {items.length}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {items.map((tech) => (
                    <li
                      key={tech.name}
                      className="serif-text text-lg md:text-xl text-ink leading-snug"
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
