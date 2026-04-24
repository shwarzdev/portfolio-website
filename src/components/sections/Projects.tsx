"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { projects, type ProjectCategory } from "@/data/projects";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryFilter from "@/components/ui/CategoryFilter";
import ProjectCard from "@/components/ui/ProjectCard";

type FilterKey = "all" | ProjectCategory;

export default function Projects() {
  const t = useTranslations("projects");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filters = [
    { key: "all", label: t("filter_all") },
    { key: "telegram", label: t("filter_telegram") },
    { key: "web", label: t("filter_web") },
    { key: "ai", label: t("filter_ai") },
    { key: "tools", label: t("filter_tools") },
  ] as const;

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs text-violet-300">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{t("demo_notice")}</span>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <CategoryFilter
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={(key) => setActiveFilter(key as FilterKey)}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                privateLabel={t("private_code")}
                githubLabel={t("view_github")}
                liveLabel={t("view_live")}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
