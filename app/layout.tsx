import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Notion - Agency',
  description: 'Notion Websites, Automationen und Systeme für Unternehmen.',
  generator: 'v0.app',

  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },

  openGraph: {
    title: 'Notion - Agency',
    description: 'Notion Websites, Automationen und Systeme für Unternehmen.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className="bg-background">
      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
