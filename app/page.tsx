import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <p className="text-cyber-accent font-mono text-sm mb-3 tracking-widest uppercase">
          Hi, my name is
        </p>
        <h1 className="text-5xl font-bold text-white mb-2">Alex Davis</h1>
        <h2 className="text-3xl font-semibold text-cyber-muted mb-6">
          Full-Stack &amp; Data Engineer
        </h2>
        <p className="text-cyber-text text-lg leading-relaxed mb-8">
          I build reliable backends, clean APIs, and data pipelines. Currently
          open to new opportunities.
        </p>
        <div className="flex gap-4 mb-10">
          <Link
            href="/projects"
            className="px-6 py-3 bg-cyber-accent text-black font-semibold rounded hover:opacity-80 transition"
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-cyber-accent text-cyber-accent font-semibold rounded hover:bg-cyber-accent hover:text-black transition"
          >
            Get In Touch
          </Link>
        </div>
        <div className="flex gap-5">
          <a
            href="https://github.com/adavis25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-cyber-accent transition"
            aria-label="GitHub"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyber-muted hover:text-cyber-accent transition"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={22} />
          </a>
        </div>
      </div>
    </main>
  );
}