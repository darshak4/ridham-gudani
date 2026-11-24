import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Connect() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Partnership',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2 w-2 rounded-full bg-blue-600"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#71717A]">
                Get in Touch
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0A0A0B]">
              Let’s Connect.
            </h1>
            <p className="mt-4 text-base text-[#52525B] leading-relaxed max-w-lg">
              Whether you are an institutional investor, developer, land partner, or architect — let's explore ways to collaborate on India's evolving real estate landscape.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black flex-none">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0A0A0B]">Headquarters</h4>
                  <p className="text-sm text-zinc-500 mt-0.5">
                    Shivalik House, Beside Satellite Police Station, Ramdev Nagar, Ahmedabad, Gujarat 380015
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black flex-none">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0A0A0B]">Email</h4>
                  <p className="text-sm text-zinc-500 mt-0.5">connect@ridhamshah.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-zinc-100 flex items-center justify-center text-black flex-none">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0A0A0B]">Phone / Office</h4>
                  <p className="text-sm text-zinc-500 mt-0.5">+91 79 4020 0000</p>
                </div>
              </div>
            </div>

            {/* Quick badges */}
            <div className="mt-12 p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
              <h4 className="text-sm font-semibold text-zinc-900 mb-2">
                Real Estate Works Better Together
              </h4>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Connect for land partnerships, Shivalik Fund allocations, SIRE education initiatives, and commercial leasing opportunities.
              </p>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 size={48} className="mx-auto text-emerald-500 mb-4" />
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">Message Sent</h3>
                <p className="text-sm text-zinc-600 max-w-sm mx-auto mb-6">
                  Thank you for reaching out. Ridham Gagani's executive office will review your request and get back shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-black px-6 py-2.5 text-xs font-semibold text-white hover:bg-zinc-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 focus:border-black focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 focus:border-black focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 focus:border-black focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Topic of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 focus:border-black focus:outline-none transition-all"
                  >
                    <option value="Partnership">Land & Joint Development</option>
                    <option value="Investment">Shivalik Fund / Investment</option>
                    <option value="Commercial">Commercial / Office Leasing</option>
                    <option value="Speaking">Speaking / Keynote Invitation</option>
                    <option value="General">Media / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your proposal or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-zinc-200 px-4 py-2.5 text-sm text-zinc-900 focus:border-black focus:outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-[#0A0A0B] py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 transition-all active:scale-[0.99]"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

