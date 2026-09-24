import Image from "next/image";
import { site } from "@/data/site";
import { AnalogClock, DigitalClock } from "./Clocks";
import { Arrow, Github, Sparkle, Code, Wrench } from "./Icons";
import { RevealSection } from "./RevealOnScroll";

const cardIcon = { code: Code, wrench: Wrench, dot: null } as const;

export default function Hero() {
  return (
    <section id="home" className="section-frame relative overflow-hidden min-h-[640px]">
      <RevealSection>
        {/* ── Meta row ── */}
        <div className="reveal meta flex flex-wrap items-center gap-4 text-link">
          <span>{site.kanji} · DEV</span>
          <span className="hidden h-px w-24 bg-ink/40 sm:block" />
          <span className="flex items-center gap-2 text-ink">
            <span className="inline-block h-3 w-3 rounded-full border border-ink" />
            <DigitalClock />
          </span>
        </div>

        {/* ── Main grid ── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">
          {/* ── Left: Headline + Character overlap ── */}
          <div className="relative">
            {/* Headline */}
            <h2 className="reveal font-display uppercase leading-[0.78] tracking-[-0.035em] text-[clamp(4.15rem,18.5vw,11rem)]">
              {site.brand}
            </h2>
            <p className="reveal reveal-delay-1 font-display uppercase tracking-[0.08em] text-[clamp(1rem,3vw,1.6rem)] text-ink/60 mt-2">
              Ankit Kush
            </p>

            {/* ── Character illustration overlapping headline ── */}
            <div className="pointer-events-none absolute right-0 top-[-11%] z-10 hidden lg:block" style={{ width: "70%" }}>
              <Image
                src="/character.png"
                alt="Character Profile"
                width={620}
                height={820}
                className="h-auto max-h-[620px] w-full object-contain object-bottom character-glow"
                priority
              />
            </div>

            {/* ── Floating cluster elements ── */}
            {/* Analog clock */}
            <div className="absolute right-[43%] top-[-14%] z-20 hidden lg:block">
              <div className="relative" style={{ width: "clamp(3.5rem, 6vw, 5rem)", height: "clamp(3.5rem, 6vw, 5rem)" }}>
                <AnalogClock />
                <Sparkle className="absolute -right-2 -top-2 h-3.5 w-3.5 text-link" />
                <div className="meta absolute -bottom-5 left-1/2 -translate-x-1/2 text-link text-[9px]">IST</div>
              </div>
            </div>

            {/* Software Developer badge */}
            <div className="absolute right-[19%] top-[-5%] z-20 hidden lg:block">
              <div className="border border-link px-4 py-3 text-center bg-paper">
                <Sparkle className="mx-auto h-4 w-4 text-link" />
                <div className="section-kicker mt-2">{site.role}</div>
              </div>
            </div>

            {/* BUILD SHIPS / NOT NOISE sticker */}
            <div className="absolute right-[3%] top-1/3 z-20 hidden lg:block" style={{ transform: "rotate(-4deg)" }}>
              <div className="border border-ink bg-signal px-5 py-3 shadow-hard">
                <div className="font-mono text-[13px] font-medium leading-tight tracking-widest text-ink">
                  {site.sticker[0]}
                  <br />
                  {site.sticker[1]}
                </div>
              </div>
            </div>

            {/* Nameplate + barcode at bottom-right */}
            <div className="absolute right-[8%] bottom-[8%] z-20 hidden lg:block">
              <div className="border border-ink bg-ink px-5 py-4 text-paper shadow-hard-signal">
                <div className="font-display text-xl">{site.kanji} ARISE</div>
                <div className="mt-2 flex gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <span key={i} className="h-5 w-1 bg-paper" />
                  ))}
                </div>
                <div className="meta mt-3 text-[9px] text-paper/70">DEVLOG / VER.01</div>
              </div>
            </div>

            {/* Tagline + CTAs */}
            <div className="relative z-20 mt-5">
              <p className="reveal reveal-delay-1 max-w-sm text-[15px] leading-relaxed">
                {site.tagline.pre}
                <span className="font-mono text-link">{site.tagline.accent}</span>
                {site.tagline.post}
              </p>

              <div className="reveal reveal-delay-2 mt-7 flex flex-wrap gap-4">
                <a href="#work" className="tech-button">
                  Explore selected work <Arrow className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Mobile character portrait */}
            <div className="mt-8 lg:hidden">
              <Image
                src="/character.png"
                alt="Character Profile"
                width={400}
                height={520}
                className="mx-auto h-auto max-h-[400px] w-auto object-contain character-glow"
                priority
              />
            </div>

            {/* Mobile cluster items */}
            <div className="mt-8 flex flex-wrap items-center gap-4 lg:hidden">
              <div className="relative h-20 w-20 shrink-0">
                <AnalogClock />
                <div className="meta absolute -bottom-4 left-1/2 -translate-x-1/2 text-link text-[8px]">IST</div>
              </div>
              <div className="border border-link px-4 py-3 text-center shrink-0">
                <Sparkle className="mx-auto h-3 w-3 text-link" />
                <div className="section-kicker mt-1 text-[9px]">{site.role}</div>
              </div>
              <div className="border border-ink bg-signal px-4 py-2 shadow-hard-sm shrink-0" style={{ transform: "rotate(-3deg)" }}>
                <div className="font-mono text-[11px] font-medium leading-tight tracking-widest text-ink">
                  {site.sticker[0]}<br />{site.sticker[1]}
                </div>
              </div>
              <div className="border border-ink bg-ink px-4 py-3 text-paper shrink-0">
                <div className="font-display text-lg">{site.kanji} ARISE</div>
                <div className="mt-1 flex gap-1">
                  {[0, 1, 2, 3].map((i) => (<span key={i} className="h-4 w-0.5 bg-paper" />))}
                </div>
                <div className="meta mt-2 text-[8px] text-paper/70">DEVLOG / VER.01</div>
              </div>
            </div>
          </div>

          {/* ── Right column: Status data panels ── */}
          <div className="reveal reveal-delay-3 flex flex-col gap-4 self-start">
            {site.cards.map((c) => {
              const Icon = cardIcon[c.icon as keyof typeof cardIcon];
              return (
                <div key={c.label} className="data-panel">
                  <div className="data-panel__header">
                    <span>{c.label}</span>
                    {Icon ? <Icon className="h-4 w-4 text-signal" /> : <Sparkle className="h-3 w-3 text-signal" />}
                  </div>
                  <div className="data-panel__body flex-col items-start">
                    <div className="meta text-[13px] font-bold text-ink">{c.title}</div>
                    <div className="mt-1 font-mono text-[11px] text-ink/60">{c.sub}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
