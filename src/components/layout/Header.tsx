"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { NAV_ITEMS } from "@/lib/constants";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream-100/85 backdrop-blur-md border-b border-ink/10">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink hover:text-accent transition-colors"
        >
          shwarzdev<span className="text-ink-muted">.studio</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.key}
              href={item.href}
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted hover:text-accent transition-colors flex items-center gap-1.5"
            >
              <span className="text-ink/30">
                {String(idx + 1).padStart(2, "0")}
              </span>
              {t(item.key)}
            </a>
          ))}
          <div className="h-4 w-px bg-ink/20" />
          <LocaleSwitcher />
        </div>

        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden text-ink p-2"
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-cream-100 border-b border-ink/10"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.16em] text-ink py-2 flex items-center gap-3"
                >
                  <span className="text-ink/30">{String(idx + 1).padStart(2, "0")}</span>
                  {t(item.key)}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-ink/10">
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
