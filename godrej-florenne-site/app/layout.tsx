import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const siteUrl = 'https://godrej-florenne.gepropertyhub.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Godrej Florenne Whitefield | 4 & 5 BHK Row Houses in Bengaluru',
  description: 'Explore Godrej Florenne in Whitefield, Bengaluru. Request details about premium 4 & 5 BHK row houses, floor plans, pricing, amenities and site visits.',
  applicationName: 'Godrej Florenne',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Godrej Florenne Whitefield | Premium 4 & 5 BHK Row Houses',
    description: 'Discover French-inspired row-house living in Whitefield, Bengaluru. Enquire for floor plans, pricing and site visits.',
    siteName: 'Godrej Florenne',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Godrej Florenne Whitefield | Premium Row Houses',
    description: 'Explore 4 & 5 BHK row houses in Whitefield, Bengaluru.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
