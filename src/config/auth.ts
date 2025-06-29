export const authConfig = {
  providers: {
    credentials: {
      enabled: true,
    },
    google: {
      enabled: false,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      enabled: false,
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  pages: {
    signIn: '/login',
    signUp: '/register',
    forgotPassword: '/forgot-password',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
} as const;

export type AuthConfig = typeof authConfig;
