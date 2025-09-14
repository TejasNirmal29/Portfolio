export interface NavItem {
  id: number;
  key: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  color: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github?: string;
  demo?: string;
  status: 'Completed' | 'In Progress' | 'Planning';
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  location?: string;
  type: 'work' | 'education' | 'project';
}