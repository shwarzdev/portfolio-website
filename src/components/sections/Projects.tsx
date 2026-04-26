"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { projects, type ProjectCategory } from "@/data/projects";
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
    <section
      id="projects"
      className="py-20 md:py-28 px-4 md:px-6 border-t border-line"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section heading */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-term-green text-sm">▸</span>
          <span className="text-xs text-fg-muted">03 / {t("heading").toLowerCase()}</span>
          <span className="text-fg-subtle">—</span>
          <span className="text-fg-dim text-sm">{t("subtitle").toLowerCase()}</span>
          <div className="flex-1 h-px bg-line ml-2" />
          <span className="text-xs text-fg-muted">
            {filteredProjects.length} entries
          </span>
        </div>

        {/* Demo notice */}
        <div className="mb-6 px-4 py-2.5 border-l-2 border-term-yellow bg-term-yellow/5 text-xs text-fg-dim">
          <span className="text-term-yellow">⚠</span> {t("demo_notice")}
        </div>

        {/* Filter */}
        <div className="mb-2 flex flex-wrap items-center text-xs">
          <span className="text-fg-muted mr-2">filter:</span>
          {filters.map((f, i) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key as FilterKey)}
              className={`px-2 py-1 transition-colors ${
                activeFilter === f.key
                  ? "text-term-green"
                  : "text-fg-muted hover:text-fg"
              }`}
            >
              {i > 0 && <span className="text-fg-subtle pr-1">|</span>}
              <span>{f.label.toLowerCase()}</span>
            </button>
          ))}
        </div>

        {/* Project list - terminal-style file table */}
        <div className="border border-line">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-x-3 px-4 py-2 bg-surface border-b border-line text-[10px] uppercase tracking-wider text-fg-muted">
            <span className="col-span-1">№</span>
            <span className="col-span-3">name</span>
            <span className="col-span-5">description</span>
            <span className="col-span-2">stack</span>
            <span className="col-span-1 text-right">→</span>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                title={t(project.titleKey)}
                description={t(project.descriptionKey)}
                privateLabel={t("private_code")}
                githubLabel={t("view_github")}
                liveLabel={t("view_live")}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="mt-3 text-[10px] text-fg-muted">
          <span className="text-term-green">$</span> end of list · {filteredProjects.length} of {projects.length}
        </div>
      </div>
    </section>
  );
}
