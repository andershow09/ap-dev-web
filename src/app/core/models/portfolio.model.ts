export type Language = 'pt' | 'en';

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface ProfileStatus {
  available: boolean;
  label: LocalizedString;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  playStore?: string;
  twitter?: string;
}

export interface Profile {
  brandName: string;
  name: string;
  role: LocalizedString;
  headline: LocalizedString;
  subheadline: LocalizedString;
  status: ProfileStatus;
  socialLinks: SocialLinks;
}

export interface MetricItem {
  value: string;
  label: LocalizedString;
  detail?: LocalizedString;
}

export interface CapabilityTier {
  id: string;
  number: string;
  icon: 'smartphone' | 'brain' | 'globe';
  accentColor: string;
  title: LocalizedString;
  description: LocalizedString;
  tags: string[];
}

export interface ProjectItem {
  id: string;
  category: string; // e.g. "APP MOBILE", "AI AGENT SYSTEM", "MICRO FRONTENDS"
  categoryType: 'mobile' | 'ai' | 'web';
  title: string;
  badge: LocalizedString;
  accentColor: string;
  summary: LocalizedString;
  highlights: LocalizedString[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  stars: number;
  rotationDeg: number;
  quote: LocalizedString;
  linkedinUrl: string;
}

export interface TimelineMilestone {
  period: string;
  role: LocalizedString;
  company: string;
  client?: string;
  description: LocalizedString;
  tags?: string[];
}

export interface EngineeringStandard {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: 'code' | 'shield' | 'zap' | 'layers';
}

export interface PortfolioData {
  profile: Profile;
  metrics: MetricItem[];
  capabilities: CapabilityTier[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  timeline: TimelineMilestone[];
  standards: EngineeringStandard[];
}
