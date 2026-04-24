"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  title: string;
  description: string;
  privateLabel: string;
  githubLabel: string;
  liveLabel: string;
}

export default function ProjectCard({
  project,
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
  const sourceLabel = githubLabel;
  const viewCodeLabel = githubLabel;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`group relative rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 ${
        project.isFeatured ? "md:col-span-2" : ""
      }`}
    >
      {hasImage && (
        <div className="h-48 relative overflow-hidden">
          {hasLive ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full cursor-pointer"
              aria-label={`${liveLabel}: ${title}`}
            >
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={() => setImgFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-medium shadow-lg shadow-violet-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>{liveLabel}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>
            </a>
          ) : (
            <>
              <img
                src={project.image}
                alt={title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                onError={() => setImgFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          )}
        </div>
      )}

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {project.isPrivate && !hasLive && !hasGithub && (
            <span className="px-3 py-1.5 text-xs rounded-lg bg-zinc-800 text-zinc-500 border border-zinc-700/50">
              {privateLabel}
            </span>
          )}

          {hasLive && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:scale-[1.03] transition-all"
            >
              <span>{liveLabel}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          )}

          {hasLive && hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs rounded-lg border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white hover:bg-zinc-800/60 transition-colors"
            >
              {sourceLabel}
            </a>
          )}

          {!hasLive && hasGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg border border-zinc-600 text-zinc-200 hover:border-violet-500/60 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.28-.01-1.01-.02-1.99-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.98 10.98 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14 0 1.54-.02 2.79-.02 3.17 0 .31.21.67.8.56 4.56-1.53 7.85-5.84 7.85-10.93C23.5 5.65 18.35.5 12 .5z" />
              </svg>
              <span>{viewCodeLabel}</span>
            </a>
          )}

          {project.isPrivate && (hasLive || hasGithub) && (
            <span className="px-3 py-1.5 text-xs rounded-lg bg-zinc-800/70 text-zinc-500 border border-zinc-700/50">
              {privateLabel}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
