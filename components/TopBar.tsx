import { site } from "@/data/site";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink bg-paper">
      <div className="flex items-center justify-between px-4 py-3 sm:px-5 lg:px-10">
        {/* Left: Brand + role */}
        <div className="ml-8 lg:ml-0">
          <h1 className="font-display text-xl leading-none tracking-wide sm:text-2xl lg:text-[28px]">{site.brand}</h1>
          <p className="section-kicker mt-0.5 text-[8px] sm:text-[10px] sm:mt-1">{site.role}</p>
        </div>

        {/* Right: Logo on mobile */}
        <div className="lg:hidden">
          <img src="/logo.png" alt="Arise" className="h-7 w-7 object-contain" />
        </div>
      </div>
    </header>
  );
}
