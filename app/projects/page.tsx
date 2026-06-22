import PageHeader from "@/components/PageHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-cyber-bg px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <PageHeader
          label="My Work"
          title="Projects"
          subtitle="A collection of things I've built."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
