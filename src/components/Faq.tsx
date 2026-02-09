"use client";

import { useId, useMemo, useState } from "react";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export type FaqItem = { q: string; a: string };

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  const rows = useMemo(() => items, [items]);

  return (
    <div className="space-y-3">
      {rows.map((it, idx) => {
        const isOpen = open === idx;
        const buttonId = `${baseId}-faq-btn-${idx}`;
        const panelId = `${baseId}-faq-panel-${idx}`;
        return (
          <div
            key={it.q}
            className={cx(
              "rounded-[var(--radius)] bg-white/5 ring-1 ring-white/10 transition",
              isOpen && "ring-fu/25 shadow-glow"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              id={buttonId}
              aria-controls={panelId}
              className={cx(
                "group flex w-full items-center justify-between gap-6 p-6 text-left",
                "hover:bg-white/[0.03] focus-visible:ring-2 focus-visible:ring-fu/60 focus-visible:ring-offset-0"
              )}
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-white/90 group-hover:text-white">
                {it.q}
              </span>
              <span
                className={cx(
                  "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 transition",
                  isOpen ? "bg-fu/15 ring-fu/25" : "group-hover:bg-white/8"
                )}
                aria-hidden="true"
              >
                <span className="relative h-3.5 w-3.5">
                  <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-white/70 transition group-hover:bg-white/85" />
                  <span
                    className={cx(
                      "absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-white/70 transition group-hover:bg-white/85",
                      isOpen && "scale-y-0"
                    )}
                  />
                </span>
              </span>
            </button>
            <div
              className={cx(
                "grid transition-[grid-template-rows,opacity] duration-200 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed text-white/65">
                    {it.a}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}


