import Image from "next/image";
import { Sparkle, Code, Arrow, Wrench, Monitor, Pin } from "./Icons";
import { site } from "@/data/site";
import { RevealSection } from "./RevealOnScroll";

function ProjectCard({ project, index }: { project: (typeof site.projects)[number]; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const isBeta = project.id === "arise-amp";

  return (
    <div className="reveal reveal-delay-2 mt-14 border-t border-ink pt-10">
      {/* Project header */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <span className="font-display text-3xl text-link">{num}</span>
        <div>
          <div className="section-kicker flex items-center gap-2">
            Featured project
            {isBeta && (
              <span className="inline-block bg-link/15 border border-link/40 px-2 py-0.5 text-[8px] text-link tracking-[0.12em]">
                BETA
              </span>
            )}
          </div>
          <h4 className="font-display text-3xl uppercase tracking-wide lg:text-4xl mt-1">{project.title}</h4>
        </div>
        <span className="meta text-[10px] text-ink/50 ml-auto hidden sm:block">{project.subtitle}</span>
      </div>

      {/* Project image — clickable */}
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="project-image-link group block relative overflow-hidden border border-ink shadow-hard-lg aspect-video mb-8"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-300 flex items-center justify-center">
          <span className="tech-button opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            View live project <Arrow className="h-4 w-4" />
          </span>
        </div>
      </a>

      {/* Headline + Description */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="font-display text-2xl uppercase leading-[0.9] tracking-[-0.02em] lg:text-3xl">
            {project.headline}
          </p>
          <p className="mt-5 text-[14px] leading-relaxed text-ink/80 max-w-2xl">
            {project.description}
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={project.url} target="_blank" rel="noreferrer" className="tech-button">
              Explore {project.title} <Arrow className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Features list */}
        <div className="border-t border-ink pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <div className="section-kicker mb-4">Key Features</div>
          <ul className="space-y-4">
            {project.features.map((f) => (
              <li key={f.label} className="flex items-start gap-3">
                <span className="text-lg leading-none mt-0.5 shrink-0">{f.icon}</span>
                <div>
                  <div className="meta text-[11px] font-bold">{f.label}</div>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink/60">{f.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech stack tags */}
      <div className="mt-8 pt-6 border-t border-ink/30">
        <div className="section-kicker mb-3">Tech Stack</div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CharacterFile() {
  return (
    <section id="work" className="section-frame">
      <RevealSection>
        {/* ── Section header ── */}
        <div className="grid gap-8 lg:grid-cols-[120px_1fr_160px]">
          <div className="reveal">
            <div className="font-display text-6xl text-link">02</div>
            <div className="section-kicker mt-2">Selected work</div>
          </div>

          <div className="reveal reveal-delay-1">
            <h3 className="relative inline-block">
              <span
                className="absolute inset-x-[-16px] top-[18%] bottom-[10%] -skew-y-1 bg-signal"
                aria-hidden
              />
              <span className="relative font-display text-4xl uppercase leading-[0.9] tracking-[-0.03em] lg:text-5xl">
                Quiet process. Sharp outcomes.
              </span>
            </h3>
            <Sparkle className="ml-3 inline h-4 w-4 text-signal" style={{ filter: "drop-shadow(1px 1px 0 #121212)" }} />
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed">
              A developer profile built around careful systems, useful interfaces, and software with enough
              personality to be remembered.
            </p>
          </div>

          <div className="reveal reveal-delay-2 section-kicker self-start justify-self-end hidden lg:block">人物紹介</div>
        </div>

        {/* ── Project Cards ── */}
        {site.projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}

        {/* ── Profile stats — matches koiiverse.cloud layout ── */}
        <div className="reveal reveal-delay-3 mt-12 grid gap-10 border-t border-ink pt-10 lg:grid-cols-[1fr_420px]">
          <div>
            <h4 className="font-display text-3xl uppercase leading-[0.88] tracking-[-0.03em] lg:text-4xl">
              I build software with the patience of an artist inking the final panel: deliberately and with purpose.
            </h4>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="border-l-4 border-signal pl-4 text-[14px] leading-relaxed text-ink/70">
                I&apos;m a software developer drawn to scripted tools, clean interfaces, and practical open-source experiments.
              </p>
              <p className="text-[14px] leading-relaxed text-ink/70">
                My favorite projects turn everyday friction into focused experiences with dependable engineering underneath.
              </p>
            </div>
          </div>

          {/* 4 stat rows */}
          <div className="divide-y divide-ink">
            {site.profileStats.map((stat) => {
              const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
                code: Code,
                monitor: Monitor,
                wrench: Wrench,
                pin: Pin,
              };
              const IconComp = iconMap[stat.icon] || Code;

              return (
                <div key={stat.n} className="flex items-center gap-4 py-5 first:pt-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-ink">
                    <IconComp className="h-4 w-4 text-signal" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="section-kicker text-[9px]">{stat.label}</div>
                    <div className="meta mt-0.5 text-[13px] font-bold uppercase truncate">{stat.value}</div>
                  </div>
                  <span className="font-display text-3xl text-ink/20 shrink-0">{stat.n}</span>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
