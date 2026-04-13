import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-zinc-800/50 py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        <p>{t("copyright")}</p>
        <p>{t("built_with")}</p>
      </div>
    </footer>
  );
}
