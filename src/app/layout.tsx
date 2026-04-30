import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: 'Modern portfolio website showcasing my work as a creative developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}