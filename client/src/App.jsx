import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import PracticeAreas from './components/PracticeAreas.jsx'
import Attorneys from './components/Attorneys.jsx'
import CaseResults from './components/CaseResults.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <Attorneys />
        <CaseResults />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
