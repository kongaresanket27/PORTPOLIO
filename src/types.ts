export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'software' | 'iot' | 'data';
  techStack: string[];
  description: string;
  highlights: string[];
  hardwareComponents?: string[];
  githubUrl?: string;
  demoUrl?: string;
  iconName: string;
  featured: boolean;
  detailedCaseStudy?: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    outcomes: string;
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  organizationLogo: string;
  date: string;
  certId?: string;
  category: 'ai' | 'cybersecurity' | 'iot' | 'data' | 'programming';
  description: string;
  skillsLearned: string[];
  hoursOrCourses?: string;
  credentialUrl?: string;
  imageUrl?: string;
}

export interface SkillCategory {
  categoryName: string;
  icon: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    isPrimary?: boolean;
  }[];
}

export interface ContactInfo {
  name: string;
  title: string;
  institution: string;
  year: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
}
