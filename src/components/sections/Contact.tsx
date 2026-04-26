"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TELEGRAM_URL, GITHUB_URL } from "@/lib/constants";

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 md:py-40 px-6 md:px-10 border-t border-ink/20 bg-ink text-cream-100"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-x-6 mb-16">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
              06 / Correspondence
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2
              className="serif-display text-6xl md:text-8xl lg:text-[10rem] font-light leading-[0.9] tracking-tightest text-cream-100 text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              {t("heading")}
            </h2>
          </div>
        </div>

        {/* Description and links */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 mt-16 md:mt-24">
          <div className="col-span-12 md:col-span-5 md:col-start-3">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="serif-text text-xl md:text-2xl leading-relaxed text-cream-100/85 text-balance"
            >
              {t("description")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-12 md:col-span-4 md:col-start-9"
          >
            <div className="space-y-1 border-t border-cream-100/30 pt-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-cream-100/50 mb-3">
                ↳ Reach out
              </div>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between py-3 border-b border-cream-100/20 hover:border-accent-light transition-colors"
              >
                <span
                  className="serif-display text-3xl md:text-4xl font-light text-cream-100 group-hover:text-accent-light transition-colors"
                  style={{ fontVariationSettings: '"opsz" 96' }}
                >
                  {t("telegram")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/40">
                  ↗
                </span>
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between py-3 border-b border-cream-100/20 hover:border-accent-light transition-colors"
              >
                <span
                  className="serif-display text-3xl md:text-4xl font-light text-cream-100 group-hover:text-accent-light transition-colors"
                  style={{ fontVariationSettings: '"opsz" 96' }}
                >
                  {t("github")}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream-100/40">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
