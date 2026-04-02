export function About() {
  return (
    <section
      id="about"
      className="py-20 px-15 max-[680px]:py-12 max-[680px]:px-7 border-b border-[rgba(26,26,26,0.12)]"
    >
      <div className="max-w-[900px] mx-auto">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.12em] uppercase text-[#4a5e1f] mb-4">
          01 — About
        </p>

        <h2 className="font-['DM_Serif_Display',serif] text-[clamp(28px,4vw,42px)] leading-[1.1] tracking-[-0.02em] text-[#1a1a1a] mb-10">
          The arc, the pivot, the next chapter.
        </h2>

        <div className="space-y-7 max-w-[680px]">
          <p className="font-['Instrument_Sans',sans-serif] text-[17px] text-[#3d3d3a] leading-[1.75]">
            I graduated Cum Laude in Computer Science from UP Cebu and spent the first years of
            my career at Softype Philippines, a NetSuite Alliance Partner, doing what most people
            would call functional consulting — mapping business processes, configuring ERP systems,
            and translating what clients actually needed from what they said they wanted. That work
            built a foundation I couldn&apos;t have gotten any other way: I learned how companies run
            before I learned how to build software for them.
          </p>

          <p className="font-['Instrument_Sans',sans-serif] text-[17px] text-[#3d3d3a] leading-[1.75]">
            That changed when Softype decided to build its first in-house development team. I led
            it. We built Aquarius — a full-stack ferry booking system for Roble Shipping Lines —
            from scratch using Next.js, TypeScript, tRPC, and Prisma, integrated with NetSuite via
            SuiteQL and SFTP batch workflows. I was the Tech Lead, the architect, the client
            liaison, and sometimes the one fixing a Prisma migration at 11pm. It taught me what
            product development actually costs and what it&apos;s worth.
          </p>

          <p className="font-['Instrument_Sans',sans-serif] text-[17px] text-[#3d3d3a] leading-[1.75]">
            I&apos;m moving toward product-focused engineering roles — specifically in fintech and
            ERP-adjacent software — where the technical depth I&apos;ve built maps directly onto real
            business problems. I actively invest in Philippine REITs, UITFs, and equities, which
            means the products I&apos;d want to build are ones I&apos;d use myself. I&apos;m based in Cebu and
            building here intentionally.
          </p>
        </div>
      </div>
    </section>
  );
}
