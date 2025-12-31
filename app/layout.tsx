import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import './globals.css'

// <CHANGE> Using Rajdhani for aggressive, condensed, futuristic look
const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani'
});

export const metadata: Metadata = {
  title: 'BULL AND BEAR',
  description: 'High-end gaming platform for competitive traders. Build strategies, compete PvP, sync learning, and dominate the leaderboards.',
  icons: {
    icon: '/b.ico',
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
      </body>
    </html>
  )
}
