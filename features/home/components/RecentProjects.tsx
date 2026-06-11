import Link from "next/link";
import { ArrowRight, ExternalLink, Code2, Briefcase, User } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Project } from "@/types";

interface RecentProjectsProps {
  projects: Project[];
}

const typeConfig = {
  client: {
    badge: "Client",
    icon: Briefcase,
    badgeClass:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  personal: {
    badge: "Personal",
    icon: User,
    badgeClass:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  },
} as const;

export function RecentProjects({ projects }: RecentProjectsProps) {
  const t = useTranslations("home");
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-end justify-between">
            <div className="space-y-2 flex-1">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                {t("recentProjects")}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 wrap-normal">
                {t("recentProjectsDesc")}
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400 "
            >
              {t("viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recentProjects.map((project) => {
              const config = typeConfig[project.projectType];
              const TypeIcon = config.icon;

              return (
                <div
                  key={project.id}
                  className="flex flex-col overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={
                        project.image ||
                        `https://placehold.co/600x400/1a1a2e/eaeaea?text=${encodeURIComponent(project.name)}`
                      }
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
                    </div>

                    <p className="mb-4 grow text-sm text-neutral-700 dark:text-neutral-300">
                      {project.description}
                    </p>

                    <ul className="mb-6 space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {project.highlights.slice(0, 2).map((highlight, i) => (
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
                        {project.projectType === "personal" &&
                          project.links.source && (
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
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
