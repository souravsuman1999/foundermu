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
        [
          // Base
          "group relative rounded-[var(--radius)] ring-border",
          "bg-white/[0.03] ring-1 ring-white/10 backdrop-blur",
          // Subtle top highlight
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[var(--radius)]",
          "before:bg-gradient-to-b before:from-white/[0.08] before:via-white/[0.03] before:to-transparent",
          "before:opacity-70 before:transition-opacity before:duration-200",
          // Interaction
          "transition-[transform,box-shadow,background-color,border-color] duration-200 ease-out will-change-transform",
          "hover:-translate-y-1 hover:bg-white/[0.045] hover:ring-fu/30 hover:shadow-glow hover:before:opacity-100",
          "focus-within:ring-fu/40 focus-within:shadow-glow"
        ].join(" "),
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


