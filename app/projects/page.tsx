import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-cyber-bg px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-cyber-accent font-mono text-sm mb-3 tracking-widest uppercase">
          My Work
        </p>
        <h1 className="text-4xl font-bold text-white mb-2">Projects</h1>
        <p className="text-cyber-muted text-lg mb-12">
          A collection of things I&apos;ve built.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
