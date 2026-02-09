import Link from "next/link";

export function Logo() {
  return (
    <Link href="#top" className="flex items-center gap-3">
      <img
        src="/icon.svg"
        alt="Founders' Union"
        className="h-10 w-10 rounded-xl shadow-glowStrong ring-1 ring-black/20"
      />
      <span className="text-base font-semibold tracking-tight">
        Founders&apos; Union
      </span>
    </Link>
  );
}


