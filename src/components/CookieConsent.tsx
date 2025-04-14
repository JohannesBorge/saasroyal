'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#2c2e38] text-white p-4 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm">
              We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
              <Link href="/privacy" className="text-[#ff69b4] hover:text-[#ff4da6] underline">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-white bg-[#312b54] rounded-lg hover:bg-[#3a3366] transition-colors duration-300"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-[#312b54] bg-[#ff69b4] rounded-lg hover:bg-[#ff4da6] transition-colors duration-300"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 