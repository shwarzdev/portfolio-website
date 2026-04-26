import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-100 border-t border-cream-100/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream-100/60">
          <p>
            © {year} · {t("copyright")}
          </p>
          <p>{t("built_with")}</p>
        </div>
      </div>
    </footer>
  );
}
