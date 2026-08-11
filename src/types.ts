export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'web' | 'mobile' | 'system' | 'ai';
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'DevOps & Tools' | 'Specialized' | 'Soft Skills';
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'medium';
  url: string;
  label: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    avatarUrl: string;
    bioSummary: string;
    detailedBio: string[];
    email: string;
    location: string;
    resumeUrl?: string;
    phone?: string;
  };
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  achievements: Achievement[];
  socials: SocialLink[];
}
