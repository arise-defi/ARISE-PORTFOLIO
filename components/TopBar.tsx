import { site } from "@/data/site";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink bg-paper">
      <div className="flex items-center justify-between px-5 py-3 lg:px-10">
        <div>
          <h1 className="font-display text-2xl leading-none tracking-wide lg:text-[28px]">{site.brand}</h1>
          <p className="section-kicker mt-1">{site.role}</p>
        </div>
      </div>
    </header>
  );
}
