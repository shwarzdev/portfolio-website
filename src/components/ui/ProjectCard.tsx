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
  const hasImage = project.image && !imgFailed;

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
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgFailed(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

        <div className="flex items-center gap-2">
          {project.isPrivate && (
            <span className="px-3 py-1.5 text-xs rounded-lg bg-zinc-800 text-zinc-500 border border-zinc-700/50">
              {privateLabel}
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              {githubLabel}
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              {liveLabel}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
