import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS Royal - Your High-Performance Accountability Partner',
  description: 'Stay accountable, build momentum, and execute daily with personalized coaching and follow-ups for SaaS founders and developers.',
  metadataBase: new URL('https://saasroyal.vercel.app'),
  openGraph: {
    title: 'SaaS Royal - Your High-Performance Accountability Partner',
    description: 'Stay accountable, build momentum, and execute daily with personalized coaching and follow-ups for SaaS founders and developers.',
    url: 'https://saasroyal.vercel.app',
    siteName: 'SaaS Royal',
    images: [
      {
        url: 'https://saasroyal.vercel.app/logo.png',
        width: 128,
        height: 128,
        alt: 'SaaS Royal Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Royal - Your High-Performance Accountability Partner',
    description: 'Stay accountable, build momentum, and execute daily with personalized coaching and follow-ups for SaaS founders and developers.',
    images: ['https://saasroyal.vercel.app/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 