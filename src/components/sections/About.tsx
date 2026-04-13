"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const t = useTranslations("about");

  const stats = [
    { value: t("stats.projects"), label: t("stats.projects_label") },
    { value: t("stats.stack"), label: t("stats.stack_label") },
    { value: t("stats.languages"), label: t("stats.languages_label") },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title={t("heading")} />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-12">
            {t("bio")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <p className="text-2xl font-bold text-gradient mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
