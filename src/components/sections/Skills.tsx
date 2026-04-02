import { skillCategories } from "~/data/portfolio";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-15 max-[680px]:py-12 max-[680px]:px-7 border-b border-[rgba(26,26,26,0.12)]"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
          03 — Skills
        </p>

        <h2 className="font-['DM_Serif_Display',serif] text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-12">
          The stack I work in.
        </h2>

        <div className="grid grid-cols-2 gap-12 max-[680px]:grid-cols-1">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
                {category.name}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="font-['Instrument_Sans',sans-serif] text-[16px] text-[#3d3d3a]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
