import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Project } from "@/types";
import { ProjectCard } from "@/features/projects";

interface RecentProjectsProps {
  projects: Project[];
}

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
              className="flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400"
            >
              {t("viewAll")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
