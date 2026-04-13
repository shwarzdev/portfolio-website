export interface TechItem {
  readonly name: string;
  readonly category: TechCategory;
}

export type TechCategory = "frontend" | "backend" | "databases" | "ai" | "bots" | "devops";

export const techCategories: readonly { readonly key: TechCategory; readonly label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "ai", label: "AI / ML" },
  { key: "bots", label: "Bots" },
  { key: "devops", label: "DevOps" },
];

export const techStack: readonly TechItem[] = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },

  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Socket.io", category: "backend" },

  { name: "PostgreSQL", category: "databases" },
  { name: "Redis", category: "databases" },
  { name: "SQLite", category: "databases" },
  { name: "Prisma", category: "databases" },
  { name: "Sequelize", category: "databases" },
  { name: "SQLAlchemy", category: "databases" },

  { name: "OpenAI API", category: "ai" },
  { name: "Groq API", category: "ai" },
  { name: "FAISS", category: "ai" },
  { name: "LangChain", category: "ai" },
  { name: "RAG", category: "ai" },

  { name: "Telegram Bot API", category: "bots" },
  { name: "grammy", category: "bots" },
  { name: "aiogram", category: "bots" },
  { name: "Mini Apps", category: "bots" },

  { name: "Docker", category: "devops" },
  { name: "Nginx", category: "devops" },
  { name: "PM2", category: "devops" },
  { name: "Git", category: "devops" },
  { name: "Vercel", category: "devops" },
  { name: "VPS", category: "devops" },
];
