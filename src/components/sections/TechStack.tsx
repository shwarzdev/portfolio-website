"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStack, techCategories } from "@/data/tech-stack";

const CATEGORY_COLOR: Record<string, string> = {
  frontend: "text-term-cyan",
  backend: "text-term-purple",
  database: "text-term-green",
  ai: "text-term-yellow",
  bots: "text-term-blue",
  devops: "text-term-orange",
};

export default function TechStack() {
  const t = useTranslations("techStack");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="stack"
      className="py-20 md:py-28 px-4 md:px-6 border-t border-line"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-term-green text-sm">▸</span>
          <span className="text-xs text-fg-muted">04 / stack</span>
          <span className="text-fg-subtle">—</span>
          <span className="text-fg-dim text-sm">{t("subtitle").toLowerCase()}</span>
          <div className="flex-1 h-px bg-line ml-2" />
        </div>

        {/* package.json style */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="code-block"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-term-red" />
              <div className="w-2.5 h-2.5 rounded-full bg-term-yellow" />
              <div className="w-2.5 h-2.5 rounded-full bg-term-green" />
            </div>
            <span className="text-xs text-fg-muted ml-3">stack.json</span>
          </div>

          <div className="p-4 md:p-6 text-sm overflow-x-auto">
            <div className="text-fg-dim">
              <span className="text-fg-muted">{"{"}</span>
            </div>

            {techCategories.map((category, catIdx) => {
              const items = techStack.filter((t) => t.category === category.key);
              const colorClass = CATEGORY_COLOR[category.key] ?? "text-fg-dim";

              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                  className="pl-4 md:pl-6 my-1"
                >
                  <div className="flex flex-wrap items-baseline gap-1">
                    <span className={`${colorClass}`}>&quot;{category.label.toLowerCase()}&quot;</span>
                    <span className="text-fg-muted">:</span>
                    <span className="text-fg-muted">[</span>
                  </div>
                  <div className="pl-4 md:pl-6 my-1">
                    {items.map((tech, i) => (
                      <span key={tech.name} className="text-fg">
                        <span className="text-term-yellow">&quot;{tech.name}&quot;</span>
                        {i < items.length - 1 && <span className="text-fg-muted">, </span>}
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="text-fg-muted">]</span>
                    {catIdx < techCategories.length - 1 && <span className="text-fg-muted">,</span>}
                  </div>
                </motion.div>
              );
            })}

            <div className="text-fg-dim">
              <span className="text-fg-muted">{"}"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
