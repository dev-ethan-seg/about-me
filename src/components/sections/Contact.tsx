export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-15 max-[680px]:py-12 max-[680px]:px-7"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
          04 — Contact
        </p>

        <h2 className="font-['DM_Serif_Display',serif] text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-10">
          Let&apos;s talk.
        </h2>

        <address className="not-italic">
          <p className="font-['Instrument_Sans',sans-serif] text-[18px] text-[#3d3d3a] leading-[1.75] max-w-[520px] mb-10">
            Open to product engineering roles in fintech and ERP-adjacent software. Based in
            Cebu, Philippines — remote-open.
          </p>

          <ul className="space-y-4">
            <li>
              <a
                href="https://linkedin.com/in/ethansegovia"
                target="_blank"
                rel="noopener noreferrer"
                className="font-['DM_Mono',monospace] text-[13px] tracking-[0.08em] text-[#4a5e1f] hover:text-[#6b8430] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4a5e1f] focus-visible:ring-offset-2"
              >
                linkedin.com/in/ethansegovia ↗
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
