"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  title: string;
  description: string;
  privateLabel: string;
  githubLabel: string;
  liveLabel: string;
}

const CATEGORY_COLOR: Record<string, string> = {
  telegram: "text-term-cyan",
  web: "text-term-purple",
  ai: "text-term-green",
  tools: "text-term-yellow",
};

export default function ProjectCard({
  project,
  index,
  title,
  description,
  privateLabel,
  githubLabel,
  liveLabel,
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = Boolean(project.image) && !imgFailed;
  const hasLive = Boolean(project.live);
  const hasGithub = Boolean(project.github);
  const catColor = CATEGORY_COLOR[project.category] ?? "text-fg-dim";

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="border-b border-line last:border-b-0 hover:bg-surface/50 transition-colors"
    >
      {/* Row */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full text-left px-4 py-3 grid grid-cols-12 gap-x-3 items-start md:items-center"
      >
        {/* Number */}
        <span className="col-span-1 text-xs text-fg-muted font-medium hidden md:block">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Name + category */}
        <div className="col-span-12 md:col-span-3 flex items-center gap-2 mb-1 md:mb-0">
          <span className="md:hidden text-xs text-fg-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={`text-xs ${catColor}`}>●</span>
          <span className="text-fg text-sm font-medium truncate">{title}</span>
          {project.isPrivate && (
            <span className="text-[9px] uppercase tracking-wider text-fg-muted border border-fg-subtle px-1.5 py-0.5 shrink-0">
              private
            </span>
          )}
        </div>

        {/* Description */}
        <span className="col-span-12 md:col-span-5 text-xs text-fg-dim line-clamp-1 mb-1 md:mb-0">
          {description}
        </span>

        {/* Tech tags (compact) */}
        <span className="col-span-12 md:col-span-2 text-[10px] text-fg-muted truncate mb-1 md:mb-0">
          {project.techTags.slice(0, 3).join(" · ")}
        </span>

        {/* Expand */}
        <span className={`col-span-12 md:col-span-1 text-right text-xs text-fg-muted transition-transform ${expanded ? "rotate-90" : ""}`}>
          →
        </span>
      </button>

      {/* Expanded content */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden border-t border-line bg-surface/30"
        >
          <div className="grid grid-cols-12 gap-x-6 gap-y-4 px-4 py-5 md:py-6">
            {/* Image / preview */}
            {hasImage && (
              <div className="col-span-12 md:col-span-6">
                {hasLive ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-line hover:border-term-green transition-colors overflow-hidden"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover object-top"
                        onError={() => setImgFailed(true)}
                      />
                    </div>
                  </a>
                ) : (
                  <div className="border border-line overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden bg-bg">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={title}
                        className="w-full h-full object-cover object-top"
                        onError={() => setImgFailed(true)}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Details */}
            <div className={`col-span-12 ${hasImage ? "md:col-span-6" : "md:col-span-10 md:col-start-2"} flex flex-col`}>
              {/* Description */}
              <p className="text-sm text-fg leading-relaxed mb-4">
                {description}
              </p>

              {/* Tech tags full */}
              <div className="mb-4">
                <div className="text-[10px] uppercase tracking-wider text-fg-muted mb-2">stack</div>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {project.techTags.map((tag, i) => (
                    <span key={tag} className="text-xs text-fg-dim">
                      {i > 0 && <span className="text-fg-subtle mr-2">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div className="mb-5">
                <div className="text-[10px] uppercase tracking-wider text-fg-muted mb-2">category</div>
                <span className={`text-xs ${catColor}`}>{project.category}</span>
              </div>

              {/* Actions */}
              <div className="mt-auto flex flex-wrap gap-2 pt-3 border-t border-line">
                {hasLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-term-green/10 border border-term-green text-term-green hover:bg-term-green hover:text-bg transition-colors"
                  >
                    <span>$ open</span>
                    <span>{liveLabel}</span>
                    <span>↗</span>
                  </a>
                )}
                {hasGithub && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs border border-line text-fg-dim hover:border-fg hover:text-fg transition-colors"
                  >
                    <span>$ git clone</span>
                    <span>{githubLabel}</span>
                  </a>
                )}
                {project.isPrivate && !hasLive && !hasGithub && (
                  <span className="inline-block px-3 py-1.5 text-xs border border-line text-fg-muted">
                    {privateLabel}
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}
