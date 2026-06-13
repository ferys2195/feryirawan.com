import { Hero, Skills, FeaturedProjects } from "@/features/home";
import { fetcher } from "@/lib/fetcher";
import type { SkillCategory, Project } from "@/types";

export default async function Page() {
  const [skillsData, projectsData] = await Promise.all([
    fetcher<{ skillCategories: SkillCategory[] }>("/skills.json"),
    fetcher<{ projects: Project[] }>("/projects.json"),
  ]);

  return (
    <>
      <Hero />
      <Skills skillCategories={skillsData.skillCategories} />
      <FeaturedProjects projects={projectsData.projects} />
    </>
  );
}
