
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools';
}

export interface NavItem {
  label: string;
  href: string;
}
