import { Sparkle } from "./Icons";
import { site } from "@/data/site";
import { RevealSection } from "./RevealOnScroll";

export default function SystemInventory() {
  return (
    <section id="skills" className="section-frame !border-b-0">
      <RevealSection>
        <div className="bg-ink px-6 py-14 text-paper lg:px-14">
          {/* ── Header ── */}
          <div className="grid gap-8 lg:grid-cols-[120px_1fr_160px]">
            <div className="reveal">
              <div className="font-display text-6xl text-link">03</div>
              <div className="section-kicker mt-2">
                System
                <br />
                inventory
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <h3 className="relative inline-block">
                <span
                  className="absolute inset-x-[-16px] top-[20%] bottom-[8%] -skew-y-1 bg-signal"
                  aria-hidden
                />
                <span className="relative font-display text-4xl uppercase leading-[0.9] tracking-[-0.03em] text-ink lg:text-5xl">
                  Tools for the next build
                </span>
              </h3>
              <Sparkle className="ml-3 inline h-4 w-4 text-signal" />
              <p className="mt-5 max-w-xl font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-paper/60">
                Languages, platforms, and habits chosen for clarity, speed, and maintainable results.
              </p>
            </div>
            <div className="reveal reveal-delay-2 section-kicker justify-self-end hidden lg:block">技術码</div>
          </div>

          {/* ── Inventory rows ── */}
          <ul className="mt-12">
            {site.inventory.map((row, i) => (
              <li
                key={row.n}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} border-t border-paper/20 py-6`}
              >
                {/* Row header: number + icon + title + note */}
                <div className="grid grid-cols-[48px_1fr] items-center gap-4 md:grid-cols-[48px_28px_1fr_auto]">
                  <span className="font-display text-2xl text-signal">{row.n}</span>
                  <span className="hidden font-mono text-sm text-paper/70 md:block">{row.icon}</span>
                  <h4 className="font-display text-2xl uppercase tracking-wide lg:text-3xl">{row.title}</h4>
                  <span className="meta col-span-2 text-[10px] text-paper/50 md:col-span-1 md:text-right">
                    {row.note}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="mt-4 flex flex-wrap gap-2 pl-0 md:pl-[76px]">
                  {row.tags.map((tag) => (
                    <span
                      key={tag}
                      className="skill-tag"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            ))}
            <li className="border-t border-paper/20" />
          </ul>
        </div>
      </RevealSection>
    </section>
  );
}
