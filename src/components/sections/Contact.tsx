"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { TELEGRAM_URL, GITHUB_URL } from "@/lib/constants";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 text-center">
        <AnimatedSection>
          <SectionHeading title={t("heading")} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
            {t("description")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={TELEGRAM_URL} external>
              {t("telegram")}
            </Button>
            <Button href={GITHUB_URL} variant="outline" external>
              {t("github")}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
