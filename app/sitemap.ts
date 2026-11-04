import type { MetadataRoute } from 'next';

const SITE_URL = process.env.SITE_URL ?? 'https://tavunote.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
