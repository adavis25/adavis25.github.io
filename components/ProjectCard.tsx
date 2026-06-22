import { GitHubIcon } from "@/components/Icons";
import Tag from "@/components/Tag";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-cyber-card border border-cyber-border rounded-lg overflow-hidden hover:border-cyber-accent transition-colors">
      <div className="px-5 py-4 border-b border-cyber-border bg-cyber-surface">
        <h3 className="font-mono font-semibold text-cyber-accent text-base">
          {project.title}
        </h3>
      </div>

      <div className="flex flex-col flex-1 px-5 py-4 gap-4">
        <p className="text-cyber-text text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} muted>
              {tag}
            </Tag>
          ))}
        </div>

        <div className="flex gap-3 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyber-accent hover:opacity-80 transition"
          >
            <GitHubIcon size={16} />
            View Repo
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-cyber-green hover:opacity-80 transition"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
