"use client";

import { useTranslations } from "next-intl";
import { techStack, techCategories } from "@/data/tech-stack";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import TechIcon from "@/components/ui/TechIcon";

export default function TechStack() {
  const t = useTranslations("techStack");

  return (
    <section id="stack" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
        </AnimatedSection>

        <div className="space-y-8">
          {techCategories.map((category, catIdx) => {
            const items = techStack.filter((t) => t.category === category.key);
            return (
              <AnimatedSection key={category.key} delay={catIdx * 0.1}>
                <div>
                  <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-3">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech) => (
                      <TechIcon
                        key={tech.name}
                        name={tech.name}
                        category={tech.category}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
