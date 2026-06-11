import { ProjectListSection } from "@/features/projects";
import { fetcher } from "@/lib/fetcher";
import type { Project } from "@/types";

export const metadata = {
  title: "Proyek - Fery Irawan Portfolio",
  description:
    "Koleksi proyek dan pengalaman kerja Fery Irawan sebagai Frontend Developer",
};

export default async function ProjectsPage() {
  const { projects } = await fetcher<{ projects: Project[] }>("/projects.json");

  return <ProjectListSection projects={projects} />;
}
