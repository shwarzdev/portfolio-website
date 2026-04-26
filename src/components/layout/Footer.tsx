import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-fg-muted">
          <p>
            <span className="text-term-green">$</span> echo &quot;{year} · {t("copyright")}&quot;
          </p>
          <p>{t("built_with")}</p>
        </div>
      </div>
    </footer>
  );
}
