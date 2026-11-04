import type { Metadata, Viewport } from 'next';
import './globals.css';

const SITE_URL = process.env.SITE_URL ?? 'https://tavunote.example.com';

export const viewport: Viewport = {
  themeColor: '#704cf4',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tavunote — Make every meeting count',
    template: '%s | Tavunote',
  },
  description:
    'AI meeting assistant that captures conversations, finds highlights, and keeps your team moving forward. Less note-taking, more great ideas.',
  keywords: [
    'meeting notes',
    'AI meeting assistant',
    'meeting transcription',
    'action items',
    'team collaboration',
  ],
  authors: [{ name: 'Tavunote' }],
  creator: 'Tavunote',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Tavunote',
    title: 'Tavunote — Make every meeting count',
    description:
      'AI meeting assistant that captures conversations, finds highlights, and keeps your team moving forward.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tavunote — Make every meeting count',
    description:
      'AI meeting assistant that captures conversations, finds highlights, and keeps your team moving forward.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
