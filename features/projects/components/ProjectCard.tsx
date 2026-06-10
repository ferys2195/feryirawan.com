import type { Project } from "../types/project.types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-neutral-200 p-6 dark:border-neutral-800">
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

      <p className="mb-4 flex-grow text-sm text-neutral-700 dark:text-neutral-300">
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
    </div>
  );
}
