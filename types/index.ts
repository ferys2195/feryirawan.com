export interface Project {
  id: number;
  name: string;
  category: string;
  projectType: "client" | "personal";
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
  image?: string;
  links?: {
    demo?: string;
    source?: string;
  };
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavLink {
  label?: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}
