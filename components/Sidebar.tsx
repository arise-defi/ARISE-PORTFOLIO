"use client";
import { useEffect, useState } from "react";
import { Sparkle } from "./Icons";
import { site } from "@/data/site";

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

  useEffect(() => {
    const ids = NAV.map((i) => i.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive("#" + e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
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
  );
}
