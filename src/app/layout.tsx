import type React from 'react';
import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const siteUrl = 'https://bastya-masszazs.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Bástya Masszázs | Professzionális masszázs Debrecenben',
    template: '%s | Bástya Masszázs',
  },
  description:
    'Professzionális masszázs szolgáltatások Debrecenben. Svédmasszázs, sportmasszázs, köpölyözés, lávaköves masszázs és indiai fejmasszázs. 22 év tapasztalat. Foglalj időpontot még ma!',
  keywords: [
    'masszázs',
    'masszázs Debrecen',
    'svédmasszázs',
    'sportmasszázs',
    'köpölyözés',
    'lávaköves masszázs',
    'indiai fejmasszázs',
    'relaxáció',
    'stresszoldás',
    'izomfeszültség oldás',
    'regeneráció',
    'masszőr Debrecen',
    'kombinált masszázs',
    'wellness Debrecen',
  ],
  authors: [{ name: 'Kiss Zoltán', url: siteUrl }],
  creator: 'Bástya Masszázs',
  publisher: 'Bástya Masszázs',
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
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    url: siteUrl,
    siteName: 'Bástya Masszázs',
    title: 'Bástya Masszázs | Professzionális masszázs Debrecenben',
    description:
      'Professzionális masszázs szolgáltatások Debrecenben. Svédmasszázs, sportmasszázs, köpölyözés és lávaköves masszázs. Foglalj időpontot még ma!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bástya Masszázs - Professzionális masszázs Debrecenben',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bástya Masszázs | Professzionális masszázs Debrecenben',
    description:
      'Professzionális masszázs szolgáltatások Debrecenben. Svédmasszázs, sportmasszázs, köpölyözés és lávaköves masszázs.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  category: 'health',
  other: {
    'geo.region': 'HU-HB',
    'geo.placename': 'Debrecen',
    'geo.position': '47.532584;21.624227',
    ICBM: '47.532584, 21.624227',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Bástya Masszázs',
    description:
      'Professzionális masszázs szolgáltatások Debrecenben. Svédmasszázs, sportmasszázs, köpölyözés és lávaköves masszázs.',
    url: siteUrl,
    telephone: '+36306091034',
    email: 'bastyamasszazs@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vár utca 8. II./33 ajtó',
      addressLocality: 'Debrecen',
      postalCode: '4024',
      addressCountry: 'HU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.532584,
      longitude: 21.624227,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    image: `${siteUrl}/og-image.jpg`,
    sameAs: [
      'https://www.facebook.com/profile.php?id=573202689206362',
      'https://www.tiktok.com/@bstyamasszzs',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Masszázs szolgáltatások',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Svéd-frissítő masszázs',
            description: 'Klasszikus relaxációs masszázs a test és lélek felfrissítéséért',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sportmasszázs',
            description: 'Intenzív kezelés sportolóknak és aktív életmódot folytatóknak',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Köpölyözés',
            description: 'Hagyományos kínai gyógyászati módszer testtájanként',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Lávaköves masszázs',
            description: 'Vulkanikus kövek melegével végzett mélyen relaxáló kezelés',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kombinált masszázs',
            description: 'Masszázs + lávakő + vákuumos/csúsztatott köpölyözés – felár nélkül',
          },
        },
      ],
    },
  };

  return (
    <html lang="hu" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
