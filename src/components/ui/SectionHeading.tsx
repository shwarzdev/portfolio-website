interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-400 text-lg">{subtitle}</p>
      )}
    </div>
  );
}
