import Link from "next/link";

export function Logo() {
  return (
    <Link href="#top" className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-fu text-[13px] font-black text-black">
        FU
      </span>
      <span className="text-base font-semibold tracking-tight">
        Founders&apos; Union
      </span>
    </Link>
  );
}


