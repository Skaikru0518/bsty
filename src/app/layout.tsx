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

export const metadata: Metadata = {
  title: 'Bástya Masszázs | Professzionális masszázs Debrecen',
  description:
    'Professzionális masszázs szolgáltatások Debrecenben. Svédmasszázs, sportmasszázs, köpölyözés és lávaköves masszázs. Foglaljon időpontot még ma!',
  keywords: [
    'masszázs',
    'Debrecen',
    'svédmasszázs',
    'sportmasszázs',
    'köpölyözés',
    'lávaköves masszázs',
    'relaxáció',
  ],
  authors: [{ name: 'Bástya Masszázs' }],
  openGraph: {
    title: 'Bástya Masszázs | Professzionális masszázs Debrecenben',
    description: 'Professzionális masszázs szolgáltatások Debrecenben',
    type: 'website',
    locale: 'hu_HU',
  },
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
