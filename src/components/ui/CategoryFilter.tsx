"use client";

import { motion } from "framer-motion";

interface FilterItem {
  readonly key: string;
  readonly label: string;
}

interface CategoryFilterProps {
  filters: readonly FilterItem[];
  activeFilter: string;
  onFilterChange: (key: string) => void;
}

export default function CategoryFilter({
  filters,
  activeFilter,
  onFilterChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onFilterChange(filter.key)}
          className={`relative px-4 py-2 text-sm rounded-lg transition-colors ${
            activeFilter === filter.key
              ? "text-white"
              : "text-zinc-400 hover:text-zinc-200"
          }`}
        >
          {activeFilter === filter.key && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-zinc-800 rounded-lg border border-zinc-700"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{filter.label}</span>
        </button>
      ))}
    </div>
  );
}
