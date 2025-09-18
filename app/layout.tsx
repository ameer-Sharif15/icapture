import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iCapture - Creative Agency',
  description: 'We create Super x Solid outcomes for brands through innovative creative solutions',
  keywords: 'creative agency, branding, marketing, design, innovation',
  authors: [{ name: 'iCapture Agency' }],
  openGraph: {
    title: 'iCapture - Creative Agency',
    description:
      'We create Super x Solid outcomes for brands through innovative creative solutions',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
