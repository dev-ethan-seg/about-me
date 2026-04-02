interface Project {
  client: string;
  role: string;
  title: string;
  year: string;
  description: string;
  caseStudyUrl?: string;
  stack: readonly string[];
}

export const projects: Project[] = [
  {
    client: "Lite Shipping",
    role: "Tech Lead & Functional Consultant",
    title: "Aquarius Ferry Booking System",
    year: "2023–2024",
    description:
      "End-to-end ferry booking system covering passenger and freight operations. Designed the data model, led the development team, built the NetSuite integration layer (SFTP/CSV batch uploads + SuiteQL), implemented booking confirmation emails via React Email, and coordinated UAT with the client.",
    caseStudyUrl: "https://softype.com/aquarius-sots",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "PostgreSQL",
      "NetSuite SuiteQL",
      "React Email",
      "Vercel",
    ] as readonly string[],
  },
  {
    client: "Internal (Softype / Perago)",
    role: "Developer",
    title: "Scout: AI-Powered NetSuite Health Audit",
    year: "2024",
    description:
      "AI-powered analysis tool that connects to a NetSuite instance via MCP and SuiteQL, runs a structured health audit across modules, and produces a findings report with prioritized recommendations. Built the methodology, wrote the Confluence documentation, and designed the red-teaming and evaluation framework.",
    stack: [
      "Anthropic API",
      "SuiteQL",
      "NetSuite MCP",
      "Claude Code",
      "Confluence",
    ] as readonly string[],
  },
  {
    client: "Personal project",
    role: "Solo developer",
    title: "Personal Finance Tracker",
    year: "2024",
    description:
      "Full-stack finance tracker with Discord OAuth (Auth.js/NextAuth), deployed on AWS EC2 with Docker, HTTPS via Let's Encrypt/Nginx, CI/CD via GitHub Actions, and PostgreSQL on AWS RDS. Used Terraform for infrastructure planning.",
    stack: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "PostgreSQL",
      "AWS EC2",
      "AWS RDS",
      "Docker",
      "Nginx",
      "GitHub Actions",
    ] as readonly string[],
  },
];

export const skillCategories = [
  {
    name: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "tRPC", "React Email"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Prisma", "PostgreSQL", "REST", "Elixir/Phoenix (learning)"],
  },
  {
    name: "ERP & Integration",
    skills: [
      "NetSuite (SuiteScript · SuiteQL · SuiteTalk · RESTlets · TBA/OAuth)",
      "Celigo (iPaaS)",
      "SFTP/CSV batch workflows",
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      "AWS (EC2 · RDS · IAM · Lambda)",
      "Docker",
      "Nginx",
      "GitHub Actions",
      "Vercel",
      "NeonDB",
    ],
  },
  {
    name: "AI & Tooling",
    skills: [
      "Anthropic API",
      "Claude Code",
      "MCP integrations",
      "Prompt engineering",
      "Evaluation frameworks",
    ],
  },
] as const;
