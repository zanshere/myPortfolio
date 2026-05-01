import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google'; 
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from 'next-themes';
import { Navbar } from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import { Footer } from '@/components/Footer';
import './globals.css';

// Konfigurasi Open Sans
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portfolio | Muhammad Fauzan',
  description: 'Website portfolio Muhammad Fauzan - Junior Web Developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${openSans.variable} antialiased`} style={{ fontFamily: 'var(--font-open-sans), Open Sans, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <SmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}