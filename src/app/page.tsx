'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the daily accountability work?",
      answer: "You'll receive a daily check-in message where you'll report your progress and set your goals for the next day. This consistent touchpoint helps maintain momentum and keeps you focused on your priorities."
    },
    {
      question: "What happens during the weekly 1-1 calls?",
      answer: "During our weekly calls, we'll review your progress, tackle any challenges you're facing, and plan your next steps. These sessions are tailored to your specific needs and goals, providing personalized guidance and support."
    },
    {
      question: "Can I cancel or pause my subscription?",
      answer: "We believe in full flexibility — you're never locked in. When you cancel, your subscription stays active until the end of your current billing period, and you won't be charged again after that."
    }
  ];

  return (
    <main className="min-h-screen bg-[#1a1f2c] text-white">
      {/* Hero Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-[0.08]"
          >
            <source src="/codingvideo.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container-padding relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 mx-auto mb-8 animate-fade-in">
              <Image
                src="/logo.png"
                alt="SaaS Royal Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <h1 className="heading-1 mb-6 animate-fade-in">
              You Don't Need More Ideas.<br />
              You Need <span className="text-[#ff69b4]">Momentum</span>.
            </h1>
            <p className="body-text mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I give aspiring developers, SaaS founders, and CTOs the daily push, tracking, and follow-up to ship consistently — and win long-term.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/4790411895" className="cta-button animate-scale-in" style={{ animationDelay: '0.4s' }}>
                Message me on WhatsApp
              </Link>
              <Link href="https://www.instagram.com/johannesjborge/" className="cta-button animate-scale-in" style={{ animationDelay: '0.4s' }}>
                DM me on Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-padding">
          <h2 className="heading-2 text-center mb-12 animate-fade-in">
            What I Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#2c2e38] rounded-xl animate-slide-up hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">Task Management</h3>
              <p className="text-gray-400">
              Stay organized and in control with a clear system for tracking, prioritizing, and completing your most important tasks—so nothing falls through the cracks.
              </p>
            </div>
            <div className="p-8 bg-[#2c2e38] rounded-xl animate-slide-up hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4">Daily Follow-Ups</h3>
              <p className="text-gray-400">
              We check in with you every single day to keep you focused, maintain momentum, and help you consistently make progress toward your goals.
              </p>
            </div>
            <div className="p-8 bg-[#2c2e38] rounded-xl animate-slide-up hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4">1-1 Weekly Calls</h3>
              <p className="text-gray-400">
              Get weekly one-on-one sessions with Johannes for personalized advice, strategic planning, and the accountability you need to keep moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding">
        <div className="container-padding">
          <h2 className="heading-2 text-center mb-12 animate-fade-in">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Introductory Plan */}
            <div className="bg-[#2c2e38] rounded-xl p-8 animate-scale-in hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Introductory Offer</h3>
                <span className="px-3 py-1 text-sm font-semibold text-[#ff69b4] rounded-full">
                  Special Price
                </span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$50</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">For the first two months</p>
            </div>

            {/* Regular Plan */}
            <div className="bg-[#2c2e38] rounded-xl p-8 animate-scale-in hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Regular Plan</h3>
                <span className="px-3 py-1 text-sm font-semibold text-[#ff69b4] rounded-full">
                  Standard Price
                </span>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$100</span>
                <span className="text-gray-400">/month</span>
              </div>
              <p className="text-gray-400">After introductory period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Program Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto bg-[#2c2e38] rounded-xl p-8 animate-scale-in hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
            <h2 className="heading-2 text-center mb-6">
              Join My Pilot Program
            </h2>
            <p className="text-gray-400 text-center mb-8">
              I'm looking for the first 10 pilot customers to help test, improve, and concretize the service. As an early adopter, you'll get:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Access to Our Learning Library</h3>
                  <p className="text-gray-400">Gain immediate access to our learning library, featuring a wide range of resources​</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Direct Influence</h3>
                  <p className="text-gray-400">Help shape the future of the service with your feedback and suggestions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Priority Support</h3>
                  <p className="text-gray-400">Get immediate attention and support as we refine the service together</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
                  <p className="text-gray-400">Be among the first to experience and benefit from my accountability system</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://wa.me/4790411895" className="cta-button animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  Message me on WhatsApp
                </Link>
                <Link href="https://www.instagram.com/johannesjborge/" className="cta-button animate-scale-in" style={{ animationDelay: '0.4s' }}>
                  DM me on Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
      <section className="section-padding">
        <div className="container-padding">
          <h2 className="heading-2 text-center mb-16 animate-fade-in">
            Here's How SaaS Royal Keeps You Consistent
          </h2>
          <div className="max-w-4xl mx-auto bg-[#2c2e38] rounded-xl animate-scale-in overflow-hidden hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">The SaaS Royal Method</h3>
              <p className="text-gray-400 mb-4">Learn how our unique accountability system helps you stay consistent and achieve your goals</p>
            </div>
            <div className="aspect-video bg-[#1a1f2c]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ZVWT7rOMBBs"
                title="SaaS Royal Method"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* UGC Videos Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-slide-up">
              <div className="bg-[#2c2e38] rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">From Idea to Launch</h4>
                  <p className="text-gray-400 mb-4">It's not about the perfect idea—it's about building momentum. Consistent action, day after day</p>
                </div>
                <div className="aspect-video bg-[#1a1f2c]">
                  <iframe
                    className="w-full h-full"
                       src="https://www.youtube.com/embed/mhOhvd-YuIY"
                    title="Real Progress from Real People"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-[#2c2e38] rounded-xl overflow-hidden hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">The Power of Accountability</h4>
                  <p className="text-gray-400 mb-4">Discover how daily check-ins and weekly calls create unstoppable momentum</p>
                </div>
                <div className="aspect-video bg-[#1a1f2c]">
                  <iframe
                    className="w-full h-full"
                       src="https://www.youtube.com/embed/AB0KfbFdkF0"
                    title="Why This System Works"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Video Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 text-center mb-6 animate-fade-in">
              Your Journey to Consistent Progress Starts Here
            </h2>
            <p className="body-text text-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Join our high-performance accountability system designed specifically for aspiring SaaS founders and developers. Get immediate access to daily check-ins, personalized coaching, and a proven framework for consistent execution.
            </p>
            <div className="bg-[#2c2e38] rounded-xl overflow-hidden animate-scale-in hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Your First Steps</h3>
                <p className="text-gray-400 mb-4">Watch this quick guide to get started with SaaS Royal and set up your first goals</p>
              </div>
              <div className="aspect-video bg-[#1a1f2c]">
                <iframe
                  className="w-full h-full"
                     src="https://www.youtube.com/embed/K9v4L0Pod1Q"
                  title="Your First Steps with SaaSRoyal"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6 animate-fade-in">Meet Your Accountability Partner</h2>
            <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden relative animate-scale-in">
              <Image
                src="/johannes.JPG"
                alt="Johannes Jensen Borge"
                fill
                className="object-cover object-[center_10%] scale-[1.02]"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>Johannes Jensen Borge</h3>
            <p className="body-text mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              At 25, I'm combining my passion for technology and personal development. Currently learning back-end and front-end development, and starting my Modern Computer Science degree at Opit.com this September 15th. I've built SaaS Royal to help fellow builders turn their goals into reality through consistent execution and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto bg-[#2c2e38] rounded-xl p-8 animate-scale-in hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300">
            <h2 className="heading-2 text-center mb-6">
              Join Our Free Community
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Want to learn more about how I work and get an in-depth look at my methods? Join our free community where you'll get:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Exclusive Content</h3>
                  <p className="text-gray-400">Access to detailed breakdowns of my methods and strategies</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Q&A Sessions</h3>
                  <p className="text-gray-400">Regular opportunities to ask questions and get direct answers</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Behind the Scenes</h3>
                  <p className="text-gray-400">See how I implement my strategies in real-time</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg className="w-6 h-6 text-[#ff69b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-400">Connect with other aspiring founders and developers</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="https://whop.com/saas-royale/" className="cta-button animate-scale-in" style={{ animationDelay: '0.4s' }}>
                Join Our Free Community
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setShowFAQ(!showFAQ)}
              className="w-full bg-[#2c2e38] rounded-xl p-6 text-left hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-all duration-300 animate-scale-in"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${showFAQ ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {showFAQ && (
              <div className="mt-6 space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-[#2c2e38] rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-[#312b54] transition-colors duration-300"
                    >
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openQuestion === index && (
                      <div className="p-6 pt-0 text-gray-400">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="section-padding bg-[#312b54]">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6 animate-fade-in">Let's Build Together</h2>
            <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>Got Questions or Ready to Start?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/4790411895" className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#312b54] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                Message me on WhatsApp
              </Link>
              <Link href="https://www.instagram.com/johannesjborge/" className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#312b54] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                DM me on Instagram
              </Link>
            </div>
            <div className="mt-8 flex justify-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-[#ff69b4] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#ff69b4] transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 