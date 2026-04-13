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
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold text-white">
          shwarzdev
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {t(item.key)}
            </a>
          ))}
          <LocaleSwitcher />
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-zinc-400 hover:text-white p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 border-b border-zinc-800/50"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {t(item.key)}
                </a>
              ))}
              <LocaleSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
