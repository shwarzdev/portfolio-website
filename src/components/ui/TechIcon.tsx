"use client";

import { motion } from "framer-motion";
import type { TechCategory } from "@/data/tech-stack";

interface TechIconProps {
  name: string;
  category: TechCategory;
}

const categoryColors: Record<TechCategory, string> = {
  frontend: "bg-blue-500",
  backend: "bg-green-500",
  databases: "bg-amber-500",
  ai: "bg-purple-500",
  bots: "bg-cyan-500",
  devops: "bg-rose-500",
};

export default function TechIcon({ name, category }: TechIconProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
    >
      <span className={`w-2 h-2 rounded-full ${categoryColors[category]}`} />
      <span className="text-sm text-zinc-300">{name}</span>
    </motion.div>
  );
}
