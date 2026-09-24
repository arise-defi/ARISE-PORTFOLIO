"use client";
import { useEffect, useState } from "react";

export function DigitalClock() {
  const [t, setT] = useState<string>("--:--");
  useEffect(() => {
    const tick = () =>
      setT(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

export function AnalogClock() {
  const [angles, setAngles] = useState({ h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
      }).formatToParts(new Date());
      const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
      const h = get("hour") % 12, m = get("minute"), s = get("second");
      setAngles({ h: h * 30 + m * 0.5, m: m * 6, s: s * 6 });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden>
      <circle cx="50" cy="50" r="46" fill="none" stroke="#121212" strokeWidth="3" />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="26"
        stroke="#121212"
        strokeWidth="3"
        transform={`rotate(${angles.h} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="16"
        stroke="#121212"
        strokeWidth="2"
        transform={`rotate(${angles.m} 50 50)`}
      />
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="14"
        stroke="#B95F70"
        strokeWidth="1"
        transform={`rotate(${angles.s} 50 50)`}
      />
      <circle cx="50" cy="50" r="3" fill="#121212" />
    </svg>
  );
}
