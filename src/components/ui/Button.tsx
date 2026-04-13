import { type ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "outline";
  href?: string;
  children: ReactNode;
  external?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  children,
  external = false,
  onClick,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300";

  const variants = {
    primary:
      "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105",
    outline:
      "border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
