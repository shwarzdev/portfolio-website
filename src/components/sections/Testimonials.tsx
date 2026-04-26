"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Testimonial {
  nameKey: string;
  roleKey: string;
  textKey: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    nameKey: "t1_name",
    roleKey: "t1_role",
    textKey: "t1_text",
    date: "2026-03-15",
  },
  {
    nameKey: "t2_name",
    roleKey: "t2_role",
    textKey: "t2_text",
    date: "2026-02-28",
  },
  {
    nameKey: "t3_name",
    roleKey: "t3_role",
    textKey: "t3_text",
    date: "2026-01-10",
  },
  {
    nameKey: "t4_name",
    roleKey: "t4_role",
    textKey: "t4_text",
    date: "2025-12-05",
  },
];

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  return date
    .toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
    .toUpperCase();
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const locale = t("heading") === "Отзывы" ? "ru" : "en";

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/20"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-x-6 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              05 / Letters
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

        {/* Pull quotes */}
        <div className="space-y-20 md:space-y-24">
          {testimonials.map((testimonial, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={testimonial.nameKey}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="grid grid-cols-12 gap-x-6 gap-y-6"
              >
                {/* Number */}
                <div className={`col-span-12 md:col-span-2 ${isReversed ? "md:col-start-11 md:row-start-1 md:text-right" : ""}`}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    № {String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Quote */}
                <blockquote
                  className={`col-span-12 md:col-span-9 ${
                    isReversed ? "md:col-start-2 md:row-start-1" : "md:col-start-3"
                  }`}
                >
                  <p
                    className="serif-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tighter text-ink text-balance"
                    style={{ fontVariationSettings: '"opsz" 96' }}
                  >
                    <span className="text-accent">“</span>
                    {t(testimonial.textKey)}
                    <span className="text-accent">”</span>
                  </p>

                  <footer className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-4 border-t border-ink/15">
                    <cite className="serif-text not-italic text-lg text-ink">
                      {t(testimonial.nameKey)}
                    </cite>
                    <span className="serif-text italic text-base text-ink-muted">
                      {t(testimonial.roleKey)}
                    </span>
                    <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                      {formatDate(testimonial.date, locale)}
                    </span>
                  </footer>
                </blockquote>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
