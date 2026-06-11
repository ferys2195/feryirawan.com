export interface Project {
  id: number;
  name: string;
  category: string;
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
