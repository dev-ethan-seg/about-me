import { projects } from "~/data/portfolio";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-15 max-[680px]:py-12 max-[680px]:px-7 border-b border-[rgba(26,26,26,0.12)]"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
          02 — Selected Work
        </p>

        <h2 className="font-['DM_Serif_Display',serif] text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-12">
          Things I&apos;ve built.
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="border border-[rgba(26,26,26,0.12)] bg-white p-8 max-[680px]:p-5"
            >
              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-3">
                {project.client} — {project.role}
              </p>

              <h3 className="font-['DM_Serif_Display',serif] text-[clamp(20px,2.5vw,28px)] text-[#1a1a1a] mb-1">
                {project.title}
              </h3>

              <p className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#7a7870] mb-5">
                {project.year}
              </p>

              <p className="font-['Instrument_Sans',sans-serif] text-[16px] text-[#3d3d3a] leading-[1.75] mb-6">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="bg-[#e8efd4] text-[#4a5e1f] font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase px-2 py-1"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
