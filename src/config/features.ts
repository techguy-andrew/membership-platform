export const features = {
  authentication: {
    enabled: true,
    providers: ['credentials', 'google', 'github'] as const,
    routes: ['login', 'register', 'forgot-password'] as const,
  },
  dashboard: {
    enabled: true,
    views: ['overview', 'profile', 'settings', 'analytics'] as const,
  },
  marketing: {
    enabled: true,
    pages: ['home', 'about', 'pricing', 'contact'] as const,
  },
  api: {
    enabled: true,
    routes: ['auth', 'users', 'webhooks'] as const,
  },
  database: {
    enabled: false,
    type: 'postgresql' as const,
    orm: 'prisma' as const,
  },
  payments: {
    enabled: false,
    provider: 'stripe' as const,
  },
  email: {
    enabled: false,
    provider: 'resend' as const,
  },
} as const;

export type Features = typeof features;
