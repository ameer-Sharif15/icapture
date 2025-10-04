import type { Metadata } from 'next';
// Import local font 'Trial Sagace'
import localFont from 'next/font/local';
import './globals.css';

const trialSagace = localFont({
  src: '../fonts/TRIALSagace-Regular.otf', // Adjust the path and filename as needed
  display: 'swap',
});
// Removed unused 'inter' variable

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000' // ✅ dynamic
  ),
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
      <body className={trialSagace.className}>{children}</body>
    </html>
  );
}
