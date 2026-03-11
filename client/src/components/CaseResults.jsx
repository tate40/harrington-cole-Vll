import React from 'react'

const results = [
  {
    amount: '$2.1M',
    label: 'Commercial Dispute Settlement',
    detail: 'Negotiated a $2.1 million settlement on behalf of a Denver-based technology company in a multi-party breach of contract action involving a failed software development agreement.',
    category: 'Business Law',
  },
  {
    amount: 'Defense Win',
    label: 'Real Estate Litigation',
    detail: 'Successfully defended a commercial property developer against claims of fraudulent misrepresentation and breach of purchase agreement, securing a full dismissal at the summary judgment stage.',
    category: 'Real Estate Law',
  },
  {
    amount: '$875K',
    label: 'Partnership Dispute Resolution',
    detail: 'Resolved a contentious multi-party business partnership dispute through structured mediation, achieving an $875,000 buyout agreement and preserving the ongoing business operations.',
    category: 'Civil Litigation',
  },
  {
    amount: 'Full Recovery',
    label: 'Contract Dispute — Construction',
    detail: 'Recovered full contract value for a Colorado general contractor following a subcontractor\'s material breach, including recovery of consequential damages and attorney\'s fees.',
    category: 'Business Law',
  },
  {
    amount: '$1.4M',
    label: 'Commercial Lease Dispute',
    detail: 'Obtained a $1.4 million judgment for a commercial landlord following a tenant\'s wrongful termination of a long-term lease agreement in the Denver central business district.',
    category: 'Real Estate Law',
  },
  {
    amount: 'Favorable Settlement',
    label: 'Estate Litigation',
    detail: 'Represented beneficiaries in a contested estate matter involving allegations of undue influence, achieving a favorable settlement that preserved the majority of the estate\'s intended distribution.',
    category: 'Estate Planning',
  },
]

const categoryColor = {
  'Business Law': 'bg-blue-50 text-blue-700 border-blue-100',
  'Real Estate Law': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'Civil Litigation': 'bg-purple-50 text-purple-700 border-purple-100',
  'Estate Planning': 'bg-amber-50 text-amber-700 border-amber-100',
}

export default function CaseResults() {
  return (
    <section id="results" className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Our Track Record
          </p>
          <h2 className="text-white font-serif text-4xl font-semibold mb-3">
            Notable Case Results
          </h2>
          <div className="w-16 h-0.5 bg-gold-500 mx-auto mb-6" />
          <p className="text-navy-300 text-base leading-relaxed max-w-2xl mx-auto">
            The following results reflect our commitment to achieving the best possible outcomes
            for our clients. Past results do not guarantee future outcomes.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((result) => (
            <div
              key={result.label}
              className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors duration-150"
            >
              <div className="flex items-start justify-between mb-4">
                <p className="text-gold-400 font-serif text-2xl font-semibold">
                  {result.amount}
                </p>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 border ${categoryColor[result.category]}`}
                >
                  {result.category}
                </span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{result.label}</h3>
              <p className="text-navy-300 text-sm leading-relaxed">{result.detail}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-navy-500 text-xs text-center mt-10 leading-relaxed max-w-2xl mx-auto">
          * Case results depend upon a variety of factors unique to each case. Case results do not
          guarantee or predict a similar result in any future case. Prior results do not guarantee
          similar outcomes.
        </p>
      </div>
    </section>
  )
}
