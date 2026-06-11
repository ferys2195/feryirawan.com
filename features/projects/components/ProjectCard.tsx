import { ExternalLink, Code2, Briefcase, User } from "lucide-react";
import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

function getProjectThumbnail(project: Project): string {
  if (project.image) return project.image;
  return `https://placehold.co/600x400/1a1a2e/eaeaea?text=${encodeURIComponent(project.name)}`;
}

const typeConfig = {
  client: {
    badge: "Client Project",
    icon: Briefcase,
    badgeClass:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  personal: {
    badge: "Personal Project",
    icon: User,
    badgeClass:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
} as const;

export function ProjectCard({ project }: ProjectCardProps) {
  const config = typeConfig[project.projectType];
  const TypeIcon = config.icon;

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
          <div className="flex items-center gap-2">
            <p className="text-xs font-medium uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
              {project.category}
            </p>
            <span
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${config.badgeClass}`}
            >
              <TypeIcon className="h-3 w-3" />
              {config.badge}
            </span>
          </div>
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
            {project.name}
          </h3>
          {project.organization && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {project.organization}
            </p>
          )}
          {project.period && (
            <p className="text-xs text-neutral-500 dark:text-neutral-500">
              {project.period}
            </p>
          )}
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

        {/* Links — berbeda per tipe */}
        {project.links && (
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
            {project.projectType === "personal" && project.links.source && (
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
