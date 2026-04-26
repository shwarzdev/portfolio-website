"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const today = new Date()
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    })
    .toUpperCase();

  return (
    <section className="relative min-h-[92vh] pt-20 pb-24 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Top metadata bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted border-t border-ink py-3"
        >
          <span>Issue №01</span>
          <span className="hidden sm:inline">Portfolio / 2026</span>
          <span>{today}</span>
        </motion.div>

        {/* Main hero */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-2"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              ※ The Author
            </div>
          </motion.div>

          <div className="col-span-12 md:col-span-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="serif-text italic text-xl md:text-2xl text-ink-muted mb-3"
            >
              {t("greeting")},
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="serif-display font-light text-ink leading-[0.9] tracking-tightest text-[clamp(4rem,14vw,12rem)]"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              {t("name")}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 grid grid-cols-12 gap-x-6"
            >
              <div className="col-span-12 md:col-span-7 md:col-start-6">
                <p className="serif-text text-xl md:text-2xl leading-snug text-ink text-balance">
                  {t("title")}.{" "}
                  <span className="italic text-ink-muted">
                    {t("description")}
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom strip — call to actions like editorial footnotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 md:mt-32 grid grid-cols-12 gap-x-6 items-end pt-6 border-t border-ink/30"
        >
          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
              ↳ Begin reading
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#projects"
                className="serif-text italic text-2xl md:text-3xl text-ink hover:text-accent transition-colors underline decoration-1 underline-offset-3"
              >
                {t("cta_projects")}
              </a>
              <span className="serif-text italic text-2xl md:text-3xl text-ink-muted">
                /
              </span>
              <a
                href="#contact"
                className="serif-text italic text-2xl md:text-3xl text-ink hover:text-accent transition-colors underline decoration-1 underline-offset-3"
              >
                {t("cta_contact")}
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-2">
              ↳ Filed under
            </div>
            <div className="font-mono text-xs text-ink">
              full-stack · ai · telegram · saas
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
