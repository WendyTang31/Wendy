import robotFullRender from "./assets/77.png";
import robotCloseRender from "./assets/99.png";

const categories = [
  "Robotics x design",
  "Biomimicry",
  "Research tools",
  "Motion / gait",
];

const projects = [
  {
    title: "Bipedal robot leg design",
    category: "Robotics x design",
    description:
      "A mechanical leg study inspired by ground-walking birds, linking morphology, movement, and fabrication.",
    accent: "from-stone-300 via-zinc-200 to-neutral-400",
    image: robotFullRender,
    imageAlt: "Full render of a bipedal robot leg mechanism.",
  },
  {
    title: "Ground-walking bird gait study",
    category: "Motion / gait",
    description:
      "Process documentation, motion diagrams, and observations of leg geometry through iterative prototypes.",
    accent: "from-amber-100 via-stone-200 to-zinc-300",
  },
  {
    title: "Biomimetic mechanism archive",
    category: "Biomimicry",
    description:
      "A visual research system for translating biological behaviors into design prompts and mechanisms.",
    accent: "from-lime-100 via-stone-200 to-zinc-300",
  },
  {
    title: "Research tool prototypes",
    category: "Research tools",
    description:
      "Interfaces and physical tools for documenting experiments, collecting references, and comparing iterations.",
    accent: "from-sky-100 via-stone-200 to-zinc-300",
  },
  {
    title: "Material and motion tests",
    category: "Motion / gait",
    description:
      "Placeholder collection for renders, videos stills, process photos, and rig testing notes.",
    accent: "from-neutral-200 via-zinc-100 to-stone-300",
  },
  {
    title: "Engineering sketchbook",
    category: "Robotics x design",
    description:
      "Early CAD studies, exploded assemblies, physical experiments, and manufacturing details.",
    accent: "from-zinc-300 via-stone-100 to-neutral-300",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-[#efeee9] text-zinc-950">
      <Navigation />
      <Hero />
      <CategoryBar />
      <ProjectGrid />
      <Footer />
    </main>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-950/10 bg-[#efeee9]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a className="font-mono text-sm uppercase tracking-[0.28em]" href="#">
          Wendy Tang
        </a>
        <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-zinc-700 md:flex">
          <a className="transition hover:text-zinc-950" href="#work">
            Work
          </a>
          <a className="transition hover:text-zinc-950" href="#research">
            Research
          </a>
          <a className="transition hover:text-zinc-950" href="#contact">
            Contact
          </a>
        </div>
        <a
          className="rounded-full border border-zinc-950 px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-zinc-950 hover:text-white"
          href="mailto:hello@example.com"
        >
          Email
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
      <div className="flex flex-col justify-between gap-12">
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-zinc-500">
            Design / Engineering / Research
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-zinc-950 md:text-7xl lg:text-8xl">
            Work at the edge of bodies, mechanisms, and motion.
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-[0.85fr_1fr]">
          <p className="text-lg leading-8 text-zinc-700">
            A portfolio shell for robotics-informed design, biomimicry
            research, gait studies, and experimental tools. Built to scale from
            placeholder blocks to Cloudinary-hosted image collections.
          </p>
          <div className="rounded-3xl border border-zinc-950/10 bg-white/45 p-5 shadow-sm">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-zinc-500">
              Featured study
            </p>
            <p className="mt-4 text-2xl font-medium tracking-[-0.04em]">
              Bipedal robot leg design inspired by ground-walking bird
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-zinc-950/10 bg-zinc-900 p-6 text-white shadow-2xl shadow-zinc-950/20">
        <img
          alt="Close-up render of the bipedal robot leg design."
          className="absolute inset-0 h-full w-full object-cover opacity-85"
          src={robotCloseRender}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-black/70" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/60">
                Featured render
              </p>
              <p className="mt-3 max-w-xs text-3xl font-medium tracking-[-0.04em]">
                Bipedal robot leg mechanism
              </p>
            </div>
            <span className="rounded-full border border-white/20 px-3 py-1 font-mono text-xs text-white/70">
              01
            </span>
          </div>

          <div />

          <div className="grid gap-3 border-t border-white/15 pt-5 font-mono text-xs uppercase tracking-[0.22em] text-white/60 sm:grid-cols-3">
            <span>CAD renders</span>
            <span>Process images</span>
            <span>Motion studies</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryBar() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 pb-8 lg:px-10"
      id="research"
      aria-labelledby="category-heading"
    >
      <div className="flex flex-col gap-5 border-y border-zinc-950/10 py-6 md:flex-row md:items-center md:justify-between">
        <h2
          className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500"
          id="category-heading"
        >
          Project categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              className="rounded-full border border-zinc-950/15 bg-white/40 px-4 py-2 text-sm text-zinc-700"
              key={category}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGrid() {
  return (
    <section
      className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.32em] text-zinc-500">
            Selected work
          </p>
          <h2
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.06em] md:text-6xl"
            id="work-heading"
          >
            A flexible grid for many images and project stories.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-zinc-600">
          Each card starts with a lightweight placeholder and can later point to
          optimized Cloudinary assets for fast loading on Vercel.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            className="group overflow-hidden rounded-[1.75rem] border border-zinc-950/10 bg-white/45 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/70 hover:shadow-xl hover:shadow-zinc-950/10"
            key={project.title}
          >
            <div
              className={`relative aspect-[4/3] bg-gradient-to-br ${project.accent}`}
            >
              {project.image ? (
                <img
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                  src={project.image}
                />
              ) : (
                <>
                  <div className="absolute inset-5 rounded-[1.25rem] border border-white/50 bg-white/25" />
                  <div className="absolute left-8 top-8 font-mono text-xs uppercase tracking-[0.22em] text-zinc-700/70">
                    Cloudinary slot
                  </div>
                  <div className="absolute bottom-7 left-7 right-7 grid grid-cols-3 gap-2">
                    <span className="h-2 rounded-full bg-zinc-950/25" />
                    <span className="h-2 rounded-full bg-zinc-950/15" />
                    <span className="h-2 rounded-full bg-zinc-950/30" />
                  </div>
                </>
              )}
              <span className="absolute right-7 top-7 rounded-full bg-zinc-950 px-3 py-1 font-mono text-xs text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
                {project.category}
              </p>
              <h3 className="text-2xl font-medium tracking-[-0.04em]">
                {project.title}
              </h3>
              <p className="mt-4 leading-7 text-zinc-600">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10" id="contact">
      <div className="rounded-[2rem] bg-zinc-950 p-8 text-white md:p-10">
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.32em] text-white/50">
              Next step
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              Replace placeholders with project imagery and case-study pages.
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-7 text-white/65">
            <p>
              This shell is ready for navigation, responsive project grids, and
              future Cloudinary image URLs without adding backend complexity.
            </p>
            <a
              className="inline-flex rounded-full bg-white px-5 py-3 font-mono text-xs uppercase tracking-[0.22em] text-zinc-950 transition hover:bg-zinc-200"
              href="mailto:hello@example.com"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
