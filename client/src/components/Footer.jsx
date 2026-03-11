import React from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

const practiceAreas = [
  'Business Law',
  'Real Estate Law',
  'Estate Planning',
  'Civil Litigation',
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="text-white font-serif text-xl font-semibold tracking-wide">
                Harrington &amp; Cole
              </p>
              <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mt-0.5">
                Legal Group
              </p>
            </div>
            <p className="text-navy-400 text-sm leading-relaxed mb-5 max-w-xs">
              Providing strategic legal counsel to individuals and businesses across Colorado
              since 2004. Offices located in Denver, Colorado.
            </p>
            <div className="space-y-1 text-sm">
              <p>1700 Lincoln St, Denver, CO 80203</p>
              <p>
                <a href="tel:+13035550147" className="hover:text-gold-400 transition-colors">
                  (303) 555-0147
                </a>
              </p>
              <p>
                <a href="mailto:contact@harringtoncolelaw.com" className="hover:text-gold-400 transition-colors">
                  contact@harringtoncolelaw.com
                </a>
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-navy-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <a
                    href="#practice-areas"
                    className="text-navy-400 hover:text-gold-400 text-sm transition-colors"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-800 pt-7">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-navy-500 text-xs">
              &copy; {new Date().getFullYear()} Harrington &amp; Cole Legal Group. All rights reserved.
            </p>
            <p className="text-navy-600 text-xs leading-relaxed max-w-lg">
              The information on this website is for general informational purposes only and does
              not constitute legal advice. No attorney-client relationship is formed by use of
              this website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
