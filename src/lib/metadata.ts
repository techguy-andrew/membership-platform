import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

export function constructMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  return {
    title: {
      default: title || siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: description || siteConfig.description,
    keywords: Array.from(siteConfig.keywords),
    authors: Array.from(siteConfig.authors),
    creator: siteConfig.creator,
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      images: image ? [{ url: image }] : [{ url: siteConfig.ogImage }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      images: image ? [image] : [siteConfig.ogImage],
      creator: siteConfig.creator,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
  };
}

export function constructPageMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}) {
  return constructMetadata({
    title,
    description,
    image,
    noIndex,
    canonical,
  });
}
