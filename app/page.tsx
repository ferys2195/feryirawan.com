import { Hero, Skills, FeaturedProjects } from "@/features/home";
import { fetcher } from "@/lib/fetcher";
import { getLocale } from "next-intl/server";
import type { SkillCategory, Project } from "@/types";

export default async function Page() {
  const locale = await getLocale();

  const [skillsData, projectsData] = await Promise.all([
    fetcher<{ skillCategories: SkillCategory[] }>("/skills.json"),
    fetcher<{ projects: Project[] }>("/projects.json", locale),
  ]);

  return (
    <>
      <Hero />
      <Skills skillCategories={skillsData.skillCategories} />
      <FeaturedProjects projects={projectsData.projects} />
    </>
  );
}
