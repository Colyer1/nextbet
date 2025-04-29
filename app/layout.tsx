import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Providers } from './Providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NextBet | Smarter Sports Picks',
  description: 'Elite fantasy football picks, betting edges, and premium community plays.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../favicon.ico" sizes="any" />
      </head>
      <body className="bg-primary text-white">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
