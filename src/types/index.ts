export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  avatar?: string;
  bio?: string;
  role: 'user' | 'admin' | 'moderator';
  subscription?: Subscription;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'active' | 'canceled' | 'past_due' | 'incomplete';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  stripeSubscriptionId?: string;
  createdAt: Date;
  updatedAt: Date;
  plan: SubscriptionPlan;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'usd' | 'eur' | 'gbp';
  interval: 'month' | 'year';
  features: string[];
  stripePriceId?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code?: string;
    details?: unknown;
  };
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  emailNotifications: {
    marketing: boolean;
    billing: boolean;
    security: boolean;
  };
  language: string;
  timezone: string;
}

export interface DashboardStats {
  totalUsers: number;
  activeSubscriptions: number;
  monthlyRevenue: number;
  churnRate: number;
  trends: {
    usersGrowth: number;
    revenueGrowth: number;
    subscriptionsGrowth: number;
  };
}

export interface WebhookEvent {
  id: string;
  type: string;
  data: unknown;
  createdAt: Date;
  processed: boolean;
  source: 'stripe' | 'internal';
}
