import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const siteUrl = 'https://godrej-florenne.gepropertyhub.com';
const pageTitle = 'Godrej Florenne Whitefield, Bengaluru | 4 & 5 BHK';
const pageDescription = 'Explore Godrej Florenne in Whitefield, Bengaluru. Enquire about premium 4 and 5 BHK row houses, floor plans, pricing, amenities and site visits.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: pageDescription,
  applicationName: 'Godrej Florenne project information',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: pageTitle,
    description: pageDescription,
    siteName: 'GE Property Hub — Godrej Florenne information',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GE Property Hub — Godrej Florenne project information',
  url: siteUrl,
  description: pageDescription,
  inLanguage: 'en-IN',
  about: {
    '@type': 'Residence',
    name: 'Godrej Florenne',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Whitefield, Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    description: 'Project information for premium 4 and 5 BHK row houses in Whitefield, Bengaluru.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
        />
        {children}
      </body>
    </html>
  );
}
