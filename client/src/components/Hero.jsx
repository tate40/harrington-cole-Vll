import React from 'react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-navy-950 pt-16 min-h-screen flex items-center"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-4">
            Denver, Colorado
          </p>
          <h1 className="text-white font-serif text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Experienced Legal Representation When It Matters Most
          </h1>
          <p className="text-navy-200 text-lg leading-relaxed mb-8">
            Harrington &amp; Cole Legal Group provides strategic legal counsel for individuals and
            businesses across Colorado. With decades of combined experience, we deliver results
            grounded in integrity and precision.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Schedule Consultation
            </a>
            <a href="#practice-areas" className="btn-outline border-navy-300 text-navy-200 hover:bg-navy-800 hover:text-white hover:border-navy-800">
              Our Practice Areas
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <p className="text-white font-serif text-3xl font-semibold">30+</p>
              <p className="text-navy-300 text-xs tracking-wide uppercase mt-1">Years Combined Experience</p>
            </div>
            <div className="border-l border-navy-700 pl-8">
              <p className="text-white font-serif text-3xl font-semibold">500+</p>
              <p className="text-navy-300 text-xs tracking-wide uppercase mt-1">Cases Resolved</p>
            </div>
            <div className="border-l border-navy-700 pl-8">
              <p className="text-white font-serif text-3xl font-semibold">$50M+</p>
              <p className="text-navy-300 text-xs tracking-wide uppercase mt-1">Recovered for Clients</p>
            </div>
          </div>
        </div>

        {/* Right: Card */}
        <div className="hidden md:block">
          <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-gold-500" />
              <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase">
                Why Choose Us
              </p>
            </div>
            <ul className="space-y-5">
              {[
                {
                  title: 'Proven Track Record',
                  desc: 'Decades of successful outcomes in commercial, real estate, and civil matters.',
                },
                {
                  title: 'Client-Centered Approach',
                  desc: 'We take time to understand your goals and tailor our strategy accordingly.',
                },
                {
                  title: 'Transparent Communication',
                  desc: 'You are kept informed at every stage — no surprises, no ambiguity.',
                },
                {
                  title: 'Colorado-Focused Expertise',
                  desc: 'Deep knowledge of Colorado law and the Denver legal landscape.',
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                    <p className="text-navy-300 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
