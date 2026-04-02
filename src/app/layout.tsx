import "~/styles/globals.css";

import { type Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Instrument_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "Ethan Segovia — Tech Lead & Full-Stack Engineer",
  description:
    "Tech Lead and full-stack engineer based in Cebu, Philippines. Building at the intersection of software engineering, product thinking, and ERP consulting.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmMono.variable} ${instrumentSans.variable}`}
    >
      <body className="bg-[#f7f5f0] text-[#1a1a1a] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#4a5e1f] focus:text-white focus:font-['DM_Mono',monospace] focus:text-[11px] focus:tracking-[0.12em] focus:uppercase"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
