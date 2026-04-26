"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const d = new Date();
      const h = String(d.getUTCHours()).padStart(2, "0");
      const m = String(d.getUTCMinutes()).padStart(2, "0");
      const s = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-12 md:pt-20 pb-24 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Top run header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-xs text-fg-muted mb-8 flex flex-wrap gap-x-4 gap-y-1"
        >
          <span><span className="text-term-cyan">$</span> ./run.sh --intro</span>
          <span className="text-fg-subtle">→</span>
          <span>compiled in 0.42s</span>
          <span className="text-fg-subtle">·</span>
          <span>UTC {time || "00:00:00"}</span>
        </motion.div>

        {/* ASCII / Big name block */}
        <motion.pre
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-fg leading-[0.95] text-[clamp(2.5rem,9vw,7rem)] font-bold tracking-tightest whitespace-pre overflow-x-auto"
        >
          <span className="text-term-green">&gt; </span>shwarzdev<span className="text-term-green cursor"></span>
        </motion.pre>

        {/* Comment-style description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl space-y-1 text-base"
        >
          <p className="text-fg-muted">
            <span className="text-term-purple">{"/**"}</span>
          </p>
          <p className="text-fg-dim pl-3">
            <span className="text-term-purple">{"*"}</span> {t("greeting")} <span className="text-term-yellow">{t("title")}</span>.
          </p>
          <p className="text-fg-dim pl-3">
            <span className="text-term-purple">{"*"}</span> {t("description")}
          </p>
          <p className="text-fg-muted">
            <span className="text-term-purple">{"*/"}</span>
          </p>
        </motion.div>

        {/* Action commands */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid sm:grid-cols-2 gap-3 max-w-xl"
        >
          <a
            href="#projects"
            className="group code-block px-4 py-3 hover:border-term-green transition-colors flex items-center justify-between"
          >
            <span className="text-sm">
              <span className="text-term-green">$</span>{" "}
              <span className="text-fg">cat</span>{" "}
              <span className="text-term-cyan">./projects</span>
            </span>
            <span className="text-fg-muted text-xs group-hover:text-term-green transition-colors">↳</span>
          </a>

          <a
            href="#contact"
            className="group code-block px-4 py-3 hover:border-term-green transition-colors flex items-center justify-between"
          >
            <span className="text-sm">
              <span className="text-term-green">$</span>{" "}
              <span className="text-fg">connect</span>{" "}
              <span className="text-term-cyan">--telegram</span>
            </span>
            <span className="text-fg-muted text-xs group-hover:text-term-green transition-colors">↳</span>
          </a>
        </motion.div>

        {/* Bottom info bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-y-4 text-xs border-t border-line pt-4"
        >
          {[
            ["status", "available", "term-green"],
            ["tags", "fullstack · ai · bots", "term-cyan"],
            ["uptime", "2+ yrs", "term-yellow"],
            ["build", "passing", "term-green"],
          ].map(([label, val, color]) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="text-fg-muted">{label}</span>
              <span className={`text-${color}`}>{val}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
