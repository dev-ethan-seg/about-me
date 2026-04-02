import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center py-20 px-15 max-[680px]:py-12 max-[680px]:px-7 border-b border-[rgba(26,26,26,0.12)] overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      {/* Accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#4a5e1f]"
        aria-hidden="true"
      />

      <div className="max-w-[900px] mx-auto w-full relative z-10">
        <div className="flex items-start justify-between gap-12 max-[680px]:flex-col max-[680px]:gap-8">
          <div className="flex-1">
            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.15em] uppercase text-[#4a5e1f] mb-8">
              Portfolio — ethansegovia.dev
            </p>

            <h1 className="font-['DM_Serif_Display',serif] text-[clamp(52px,8vw,96px)] leading-[1.05] tracking-[-0.02em] text-[#1a1a1a] mb-6">
              <em className="not-italic italic text-[#4a5e1f]">E</em>than Segovia
            </h1>

            <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#7a7870] mb-8">
              Tech Lead &amp; Full-Stack Engineer — Cebu, Philippines
            </p>

            <p className="font-['Instrument_Sans',sans-serif] text-[clamp(18px,2.5vw,22px)] text-[#3d3d3a] leading-[1.6] max-w-[580px] mb-10">
              I work at the intersection of software engineering, product thinking, and ERP
              consulting — writing code in the morning and running client workshops in the
              afternoon.
            </p>

            <a
              href="#projects"
              className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] border-b border-[#4a5e1f] pb-1 hover:text-[#6b8430] hover:border-[#6b8430] transition-colors"
            >
              View my work ↓
            </a>
          </div>

          <div className="flex-shrink-0 max-[680px]:self-start">
            <div className="w-[200px] h-[200px] max-[680px]:w-[140px] max-[680px]:h-[140px] relative overflow-hidden border border-[rgba(26,26,26,0.12)]">
              <Image
                src="/ethan.png"
                alt="Ethan Segovia"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
