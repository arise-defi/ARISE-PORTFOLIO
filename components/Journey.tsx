import { Sparkle } from "./Icons";
import { site } from "@/data/site";
import { RevealSection } from "./RevealOnScroll";

export default function Journey() {
  return (
    <section id="journey" className="section-frame">
      <RevealSection>
        <div className="grid gap-8 lg:grid-cols-[120px_1fr]">
          <div className="reveal">
            <div className="font-display text-6xl text-link">04</div>
            <div className="section-kicker mt-2">Production loop</div>
          </div>
          <div>
            <div className="reveal reveal-delay-1">
              <h3 className="relative inline-block">
                <span
                  className="absolute inset-x-[-16px] top-[20%] bottom-[8%] -skew-y-1 bg-signal"
                  aria-hidden
                />
                <span className="relative font-display text-4xl uppercase leading-[0.9] tracking-[-0.03em] lg:text-5xl">
                  A loop, not a ladder
                </span>
              </h3>
              <Sparkle className="ml-3 inline h-4 w-4 text-signal" style={{ filter: "drop-shadow(1px 1px 0 #121212)" }} />
            </div>

            <ol className="reveal reveal-delay-2 mt-10 grid gap-px bg-ink sm:grid-cols-2 lg:grid-cols-4 list-none p-0">
              {site.loop.map((s) => (
                <li key={s.n} className="bg-paper p-6">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl text-link">{s.n}</span>
                    <span className="font-display text-2xl uppercase">{s.step}</span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
