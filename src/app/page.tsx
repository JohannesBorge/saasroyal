import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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
              I give you the daily push, tracking, and follow-up to ship consistently — and win long-term.
            </p>
            <Link href="https://wa.me/4790411895" className="cta-button animate-scale-in" style={{ animationDelay: '0.4s' }}>
              Message me on WhatsApp
            </Link>
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
                Track, prioritize, and stay organized with a system that makes sure nothing slips through.
              </p>
            </div>
            <div className="p-8 bg-[#2c2e38] rounded-xl animate-slide-up hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-semibold mb-4">Daily Follow-Ups</h3>
              <p className="text-gray-400">
                We check in with you every day so you don't lose momentum.
              </p>
            </div>
            <div className="p-8 bg-[#2c2e38] rounded-xl animate-slide-up hover:shadow-[0_0_15px_rgba(255,105,180,0.5)] transition-shadow duration-300" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-semibold mb-4">1-1 Weekly Calls</h3>
              <p className="text-gray-400">
                Get personalized feedback, strategy, and accountability from Johannes every week.
              </p>
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
                src="https://www.youtube.com/embed/-njw1Uxk81M"
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
                  <p className="text-gray-400 mb-4">It’s not about the perfect idea—it’s about building momentum. Consistent action, day after day, turns ideas into real products</p>
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
              Join our high-performance accountability system designed specifically for SaaS founders and developers. Get immediate access to daily check-ins, personalized coaching, and a proven framework for consistent execution.
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
              At 25, I'm combining my passion for technology and personal development. Currently taking courses in back-end and front-end development, and starting my Modern Computer Science degree at Opit.com this September 15th. I've built SaaS Royal to help fellow builders turn their goals into reality through consistent execution and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="section-padding bg-[#312b54]">
        <div className="container-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6 animate-fade-in">Let's Build Together</h2>
            <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>Got Questions or Ready to Start?</p>
            <Link href="https://wa.me/4790411895" className="inline-flex items-center px-8 py-4 text-lg font-medium text-[#312b54] bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              Message me on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 