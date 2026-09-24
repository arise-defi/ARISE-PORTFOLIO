import { Sparkle } from "./Icons";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink bg-ink px-5 py-5 text-paper lg:px-10">
      <div className="meta flex flex-wrap items-center justify-between gap-4 text-[10px]">
        <span className="flex items-center gap-3">
          <Sparkle className="h-3 w-3 text-signal" /> © 2026 {site.brand} · ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
}
