'use client'

import React from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#1a1f2c] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookie Usage</h2>
            <p className="text-gray-400">
              We use cookies to enhance your experience on our website. Cookies are small text files that are stored on your device when you visit our website. They help us understand how you interact with our site and improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Preference cookies to remember your settings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
            <p className="text-gray-400">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit our site.
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-[#ff69b4] hover:text-[#ff4da6]">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
} 