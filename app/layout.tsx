import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

// <CHANGE> Using Rajdhani for aggressive, condensed, futuristic look
const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
});

export const metadata: Metadata = {
  title: 'Tradingverse - Enter The Future of Competitive Trading',
  description: 'High-end gaming platform for competitive traders. Build strategies, compete PvP, sync learning, and dominate the leaderboards.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
