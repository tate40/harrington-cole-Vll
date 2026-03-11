import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Practice Areas', href: '#practice-areas' },
  { label: 'Attorneys', href: '#attorneys' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : ''
      } bg-navy-950`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex flex-col leading-tight">
          <span className="text-white font-serif text-lg font-semibold tracking-wide">
            Harrington &amp; Cole
          </span>
          <span className="text-gold-500 text-xs tracking-widest uppercase font-sans">
            Legal Group
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 bg-gold-500 hover:bg-gold-600 text-white text-xs font-semibold px-5 py-2 tracking-wide transition-colors duration-150"
          >
            Schedule Consultation
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-800 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Schedule Consultation
          </a>
        </div>
      )}
    </header>
  )
}
