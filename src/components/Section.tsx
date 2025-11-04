import { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function Section({ eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        {eyebrow ? (
          <div className="mb-3 text-xs uppercase tracking-widest text-zinc-500">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle ? (
          <p className="mt-3 max-w-prose text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
