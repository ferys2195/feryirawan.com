import { useTranslations } from "next-intl";
import type { Project } from "@/types";
import { ProjectCard, sortProjects } from "..";

interface ProjectListSectionProps {
  projects: Project[];
}

function ProjectGroup({
  title,
  description,
  projects,
}: {
  title: string;
  description: string;
  projects: Project[];
}) {
  if (projects.length === 0) return null;

  const sorted = sortProjects(projects);

  return (
    <section className="border-b border-neutral-200 bg-white last:border-b-0 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 space-y-2">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            {title}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {sorted.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectListSection({ projects }: ProjectListSectionProps) {
  const t = useTranslations("projects");

  const clientProjects = projects.filter((p) => p.projectType === "client");
  const personalProjects = projects.filter((p) => p.projectType === "personal");

  return (
    <>
      {/* Page Header */}
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

      {/* Client Projects */}
      <ProjectGroup
        title={t("clientTitle")}
        description={t("clientDesc")}
        projects={clientProjects}
      />

      {/* Personal Projects */}
      <ProjectGroup
        title={t("personalTitle")}
        description={t("personalDesc")}
        projects={personalProjects}
      />
    </>
  );
}
