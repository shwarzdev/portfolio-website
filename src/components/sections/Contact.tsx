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
      className="py-20 md:py-32 px-4 md:px-6 border-t border-line"
    >
      <div ref={ref} className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-term-green text-sm">▸</span>
          <span className="text-xs text-fg-muted">06 / connect</span>
          <span className="text-fg-subtle">—</span>
          <span className="text-fg-dim text-sm">{t("heading").toLowerCase()}</span>
          <div className="flex-1 h-px bg-line ml-2" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="code-block max-w-3xl"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-line">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-term-red" />
              <div className="w-2.5 h-2.5 rounded-full bg-term-yellow" />
              <div className="w-2.5 h-2.5 rounded-full bg-term-green" />
            </div>
            <span className="text-xs text-fg-muted ml-3">~/contact</span>
          </div>

          <div className="p-6 md:p-8 space-y-5 text-sm md:text-base">
            {/* Welcome line */}
            <div>
              <span className="text-term-green">$</span>{" "}
              <span className="text-fg">echo</span>{" "}
              <span className="text-term-yellow">&quot;{t("heading")}&quot;</span>
            </div>

            <p className="text-fg-dim leading-relaxed pl-3 border-l border-line">
              {t("description")}
            </p>

            {/* Available commands */}
            <div className="pt-3 space-y-3">
              <div>
                <div className="text-xs text-fg-muted mb-2"># available channels</div>
              </div>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3 border border-line hover:border-term-green transition-colors"
              >
                <span>
                  <span className="text-term-green">$</span>{" "}
                  <span className="text-fg">telegram</span>{" "}
                  <span className="text-term-cyan">--message</span>{" "}
                  <span className="text-term-yellow">@shwarzdev</span>
                </span>
                <span className="text-fg-muted text-xs group-hover:text-term-green transition-colors">↗</span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3 border border-line hover:border-term-green transition-colors"
              >
                <span>
                  <span className="text-term-green">$</span>{" "}
                  <span className="text-fg">github</span>{" "}
                  <span className="text-term-cyan">--profile</span>{" "}
                  <span className="text-term-yellow">shwarzdev</span>
                </span>
                <span className="text-fg-muted text-xs group-hover:text-term-green transition-colors">↗</span>
              </a>
            </div>

            <div className="pt-3 text-xs text-fg-muted">
              <span className="text-term-green">$</span> exit 0
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
