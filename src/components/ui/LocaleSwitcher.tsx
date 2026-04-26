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
    <div className="flex items-center text-xs">
      <span className="text-fg-subtle">[</span>
      {routing.locales.map((loc, i) => (
        <span key={loc} className="flex items-center">
          {i > 0 && <span className="text-fg-subtle px-1">|</span>}
          <button
            onClick={() => switchLocale(loc)}
            className={`transition-colors uppercase ${
              locale === loc
                ? "text-term-green"
                : "text-fg-muted hover:text-fg"
            }`}
          >
            {loc}
          </button>
        </span>
      ))}
      <span className="text-fg-subtle">]</span>
    </div>
  );
}
