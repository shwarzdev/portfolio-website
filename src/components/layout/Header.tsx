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
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md border-b border-line">
      {/* Top status bar */}
      <div className="border-b border-line bg-surface">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 h-7 flex items-center justify-between text-[10px] text-fg-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-term-green animate-pulse" />
              <span>READY</span>
            </span>
            <span className="text-fg-subtle hidden sm:inline">|</span>
            <span className="hidden sm:inline">~/portfolio/shwarzdev</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline">main</span>
            <span className="text-fg-subtle hidden md:inline">|</span>
            <span>v3.5.2</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-[1400px] mx-auto px-4 md:px-6 h-12 flex items-center justify-between">
        <a
          href="#"
          className="text-sm text-fg hover:text-term-green transition-colors flex items-center gap-2"
        >
          <span className="text-term-green">$</span>
          <span className="font-medium">shwarzdev</span>
          <span className="text-fg-muted text-xs">--portfolio</span>
        </a>

        <div className="hidden md:flex items-center">
          {NAV_ITEMS.map((item, idx) => (
            <a
              key={item.key}
              href={item.href}
              className="px-3 py-1.5 text-xs text-fg-dim hover:text-term-green transition-colors flex items-center gap-1.5 border-r border-line first:border-l"
            >
              <span className="text-fg-subtle">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span>{t(item.key).toLowerCase()}</span>
            </a>
          ))}
          <div className="pl-4">
            <LocaleSwitcher />
          </div>
        </div>

        <button
          onClick={() => setMobileOpen((p) => !p)}
          className="md:hidden text-fg p-2"
          aria-label="Toggle menu"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
            className="md:hidden overflow-hidden bg-surface border-b border-line"
          >
            <div className="flex flex-col px-4 py-3">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs text-fg-dim hover:text-term-green py-2 flex items-center gap-3"
                >
                  <span className="text-fg-subtle">{String(idx + 1).padStart(2, "0")}</span>
                  <span>{t(item.key).toLowerCase()}</span>
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-line">
                <LocaleSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
