import type { ReactNode } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cx("py-16 md:py-24 scroll-mt-24", className)}>
      <div className="container">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="inline-flex items-center gap-2 rounded-full bg-fu/10 px-4 py-2 text-xs font-semibold text-fu ring-1 ring-fu/20">
              <span className="h-1.5 w-1.5 rounded-full bg-fu" />
              {eyebrow}
            </div>
          ) : null}
          <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}


