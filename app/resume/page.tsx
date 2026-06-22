const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "C#", "Python", "Java", "Rust"],
  },
  {
    category: "Frameworks & Technologies",
    items: [".NET", "ASP.NET", "TypeScript", "Angular", "React", "REST APIs"],
  },
  {
    category: "Database & Reporting",
    items: ["SQL", "SQL Server", "SSIS", "SSRS"],
  },
  {
    category: "DevOps & Tools",
    items: ["GitHub Actions", "Azure DevOps", "Git", "CI/CD Pipelines", "Bash"],
  },
  {
    category: "Testing & QA",
    items: ["Playwright", "Unit Testing", "Smoke Testing", "Regression Testing", "Test Automation"],
  },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum", "Jira", "SDLC"],
  },
];

const experience = [
  {
    company: "CGI Inc.",
    location: "Birmingham, AL",
    title: "Software Consultant",
    dates: "June 2022 – Feb 2026",
    bullets: [
      "Reduced execution time of critical database processes from 30+ minutes to under 11 minutes through stored procedure optimization, eliminating recurring workflow interruptions and timeout failures.",
      "Delivered data mapping and transformation logic across seven database tables to support a major client platform migration, satisfying contractual milestones and deployment timelines.",
      "Established automated smoke and regression testing capabilities using Playwright, expanding validation coverage across core business functions and reducing dependency on manual testing.",
    ],
  },
  {
    company: "Icario Inc.",
    location: "Birmingham, AL",
    title: "Software Developer",
    dates: "Nov 2021 – May 2022",
    bullets: [
      "Resolved customer-reported application issues by diagnosing defects, implementing code fixes, and supporting production stability across active SaaS environments.",
      "Boosted deployment efficiency by building GitHub Actions workflows that streamlined development and release processes.",
      "Improved onboarding of new engineering resources through technical guidance, knowledge-transfer sessions, and pair-programming activities.",
    ],
  },
  {
    company: "Lockheed Martin Rotary & Mission Systems",
    location: "Manassas, VA",
    title: "College Intern",
    dates: "May 2020 – Aug 2020",
    bullets: [
      "Expanded software quality visibility by integrating Coverity static analysis tooling into a Linux-based codebase, increasing defect identification capabilities.",
      "Automated analysis and reporting activities through Bash and Python scripts, reducing manual effort and improving consistency of security-focused review processes.",
      "Strengthened secure development practices by supporting code assessment initiatives and facilitating earlier detection of vulnerabilities.",
    ],
  },
  {
    company: "Brasfield & Gorrie LLC",
    location: "Birmingham, AL",
    title: "Application Development Co-op",
    dates: "Aug 2017 – Dec 2017  ·  May 2018 – Aug 2018  ·  Jan 2019 – May 2019",
    bullets: [
      "Advanced enterprise modernization by migrating application components from AngularJS to Angular, improving maintainability and positioning systems for future enhancements.",
      "Developed REST-based services and SQL Server integrations that supported application functionality and business process execution.",
      "Expanded expertise across frontend development, backend integration, and database technologies across multiple co-op engagements.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-cyber-bg px-6 py-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-cyber-accent font-mono text-sm mb-3 tracking-widest uppercase">Resume</p>
            <h1 className="text-4xl font-bold text-white mb-1">Alex Davis</h1>
            <p className="text-cyber-muted text-lg">Software Engineer · Birmingham, AL</p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="self-start shrink-0 px-5 py-2.5 border border-cyber-accent text-cyber-accent font-semibold text-sm rounded hover:bg-cyber-accent hover:text-black transition"
          >
            Download PDF
          </a>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="font-mono text-xs text-cyber-muted uppercase tracking-widest mb-5 pb-2 border-b border-cyber-border">
            Technical Skills
          </h2>
          <div className="flex flex-col gap-4">
            {skills.map(({ category, items }) => (
              <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <span className="shrink-0 w-48 text-cyber-muted text-sm">{category}</span>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2 py-0.5 rounded border border-cyber-border text-cyber-text"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="font-mono text-xs text-cyber-muted uppercase tracking-widest mb-5 pb-2 border-b border-cyber-border">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {experience.map((role) => (
              <div key={`${role.company}-${role.title}`}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <div>
                    <span className="font-semibold text-white">{role.company}</span>
                    <span className="text-cyber-muted text-sm"> · {role.location}</span>
                  </div>
                  <span className="font-mono text-xs text-cyber-muted shrink-0">{role.dates}</span>
                </div>
                <p className="text-cyber-accent text-sm font-medium mb-3">{role.title}</p>
                <ul className="flex flex-col gap-2">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-cyber-text text-sm leading-relaxed">
                      <span className="text-cyber-accent mt-1.5 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="font-mono text-xs text-cyber-muted uppercase tracking-widest mb-5 pb-2 border-b border-cyber-border">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <p className="font-semibold text-white">Bachelor of Science in Computer Science</p>
              <p className="text-cyber-muted text-sm">The University of Alabama · Tuscaloosa, AL</p>
            </div>
            <span className="font-mono text-xs text-cyber-muted shrink-0">December 2021</span>
          </div>
        </section>

      </div>
    </main>
  );
}
