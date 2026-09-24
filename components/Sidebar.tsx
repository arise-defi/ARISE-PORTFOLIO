"use client";
import { useEffect, useState, useCallback } from "react";

const NAV = [
  { n: "01", label: "HOME", href: "#home" },
  { n: "02", label: "WORK", href: "#work" },
  { n: "03", label: "SKILLS", href: "#skills" },
  { n: "04", label: "JOURNEY", href: "#journey" },
  { n: "05", label: "IMPACT", href: "#reviews" },
  { n: "06", label: "CONTACT", href: "#contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeIdx = NAV.findIndex((i) => i.href === active);

  useEffect(() => {
    const ids = NAV.map((i) => i.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const goTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const goPrev = useCallback(() => {
    if (activeIdx > 0) goTo(NAV[activeIdx - 1].href);
  }, [activeIdx, goTo]);

  const goNext = useCallback(() => {
    if (activeIdx < NAV.length - 1) goTo(NAV[activeIdx + 1].href);
  }, [activeIdx, goTo]);

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="fixed left-0 top-0 z-40 hidden h-svh w-[100px] flex-col justify-between border-r border-ink bg-ink text-paper lg:flex">
        <div className="flex h-14 items-center justify-center border-b border-paper/20">
          <img src="/logo.png" alt="Arise" className="h-8 w-8 object-contain invert" />
        </div>

        <nav className="flex flex-1 flex-col">
          {NAV.map((item) => {
            const on = active === item.href;
            return (
              <a
                key={item.n}
                href={item.href}
                className={`relative border-b border-paper/15 px-3 py-5 text-center transition-colors duration-200 hover:bg-paper/5 ${
                  on ? "bg-paper/5" : ""
                }`}
              >
                {on && (
                  <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-signal" />
                )}
                <div className={`font-display text-3xl leading-none transition-colors ${on ? "text-signal" : "text-paper/40"}`}>
                  {item.n}
                </div>
                <div className={`section-kicker mt-2 text-[9px] !tracking-[0.16em] ${on ? "!text-paper" : "!text-paper/40"}`}>
                  {item.label}
                </div>
              </a>
            );
          })}
        </nav>
      </aside>

      {/* ── Mobile floating nav pill ── */}
      <div className="mobile-nav-pill lg:hidden">
        {/* Prev arrow */}
        <button
          onClick={goPrev}
          disabled={activeIdx <= 0}
          className="mobile-nav-pill__arrow"
          aria-label="Previous section"
        >
          {activeIdx > 0 && (
            <span className="mobile-nav-pill__hint">{NAV[activeIdx - 1].n}</span>
          )}
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 5L5 1L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {/* Active section */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-nav-pill__active"
          aria-label={`Section ${NAV[activeIdx]?.n} ${NAV[activeIdx]?.label}`}
        >
          <span className="font-display text-xl leading-none">{NAV[activeIdx]?.n}</span>
        </button>

        {/* Next arrow */}
        <button
          onClick={goNext}
          disabled={activeIdx >= NAV.length - 1}
          className="mobile-nav-pill__arrow"
          aria-label="Next section"
        >
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {activeIdx < NAV.length - 1 && (
            <span className="mobile-nav-pill__hint">{NAV[activeIdx + 1].n}</span>
          )}
        </button>
      </div>

      {/* ── Mobile expanded menu overlay ── */}
      {mobileOpen && (
        <div className="mobile-nav-overlay lg:hidden" onClick={() => setMobileOpen(false)}>
          <nav
            className="mobile-nav-menu"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV.map((item) => {
              const on = active === item.href;
              return (
                <a
                  key={item.n}
                  href={item.href}
                  onClick={() => goTo(item.href)}
                  className={`mobile-nav-menu__item ${on ? "mobile-nav-menu__item--active" : ""}`}
                >
                  <span className={`font-display text-2xl ${on ? "text-signal" : "text-paper/40"}`}>{item.n}</span>
                  <span className={`section-kicker text-[10px] !tracking-[0.16em] ${on ? "!text-paper" : "!text-paper/40"}`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
