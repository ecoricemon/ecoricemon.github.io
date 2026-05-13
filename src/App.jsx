import {
  ArrowDownRight,
  Award,
  Boxes,
  Braces,
  Cpu,
  DatabaseZap,
  FileCode2,
  Github,
  GitBranch,
  Layers3,
  Moon,
  Network,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Sun,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { defaultLocale, locales } from "./content.js";

const fadeIn = {
  hidden: { opacity: 0, y: 34, scale: 0.98 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay, duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  }),
};

const iconMap = {
  braces: Braces,
  cpu: Cpu,
  databaseZap: DatabaseZap,
  gitBranch: GitBranch,
  network: Network,
};

function getCopy(locale) {
  return locales[locale] ?? locales[defaultLocale];
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const skillTones = [
    ["C/C++", "foam" ],
    ["Rust", "foam" ],
    ["Python", "foam" ],
    ["Linux", "iris" ],
    ["VxWorks", "iris" ],
    ["Windows", "iris" ],
    ["QAC", "gold" ],
    ["VectorCAST", "gold" ],
    ["Git", "rose" ],
    ["Jenkins", "rose" ],
    ["GitHub Actions", "rose" ],
    ["Argo CD", "rose" ],
    ["Docker", "love" ],
    ["Kubernetes", "love" ],
    ["Ansible", "love" ],
];

function Badge({ children, tone = "foam" }) {
  const tones = {
    foam: "border-foam/30 bg-foam/10 text-foam",
    iris: "border-iris/30 bg-iris/10 text-iris",
    rose: "border-rose/30 bg-rose/10 text-rose",
    gold: "border-gold/30 bg-gold/10 text-gold",
    love: "border-love/30 bg-love/10 text-love",
  };

  return (
    <span className={cn("inline-flex items-center border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]", tones[tone])}>
      {children}
    </span>
  );
}

function SectionLabel({ children, icon: Icon }) {
  return (
    <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-subtle">
      <span className="flex h-8 w-8 items-center justify-center border border-text/10 bg-surface/80 text-foam">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </div>
  );
}

function LinkButton({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex h-9 items-center justify-center gap-2 border border-text/10 bg-base/70 px-3 text-xs font-semibold text-text transition hover:border-foam/50 hover:bg-foam/10 hover:text-foam"
    >
      <Icon className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5" />
      {children}
    </a>
  );
}

function BlueprintCard({ children, className = "", delay = 0, id }) {
  return (
    <motion.section
      id={id}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      whileHover={{ y: -8, rotateX: 1.2, rotateY: -1.2 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={cn(
        "group relative overflow-hidden border border-text/10 bg-surface/75 p-5 shadow-glow backdrop-blur-xl transition-shadow duration-500 hover:shadow-hover sm:p-6",
        "before:pointer-events-none before:absolute before:inset-0 before:border before:border-white/[0.03]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 border border-transparent transition duration-500 group-hover:border-foam/45" />
      <div className="relative h-full">{children}</div>
    </motion.section>
  );
}

function ProjectCard({ project, index, labels }) {
  const Icon = iconMap[project.icon] ?? Cpu;
  const tone = {
    foam: "text-foam border-foam/30 bg-foam/10",
    iris: "text-iris border-iris/30 bg-iris/10",
    rose: "text-rose border-rose/30 bg-rose/10",
    gold: "text-gold border-gold/30 bg-gold/10",
  }[project.accent];

  return (
    <BlueprintCard delay={0.1 + index * 0.08} className="flex min-h-[430px] flex-col">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <Badge tone={project.accent}>{labels.badgePrefix} {project.letter}</Badge>
          <h3 className="mt-4 bg-[image:linear-gradient(90deg,rgb(var(--color-text)),rgb(var(--color-text)))] bg-clip-text text-xl font-extrabold text-transparent transition-all duration-500 group-hover:bg-[image:var(--title-hover-gradient)] sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-semibold text-subtle">{project.name}</p>
        </div>
        <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center border", tone)}>
          <Icon className="h-6 w-6" />
        </span>
      </div>

      <div className="border-l border-love/40 bg-love/10 px-4 py-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-love">{labels.why}</p>
        <p className="mt-2 text-sm leading-7 text-text/80">{project.reason}</p>
      </div>

      <div className="mt-4 border-l border-foam/40 bg-foam/10 px-4 py-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foam">{labels.solution}</p>
        <p className="mt-2 text-sm leading-7 text-text/80">{project.summary}</p>
      </div>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-text/15 to-transparent" />

      <ul className="space-y-3 text-sm text-subtle">
        {project.bullets.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foam" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-7">
        <LinkButton href={project.github} icon={Github}>{labels.github}</LinkButton>
        {project.showDocs && <LinkButton href={project.docs} icon={FileCode2}>{labels.docs}</LinkButton>}
      </div>
    </BlueprintCard>
  );
}

function SolutionDiagram({ content, sectionLabel }) {
  return (
    <BlueprintCard delay={0.02} className="mb-5 scroll-mt-8" id="solution">
      <SectionLabel icon={Boxes}>{sectionLabel}</SectionLabel>
      <div className="mb-8 max-w-4xl">
        <h2 className="text-3xl font-extrabold leading-tight text-text sm:text-4xl">
          {content.title}
        </h2>
      </div>

      <div className="relative grid gap-8 lg:grid-cols-[0.82fr_1.45fr] lg:items-center">
        <div className="relative pl-8">
          <div className="absolute bottom-3 left-2 top-3 w-px bg-gradient-to-b from-iris via-foam to-iris/30" />
          <div className="absolute left-0 top-1 h-0 w-0 border-x-[9px] border-b-[15px] border-x-transparent border-b-iris" />
          <div className="space-y-9">
            {content.track.map((step) => (
              <div key={step.title} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-base bg-iris shadow-[0_0_0_3px_rgb(var(--color-iris)/0.18)]" />
                <h3 className="text-lg font-extrabold text-iris">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-subtle">{step.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden border border-text/10 bg-base/45 p-4 sm:p-6">
          <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="relative flex min-h-[372px] flex-col justify-between gap-7">
            <div className="mx-auto w-full max-w-3xl border border-text/10 bg-overlay/55 px-5 py-4 text-center shadow-glow">
              <div className="flex items-center justify-center gap-3 text-lg font-extrabold text-text">
                <Boxes className="h-6 w-6 text-foam" />
                {content.frameworkTitle}
              </div>
              <p className="mt-3 text-sm font-semibold text-subtle">{content.frameworkSubtitle}</p>
            </div>

            <div className="relative mx-auto grid w-full max-w-3xl gap-5 md:grid-cols-2">
              <div className="pointer-events-none absolute -top-8 left-1/2 hidden h-8 w-px bg-text/15 md:block" />
              <div className="pointer-events-none absolute -top-8 left-1/4 hidden h-px w-1/2 bg-text/15 md:block" />
              {content.branches.map((branch) => {
                const Icon = iconMap[branch.icon] ?? Boxes;

                return (
                  <div key={branch.title} className="relative">
                    <div className="mx-auto mb-5 hidden h-8 w-px bg-text/15 md:block" />
                    <div className="border border-text/10 bg-overlay/70 p-4 shadow-glow">
                      <div className="flex min-h-12 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-foam/30 bg-foam/10 text-foam">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="text-base font-extrabold text-text">{branch.title}</h3>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 px-2 text-sm font-semibold text-text/90">
                      {branch.items.map((item, index) => (
                        <li key={item} className="flex gap-3">
                          <span className={cn("mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full", branch.mutedItems?.includes(item) ? "bg-iris/30" : "bg-iris")} />
                          <span className={branch.mutedItems?.includes(item) ? "text-subtle" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="mx-auto w-full max-w-3xl border border-text/10 bg-overlay/55 px-5 py-4 text-center shadow-glow">
              <div className="flex items-center justify-center gap-3 text-lg font-extrabold text-text">
                <ShieldCheck className="h-6 w-6 text-rose" />
                {content.rustTitle}
              </div>
              <p className="mt-2 text-sm text-subtle">{content.rustSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </BlueprintCard>
  );
}

export default function App() {
  const [locale] = useState(defaultLocale);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = window.localStorage.getItem("portfolio-theme");

    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const gridY = useTransform(smooth, [0, 1], ["0px", "160px"]);
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${mouseX}px ${mouseY}px, rgb(var(--color-foam) / 0.16), rgb(var(--color-iris) / 0.10) 34%, transparent 70%)`;
  const isDark = theme === "dark";
  const copy = getCopy(locale);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <main
      data-theme={theme}
      className="relative min-h-screen overflow-hidden bg-base font-mono text-text transition-colors duration-500"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-70 [background-image:linear-gradient(to_right,var(--grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-line)_1px,transparent_1px)] [background-size:44px_44px]"
        style={{ backgroundPositionY: gridY }}
      />
      <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" style={{ background: spotlight }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-0 h-96 bg-gradient-to-b from-iris/10 via-foam/5 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-80 bg-gradient-to-t from-base via-base/80 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4 border-b border-text/10 pb-5 text-xs uppercase tracking-[0.18em] text-subtle">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-foam/30 bg-foam/10 text-foam">
              <Layers3 className="h-4 w-4" />
            </span>
            {copy.meta.archiveName}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-right sm:block">{copy.meta.headerSummary}</span>
            <button
              type="button"
              aria-label={isDark ? copy.theme.lightLabel : copy.theme.darkLabel}
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="group flex h-10 w-10 items-center justify-center border border-text/10 bg-surface/80 text-text transition hover:border-foam/40 hover:bg-foam/10 hover:text-foam"
            >
              {isDark ? <Sun className="h-4 w-4 transition group-hover:rotate-12" /> : <Moon className="h-4 w-4 transition group-hover:-rotate-12" />}
            </button>
          </div>
        </header>

        <section className="grid min-h-[calc(100vh-88px)] items-center gap-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <Badge tone="rose">{copy.hero.eyebrow}</Badge>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-text sm:text-6xl lg:text-7xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-subtle sm:text-lg">
              {copy.hero.message}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {skillTones.map(pair => (
                     <Badge key={pair[0]} tone={pair[1]}>{pair[0]}</Badge>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative border border-text/10 bg-surface/70 p-5 shadow-blueprint backdrop-blur-xl"
          >
            <div className="absolute -right-px -top-px border border-foam/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-foam">
              {copy.hero.blueprintTitle}
            </div>
            <div className="grid gap-3 pt-6">
              {copy.nav.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group/link flex items-center gap-4 border border-text/10 bg-base/60 p-4 transition hover:border-foam/40 hover:bg-foam/10 focus:outline-none focus:ring-2 focus:ring-foam/40"
                >
                  <span className="flex h-9 w-9 items-center justify-center border border-text/10 text-sm font-bold text-rose">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-semibold text-text">{item.label}</span>
                  <ArrowDownRight className="ml-auto h-4 w-4 text-subtle transition group-hover/link:translate-x-0.5 group-hover/link:translate-y-0.5 group-hover/link:text-foam" />
                </a>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="grid gap-5">
          <BlueprintCard delay={0.02} className="scroll-mt-8" id="foundation">
            <SectionLabel icon={ShieldCheck}>{copy.sectionLabels.foundation}</SectionLabel>
            <h2 className="text-2xl font-extrabold text-text">{copy.foundation.title}</h2>
            <p className="mt-5 text-sm leading-7 text-subtle">
              {copy.foundation.body}
            </p>
          </BlueprintCard>

          <BlueprintCard delay={0.14} className="scroll-mt-8" id="problem">
            <SectionLabel icon={ShieldAlert}>{copy.sectionLabels.problem}</SectionLabel>
            <div className="grid gap-6">
              <div>
                <h2 className="mt-4 text-2xl font-extrabold text-text">{copy.problem.title}</h2>
                <p className="mt-5 text-sm leading-7 text-subtle">
                  {copy.problem.body}
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {copy.problem.categories.map((category, categoryIndex) => (
                  <div
                    key={category.title}
                    className={cn(
                      "border p-4",
                      category.tone === "love" ? "border-love/25 bg-love/10" : "border-gold/25 bg-gold/10",
                    )}
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", category.tone === "love" ? "text-love" : "text-gold")}>
                        {copy.problem.categoryPrefix} 0{categoryIndex + 1}
                      </p>
                      <span className={cn("h-2 w-2", category.tone === "love" ? "bg-love" : "bg-gold")} />
                    </div>
                    <h3 className="text-lg font-extrabold text-text">{category.title}</h3>
                    <div className="mt-4 space-y-3">
                      {category.items.map((item) => (
                        <div key={item.label} className="border border-text/10 bg-base/50 p-3">
                          <p className="text-sm font-bold text-text">{item.label}</p>
                          <ul className="mt-3 space-y-2 text-xs leading-6 text-subtle">
                            {item.questions.map((question) => (
                              <li key={question} className="flex gap-2">
                                <span className={cn("mt-2 h-1.5 w-1.5 shrink-0", category.tone === "love" ? "bg-love" : "bg-gold")} />
                                <span>{question}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlueprintCard>
        </section>

        <motion.div
          initial={{ opacity: 0, scaleY: 0.4 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto my-8 flex h-28 w-px origin-top flex-col items-center bg-gradient-to-b from-love via-foam to-transparent sm:my-10"
        >
          <span className="mt-auto flex h-10 w-10 translate-y-5 items-center justify-center border border-foam/30 bg-base text-foam shadow-glow">
            <Workflow className="h-5 w-5" />
          </span>
        </motion.div>

        <SolutionDiagram content={copy.solution} sectionLabel={copy.sectionLabels.solution} />

        <section id="projects" className="grid scroll-mt-8 gap-5 md:grid-cols-2">
          {copy.projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} labels={copy.projectLabels} />
          ))}
        </section>

        <footer className="mt-14 border-t border-text/10 py-8 text-xs uppercase tracking-[0.18em] text-muted">
          {copy.meta.footer}
        </footer>
      </div>
    </main>
  );
}
