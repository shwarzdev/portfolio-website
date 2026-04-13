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
