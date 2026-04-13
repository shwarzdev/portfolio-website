"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";

interface Testimonial {
  nameKey: string;
  roleKey: string;
  textKey: string;
  date: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    nameKey: "t1_name",
    roleKey: "t1_role",
    textKey: "t1_text",
    date: "2026-03-15",
    rating: 5,
  },
  {
    nameKey: "t2_name",
    roleKey: "t2_role",
    textKey: "t2_text",
    date: "2026-02-28",
    rating: 5,
  },
  {
    nameKey: "t3_name",
    roleKey: "t3_role",
    textKey: "t3_text",
    date: "2026-01-10",
    rating: 5,
  },
  {
    nameKey: "t4_name",
    roleKey: "t4_role",
    textKey: "t4_text",
    date: "2025-12-05",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === "ru" ? "ru-RU" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = t("heading") === "Отзывы" ? "ru" : "en";

  return (
    <section id="testimonials" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <AnimatedSection>
          <SectionHeading title={t("heading")} subtitle={t("subtitle")} />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.nameKey} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6 h-full flex flex-col"
              >
                <Stars count={testimonial.rating} />

                <p className="text-zinc-300 text-sm leading-relaxed mt-4 flex-1">
                  &ldquo;{t(testimonial.textKey)}&rdquo;
                </p>

                <div className="mt-5 pt-4 border-t border-zinc-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
                      {t(testimonial.nameKey).charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">
                        {t(testimonial.nameKey)}
                      </p>
                      <p className="text-zinc-500 text-xs">
                        {t(testimonial.roleKey)}
                      </p>
                    </div>
                  </div>
                  <p className="text-zinc-600 text-xs">
                    {formatDate(testimonial.date, locale)}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
