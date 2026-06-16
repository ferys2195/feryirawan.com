import { ProjectListSection } from "@/features/projects";
import { fetcher } from "@/lib/fetcher";
import { getLocale } from "next-intl/server";
import type { Project } from "@/types";

export const metadata = {
  title: "Projects - Fery Irawan Portfolio",
  description:
    "A collection of client and personal projects by Fery Irawan — Frontend Developer",
};

export default async function ProjectsPage() {
  const locale = await getLocale();
  const { projects } = await fetcher<{ projects: Project[] }>(
    "/projects.json",
    locale,
  );

  return <ProjectListSection projects={projects} />;
}
