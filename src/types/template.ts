export interface TemplateConfig {
  project: {
    name: string;
    description: string;
    version: string;
    author: string;
    license: string;
  };
  features: {
    authentication: boolean;
    dashboard: boolean;
    marketing: boolean;
    api: boolean;
    database: boolean;
    payments: boolean;
    email: boolean;
  };
  styling: {
    primaryColor: string;
    accentColor: string;
    theme: 'light' | 'dark';
    font: string;
  };
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    ogImage: string;
  };
  site: {
    url: string;
    twitter: string;
    github: string;
    linkedin: string;
    youtube: string;
    contact: {
      email: string;
      phone: string;
    };
  };
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface AuthResponse {
  success: boolean;
  error?: string;
  user?: User;
  token?: string;
}

export interface DashboardView {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
  enabled: boolean;
}

export interface FeatureToggle {
  enabled: boolean;
  config?: Record<string, unknown>;
}

export interface SiteMetadata {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}
