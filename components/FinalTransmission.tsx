import { Sparkle, Linkedin, Mail, Arrow } from "./Icons";
import { site } from "@/data/site";
import { RevealSection } from "./RevealOnScroll";

export default function FinalTransmission() {
  return (
    <section id="contact" className="section-frame !border-b-0">
      <RevealSection>
        <div className="reveal meta flex items-center gap-3 text-link">
          <Sparkle className="h-3 w-3" />
          <span>06 · Final transmission</span>
          <span>連絡先</span>
        </div>

        <h2 className="reveal reveal-delay-1 mt-12 font-display text-[clamp(3.5rem,14vw,9rem)] uppercase leading-[1.05] tracking-[-0.04em]">
          Let&apos;s build
          <br />
          something
          <br />
          <span className="text-link">thoughtful.</span>
        </h2>

        <div className="reveal reveal-delay-2 mt-16 grid gap-12 lg:grid-cols-[1fr_400px] lg:items-center">
          <p className="max-w-md border-l-4 border-signal pl-5 font-mono text-[13px] leading-relaxed text-ink/80">
            Open to collaborations, open-source conversations, and interesting problems with room for a little
            personality.
          </p>

          {/* notched contact card */}
          <div className="cut-corner bg-ink p-8 text-paper shadow-hard-lg">
            <div className="meta text-signal">Status · Online</div>
            <h3 className="mt-3 font-display text-4xl uppercase leading-[0.9] tracking-[-0.02em]">
              Start a
              <br />
              conversation
            </h3>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="tech-button mt-7 w-full justify-center"
            >
              <Linkedin className="h-4 w-4" /> Start on LinkedIn <Arrow className="h-4 w-4" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${site.email}`}
              target="_blank"
              rel="noreferrer"
              className="outline-button mt-3 w-full justify-center border-paper/40 bg-transparent text-paper hover:bg-paper hover:text-ink"
            >
              <Mail className="h-4 w-4" /> Hire Me
            </a>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
