import React from 'react'

const areas = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Business Law',
    description:
      'We advise Colorado businesses at every stage — from entity formation and corporate governance to mergers, acquisitions, and commercial contract negotiations. Our counsel is practical, precise, and aligned with your long-term business objectives.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Real Estate Law',
    description:
      'From commercial property transactions and lease negotiations to title disputes and zoning issues, our real estate attorneys protect your interests throughout every phase of the transaction. We represent buyers, sellers, landlords, and developers across Colorado.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Estate Planning',
    description:
      'Protecting your legacy requires careful, forward-thinking planning. We draft wills, trusts, powers of attorney, and healthcare directives tailored to your family\'s unique circumstances — ensuring your wishes are honored and your assets are preserved.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Civil Litigation',
    description:
      'When disputes cannot be resolved out of court, our litigators are prepared to advocate forcefully on your behalf. We handle complex civil matters including breach of contract, business torts, partnership disputes, and property conflicts in state and federal courts.',
  },
]

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="section-heading text-4xl">Practice Areas</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtext max-w-2xl mx-auto">
            Our attorneys bring focused expertise across four core disciplines, delivering
            strategic counsel and skilled representation to clients throughout Colorado.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group border border-gray-200 p-7 hover:border-navy-900 hover:shadow-lg transition-all duration-200 flex flex-col"
            >
              <div className="text-navy-800 group-hover:text-gold-600 mb-5 transition-colors duration-200">
                {area.icon}
              </div>
              <h3 className="font-serif text-lg font-semibold text-navy-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {area.description}
              </p>
              <div className="mt-5 pt-5 border-t border-gray-100">
                <a
                  href="#contact"
                  className="text-gold-600 hover:text-gold-700 text-xs font-semibold tracking-wide uppercase flex items-center gap-1"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
