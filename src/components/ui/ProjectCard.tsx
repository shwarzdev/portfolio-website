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

export default function ProjectCard({
  project,
  index,
  title,
  description,
  privateLabel,
  githubLabel,
  liveLabel,
}: ProjectCardProps) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = Boolean(project.image) && !imgFailed;
  const hasLive = Boolean(project.live);
  const hasGithub = Boolean(project.github);
  const isReversed = index % 2 === 1;

  const categoryLabel = project.category.toUpperCase();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="group border-t border-ink/20 py-10 md:py-14 first:border-t-0 first:pt-2"
    >
      <div className={`grid grid-cols-12 gap-x-6 gap-y-6 ${isReversed ? "md:[direction:rtl]" : ""}`}>
        {/* Number + meta */}
        <div className="col-span-12 md:col-span-2 md:[direction:ltr]">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-2">
            № {String(index + 1).padStart(2, "0")}
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
            {categoryLabel}
          </div>
          {project.isPrivate && (
            <div className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted border border-ink/30 px-2 py-1">
              {privateLabel}
            </div>
          )}
        </div>

        {/* Image */}
        {hasImage && (
          <div className="col-span-12 md:col-span-5 md:[direction:ltr]">
            {hasLive ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden border border-ink/15 bg-cream-200 group/img"
                aria-label={`${liveLabel}: ${title}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover object-top group-hover/img:scale-[1.03] transition-transform duration-700"
                    onError={() => setImgFailed(true)}
                  />
                </div>
              </a>
            ) : (
              <div className="relative overflow-hidden border border-ink/15 bg-cream-200">
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                    onError={() => setImgFailed(true)}
                  />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Text content */}
        <div
          className={`col-span-12 ${
            hasImage ? "md:col-span-5" : "md:col-span-10"
          } md:[direction:ltr] flex flex-col justify-between`}
        >
          <div>
            <h3
              className="serif-display text-3xl md:text-4xl lg:text-5xl font-light leading-[1.05] tracking-tighter text-ink mb-4 text-balance"
              style={{ fontVariationSettings: '"opsz" 96' }}
            >
              {title}
            </h3>

            <p className="serif-text text-base md:text-lg text-ink/80 leading-relaxed max-w-prose mb-6 text-balance">
              {description}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted">
              {project.techTags.map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && <span className="text-ink/20">·</span>}
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-ink/10">
            {hasLive && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="serif-text italic text-lg md:text-xl text-ink hover:text-accent transition-colors underline decoration-1 underline-offset-3 inline-flex items-center gap-2"
              >
                {liveLabel}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            )}
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted hover:text-ink transition-colors inline-flex items-center gap-2"
              >
                ↳ {githubLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
