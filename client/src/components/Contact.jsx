import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    matter: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required.'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'A valid email address is required.'
    if (!form.message.trim()) e.message = 'Please describe your legal matter.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="section-heading text-4xl">Contact Us</h2>
          <div className="gold-divider mx-auto" />
          <p className="section-subtext max-w-2xl mx-auto">
            We welcome inquiries from individuals and businesses seeking experienced legal
            representation. Contact our Denver office to schedule a confidential consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-5">
                Office Information
              </h3>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-navy-950 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Address</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      1700 Lincoln St<br />
                      Denver, CO 80203
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-navy-950 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Phone</p>
                    <a href="tel:+13035550147" className="text-gray-500 text-sm mt-0.5 hover:text-gold-600 transition-colors">
                      (303) 555-0147
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-navy-950 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Email</p>
                    <a href="mailto:contact@harringtoncolelaw.com" className="text-gray-500 text-sm mt-0.5 hover:text-gold-600 transition-colors break-all">
                      contact@harringtoncolelaw.com
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-9 h-9 bg-navy-950 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Office Hours</p>
                    <p className="text-gray-500 text-sm mt-0.5">
                      Monday – Friday: 8:00 AM – 6:00 PM<br />
                      Saturday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-gray-50 border border-gray-200 p-4">
              <p className="text-gray-500 text-xs leading-relaxed">
                <strong className="text-gray-700">Attorney-Client Privilege Notice:</strong> Submitting
                this form does not create an attorney-client relationship. Please do not include
                confidential information in your initial inquiry.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-gray-200 px-8">
                <div className="w-14 h-14 bg-navy-950 flex items-center justify-center mb-5">
                  <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-3">
                  Thank You
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Your inquiry has been received. A member of our team will be in contact
                  with you within one business day to discuss your matter.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block text-navy-900 text-xs font-semibold tracking-wide uppercase mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={`w-full border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy-700 ${
                        errors.name ? 'border-red-400' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-navy-900 text-xs font-semibold tracking-wide uppercase mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy-700 ${
                        errors.email ? 'border-red-400' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block text-navy-900 text-xs font-semibold tracking-wide uppercase mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(303) 555-0000"
                      className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy-700"
                    />
                  </div>

                  {/* Matter Type */}
                  <div>
                    <label className="block text-navy-900 text-xs font-semibold tracking-wide uppercase mb-1.5">
                      Legal Matter
                    </label>
                    <select
                      name="matter"
                      value={form.matter}
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy-700 bg-white"
                    >
                      <option value="">Select a practice area</option>
                      <option value="business">Business Law</option>
                      <option value="realestate">Real Estate Law</option>
                      <option value="estate">Estate Planning</option>
                      <option value="litigation">Civil Litigation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-navy-900 text-xs font-semibold tracking-wide uppercase mb-1.5">
                    Describe Your Matter <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Please provide a brief description of your legal matter..."
                    className={`w-full border px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy-700 resize-none ${
                      errors.message ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-950 hover:bg-navy-800 text-white font-semibold py-3 text-sm tracking-wide transition-colors duration-150"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
