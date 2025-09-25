import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'econest',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: 'https://i.pinimg.com/1200x/fc/e5/4e/fce54e4958e7d32f8e1be89a42b18653.jpg', // <-- replace with your favicon link
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
