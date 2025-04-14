import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import './globals.css'
import CookieConsent from '../components/CookieConsent'

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/67fd09a9d825181910e087f9/1ioq6rg8t';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
} 