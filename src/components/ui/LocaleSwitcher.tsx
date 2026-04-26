"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "en" | "ru")) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center gap-2">
          {i > 0 && <span className="text-ink/20">/</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`transition-colors ${
              locale === loc
                ? "text-accent"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {loc}
          </button>
        </span>
      ))}
    </div>
  );
}
