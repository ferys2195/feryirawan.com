import { useTranslations } from "next-intl";
import type { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";

interface ProjectListSectionProps {
  projects: Project[];
}

export function ProjectListSection({ projects }: ProjectListSectionProps) {
  const t = useTranslations("projects");

  return (
    <>
      <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
              {t("title")}
            </h1>
            <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
              {t("description")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-neutral-950">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
