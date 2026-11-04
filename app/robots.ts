import type { MetadataRoute } from 'next';

const SITE_URL = process.env.SITE_URL ?? 'https://tavunote.example.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
