import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS Royal - High-Performance Accountability System',
  description: 'Get the daily push, tracking, and follow-up you need to ship consistently and win long-term.',
  metadataBase: new URL('https://saasroyal.vercel.app'),
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
} 