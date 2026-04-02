import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { Projects } from "~/components/sections/Projects";
import { Skills } from "~/components/sections/Skills";
import { Contact } from "~/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5f0]/90 backdrop-blur-sm border-b border-[rgba(26,26,26,0.12)]">
        <div className="max-w-[900px] mx-auto px-15 max-[680px]:px-7 h-14 flex items-center justify-between">
          <span className="font-['DM_Serif_Display',serif] text-[18px] text-[#1a1a1a] tracking-[-0.01em]">
            <em className="not-italic italic text-[#4a5e1f]">E</em>S
          </span>

          <nav aria-label="Main navigation">
            <ul className="flex items-center gap-8 max-[680px]:gap-5">
              {(
                [
                  ["About", "#about"],
                  ["Projects", "#projects"],
                  ["Skills", "#skills"],
                  ["Contact", "#contact"],
                ] as const
              ).map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-['DM_Mono',monospace] text-[10px] tracking-[0.12em] uppercase text-[#7a7870] hover:text-[#4a5e1f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a5e1f] focus-visible:ring-offset-2"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content" className="pt-14">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
