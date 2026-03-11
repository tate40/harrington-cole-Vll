import React from 'react'

const attorneys = [
  {
    name: 'Michael Harrington',
    title: 'Partner',
    initials: 'MH',
    experience: '20+ years experience in commercial litigation',
    bio: 'Michael Harrington has built a distinguished career representing corporations, partnerships, and high-net-worth individuals in complex commercial disputes. A graduate of the University of Colorado School of Law, he has successfully litigated cases in both state and federal courts throughout Colorado and the Mountain West region. Michael is recognized for his methodical preparation, persuasive courtroom presence, and unwavering commitment to client outcomes.',
    specialties: ['Commercial Litigation', 'Business Disputes', 'Contract Law', 'Corporate Governance'],
    education: 'J.D., University of Colorado School of Law',
    bar: 'Colorado State Bar | U.S. District Court, District of Colorado',
  },
  {
    name: 'Daniel Cole',
    title: 'Partner',
    initials: 'DC',
    experience: 'Specializes in real estate and contract law',
    bio: 'Daniel Cole brings deep expertise in real estate transactions and contract law to every client engagement. With a career spanning more than fifteen years, Daniel has guided developers, investors, and private clients through some of the most complex property transactions in the Denver metro area. He is known for his meticulous attention to detail, strategic negotiation skills, and ability to anticipate and resolve issues before they become costly disputes.',
    specialties: ['Real Estate Transactions', 'Contract Drafting & Review', 'Estate Planning', 'Business Formation'],
    education: 'J.D., University of Denver Sturm College of Law',
    bar: 'Colorado State Bar | Denver Bar Association',
  },
]

export default function Attorneys() {
  return (
    <section id="attorneys" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Team
          </p>
          <h2 className="section-heading text-4xl">Our Attorneys</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtext max-w-2xl mx-auto">
            Harrington &amp; Cole is built on the expertise and integrity of its founding partners,
            each bringing decades of focused legal experience to every matter they handle.
          </p>
        </div>

        {/* Attorney Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {attorneys.map((attorney) => (
            <div key={attorney.name} className="bg-white border border-gray-200 overflow-hidden">
              {/* Top band */}
              <div className="h-2 bg-navy-950" />

              <div className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0 w-20 h-20 bg-navy-900 flex items-center justify-center">
                    <span className="text-white font-serif text-2xl font-semibold">
                      {attorney.initials}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-navy-900">
                      {attorney.name}
                    </h3>
                    <p className="text-gold-600 font-semibold text-sm tracking-wide mt-0.5">
                      {attorney.title}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">{attorney.experience}</p>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {attorney.bio}
                </p>

                {/* Specialties */}
                <div className="mb-5">
                  <p className="text-navy-900 text-xs font-semibold tracking-widest uppercase mb-2">
                    Areas of Focus
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.map((s) => (
                      <span
                        key={s}
                        className="bg-navy-50 text-navy-800 text-xs px-3 py-1 border border-navy-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education & Bar */}
                <div className="border-t border-gray-100 pt-5 space-y-1.5">
                  <p className="text-gray-500 text-xs">
                    <span className="font-semibold text-gray-700">Education: </span>
                    {attorney.education}
                  </p>
                  <p className="text-gray-500 text-xs">
                    <span className="font-semibold text-gray-700">Admitted: </span>
                    {attorney.bar}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
