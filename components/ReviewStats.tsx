"use client";
import { useEffect, useRef, useState } from "react";
import { Sparkle } from "./Icons";
import { RevealSection } from "./RevealOnScroll";

const REVIEWS = [
  {
    name: "Sourish",
    badge: null,
    date: "9/20/26, 12:12 PM",
    text: "Guys I just have to say, arise is one of the best websites for watching any kind of movies/tv shows. I am having a lot of fun 🙂",
    color: "#4a9e4a",
  },
  {
    name: "n4ha",
    badge: "VFX",
    date: "6/20/26, 5:09 PM",
    text: "yo bro i love you thanks for making my every day life better with arise",
    color: "#c27849",
  },
  {
    name: "ANDI",
    badge: null,
    date: "9/11/26, 3:27 PM",
    text: "U have developed a great app tbh, this would be a super app to watch content of any sort. Maybe you could include global search to search in multiple platforms.",
    color: "#2a2a2a",
  },
  {
    name: "Ravi K.",
    badge: "DEV",
    date: "8/15/26, 7:44 PM",
    text: "The post-quantum encryption on ARISE-DEFI is no joke. Finally a DeFi platform that takes security seriously. Switched my whole portfolio over.",
    color: "#6b3fa0",
  },
  {
    name: "Maya Chen",
    badge: null,
    date: "7/02/26, 11:30 AM",
    text: "ARISE AMP replaced three different music apps for me. The audio visualizer alone is worth it — and karaoke mode is genuinely fun.",
    color: "#b95f70",
  },
  {
    name: "Toshi",
    badge: "OG",
    date: "9/18/26, 9:05 PM",
    text: "Been using Arise since day one. The continue watching feature is seamless — picks up right where I left off, even across devices. Clean UI, zero bloat.",
    color: "#d9a000",
  },
];

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function ReviewStats() {
  const happy = useCountUp(30000, 2200);
  const users = useCountUp(124000, 2600);

  return (
    <section id="reviews" className="section-frame">
      <RevealSection>
        {/* Section header */}
        <div className="reveal meta flex items-center gap-3 text-link">
          <Sparkle className="h-3 w-3" />
          <span>05 · Impact</span>
          <span>実績</span>
        </div>

        <h2 className="reveal reveal-delay-1 mt-5 font-display text-2xl uppercase leading-[0.88] tracking-[-0.03em] sm:mt-6 sm:text-4xl lg:text-5xl">
          Numbers that speak for themselves.
        </h2>

        <p className="reveal reveal-delay-1 mt-5 max-w-xl text-[15px] leading-relaxed text-ink/70">
          Real impact, measured by the people who use what we build.
        </p>

        {/* Stats grid */}
        <div className="mt-8 grid gap-4 sm:mt-14 sm:gap-6 sm:grid-cols-2">
          {/* Happy Customers */}
          <div ref={happy.ref} className="reveal reveal-delay-2 border border-ink">
            <div className="bg-ink px-5 py-3 flex items-center justify-between">
              <span className="meta text-signal text-[10px] tracking-[0.16em]">HAPPY CUSTOMERS</span>
              <span className="font-display text-2xl text-ink/20 text-paper/30">01</span>
            </div>
            <div className="px-5 py-10 text-center">
              <div className="font-display text-[clamp(3.5rem,10vw,6rem)] leading-none tracking-tight">
                {formatNumber(happy.count)}
                <span className="text-ink">+</span>
              </div>
              <div className="meta mt-3 text-[11px] text-ink/50">Satisfied users across all platforms</div>
            </div>
          </div>

          {/* Users on product */}
          <div ref={users.ref} className="reveal reveal-delay-3 border border-ink">
            <div className="bg-ink px-5 py-3 flex items-center justify-between">
              <span className="meta text-signal text-[10px] tracking-[0.16em]">USERS ON OUR PRODUCT</span>
              <span className="font-display text-2xl text-ink/20 text-paper/30">02</span>
            </div>
            <div className="px-5 py-10 text-center">
              <div className="font-display text-[clamp(3.5rem,10vw,6rem)] leading-none tracking-tight">
                {formatNumber(users.count)}
                <span className="text-ink">+</span>
              </div>
              <div className="meta mt-3 text-[11px] text-ink/50">Active users engaging with our ecosystem</div>
            </div>
          </div>
        </div>

        {/* ── Reviews ── */}
        <div className="mt-10 border-t border-ink pt-8 sm:mt-16 sm:pt-10">
          <div className="reveal meta flex items-center gap-3 text-link mb-8">
            <span>WHAT USERS SAY</span>
            <span className="hidden h-px w-16 bg-ink/40 sm:block" />
            <span>ユーザーの声</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${Math.min(i + 1, 4)} border border-ink bg-paper transition-shadow duration-300 hover:shadow-hard`}
              >
                <div className="flex items-center gap-3 border-b border-ink/20 px-5 py-3">
                  <div
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-paper"
                    style={{ background: r.color }}
                  >
                    {r.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="meta text-[11px] font-bold truncate">
                      {r.name}
                      {r.badge && (
                        <span className="ml-1.5 inline-block bg-link/15 border border-link/30 px-1.5 py-0.5 text-[7px] text-link tracking-wider align-middle">
                          {r.badge}
                        </span>
                      )}
                    </div>
                    <div className="meta text-[9px] text-ink/40">{r.date}</div>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[13px] leading-relaxed text-ink/80">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
