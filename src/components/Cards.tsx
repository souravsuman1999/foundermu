import type { ReactNode } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-[var(--radius)] bg-white/5 ring-1 ring-white/10 ring-border",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="p-6">
      <div className="text-base font-semibold text-white">{title}</div>
      {subtitle ? (
        <div className="mt-2 text-sm leading-relaxed text-white/65">
          {subtitle}
        </div>
      ) : null}
    </div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div className="px-6 pb-6">{children}</div>;
}


