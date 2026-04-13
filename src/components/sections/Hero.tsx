"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto px-4 text-center"
      >
        <motion.p
          variants={item}
          className="text-zinc-400 text-lg mb-2 font-mono"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-bold text-gradient mb-4"
        >
          {t("name")}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-zinc-300 font-medium mb-6"
        >
          {t("title")}
        </motion.p>

        <motion.p
          variants={item}
          className="text-zinc-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed"
        >
          {t("description")}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#projects">{t("cta_projects")}</Button>
          <Button href="#contact" variant="outline">
            {t("cta_contact")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
