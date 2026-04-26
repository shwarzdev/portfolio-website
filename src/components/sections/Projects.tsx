"use client";

import { useState, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
      className="py-24 md:py-32 px-6 md:px-10 border-t border-ink/20"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-x-6 mb-12 md:mb-20">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              03 / Selected work
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2
              className="serif-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tighter text-ink text-balance"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              {t("heading")}
              <span className="serif-text italic text-ink-muted">
                {" "}
                — {t("subtitle").toLowerCase()}.
              </span>
            </h2>

            <p className="mt-8 max-w-xl font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
              ※ {t("demo_notice")}
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="border-y border-ink/30 mb-12">
          <div className="flex flex-wrap items-center">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key as FilterKey)}
                className={`relative px-5 md:px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  activeFilter === f.key
                    ? "text-accent"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {activeFilter === f.key && (
                  <motion.div
                    layoutId="filter-line"
                    className="absolute inset-x-0 -bottom-px h-px bg-accent"
                  />
                )}
                {f.label}
              </button>
            ))}
            <div className="ml-auto px-5 md:px-8 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              {filteredProjects.length} entries
            </div>
          </div>
        </div>

        {/* Project list — editorial spreads */}
        <div className="flex flex-col">
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
      </div>
    </section>
  );
}
