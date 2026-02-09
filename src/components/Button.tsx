import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

type Props = ComponentProps<typeof Link> & {
  variant?: ButtonVariant;
};

export function Button({ variant = "secondary", className, ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform active:translate-y-[1px]";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-fu text-black shadow-glowStrong hover:shadow-glowStrong ring-1 ring-black/20",
    secondary:
      "bg-white/5 text-white ring-1 ring-white/12 hover:bg-white/8 hover:ring-white/18",
    ghost: "text-white/80 hover:text-white hover:bg-white/5"
  };

  return <Link className={cx(base, variants[variant], className)} {...props} />;
}


