export interface Project {
  id: number;
  name: string;
  category: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}
