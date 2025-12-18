import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  generator: 'Next.js',
  other: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
