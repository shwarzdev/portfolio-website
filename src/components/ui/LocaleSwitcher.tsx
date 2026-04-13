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
    if (routing.locales.includes(segments[1] as 'en' | 'ru')) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join("/") || "/");
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors uppercase ${
            locale === loc
              ? "text-accent bg-accent/10"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
