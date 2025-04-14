'use client'

import React from 'react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#1a1f2c] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-gray-400 mb-8">Effective Date: April 14, 2025</p>
        
        <div className="space-y-6">
          <p className="text-gray-400">
            Welcome to SaaS Royal. By paying and subscribing to my service, you agree to these Terms and Conditions in full. If you disagree with any part, please do not use the service.
          </p>

          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Service Overview</h2>
            <p className="text-gray-400 mb-4">
              SaaS Royal provides a high-performance accountability system designed to help aspiring SaaS founders and developers stay consistent and focused. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Daily check-ins and task reviews via Telegram</li>
              <li>Weekly 1-on-1 coaching sessions</li>
              <li>Structured accountability tracking and strategy guidance</li>
            </ul>
            <p className="text-gray-400 mt-4">
              We do not offer a software platform or require account creation. Everything is delivered via direct communication.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. No Guarantees</h2>
            <p className="text-gray-400 mb-4">
              While we aim to support your progress and consistency, we do not guarantee any specific results, outcomes, business growth, or success.
              You understand and agree that:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Your results depend entirely on your own actions and decisions</li>
              <li>SaaS Royal is not responsible for missed deadlines, project failures, or lack of progress</li>
              <li>Advice and coaching provided are for guidance only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Subscription & Payments</h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Pricing: $50/month for the first 2 months, then $100/month</li>
              <li>Billing: If you do not pay in time, after a week I will cancel your service.</li>
              <li>Cancellation: You may cancel at any time. You will retain access until the end of your paid billing period. No refunds for partial months.</li>
            </ul>
            <p className="text-gray-400 mt-4">
              You are responsible for managing your subscription. Non-payment or chargebacks will result in immediate suspension of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. No Account System</h2>
            <p className="text-gray-400">
              SaaS Royal does not use or require user accounts, passwords, or platform access. All interactions occur via Telegram or similar direct communication platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-400 mb-4">
              SaaS Royal, its founder (Johannes Jensen Borge), and any affiliates are not liable for:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
              <li>Loss of income, business opportunity, or personal data</li>
              <li>Emotional distress, productivity issues, or missed deadlines</li>
              <li>Any damages, direct or indirect, even if we were advised of the possibility</li>
            </ul>
            <p className="text-gray-400 mt-4">
              All services are offered as-is without warranty, express or implied. Your use of the service is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Indemnification</h2>
            <p className="text-gray-400">
              By using the service, you agree to indemnify and hold harmless SaaS Royal and its affiliates from any claims, losses, or damages arising from your use of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
            <p className="text-gray-400">
              We may update these Terms at any time. Changes will take effect immediately upon posting to the website. Continued use of the service means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-gray-400">
              These Terms are governed by the laws of Norway. Any legal dispute shall be handled in the appropriate courts of Norway.
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