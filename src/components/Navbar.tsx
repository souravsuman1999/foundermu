import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";

const APPLY_URL = "https://mastersunion.org/venture-form";

const nav = [
  { label: "Program", href: "#program" },
  { label: "Team", href: "#team" },
  { label: "Timeline", href: "#timeline" },
  { label: "Mentors", href: "#mentors" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="hover:text-white transition"
            >
              {i.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
          >
            Apply Now
          </Button>
        </div>
      </div>

      <div className="md:hidden border-t border-white/5">
        <div className="container flex items-center gap-2 overflow-x-auto py-2 hide-scrollbar">
          {nav.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/8"
            >
              {i.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}


