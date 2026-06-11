import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

function getProjectThumbnail(project: Project): string {
  if (project.image) return project.image;
  return `https://placehold.co/600x400/1a1a2e/eaeaea?text=${encodeURIComponent(project.name)}`;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={getProjectThumbnail(project)}
          alt={project.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-4 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            {project.name}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {project.organization}
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            {project.period}
          </p>
        </div>

        <p className="mb-4 grow text-sm text-neutral-700 dark:text-neutral-300">
          {project.description}
        </p>

        <ul className="mb-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          {project.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-neutral-400">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        {project.links && (project.links.demo || project.links.source) && (
          <div className="mt-5 flex flex-wrap gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800">
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
            {project.links.source && (
              <a
                href={project.links.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
              >
                <Code2 className="h-4 w-4" />
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
