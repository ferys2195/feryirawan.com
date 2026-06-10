import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

export function RecentProjects() {
  const recentProjects = projects.slice(0, 3);

  return (
    <section className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Proyek Terbaru
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Sebagian dari pekerjaan yang saya kerjakan baru-baru ini.
              </p>
            </div>
            <Link
              href="/projects"
              className="flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-400"
            >
              Lihat semua <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
