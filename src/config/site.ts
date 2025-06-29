export const siteConfig = {
  name: '{{PROJECT_NAME}}',
  description: '{{PROJECT_DESCRIPTION}}',
  url: '{{SITE_URL}}',
  ogImage: '{{OG_IMAGE_URL}}',
  links: {
    twitter: '{{TWITTER_URL}}',
    github: '{{GITHUB_URL}}',
  },
  creator: '{{AUTHOR_NAME}}',
  keywords: ['{{KEYWORDS}}'],
  authors: [
    {
      name: '{{AUTHOR_NAME}}',
      url: '{{AUTHOR_URL}}',
    },
  ],
  contact: {
    email: '{{CONTACT_EMAIL}}',
    phone: '{{CONTACT_PHONE}}',
  },
  social: {
    twitter: '{{TWITTER_URL}}',
    linkedin: '{{LINKEDIN_URL}}',
    github: '{{GITHUB_URL}}',
    youtube: '{{YOUTUBE_URL}}',
  },
} as const;

export type SiteConfig = typeof siteConfig;
