"use client";
import { useEffect, useState, useCallback } from "react";

const LINES = [
  { text: "> loading arise.system", delay: 200 },
  { text: "  ✓ fonts loaded — Anton, Inter, IBM Plex Mono", delay: 500 },
  { text: "  ✓ design tokens initialized", delay: 800 },
  { text: "  ✓ component tree mounted", delay: 1100 },
  { text: "  ✓ devlog ready — ver.01", delay: 1400 },
  { text: "> arise.boot()", delay: 1700 },
];

export default function BootLoader() {
  const [phase, setPhase] = useState<"boot" | "fade" | "done">("boot");
  const [visibleLines, setVisibleLines] = useState(0);

  const dismiss = useCallback(() => {
    setPhase("fade");
    try { sessionStorage.setItem("arise-booted", "1"); } catch {}
    setTimeout(() => setPhase("done"), 600);
  }, []);

  useEffect(() => {
    // Skip if already booted this session
    try {
      if (sessionStorage.getItem("arise-booted")) {
        setPhase("done");
        return;
      }
    } catch {
      // sessionStorage not available — skip boot
      setPhase("done");
      return;
    }

    // Sequence the lines
    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), line.delay));
    });

    // Auto-dismiss after all lines
    timers.push(setTimeout(dismiss, 2300));

    // Safety fallback — always dismiss after 4s no matter what
    timers.push(setTimeout(dismiss, 4000));

    return () => timers.forEach(clearTimeout);
  }, [dismiss]);

  if (phase === "done") return null;

  return (
    <div
      className="boot-loader"
      style={{ opacity: phase === "fade" ? 0 : 1 }}
      onClick={dismiss}
    >
      <div className="boot-loader__panel">
        <div className="boot-loader__chrome">
          <div className="boot-loader__dot" />
          <div className="boot-loader__dot boot-loader__dot--amber" />
          <div className="boot-loader__dot boot-loader__dot--mint" />
          <span className="boot-loader__path">~/arise/system</span>
        </div>

        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="boot-loader__line">
            {line.text.startsWith(">") ? (
              <>
                <span className="boot-loader__prompt">{">"}</span>
                {line.text.slice(1)}
              </>
            ) : (
              line.text
            )}
            {i === visibleLines - 1 && <span className="boot-loader__cursor" />}
          </div>
        ))}
      </div>
    </div>
  );
}
